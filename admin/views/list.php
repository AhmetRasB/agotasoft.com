<div class="row-head">
    <h1><?= e($def['label']) ?></h1>
    <a class="btn" href="<?= e(base_url($type . '/new')) ?>">Yeni ekle</a>
</div>
<table class="table">
    <thead>
    <tr>
        <th>ID</th>
        <th>Başlık</th>
        <th>Sıra</th>
        <th>Yayın</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($rows as $row): ?>
        <tr>
            <td><?= (int) $row['id'] ?></td>
            <td><?= e($row['title']) ?></td>
            <td><?= (int) $row['sort_order'] ?></td>
            <td><?= ((int) $row['is_published']) ? 'Evet' : 'Hayır' ?></td>
            <td class="actions">
                <a href="<?= e(base_url($type . '/' . $row['id'])) ?>">Düzenle</a>
                <form method="post" action="<?= e(base_url($type . '/' . $row['id'] . '/delete')) ?>" onsubmit="return confirm('Silinsin mi?');">
                    <?= Csrf::field() ?>
                    <button type="submit" class="link-btn">Sil</button>
                </form>
            </td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
<?php if (!$rows): ?>
    <p>Kayıt yok.</p>
<?php endif; ?>
