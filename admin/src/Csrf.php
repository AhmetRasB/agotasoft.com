<?php

declare(strict_types=1);

final class Csrf
{
    public static function token(): string
    {
        $token = Session::get('_csrf_token');
        if (!is_string($token) || $token === '') {
            $token = bin2hex(random_bytes(32));
            Session::set('_csrf_token', $token);
        }
        return $token;
    }

    public static function field(): string
    {
        return '<input type="hidden" name="_csrf" value="' . e(self::token()) . '">';
    }

    public static function verify(): void
    {
        $sent = $_POST['_csrf'] ?? '';
        $stored = Session::get('_csrf_token');
        if (!is_string($sent) || !is_string($stored) || $sent === '' || !hash_equals($stored, $sent)) {
            http_response_code(419);
            echo 'Geçersiz güvenlik jetonu. Formu yenileyip tekrar deneyin.';
            exit;
        }
    }
}
