<div class="editor-split">
    <div>
        <div class="row-head">
            <h1><?= e($row ? $def['singular'] . ' düzenle' : 'Yeni ' . $def['singular']) ?></h1>
            <?php if (!empty($seoPath)): ?>
                <a class="btn" href="<?= e($seoLink ?? base_url('seo')) ?>">Bu sayfanın SEO'su</a>
            <?php endif; ?>
        </div>
        <?php if (!empty($errors['title'])): ?>
            <p class="error"><?= e($errors['title']) ?></p>
        <?php endif; ?>
        <form method="post" class="stack stack-wide" id="cms-editor">
            <?= Csrf::field() ?>
            <label>Slug / URL anahtarı
                <input type="text" name="slug" value="<?= e($row['slug'] ?? ($data['slug'] ?? '')) ?>">
                <small>Sayfalar için: about, erp, contact… Public yol: <?= e($previewPath ?? '/') ?></small>
            </label>
            <?php foreach ($editable as $name => $value): ?>
                <?php Fields::renderValue('data[' . $name . ']', (string) $name, $value); ?>
            <?php endforeach; ?>
            <label>Sıra
                <input type="number" name="sort_order" value="<?= e((string) ($row['sort_order'] ?? '0')) ?>">
            </label>
            <label class="check">
                <input type="checkbox" name="is_published" value="1" <?= !isset($row) || (int) $row['is_published'] ? 'checked' : '' ?>>
                Yayında
            </label>
            <div class="actions">
                <button type="submit" class="btn">Kaydet ve yayınla</button>
                <a href="<?= e(base_url($type)) ?>">İptal</a>
            </div>
        </form>
    </div>
    <aside class="preview-pane" id="cms-preview">
        <div class="preview-top">
            <strong>Önizleme</strong>
            <a href="<?= e(Fields::publicBase() . ($previewPath ?? '/')) ?>" target="_blank" rel="noreferrer">Sitede aç</a>
        </div>
        <p class="preview-url"><?= e($previewPath ?? '/') ?></p>
        <article class="preview-page" id="cms-preview-body"></article>
    </aside>
</div>
