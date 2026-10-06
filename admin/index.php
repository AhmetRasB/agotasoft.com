<?php

declare(strict_types=1);

require __DIR__ . '/src/bootstrap.php';

$path = rawurldecode(parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/');
if (preg_match('#^/admin(?:/|$)#', $path)) {
    $path = substr($path, strlen('/admin')) ?: '/';
} else {
    $scriptDir = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/admin/index.php')), '/');
    if ($scriptDir !== '' && $scriptDir !== '/' && str_starts_with($path, $scriptDir)) {
        $path = substr($path, strlen($scriptDir)) ?: '/';
    }
}
$path = trim($path, '/');
$segments = $path === '' ? [] : explode('/', $path);
$action = $segments[0] ?? 'dashboard';

if ($action === 'login') {
    handle_login();
    exit;
}
if ($action === 'logout') {
    // POST + CSRF so a stray link or image cannot sign the admin out.
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        Csrf::verify();
        Auth::logout();
        redirect(base_url('login'));
    }
    redirect(base_url('dashboard'));
}

Auth::requireAdmin();
try {
    ContentExport::seedIfEmpty();
    SeoRoutes::ensureSeed();
} catch (Throwable $e) {
    // DB might not be imported yet
}

switch ($action) {
    case '':
    case 'dashboard':
        handle_dashboard();
        break;
    case 'settings':
        handle_settings();
        break;
    case 'seo':
        handle_seo($segments);
        break;
    case 'account':
        handle_account();
        break;
    case 'messages':
        handle_messages($segments[1] ?? null);
        break;
    case 'publish':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            Csrf::verify();
            ContentExport::publish();
            flash_set('success', 'site.json güncellendi.');
        }
        redirect(base_url('dashboard'));
        break;
    default:
        if (ContentTypes::get($action)) {
            handle_crud($action, $segments);
            break;
        }
        http_response_code(404);
        echo 'Sayfa bulunamadı.';
}

function handle_login(): void
{
    if (Auth::check()) {
        redirect(base_url('dashboard'));
    }
    $error = null;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        Csrf::verify();
        $email = trim((string) ($_POST['email'] ?? ''));
        $password = (string) ($_POST['password'] ?? '');
        if (!Auth::attempt($email, $password)) {
            $error = Auth::isLocked()
                ? 'Çok fazla başarısız deneme. 15 dakika sonra tekrar deneyin.'
                : 'E-posta veya şifre hatalı.';
        } else {
            redirect(base_url('dashboard'));
        }
    }
    render('login', ['error' => $error, 'plain' => true]);
}

function handle_dashboard(): void
{
    $pdo = Database::pdo();
    $counts = [];
    foreach (array_keys(ContentTypes::all()) as $type) {
        $stmt = $pdo->prepare('SELECT COUNT(*) FROM entries WHERE type = ?');
        $stmt->execute([$type]);
        $counts[$type] = (int) $stmt->fetchColumn();
    }
    $messages = (int) $pdo->query('SELECT COUNT(*) FROM contact_messages')->fetchColumn();
    $unread = (int) $pdo->query("SELECT COUNT(*) FROM contact_messages WHERE status = 'new'")->fetchColumn();
    render('dashboard', compact('counts', 'messages', 'unread'));
}

function handle_settings(): void
{
    $pdo = Database::pdo();
    $keys = [
        'site_name', 'logo', 'email', 'phone', 'address', 'copyright',
        'header_cta', 'header_cta_url', 'partners_heading', 'testimonials_heading',
        'social_twitter', 'social_facebook', 'social_instagram', 'social_linkedin', 'social_github',
        'map_embed', 'calendly_url', 'seo_title', 'seo_description',
        'hero', 'cta', 'why_choose', 'home_services', 'footer', 'pricing_products',
    ];
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        Csrf::verify();
        $stmt = $pdo->prepare(
            'INSERT INTO settings (setting_key, setting_value, setting_group) VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)'
        );
        foreach ($keys as $key) {
            $value = (string) ($_POST[$key] ?? '');
            $group = in_array($key, ['hero', 'cta', 'why_choose', 'home_services', 'footer', 'pricing_products'], true)
                ? 'content' : 'general';
            $stmt->execute([$key, $value, $group]);
        }
        ContentExport::publish();
        flash_set('success', 'Ayarlar kaydedildi ve site.json yayınlandı.');
        redirect(base_url('settings'));
    }
    $settings = [];
    foreach ($pdo->query('SELECT setting_key, setting_value FROM settings')->fetchAll() as $row) {
        $settings[$row['setting_key']] = $row['setting_value'];
    }
    render('settings', compact('settings', 'keys'));
}

