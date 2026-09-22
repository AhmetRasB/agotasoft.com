<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
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

try {
    $stmt = Database::pdo()->prepare(
        'INSERT INTO contact_messages (name, company, email, phone, subject, employees, message, newsletter, ip_address)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([$name, $company, $email, $phone, $subject, $employees, $message, $newsletter, $ip]);
    (new Mailer())->notifyContact([
        'name' => $name,
        'company' => $company,
        'email' => $email,
        'phone' => $phone,
        'subject' => $subject,
        'employees' => $employees,
        'message' => $message,
    ]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mesaj kaydedilemedi.']);
}
