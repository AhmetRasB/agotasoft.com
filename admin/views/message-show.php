<h1>Mesaj #<?= (int) $message['id'] ?></h1>
<dl class="kv">
    <dt>Ad</dt><dd><?= e($message['name']) ?></dd>
    <dt>Şirket</dt><dd><?= e($message['company']) ?></dd>
    <dt>E-posta</dt><dd><?= e($message['email']) ?></dd>
    <dt>Telefon</dt><dd><?= e($message['phone']) ?></dd>
    <dt>Çözüm</dt><dd><?= e($message['subject']) ?></dd>
    <dt>Çalışan</dt><dd><?= e($message['employees']) ?></dd>
    <dt>IP</dt><dd><?= e($message['ip_address']) ?></dd>
    <dt>Tarih</dt><dd><?= e($message['created_at']) ?></dd>
    <dt>Mesaj</dt><dd><?= nl2br(e($message['message'])) ?></dd>
</dl>
<form method="post" onsubmit="return confirm('Silinsin mi?');">
    <?= Csrf::field() ?>
    <input type="hidden" name="_method" value="delete">
    <button type="submit" class="btn btn-danger">Sil</button>
    <a href="<?= e(base_url('messages')) ?>">Listeye dön</a>
</form>
