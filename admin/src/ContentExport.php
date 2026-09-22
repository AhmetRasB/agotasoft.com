<?php

declare(strict_types=1);

final class ContentExport
{
    public static function publish(): void
    {
        $payload = self::build();
        $json = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
        if ($json === false) {
            throw new RuntimeException('JSON encode failed');
        }
        foreach (self::paths() as $path) {
            $dir = dirname($path);
            if (!is_dir($dir)) {
                mkdir($dir, 0755, true);
            }
            file_put_contents($path, $json . PHP_EOL);
        }
    }

    /**
     * @return list<string>
     */
    public static function paths(): array
    {
        $raw = (string) Config::get('CMS_JSON_PATHS', 'sofax/public/data/site.json');
        $paths = [];
        foreach (explode(',', $raw) as $rel) {
            $rel = trim($rel);
            if ($rel === '') {
                continue;
            }
            $paths[] = str_starts_with($rel, '/') ? $rel : ROOT_PATH . '/' . $rel;
        }
        $paths[] = ROOT_PATH . '/sofax/public/data/site.json';
        $paths[] = ROOT_PATH . '/data/site.json';
        $out = ROOT_PATH . '/sofax/out/data/site.json';
        if (is_dir(ROOT_PATH . '/sofax/out')) {
            $paths[] = $out;
        }
        $final = ROOT_PATH . '/sofax/agotasoft-website-final/data/site.json';
        if (is_dir(ROOT_PATH . '/sofax/agotasoft-website-final')) {
            $paths[] = $final;
        }
        return array_values(array_unique($paths));
    }

