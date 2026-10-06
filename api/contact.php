<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
// Only our own pages may call this from a browser (localhost for the dev server).
$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
if (preg_match('#^https://(www\.)?agotasoft\.com$#', $origin) || preg_match('#^http://(localhost|127\.0\.0\.1)(:\d+)?$#', $origin)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

require dirname(__DIR__) . '/admin/src/bootstrap.php';

$raw = file_get_contents('php://input');
$payload = [];
if (is_string($raw) && $raw !== '') {
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) {
        $payload = $decoded;
    }
}
if (!$payload) {
    $payload = $_POST;
}

if (trim((string) ($payload['website'] ?? '')) !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

// 5 submissions per IP per 10 minutes.
if (!RateLimiter::allow('contact', (string) ($_SERVER['REMOTE_ADDR'] ?? ''), 5, 600)) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Çok fazla istek. Lütfen biraz sonra tekrar deneyin.']);
    exit;
}

$errors = Validator::validate($payload, [
    'name' => 'required|max:160',
    'email' => 'required|email|max:190',
    'company' => 'required|max:160',
    'phone' => 'required|max:60',
    'subject' => 'required|max:160',
    'message' => 'max:5000',
]);

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'errors' => $errors]);
    exit;
}

$name = trim((string) $payload['name']);
$company = trim((string) $payload['company']);
$email = trim((string) $payload['email']);
$phone = trim((string) $payload['phone']);
$subject = trim((string) $payload['subject']);
$employees = trim((string) ($payload['employees'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));
$newsletter = !empty($payload['newsletter']) ? 1 : 0;
$ip = $_SERVER['REMOTE_ADDR'] ?? null;

// Lead attribution (UTM / click ids), sent only when the visitor accepted tracking.
$consent = !empty($payload['consent']);
$eventId = $consent ? substr(preg_replace('/[^A-Za-z0-9_-]/', '', (string) ($payload['event_id'] ?? '')) ?? '', 0, 64) : '';
$attribution = [];
if ($consent && is_array($payload['attribution'] ?? null)) {
    $allowed = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid', 'ttclid', 'msclkid', 'fbp', 'fbc', 'landing_page', 'referrer'];
    foreach ($allowed as $key) {
        $value = $payload['attribution'][$key] ?? null;
        if (is_string($value) && $value !== '') {
            $attribution[$key] = mb_substr($value, 0, 300);
        }
    }
}

try {
    $stmt = Database::pdo()->prepare(
        'INSERT INTO contact_messages (name, company, email, phone, subject, employees, message, newsletter, ip_address)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([$name, $company, $email, $phone, $subject, $employees, $message, $newsletter, $ip]);
    $messageId = (int) Database::pdo()->lastInsertId();
    if ($attribution || $eventId !== '') {
        // Columns come from database/migrations/2026-10-lead-attribution.sql; a database that
        // has not run it yet must still accept the lead.
        try {
            Database::pdo()
                ->prepare('UPDATE contact_messages SET attribution = ?, event_id = ? WHERE id = ?')
                ->execute([$attribution ? json_encode($attribution, JSON_UNESCAPED_UNICODE) : null, $eventId !== '' ? $eventId : null, $messageId]);
        } catch (Throwable $e) {
            // ignore: attribution is optional
        }
    }
    if (!empty($payload['privacy'])) {
        // Column from database/migrations/2026-10-privacy-consent.sql; ignore if not migrated yet.
        try {
            Database::pdo()->prepare('UPDATE contact_messages SET privacy_accepted_at = NOW() WHERE id = ?')->execute([$messageId]);
        } catch (Throwable $e) {
            // ignore
        }
    }
    if ($consent && $eventId !== '') {
        try {
            ServerEvents::lead([
                'email' => $email,
                'phone' => $phone,
                'event_id' => $eventId,
                'source_url' => (string) ($attribution['landing_page'] ?? ''),
                'attribution' => $attribution,
            ]);
        } catch (Throwable $e) {
            // ignore: a tracking failure must never fail the lead
        }
    }
    // The automatic reply goes to whatever address was typed in: at most one per address per hour.
    $autoReply = RateLimiter::allow('autoreply', strtolower($email), 1, 3600);
    (new Mailer())->notifyContact([
        'name' => $name,
        'company' => $company,
        'email' => $email,
        'phone' => $phone,
        'subject' => $subject,
        'employees' => $employees,
        'message' => $message,
    ], $autoReply);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mesaj kaydedilemedi.']);
}
