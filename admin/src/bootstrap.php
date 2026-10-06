<?php

declare(strict_types=1);

define('ROOT_PATH', dirname(__DIR__, 2));
define('ADMIN_PATH', dirname(__DIR__));
define('STORAGE_PATH', ROOT_PATH . '/storage');

require ADMIN_PATH . '/src/Config.php';
require ADMIN_PATH . '/src/Database.php';
require ADMIN_PATH . '/src/Session.php';
require ADMIN_PATH . '/src/helpers.php';
require ADMIN_PATH . '/src/Csrf.php';
require ADMIN_PATH . '/src/Auth.php';
require ADMIN_PATH . '/src/Validator.php';
require ADMIN_PATH . '/src/ContentTypes.php';
require ADMIN_PATH . '/src/Fields.php';
require ADMIN_PATH . '/src/SeoRoutes.php';
require ADMIN_PATH . '/src/ContentExport.php';
require ADMIN_PATH . '/src/Mailer.php';
require ADMIN_PATH . '/src/ServerEvents.php';
require ADMIN_PATH . '/src/RateLimiter.php';

$autoload = ADMIN_PATH . '/vendor/autoload.php';
if (is_file($autoload)) {
    require $autoload;
}

Config::load(ROOT_PATH . '/.env');

// Shared hosts often ship display_errors=On; never leak stack traces (DB user, paths) to visitors.
$debug = filter_var(Config::get('APP_DEBUG', 'false'), FILTER_VALIDATE_BOOLEAN);
ini_set('display_errors', $debug ? '1' : '0');
ini_set('log_errors', '1');
ini_set('error_log', STORAGE_PATH . '/logs/php-error.log');

Session::start();