    public static function build(): array
    {
        try {
            SeoRoutes::ensureSeed();
        } catch (Throwable $e) {
            // ignore
        }
        $pdo = Database::pdo();
        $settings = [];
        foreach ($pdo->query('SELECT setting_key, setting_value FROM settings')->fetchAll() as $row) {
            $settings[$row['setting_key']] = $row['setting_value'];
        }

        $entries = $pdo->query(
            'SELECT type, title, slug, data_json, sort_order, is_published FROM entries WHERE is_published = 1 ORDER BY sort_order ASC, id ASC'
        )->fetchAll();

        $grouped = [];
        foreach ($entries as $entry) {
            $data = json_decode_array($entry['data_json']);
            $data['title'] = $data['title'] ?? $entry['title'];
            $data['slug'] = $data['slug'] ?? $entry['slug'];
            $data['id'] = $entry['slug'] ?: $entry['title'];
            $grouped[$entry['type']][] = $data;
        }

        $nav = [];
        foreach ($grouped['nav'] ?? [] as $item) {
            $parent = trim((string) ($item['parent_title'] ?? ''));
            if ($parent === '') {
                $nav[] = [
                    'title' => $item['title'] ?? '',
                    'url' => $item['url'] ?? '#',
                    'submenu' => [],
                ];
            }
        }
        foreach ($grouped['nav'] ?? [] as $item) {
            $parent = trim((string) ($item['parent_title'] ?? ''));
            if ($parent === '') {
                continue;
            }
            foreach ($nav as &$navItem) {
                if (($navItem['title'] ?? '') === $parent) {
                    $navItem['submenu'][] = [
                        'title' => $item['title'] ?? '',
                        'url' => $item['url'] ?? '#',
                    ];
                }
            }
            unset($navItem);
        }

        $pages = [];
        foreach ($grouped['page'] ?? [] as $page) {
            $slug = (string) ($page['slug'] ?? '');
            if ($slug === '') {
                continue;
            }
            $body = $page['body'] ?? '';
            if (is_string($body) && str_starts_with(trim($body), '{')) {
                $decoded = json_decode($body, true);
                if (is_array($decoded)) {
                    $page = array_merge($page, $decoded);
                }
            }
            $pages[$slug] = $page;
        }

        $pricing = [];
        foreach ($grouped['pricing'] ?? [] as $pkg) {
            $features = $pkg['features'] ?? [];
            if (is_string($features)) {
                $features = array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $features) ?: [])));
            }
            $pkg['features'] = $features;
            $pkg['popular'] = ((string) ($pkg['popular'] ?? '0')) === '1' || $pkg['popular'] === true;
            $group = (string) ($pkg['product_id'] ?? 'all');
            $pricing[$group][] = $pkg;
        }

        $services = $grouped['service'] ?? [];
        foreach ($services as &$service) {
            $bullets = $service['bullets'] ?? [];
            if (is_string($bullets)) {
                $service['bullets'] = array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $bullets) ?: [])));
            }
        }
        unset($service);

        $team = $grouped['team'] ?? [];
        $teamColumns = [[], [], [], []];
        foreach ($team as $member) {
            $col = (int) ($member['column'] ?? 0);
            if ($col < 0 || $col > 3) {
                $col = 0;
            }
            $teamColumns[$col][] = $member;
        }

        $faqItems = $grouped['faq'] ?? [];
        $faqColumns = ['1' => [], '2' => []];
        foreach ($faqItems as $faq) {
            $col = (string) ($faq['column'] ?? '1');
            if ($col !== '2') {
                $col = '1';
            }
            $faqColumns[$col][] = $faq;
        }

        return [
            'generated_at' => date('c'),
            'settings' => $settings,
            'nav' => $nav,
            'partners' => $grouped['partner'] ?? [],
            'services' => $services,
            'testimonials' => $grouped['testimonial'] ?? [],
            'pricing' => $pricing,
            'pricing_products' => json_decode_array($settings['pricing_products'] ?? ''),
            'team' => $team,
            'team_columns' => $teamColumns,
            'portfolio' => $grouped['portfolio'] ?? [],
            'blog' => $grouped['blog'] ?? [],
            'faq' => $faqItems,
            'faq_columns' => $faqColumns,
            'careers' => $grouped['career'] ?? [],
            'pages' => $pages,
            'seo' => SeoRoutes::publishedMap(),
            'why_choose' => json_decode_array($settings['why_choose'] ?? ''),
            'cta' => json_decode_array($settings['cta'] ?? ''),
            'hero' => json_decode_array($settings['hero'] ?? ''),
            'home_services' => json_decode_array($settings['home_services'] ?? ''),
            'partners_heading' => $settings['partners_heading'] ?? '',
            'testimonials_heading' => $settings['testimonials_heading'] ?? '',
            'footer' => json_decode_array($settings['footer'] ?? ''),
        ];
    }

    public static function seedIfEmpty(): void
    {
        $count = (int) Database::pdo()->query('SELECT COUNT(*) FROM entries')->fetchColumn();
        if ($count > 0) {
            return;
        }
        $seedFile = ROOT_PATH . '/sofax/lib/cms/defaults.json';
        if (!is_file($seedFile)) {
            $seedFile = ROOT_PATH . '/database/site-seed.json';
        }
        if (!is_file($seedFile)) {
            return;
        }
        $seed = json_decode((string) file_get_contents($seedFile), true);
        if (!is_array($seed)) {
            return;
        }
        self::importSeed($seed);
        self::publish();
    }

    public static function importSeed(array $seed): void
    {
        $pdo = Database::pdo();

        $settingStmt = $pdo->prepare(
            'INSERT INTO settings (setting_key, setting_value, setting_group) VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)'
        );
        foreach ($seed['settings'] ?? [] as $key => $value) {
            if (is_array($value)) {
                $value = json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            }
            $group = in_array($key, ['hero', 'cta', 'why_choose', 'home_services', 'footer', 'pricing_products'], true)
                ? 'content'
                : 'general';
            $settingStmt->execute([(string) $key, (string) $value, $group]);
        }

        $complex = [
            'hero' => $seed['hero'] ?? null,
            'cta' => $seed['cta'] ?? null,
            'why_choose' => $seed['why_choose'] ?? null,
            'home_services' => $seed['home_services'] ?? null,
            'footer' => $seed['footer'] ?? null,
            'pricing_products' => $seed['pricing_products'] ?? null,
            'partners_heading' => $seed['partners_heading'] ?? null,
            'testimonials_heading' => $seed['testimonials_heading'] ?? null,
        ];
        foreach ($complex as $key => $value) {
            if ($value === null) {
                continue;
            }
            $stored = is_array($value)
                ? json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)
                : (string) $value;
            $settingStmt->execute([$key, $stored, 'content']);
        }

        $entryStmt = $pdo->prepare(
            'INSERT INTO entries (type, slug, title, data_json, sort_order, is_published) VALUES (?, ?, ?, ?, ?, 1)'
        );

        $sort = 0;
        foreach ($seed['nav'] ?? [] as $item) {
            $entryStmt->execute(['nav', null, $item['title'], json_encode([
                'title' => $item['title'],
                'url' => $item['url'] ?? '#',
                'parent_title' => '',
            ], JSON_UNESCAPED_UNICODE), $sort++]);
            foreach ($item['submenu'] ?? [] as $sub) {
                $entryStmt->execute(['nav', null, $sub['title'], json_encode([
                    'title' => $sub['title'],
                    'url' => $sub['url'] ?? '#',
                    'parent_title' => $item['title'],
                ], JSON_UNESCAPED_UNICODE), $sort++]);
            }
        }

        $listMap = [
            'partners' => 'partner',
            'services' => 'service',
            'testimonials' => 'testimonial',
            'team' => 'team',
            'portfolio' => 'portfolio',
            'blog' => 'blog',
            'faq' => 'faq',
            'careers' => 'career',
        ];
        foreach ($listMap as $seedKey => $type) {
            $i = 0;
            foreach ($seed[$seedKey] ?? [] as $item) {
                $title = (string) ($item['title'] ?? $item['name'] ?? $item['author'] ?? $item['question'] ?? ('item-' . $i));
                $slug = (string) ($item['slug'] ?? $item['id'] ?? strtolower(preg_replace('/[^a-z0-9]+/i', '-', $title)));
                if (isset($item['bullets']) && is_array($item['bullets'])) {
                    $item['bullets'] = implode("\n", $item['bullets']);
                }
                if (isset($item['features']) && is_array($item['features'])) {
                    $item['features'] = implode("\n", $item['features']);
                }
                $entryStmt->execute([$type, $slug, $title, json_encode($item, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), $i++]);
            }
        }

        $pi = 0;
        foreach ($seed['pricing'] ?? [] as $group => $packages) {
            foreach ($packages as $pkg) {
                $pkg['product_id'] = $group;
                if (isset($pkg['features']) && is_array($pkg['features'])) {
                    $pkg['features'] = implode("\n", $pkg['features']);
                }
                $pkg['popular'] = !empty($pkg['popular']) ? '1' : '0';
                $title = (string) ($pkg['title'] ?? 'paket');
                $entryStmt->execute(['pricing', $group . '-' . $pi, $title, json_encode($pkg, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), $pi++]);
            }
        }

        $pg = 0;
        foreach ($seed['pages'] ?? [] as $slug => $page) {
            $page['slug'] = $slug;
            $title = (string) ($page['title'] ?? $slug);
            $entryStmt->execute(['page', $slug, $title, json_encode($page, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), $pg++]);
        }
    }
}