function handle_account(): void
{
    $user = Auth::user();
    $errors = [];
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        Csrf::verify();
        $name = trim((string) ($_POST['name'] ?? ''));
        $email = trim((string) ($_POST['email'] ?? ''));
        $password = (string) ($_POST['password'] ?? '');
        $errors = Validator::validate($_POST, [
            'name' => 'required|max:120',
            'email' => 'required|email|max:190',
        ]);
        if ($password !== '' && strlen($password) < 8) {
            $errors['password'] = 'Şifre en az 8 karakter olmalı.';
        }
        if (!$errors) {
            if ($password !== '') {
                $stmt = Database::pdo()->prepare('UPDATE users SET name = ?, email = ?, password_hash = ? WHERE id = ?');
                $stmt->execute([$name, $email, password_hash($password, PASSWORD_DEFAULT), (int) $user['id']]);
            } else {
                $stmt = Database::pdo()->prepare('UPDATE users SET name = ?, email = ? WHERE id = ?');
                $stmt->execute([$name, $email, (int) $user['id']]);
            }
            flash_set('success', 'Hesap güncellendi.');
            redirect(base_url('account'));
        }
    }
    render('account', ['user' => $user, 'errors' => $errors]);
}

function handle_messages(?string $id): void
{
    $pdo = Database::pdo();
    if ($id && $_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['_method'] ?? '') === 'delete') {
        Csrf::verify();
        $stmt = $pdo->prepare('DELETE FROM contact_messages WHERE id = ?');
        $stmt->execute([(int) $id]);
        flash_set('success', 'Mesaj silindi.');
        redirect(base_url('messages'));
    }
    if ($id) {
        $stmt = $pdo->prepare('SELECT * FROM contact_messages WHERE id = ?');
        $stmt->execute([(int) $id]);
        $message = $stmt->fetch();
        if (!$message) {
            http_response_code(404);
            echo 'Mesaj yok.';
            return;
        }
        if ($message['status'] === 'new') {
            $upd = $pdo->prepare("UPDATE contact_messages SET status = 'read' WHERE id = ?");
            $upd->execute([(int) $id]);
            $message['status'] = 'read';
        }
        render('message-show', compact('message'));
        return;
    }
    $rows = $pdo->query('SELECT * FROM contact_messages ORDER BY created_at DESC')->fetchAll();
    render('messages', ['rows' => $rows]);
}

function handle_crud(string $type, array $segments): void
{
    $def = ContentTypes::get($type);
    $pdo = Database::pdo();
    $sub = $segments[1] ?? null;
    $id = isset($segments[1]) && ctype_digit($segments[1]) ? (int) $segments[1] : null;
    $verb = $segments[2] ?? null;

    if ($sub === 'new') {
        crud_form($type, $def, null, []);
        return;
    }
    if ($id && $verb === 'delete' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        Csrf::verify();
        $stmt = $pdo->prepare('DELETE FROM entries WHERE id = ? AND type = ?');
        $stmt->execute([$id, $type]);
        ContentExport::publish();
        flash_set('success', 'Kayıt silindi.');
        redirect(base_url($type));
    }
    if ($id) {
        $stmt = $pdo->prepare('SELECT * FROM entries WHERE id = ? AND type = ?');
        $stmt->execute([$id, $type]);
        $row = $stmt->fetch();
        if (!$row) {
            http_response_code(404);
            echo 'Kayıt yok.';
            return;
        }
        crud_form($type, $def, $row, json_decode_array($row['data_json']));
        return;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['sort_order_map'])) {
        Csrf::verify();
        // ignored; order edited per item
    }

    $stmt = $pdo->prepare('SELECT * FROM entries WHERE type = ? ORDER BY sort_order ASC, id ASC');
    $stmt->execute([$type]);
    render('list', ['type' => $type, 'def' => $def, 'rows' => $stmt->fetchAll()]);
}

