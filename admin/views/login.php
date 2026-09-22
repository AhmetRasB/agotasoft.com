<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Giriş | AgotaSoft CMS</title>
    <link rel="stylesheet" href="<?= e(base_url('assets/admin.css')) ?>">
</head>
<body class="login-body">
<div class="login-card">
    <h1>AgotaSoft CMS</h1>
    <p>Mevcut site içeriğini yönetmek için giriş yapın.</p>
    <?php if (!empty($error)): ?>
        <div class="flash flash-error"><?= e($error) ?></div>
    <?php endif; ?>
    <form method="post">
        <?= Csrf::field() ?>
        <label>E-posta
            <input type="email" name="email" required autocomplete="username">
        </label>
        <label>Şifre
            <input type="password" name="password" required autocomplete="current-password">
        </label>
        <button type="submit" class="btn">Giriş</button>
    </form>
</div>
</body>
</html>
