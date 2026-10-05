<?php

declare(strict_types=1);

/**
 * Server-side conversion events (Reklam, Analitik ve Ölçüm Rehberi §3).
 * Meta Conversions API: sends the demo-request lead with the same event_id the browser pixel uses, so
 * Meta de-duplicates it. Does nothing unless META_PIXEL_ID and META_CAPI_TOKEN are set and the visitor
 * accepted tracking.
 */
final class ServerEvents
{
    /**
     * @param array{email:string,phone:string,event_id:string,source_url:string,attribution:array<string,string>} $lead
     */
    public static function lead(array $lead): void
    {
        $pixel = trim((string) Config::get('META_PIXEL_ID', ''));
        $token = trim((string) Config::get('META_CAPI_TOKEN', ''));
        if ($pixel === '' || $token === '' || $lead['event_id'] === '' || !function_exists('curl_init')) {
            return;
        }
        $attribution = $lead['attribution'];
        $user = array_filter([
            'em' => [hash('sha256', strtolower(trim($lead['email'])))],
            'ph' => [hash('sha256', preg_replace('/\D+/', '', $lead['phone']) ?? '')],
            'client_ip_address' => $_SERVER['REMOTE_ADDR'] ?? null,
            'client_user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
            'fbp' => $attribution['fbp'] ?? null,
            'fbc' => $attribution['fbc'] ?? null,
        ]);
        $body = [
            'data' => [[
                'event_name' => 'Lead',
                'event_time' => time(),
                'event_id' => $lead['event_id'],
                'action_source' => 'website',
                'event_source_url' => $lead['source_url'],
                'user_data' => $user,
            ]],
        ];
        $testCode = trim((string) Config::get('META_CAPI_TEST_CODE', ''));
        if ($testCode !== '') {
            $body['test_event_code'] = $testCode;
        }
        $ch = curl_init('https://graph.facebook.com/v19.0/' . rawurlencode($pixel) . '/events?access_token=' . rawurlencode($token));
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
            CURLOPT_POSTFIELDS => json_encode($body),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 4,
        ]);
        curl_exec($ch);
        curl_close($ch);
    }
}
