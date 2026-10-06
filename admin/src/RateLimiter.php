<?php

declare(strict_types=1);

/** File-backed counters (storage/logs) for the public contact form. */
final class RateLimiter
{
    /**
     * Records a hit and returns false once $max hits were made within $window seconds.
     */
    public static function allow(string $bucket, string $key, int $max, int $window): bool
    {
        $file = STORAGE_PATH . '/logs/rate-' . preg_replace('/[^a-z0-9_-]/i', '', $bucket) . '.json';
        $handle = @fopen($file, 'c+');
        if ($handle === false) {
            return true; // never block real leads because the log is not writable
        }
        flock($handle, LOCK_EX);
        $raw = stream_get_contents($handle);
        $all = $raw ? json_decode($raw, true) : [];
        $all = is_array($all) ? $all : [];
        $now = time();
        $hash = hash('sha256', $key);
        foreach ($all as $k => $times) {
            $all[$k] = array_values(array_filter((array) $times, static fn ($t) => $now - (int) $t < $window));
            if (!$all[$k]) {
                unset($all[$k]);
            }
        }
        $hits = $all[$hash] ?? [];
        $allowed = count($hits) < $max;
        if ($allowed) {
            $hits[] = $now;
            $all[$hash] = $hits;
        }
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($all));
        flock($handle, LOCK_UN);
        fclose($handle);
        return $allowed;
    }
}
