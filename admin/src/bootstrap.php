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

$autoload = ADMIN_PATH . '/vendor/autoload.php';
if (is_file($autoload)) {
    require $autoload;
}

Config::load(ROOT_PATH . '/.env');
Session::start();
