<?php

declare(strict_types=1);

final class Auth
{
    public static function user(): ?array
    {
        $id = Session::get('user_id');
        if (!$id) {
            return null;
        }
        $stmt = Database::pdo()->prepare('SELECT * FROM users WHERE id = ? AND is_active = 1 LIMIT 1');
        $stmt->execute([(int) $id]);
        $user = $stmt->fetch();
        return $user ?: null;
    }

    public static function check(): bool
    {
        return self::user() !== null;
    }

    public static function attempt(string $email, string $password): bool
    {
        $stmt = Database::pdo()->prepare('SELECT * FROM users WHERE email = ? LIMIT 1');
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        if (!$user || !(int) $user['is_active']) {
            return false;
        }
        if (!password_verify($password, $user['password_hash'])) {
            return false;
        }
        Session::regenerate();
        Session::set('user_id', (int) $user['id']);
        $touch = Database::pdo()->prepare('UPDATE users SET last_login_at = NOW() WHERE id = ?');
        $touch->execute([(int) $user['id']]);
        return true;
    }

    public static function logout(): void
    {
        Session::remove('user_id');
        Session::regenerate();
    }

    public static function requireAdmin(): void
    {
        if (!self::check()) {
            redirect(base_url('login'));
        }
    }
}
