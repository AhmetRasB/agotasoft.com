<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= e($def['label'] ?? 'CMS') ?> | AgotaSoft CMS</title>
    <link rel="stylesheet" href="<?= e(base_url('assets/admin.css')) ?>">
</head>
<body>
<div class="shell">
    <aside class="sidebar">
        <a class="brand" href="<?= e(base_url('dashboard')) ?>">AgotaSoft CMS</a>
        <nav>
            <a href="<?= e(base_url('dashboard')) ?>">Özet</a>
            <a href="<?= e(base_url('settings')) ?>">Ayarlar</a>
            <a href="<?= e(base_url('seo')) ?>">SEO / Meta</a>
            <?php foreach ($types as $key => $type): ?>
                <a href="<?= e(base_url($key)) ?>"><?= e($type['label']) ?></a>
            <?php endforeach; ?>
            <a href="<?= e(base_url('messages')) ?>">İletişim mesajları</a>
            <a href="<?= e(base_url('account')) ?>">Hesap</a>
        </nav>
        <form method="post" action="<?= e(base_url('publish')) ?>">
            <?= Csrf::field() ?>
            <button type="submit" class="btn btn-ghost">JSON yayınla</button>
        </form>
        <a class="logout" href="<?= e(base_url('logout')) ?>">Çıkış</a>
    </aside>
    <main class="main">
        <?php if ($flash): ?>
            <div class="flash flash-<?= e($flash['type']) ?>"><?= e($flash['message']) ?></div>
        <?php endif; ?>
        <?= $content ?>
    </main>
</div>
<script src="<?= e(base_url('assets/admin.js')) ?>"></script>
</body>
</html>