function crud_form(string $type, array $def, ?array $row, array $data): void
{
    $errors = [];
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['_method'] ?? '') !== 'delete') {
        Csrf::verify();
        $existing = $row ? json_decode_array($row['data_json']) : [];
        $payload = Fields::fromPost($_POST['data'] ?? [], $existing);
        $title = trim((string) ($payload['title'] ?? $payload['name'] ?? $payload['author'] ?? $payload['question'] ?? $_POST['title'] ?? ''));
        $slug = trim((string) ($_POST['slug'] ?? ($payload['slug'] ?? ($row['slug'] ?? ''))));
        if ($slug === '' && in_array($type, ['team', 'blog', 'portfolio', 'career', 'service'], true)) {
            $slug = strtolower(trim(preg_replace('/[^a-z0-9]+/i', '-', (string) ($payload['name'] ?? $payload['title'] ?? $title)), '-'));
        }
        $sort = (int) ($_POST['sort_order'] ?? 0);
        $published = isset($_POST['is_published']) ? 1 : 0;
        if ($slug !== '') {
            $payload['slug'] = $slug;
        }
        if ($title === '') {
            $title = (string) ($payload['title'] ?? $payload['name'] ?? 'Kayıt');
        }
        if ($title === '') {
            $errors['title'] = 'Başlık zorunludur.';
        }
        if (!$errors) {
            $json = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            if ($row) {
                $stmt = Database::pdo()->prepare(
                    'UPDATE entries SET slug = ?, title = ?, data_json = ?, sort_order = ?, is_published = ? WHERE id = ?'
                );
                $stmt->execute([$slug !== '' ? $slug : $row['slug'], $title, $json, $sort, $published, (int) $row['id']]);
            } else {
                $stmt = Database::pdo()->prepare(
                    'INSERT INTO entries (type, slug, title, data_json, sort_order, is_published) VALUES (?, ?, ?, ?, ?, ?)'
                );
                $stmt->execute([$type, $slug !== '' ? $slug : null, $title, $json, $sort, $published]);
            }
            ContentExport::publish();
            flash_set('success', 'Kaydedildi ve site.json yayınlandı.');
            redirect(base_url($type));
        }
        $data = $payload;
    }
    $editable = Fields::editable($def['fields'] ?? [], $data);
    $previewPath = Fields::publicPath((string) ($row['slug'] ?? $data['slug'] ?? ''));
    $itemBases = [
        'team' => '/team/',
        'blog' => '/blog/',
        'portfolio' => '/portfolio/',
        'career' => '/career/',
        'service' => '/service/',
    ];
    if (isset($itemBases[$type])) {
        $rawSlug = (string) ($row['slug'] ?? $data['slug'] ?? $data['name'] ?? $data['title'] ?? '');
        $rawSlug = strtolower(trim(preg_replace('/[^a-z0-9]+/i', '-', $rawSlug), '-'));
        $previewPath = $itemBases[$type] . ($rawSlug !== '' ? $rawSlug : '...');
        $seoPath = $previewPath;
    }
    $seoLink = base_url('seo');
    if ($type === 'page' || isset($itemBases[$type])) {
        try {
            $st = Database::pdo()->prepare("SELECT id FROM entries WHERE type = 'seo' AND slug = ?");
            $st->execute([$previewPath]);
            $seoId = $st->fetchColumn();
            if ($seoId) {
                $seoLink = base_url('seo/' . $seoId);
            }
        } catch (Throwable $e) {
            // ignore
        }
    }
    render('form', [
        'type' => $type,
        'def' => $def,
        'row' => $row,
        'data' => $data,
        'editable' => $editable,
        'previewPath' => $previewPath,
        'seoPath' => ($type === 'page' || isset($itemBases[$type])) ? $previewPath : null,
        'seoLink' => $seoLink,
        'errors' => $errors,
    ]);
}

