<?php

declare(strict_types=1);

final class Session
{
    public static function start(): void
    {
        if (session_status() === PHP_SESSION_ACTIVE) {
            return;
        }
        $savePath = (string) Config::get('SESSION_SAVE_PATH', '');
        if ($savePath !== '' && is_dir($savePath)) {
            session_save_path($savePath);
        } elseif (is_dir(STORAGE_PATH . '/sessions')) {
            session_save_path(STORAGE_PATH . '/sessions');
        }
        $secure = filter_var(Config::get('SESSION_SECURE', 'false'), FILTER_VALIDATE_BOOLEAN);
        session_name((string) Config::get('SESSION_NAME', 'agotasoft_cms'));
        session_set_cookie_params([
            'lifetime' => 0,
            'path' => '/',
            'secure' => $secure,
            'httponly' => true,
            'samesite' => (string) Config::get('SESSION_SAMESITE', 'Lax'),
        ]);
        session_start();
    }

    public static function get(string $key, mixed $default = null): mixed
    {
        return $_SESSION[$key] ?? $default;
    }

    public static function set(string $key, mixed $value): void
    {
        $_SESSION[$key] = $value;
    }

    public static function remove(string $key): void
    {
        unset($_SESSION[$key]);
    }

    public static function regenerate(): void
    {
        session_regenerate_id(true);
    }
}
