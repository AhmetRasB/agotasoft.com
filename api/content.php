<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('Access-Control-Allow-Origin: *');

require dirname(__DIR__) . '/admin/src/bootstrap.php';

try {
    foreach (ContentExport::paths() as $jsonFile) {
        if (is_file($jsonFile)) {
            readfile($jsonFile);
            exit;
        }
    }
    ContentExport::seedIfEmpty();
    echo json_encode(ContentExport::build(), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
} catch (Throwable $e) {
    $fallback = ROOT_PATH . '/web/lib/cms/defaults.json';
    if (is_file($fallback)) {
        readfile($fallback);
        exit;
    }
    http_response_code(500);
    echo json_encode(['error' => 'Content unavailable']);
}
