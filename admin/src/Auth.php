<?php

declare(strict_types=1);

final class Auth
{
    private const MAX_FAILURES = 5;
    private const LOCK_SECONDS = 900;
    private const IDLE_SECONDS = 1800;

    public static function user(): ?array
    {
        $id = Session::get('user_id');
        if (!$id) {
            return null;
        }
        $last = (int) Session::get('last_seen', 0);
        if ($last > 0 && time() - $last > self::IDLE_SECONDS) {
            self::logout();
            return null;
        }
        Session::set('last_seen', time());
        $stmt = Database::pdo()->prepare('SELECT * FROM users WHERE id = ? AND is_active = 1 LIMIT 1');
        $stmt->execute([(int) $id]);
        $user = $stmt->fetch();
        return $user ?: null;
    }

    public static function check(): bool
    {
        return self::user() !== null;
    }

    /** True while this IP has used up its failed sign-in attempts. */
    public static function isLocked(): bool
    {
        return count(self::failures()) >= self::MAX_FAILURES;
    }

    /** @return list<int> timestamps of recent failed attempts from this IP */
    private static function failures(): array
    {
        $all = self::readLog();
        $now = time();
        return array_values(array_filter($all[self::ipKey()] ?? [], static fn ($t) => $now - (int) $t < self::LOCK_SECONDS));
    }

    private static function ipKey(): string
    {
        return hash('sha256', (string) ($_SERVER['REMOTE_ADDR'] ?? ''));
    }

    private static function logFile(): string
    {
        return STORAGE_PATH . '/logs/login-attempts.json';
    }

    /** @return array<string, list<int>> */
    private static function readLog(): array
    {
        $raw = @file_get_contents(self::logFile());
        $data = is_string($raw) ? json_decode($raw, true) : null;
        return is_array($data) ? $data : [];
    }

    private static function recordFailure(): void
    {
        $all = self::readLog();
        $now = time();
        foreach ($all as $key => $times) {
            $all[$key] = array_values(array_filter((array) $times, static fn ($t) => $now - (int) $t < self::LOCK_SECONDS));
            if (!$all[$key]) {
                unset($all[$key]);
            }
        }
        $all[self::ipKey()][] = $now;
        @file_put_contents(self::logFile(), json_encode($all), LOCK_EX);
    }

    private static function clearFailures(): void
    {
        $all = self::readLog();
        unset($all[self::ipKey()]);
        @file_put_contents(self::logFile(), json_encode($all), LOCK_EX);
    }

    public static function attempt(string $email, string $password): bool
    {
        if (self::isLocked()) {
            return false;
        }
        $stmt = Database::pdo()->prepare('SELECT * FROM users WHERE email = ? LIMIT 1');
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        if (!$user || !(int) $user['is_active'] || !password_verify($password, $user['password_hash'])) {
            self::recordFailure();
            usleep(500000);
            return false;
        }
        self::clearFailures();
        Session::regenerate();
        Session::set('user_id', (int) $user['id']);
        Session::set('last_seen', time());
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
