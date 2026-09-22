<div class="row-head">
    <h1>SEO / Meta etiketleri</h1>
</div>
<p>Hard-coded Sofax sayfaları dahil tüm public rotaların title, description, Open Graph, Twitter ve özel meta etiketleri burada. Yeni bir yol da ekleyebilirsiniz.</p>

<form method="post" class="seo-add" action="<?= e(base_url('seo')) ?>">
    <?= Csrf::field() ?>
    <input type="text" name="new_path" placeholder="/ornek-sayfa" required>
    <input type="text" name="new_label" placeholder="Etiket (ör. Kampanya)">
    <button class="btn" type="submit">Yol ekle</button>
</form>

<table class="table">
    <thead>
    <tr>
        <th>Grup</th>
        <th>Sayfa</th>
        <th>Yol</th>
        <th>Title</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($rows as $row): ?>
        <tr>
            <td><?= e($row['group']) ?></td>
            <td><?= e($row['title']) ?></td>
            <td><code><?= e($row['path']) ?></code></td>
            <td><?= e(mb_strimwidth($row['seo_title'], 0, 72, '…')) ?></td>
            <td class="actions">
                <a href="<?= e(base_url('seo/' . $row['id'])) ?>">Düzenle</a>
            </td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
