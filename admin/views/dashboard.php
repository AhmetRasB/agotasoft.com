<h1>Özet</h1>
<p>Bu panel yalnızca mevcut sitedeki metinleri yönetir. Yeni public sayfa eklemez.</p>
<div class="cards">
    <?php foreach ($counts as $type => $count): ?>
        <a class="card" href="<?= e(base_url($type)) ?>">
            <strong><?= e(ContentTypes::all()[$type]['label']) ?></strong>
            <span><?= (int) $count ?> kayıt</span>
        </a>
    <?php endforeach; ?>
    <a class="card" href="<?= e(base_url('messages')) ?>">
        <strong>İletişim</strong>
        <span><?= (int) $unread ?> yeni / <?= (int) $messages ?> toplam</span>
    </a>
    <a class="card" href="<?= e(base_url('seo')) ?>">
        <strong>SEO / Meta</strong>
        <span>Tüm sayfalar</span>
    </a>
</div>
