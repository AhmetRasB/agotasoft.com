<h1>İletişim mesajları</h1>
<table class="table">
    <thead>
    <tr>
        <th>Tarih</th>
        <th>Ad</th>
        <th>E-posta</th>
        <th>Konu</th>
        <th>Durum</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($rows as $row): ?>
        <tr>
            <td><?= e($row['created_at']) ?></td>
            <td><?= e($row['name']) ?></td>
            <td><?= e($row['email']) ?></td>
            <td><?= e($row['subject']) ?></td>
            <td><?= e($row['status']) ?></td>
            <td><a href="<?= e(base_url('messages/' . $row['id'])) ?>">Aç</a></td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
<?php if (!$rows): ?>
    <p>Mesaj yok.</p>
<?php endif; ?>
