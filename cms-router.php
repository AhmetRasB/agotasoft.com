<?php

declare(strict_types=1);

/**
 * Built-in PHP server router:
 * php -S 127.0.0.1:8080 cms-router.php
 */
$uri = rawurldecode(parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/');
$file = __DIR__ . $uri;

if ($uri === '/' || $uri === '') {
    header('Location: /admin', true, 302);
    return true;
}

if ($uri !== '/' && is_file($file) && !str_ends_with(strtolower($uri), '.php')) {
    return false;
}

if (str_starts_with($uri, '/admin')) {
    require __DIR__ . '/admin/index.php';
    return true;
}

if (str_starts_with($uri, '/api/') && is_file($file)) {
    require $file;
    return true;
}

http_response_code(404);
header('Content-Type: text/plain; charset=utf-8');
echo "Not found.\nPublic site: http://localhost:3000 (cd sofax && npm run dev)\nCMS: http://127.0.0.1:8080/admin\n";
return true;
