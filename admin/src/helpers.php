<?php

declare(strict_types=1);

function e(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function redirect(string $to): never
{
    header('Location: ' . $to);
    exit;
}

function base_url(string $path = ''): string
{
    $configured = rtrim((string) Config::get('APP_URL', ''), '/');
    $script = $_SERVER['SCRIPT_NAME'] ?? '/admin/index.php';
    $admin = rtrim(str_replace('\\', '/', dirname($script)), '/.');
    if ($admin === '' || $admin === '/') {
        $admin = '/admin';
    }
    $root = $configured !== '' ? $configured . $admin : $admin;
    $path = ltrim($path, '/');
    return $path === '' ? $root : $root . '/' . $path;
}

function flash_set(string $type, string $message): void
{
    Session::set('_flash', ['type' => $type, 'message' => $message]);
}

function flash_get(): ?array
{
    $flash = Session::get('_flash');
    Session::remove('_flash');
    return is_array($flash) ? $flash : null;
}

function json_decode_array(?string $json): array
{
    if ($json === null || $json === '') {
        return [];
    }
    $decoded = json_decode($json, true);
    return is_array($decoded) ? $decoded : [];
}
