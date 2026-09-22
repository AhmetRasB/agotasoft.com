<?php
$d = $data;
$previewPath = $previewPath ?? ($d['path'] ?? '/');
?>
<div class="editor-split">
    <div>
        <div class="row-head">
            <h1>SEO: <?= e($d['label'] ?? $row['title']) ?></h1>
            <a href="<?= e(base_url('seo')) ?>">Listeye dön</a>
        </div>
        <form method="post" class="stack stack-wide" id="cms-editor">
            <?= Csrf::field() ?>
            <fieldset class="field-group">
                <legend>Sayfa</legend>
                <label>Etiket
                    <input type="text" name="data[label]" value="<?= e((string) ($d['label'] ?? '')) ?>">
                </label>
                <label>Yol (path)
                    <input type="text" name="data[path]" value="<?= e((string) ($d['path'] ?? '')) ?>">
                    <small>Örn. /about-us — sitedeki adresle birebir eşleşmeli</small>
                </label>
                <label class="check">
                    <input type="checkbox" name="is_published" value="1" <?= (int) $row['is_published'] ? 'checked' : '' ?>>
                    Yayında
                </label>
            </fieldset>

            <fieldset class="field-group">
                <legend>Temel meta</legend>
                <label>Title
                    <input type="text" name="data[title]" value="<?= e((string) ($d['title'] ?? '')) ?>" data-preview-key="title">
                </label>
                <label>Description
                    <textarea name="data[description]" rows="3"><?= e((string) ($d['description'] ?? '')) ?></textarea>
                </label>
                <label>Keywords
                    <input type="text" name="data[keywords]" value="<?= e((string) ($d['keywords'] ?? '')) ?>">
                    <small>Virgülle ayırın</small>
                </label>
                <label>Author
                    <input type="text" name="data[author]" value="<?= e((string) ($d['author'] ?? '')) ?>">
                </label>
                <label>Robots
                    <input type="text" name="data[robots]" value="<?= e((string) ($d['robots'] ?? 'index, follow')) ?>">
                    <small>index, follow — noindex, nofollow</small>
                </label>
                <label>Canonical URL
                    <input type="text" name="data[canonical]" value="<?= e((string) ($d['canonical'] ?? '')) ?>">
                </label>
            </fieldset>

            <fieldset class="field-group">
                <legend>Open Graph</legend>
                <label>og:title
                    <input type="text" name="data[og_title]" value="<?= e((string) ($d['og_title'] ?? '')) ?>">
                </label>
                <label>og:description
                    <textarea name="data[og_description]" rows="3"><?= e((string) ($d['og_description'] ?? '')) ?></textarea>
                </label>
                <label>og:image
                    <input type="text" name="data[og_image]" value="<?= e((string) ($d['og_image'] ?? '')) ?>">
                </label>
                <label>og:url
                    <input type="text" name="data[og_url]" value="<?= e((string) ($d['og_url'] ?? '')) ?>">
                </label>
                <label>og:type
                    <input type="text" name="data[og_type]" value="<?= e((string) ($d['og_type'] ?? 'website')) ?>">
                </label>
                <label>og:locale
                    <input type="text" name="data[og_locale]" value="<?= e((string) ($d['og_locale'] ?? 'tr_TR')) ?>">
                </label>
                <label>og:site_name
                    <input type="text" name="data[og_site_name]" value="<?= e((string) ($d['og_site_name'] ?? 'AgotaSoft')) ?>">
                </label>
            </fieldset>

            <fieldset class="field-group">
                <legend>Twitter</legend>
                <label>twitter:card
                    <input type="text" name="data[twitter_card]" value="<?= e((string) ($d['twitter_card'] ?? 'summary_large_image')) ?>">
                </label>
                <label>twitter:title
                    <input type="text" name="data[twitter_title]" value="<?= e((string) ($d['twitter_title'] ?? '')) ?>">
                </label>
                <label>twitter:description
                    <textarea name="data[twitter_description]" rows="2"><?= e((string) ($d['twitter_description'] ?? '')) ?></textarea>
                </label>
                <label>twitter:image
                    <input type="text" name="data[twitter_image]" value="<?= e((string) ($d['twitter_image'] ?? '')) ?>">
                </label>
            </fieldset>

            <fieldset class="field-group">
                <legend>Özel meta etiketleri</legend>
                <p class="hint">İstediğiniz kadar ekleyin: <code>name</code>, <code>property</code> veya <code>http-equiv</code>.</p>
                <?php
                $tags = is_array($d['extra_tags'] ?? null) ? $d['extra_tags'] : [];
                Fields::renderRepeater('data[extra_tags]', 'extra_tags', $tags ?: [['attr' => 'name', 'key' => '', 'content' => '']]);
                ?>
            </fieldset>

            <label>JSON-LD (opsiyonel)
                <textarea name="data[json_ld]" rows="8" placeholder='{"@context":"https://schema.org","@type":"Organization"}'><?= e((string) ($d['json_ld'] ?? '')) ?></textarea>
                <small>Ham JSON. Boş bırakılabilir.</small>
            </label>

            <button type="submit" class="btn">Kaydet ve yayınla</button>
        </form>
    </div>
    <aside class="preview-pane">
        <div class="preview-top">
            <strong>SERP önizleme</strong>
            <a href="<?= e(Fields::publicBase() . $previewPath) ?>" target="_blank" rel="noreferrer">Sitede aç</a>
        </div>
        <div class="serp">
            <div class="serp-url"><?= e($d['canonical'] ?: ('https://agotasoft.com' . $previewPath)) ?></div>
            <div class="serp-title" data-serp-title><?= e($d['title'] ?? '') ?></div>
            <div class="serp-desc" data-serp-desc><?= e($d['description'] ?? '') ?></div>
        </div>
        <p class="preview-url">Yol: <?= e($previewPath) ?></p>
    </aside>
</div>