function handle_seo(array $segments): void
{
    SeoRoutes::ensureSeed();
    $pdo = Database::pdo();
    $sub = $segments[1] ?? '';

    if ($sub === 'new' || ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['new_path']))) {
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['new_path'])) {
            Csrf::verify();
            $path = '/' . ltrim(trim((string) $_POST['new_path']), '/');
            if ($path === '/') {
                $path = '/';
            }
            $label = trim((string) ($_POST['new_label'] ?? $path));
            $exists = $pdo->prepare("SELECT id FROM entries WHERE type = 'seo' AND slug = ?");
            $exists->execute([$path]);
            if ($exists->fetch()) {
                flash_set('error', 'Bu yol zaten kayıtlı.');
                redirect(base_url('seo'));
            }
            $data = SeoRoutes::emptyRecord($path);
            $data['label'] = $label !== '' ? $label : $path;
            $stmt = $pdo->prepare(
                'INSERT INTO entries (type, slug, title, data_json, sort_order, is_published) VALUES (?, ?, ?, ?, 999, 1)'
            );
            $stmt->execute(['seo', $path, $data['label'], json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)]);
            ContentExport::publish();
            $id = (int) $pdo->lastInsertId();
            redirect(base_url('seo/' . $id));
        }
        render('seo-list', ['rows' => seo_rows(), 'showNew' => true]);
        return;
    }

    $id = ctype_digit($sub) ? (int) $sub : 0;
    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM entries WHERE id = ? AND type = 'seo'");
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        if (!$row) {
            http_response_code(404);
            echo 'SEO kaydı yok.';
            return;
        }
        $data = json_decode_array($row['data_json']);
        $errors = [];
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            Csrf::verify();
            $data = Fields::fromPost($_POST['data'] ?? [], $data);
            $path = (string) ($data['path'] ?? $row['slug']);
            $path = '/' . ltrim($path, '/');
            if ($path === '/') {
                // keep
            }
            $data['path'] = $path === '//' ? '/' : ($path === '' ? '/' : $path);
            if ($data['path'] !== '/' && substr($data['path'], -1) === '/') {
                $data['path'] = rtrim($data['path'], '/');
            }
            $tags = [];
            foreach (is_array($data['extra_tags'] ?? null) ? $data['extra_tags'] : [] as $tag) {
                if (!is_array($tag)) {
                    continue;
                }
                $key = trim((string) ($tag['key'] ?? ''));
                $content = trim((string) ($tag['content'] ?? ''));
                if ($key === '' || $content === '') {
                    continue;
                }
                $tags[] = [
                    'attr' => in_array($tag['attr'] ?? '', ['property', 'http-equiv'], true) ? $tag['attr'] : 'name',
                    'key' => $key,
                    'content' => $content,
                ];
            }
            $data['extra_tags'] = $tags;
            $label = trim((string) ($data['label'] ?? $row['title']));
            if ($label === '') {
                $errors['label'] = 'Etiket zorunlu.';
            }
            if (!$errors) {
                $upd = $pdo->prepare(
                    'UPDATE entries SET slug = ?, title = ?, data_json = ?, is_published = ? WHERE id = ?'
                );
                $upd->execute([
                    $data['path'],
                    $label,
                    json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
                    isset($_POST['is_published']) ? 1 : 0,
                    $id,
                ]);
                ContentExport::publish();
                flash_set('success', 'SEO kaydedildi ve yayınlandı.');
                redirect(base_url('seo/' . $id));
            }
        }
        if (!isset($data['extra_tags']) || !is_array($data['extra_tags'])) {
            $data['extra_tags'] = [];
        }
        render('seo-form', [
            'row' => $row,
            'data' => $data,
            'errors' => $errors,
            'previewPath' => $data['path'] ?? $row['slug'],
        ]);
        return;
    }

    render('seo-list', ['rows' => seo_rows(), 'showNew' => false]);
}

/**
 * @return list<array<string,mixed>>
 */
function seo_rows(): array
{
    $catalog = [];
    foreach (SeoRoutes::catalog() as $item) {
        $catalog[$item['path']] = $item;
    }
    $rows = Database::pdo()->query("SELECT * FROM entries WHERE type = 'seo' ORDER BY sort_order ASC, id ASC")->fetchAll();
    foreach ($rows as &$row) {
        $data = json_decode_array($row['data_json']);
        $path = (string) ($data['path'] ?? $row['slug']);
        $row['path'] = $path;
        $row['group'] = $catalog[$path]['group'] ?? 'Özel';
        $row['seo_title'] = (string) ($data['title'] ?? '');
        $row['seo_description'] = (string) ($data['description'] ?? '');
    }
    unset($row);
    return $rows;
}

function render(string $view, array $vars = []): void
{
    extract($vars, EXTR_SKIP);
    $user = Auth::user();
    $flash = flash_get();
    $types = ContentTypes::all();
    ob_start();
    require ADMIN_PATH . '/views/' . $view . '.php';
    $content = ob_get_clean();
    if (!empty($plain)) {
        echo $content;
        return;
    }
    require ADMIN_PATH . '/views/layout.php';
}
