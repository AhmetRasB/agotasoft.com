<h1>Ayarlar</h1>
<p>İletişim bilgileri, SEO, hero/CTA ve JSON blokları. Kaydetmek site.json dosyasını da günceller.</p>
<form method="post" class="stack">
    <?= Csrf::field() ?>
    <?php
    $labels = [
        'site_name' => 'Site adı',
        'logo' => 'Logo yolu',
        'email' => 'E-posta',
        'phone' => 'Telefon',
        'address' => 'Adres',
        'copyright' => 'Telif',
        'header_cta' => 'Header buton metni',
        'header_cta_url' => 'Header buton URL',
        'partners_heading' => 'Partner başlığı',
        'testimonials_heading' => 'Yorumlar başlığı',
        'social_twitter' => 'Twitter/X',
        'social_facebook' => 'Facebook',
        'social_instagram' => 'Instagram',
        'social_linkedin' => 'LinkedIn',
        'social_github' => 'GitHub',
        'map_embed' => 'Harita embed URL',
        'calendly_url' => 'Calendly URL',
        'seo_title' => 'SEO başlık',
        'seo_description' => 'SEO açıklama',
        'hero' => 'Ana sayfa hero (JSON)',
        'cta' => 'Ana sayfa CTA (JSON)',
        'why_choose' => 'Neden biz (JSON)',
        'home_services' => 'Ana sayfa çözümler başlığı (JSON)',
        'footer' => 'Footer kolonları (JSON)',
        'pricing_products' => 'Fiyat ürün sekmeleri (JSON)',
    ];
    $jsonKeys = ['hero', 'cta', 'why_choose', 'home_services', 'footer', 'pricing_products'];
    ?>
    <?php foreach ($labels as $key => $label): ?>
        <label><?= e($label) ?>
            <?php if (in_array($key, $jsonKeys, true) || in_array($key, ['seo_description', 'map_embed'], true)): ?>
                <textarea name="<?= e($key) ?>" rows="<?= in_array($key, $jsonKeys, true) ? 8 : 3 ?>"><?= e($settings[$key] ?? '') ?></textarea>
            <?php else: ?>
                <input type="text" name="<?= e($key) ?>" value="<?= e($settings[$key] ?? '') ?>">
            <?php endif; ?>
        </label>
    <?php endforeach; ?>
    <button type="submit" class="btn">Kaydet ve yayınla</button>
</form>
