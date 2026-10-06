<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

final class Mailer
{
    /**
     * @param array{to:string,subject:string,html:string,text?:string,replyTo?:string,replyName?:string} $message
     */
    public function send(array $message): bool
    {
        $host = trim((string) Config::get('MAIL_HOST', ''));
        if ($host === '' || !class_exists(PHPMailer::class)) {
            return $this->log($message);
        }
        try {
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->Host = $host;
            $mail->Port = (int) Config::get('MAIL_PORT', 587);
            $mail->SMTPAuth = Config::get('MAIL_USERNAME', '') !== '';
            $mail->Username = (string) Config::get('MAIL_USERNAME', '');
            $mail->Password = (string) Config::get('MAIL_PASSWORD', '');
            $encryption = strtolower((string) Config::get('MAIL_ENCRYPTION', 'tls'));
            $mail->SMTPSecure = $encryption === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
            $mail->CharSet = 'UTF-8';
            $mail->setFrom(
                (string) Config::get('MAIL_FROM_ADDRESS', 'noreply@agotasoft.com'),
                (string) Config::get('MAIL_FROM_NAME', 'AgotaSoft')
            );
            $mail->addAddress($message['to']);
            if (!empty($message['replyTo'])) {
                $mail->addReplyTo($message['replyTo'], $message['replyName'] ?? '');
            }
            $mail->Subject = $message['subject'];
            $mail->isHTML(true);
            $mail->Body = $message['html'];
            $mail->AltBody = $message['text'] ?? strip_tags($message['html']);
            $mail->send();
            return true;
        } catch (MailException $e) {
            $this->log($message, $e->getMessage());
            return false;
        }
    }

    public function notifyContact(array $payload, bool $autoReply = true): void
    {
        $admin = (string) Config::get('MAIL_ADMIN_TO', 'info@agotasoft.com');
        $this->send([
            'to' => $admin,
            'subject' => 'Yeni iletişim formu: ' . ($payload['subject'] ?: 'Demo talebi'),
            'replyTo' => $payload['email'],
            'replyName' => $payload['name'],
            'html' => $this->adminHtml($payload),
        ]);
        if (!$autoReply) {
            return;
        }
        $this->send([
            'to' => $payload['email'],
            'subject' => 'Talebinizi aldık — AgotaSoft',
            'html' => '<p>Merhaba ' . e($payload['name']) . ',</p><p>Mesajınız bize ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecek.</p><p>AgotaSoft</p>',
        ]);
    }

    private function adminHtml(array $payload): string
    {
        $map = [
            'name' => 'Ad',
            'company' => 'Şirket',
            'email' => 'E-posta',
            'phone' => 'Telefon',
            'subject' => 'Çözüm',
            'employees' => 'Çalışan sayısı',
            'message' => 'Mesaj',
        ];
        $rows = '';
        foreach ($map as $key => $label) {
            $rows .= '<tr><th style="text-align:left;padding:6px 12px">' . e($label) . '</th><td style="padding:6px 12px">' . nl2br(e((string) ($payload[$key] ?? ''))) . '</td></tr>';
        }
        return '<table>' . $rows . '</table>';
    }

    private function log(array $message, string $error = ''): bool
    {
        $line = date('c') . ' to=' . ($message['to'] ?? '') . ' subject=' . ($message['subject'] ?? '') . ($error !== '' ? ' error=' . $error : '') . PHP_EOL;
        @file_put_contents(STORAGE_PATH . '/logs/mail.log', $line, FILE_APPEND);
        return true;
    }
}
