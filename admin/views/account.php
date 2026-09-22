<h1>Hesap</h1>
<form method="post" class="stack">
    <?= Csrf::field() ?>
    <label>Ad
        <input type="text" name="name" value="<?= e($user['name'] ?? '') ?>" required>
        <?php if (!empty($errors['name'])): ?><small class="error"><?= e($errors['name']) ?></small><?php endif; ?>
    </label>
    <label>E-posta
        <input type="email" name="email" value="<?= e($user['email'] ?? '') ?>" required>
        <?php if (!empty($errors['email'])): ?><small class="error"><?= e($errors['email']) ?></small><?php endif; ?>
    </label>
    <label>Yeni şifre (boş bırakırsanız değişmez)
        <input type="password" name="password" autocomplete="new-password">
        <?php if (!empty($errors['password'])): ?><small class="error"><?= e($errors['password']) ?></small><?php endif; ?>
    </label>
    <button type="submit" class="btn">Kaydet</button>
</form>
