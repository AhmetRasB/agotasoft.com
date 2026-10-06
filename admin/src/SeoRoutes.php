<?php

declare(strict_types=1);

final class SeoRoutes
{
    /**
     * @return list<array{path:string,label:string,group:string,defaults:array<string,string>}>
     */
    public static function catalog(): array
    {
        $site = 'https://agotasoft.com';
        return [
            self::row('/', 'Anasayfa', 'Asıl site', [
                'title' => 'AgotaSoft | ERP, CRM, Ön Muhasebe ve LMS Yazılım Çözümleri',
                'description' => 'İşletmenizi dijital dönüşümle güçlendirin. AgotaSoft ERP, CRM, Ön Muhasebe ve LMS yazılım çözümleriyle operasyonel verimliliğinizi artırın, maliyetlerinizi düşürün.',
                'keywords' => 'ERP, CRM, ön muhasebe, LMS, yazılım çözümleri, dijital dönüşüm, işletme yönetimi, AgotaSoft',
                'canonical' => $site,
                'og_title' => 'AgotaSoft | İşletmenizi Geleceğe Taşıyan Akıllı Yazılım Çözümleri',
                'og_description' => 'Entegre ERP, CRM, Ön Muhasebe ve LMS sistemlerimizle dijital dönüşümünüzü tamamlayın.',
                'og_url' => $site,
            ]),
            self::row('/about-us', 'Hakkımızda', 'Asıl site', [
                'title' => 'AgotaSoft Hakkımızda | İşletmenizi Geleceğe Taşıyan Yazılım Çözümleri',
                'description' => 'AgotaSoft olarak, ERP, CRM, Ön Muhasebe ve LMS alanlarında uzman ekibimizle işletmelerin dijital dönüşümüne öncülük ediyoruz.',
                'keywords' => 'AgotaSoft hakkımızda, yazılım firması, ERP uzmanı, CRM çözümleri, dijital dönüşüm',
                'canonical' => $site . '/about-us',
                'og_url' => $site . '/about-us',
            ]),
            self::row('/service', 'Çözümlerimiz', 'Asıl site', [
                'title' => 'AgotaSoft Çözümlerimiz | ERP, CRM, Ön Muhasebe ve LMS Hizmetleri',
                'description' => 'AgotaSoft\'ın sunduğu ERP, CRM, Ön Muhasebe ve LMS çözümlerini keşfedin.',
                'keywords' => 'AgotaSoft hizmetler, ERP çözümleri, CRM hizmetleri, ön muhasebe, LMS',
                'canonical' => $site . '/service',
            ]),
            self::row('/erp', 'ERP', 'Asıl site', [
                'title' => 'AgotaSoft ERP | Üretimden Finansa Tüm Süreçleriniz Tek Platformda',
                'description' => 'AgotaSoft ERP sistemi ile stok, finans, üretim ve satın alma süreçlerinizi tek platformda yönetin.',
                'keywords' => 'ERP, stok yönetimi, finans yönetimi, üretim planlaması, AgotaSoft ERP',
                'canonical' => $site . '/erp',
            ]),
            self::row('/crm', 'CRM', 'Asıl site', [
                'title' => 'AgotaSoft CRM | Müşteri İlişkilerinizi Güçlendirin',
                'description' => 'Müşteri veritabanı, satış fırsatı takibi, pazarlama otomasyonu ve müşteri hizmetleri.',
                'keywords' => 'CRM, müşteri ilişkileri, satış yönetimi, AgotaSoft CRM',
                'canonical' => $site . '/crm',
            ]),
            self::row('/pre-accounting', 'Ön Muhasebe', 'Asıl site', [
                'title' => 'AgotaSoft Ön Muhasebe | Çoklu Döviz, Barkodla Satış, iOS ve Web',
                'description' => 'TL, USD ve EUR\'u aynı anda takip eden, barkodla satış yapan ön muhasebe programı; iOS uygulaması ve web paneli.',
                'keywords' => 'ön muhasebe, çoklu döviz, barkodlu satış, cari hesap, kasa takibi, AgotaSoft',
                'canonical' => $site . '/pre-accounting',
            ]),
            self::row('/lms', 'LMS', 'Asıl site', [
                'title' => 'AgotaSoft LMS | Kurumsal Eğitim ve Gelişim Platformunuz',
                'description' => 'Ders yönetimi, online sınav, performans raporlama ve kurumsal eğitim.',
                'keywords' => 'LMS, öğrenme yönetim sistemi, kurumsal eğitim, AgotaSoft LMS',
                'canonical' => $site . '/lms',
            ]),
            self::row('/pricing', 'Fiyatlandırma', 'Asıl site', [
                'title' => 'AgotaSoft Fiyatlandırma | ERP, CRM, Ön Muhasebe ve LMS Paketleri',
                'description' => 'AgotaSoft yazılım çözümleri için uygun fiyat paketlerini keşfedin.',
                'keywords' => 'AgotaSoft fiyat, ERP fiyat, CRM fiyat, yazılım paketleri',
                'canonical' => $site . '/pricing',
            ]),
            self::row('/contact-us', 'İletişim', 'Asıl site', [
                'title' => 'AgotaSoft İletişim | Demo Talep Edin',
                'description' => 'Demo talep etmek veya projelerinizi görüşmek için bizimle iletişime geçin.',
                'keywords' => 'AgotaSoft iletişim, demo talep, ERP demo, CRM demo',
                'canonical' => $site . '/contact-us',
            ]),
            self::row('/team', 'Ekip', 'Asıl site', [
                'title' => 'AgotaSoft Ekip | Uzman Kadromuz',
                'description' => 'AgotaSoft yazılım ekibi ve uzman kadromuz.',
                'canonical' => $site . '/team',
            ]),
            self::row('/portfolio', 'Referanslar', 'Asıl site', [
                'title' => 'AgotaSoft Referanslar | Projelerimiz',
                'description' => 'AgotaSoft referansları ve tamamlanan projeler.',
                'canonical' => $site . '/portfolio',
            ]),
            self::row('/faq', 'SSS', 'Asıl site', [
                'title' => 'AgotaSoft SSS | Sıkça Sorulan Sorular',
                'description' => 'AgotaSoft ürünleri hakkında sıkça sorulan sorular.',
                'canonical' => $site . '/faq',
            ]),
            self::row('/career', 'Kariyer', 'Asıl site', [
                'title' => 'AgotaSoft Kariyer | Açık Pozisyonlar',
                'description' => 'AgotaSoft açık pozisyonları ve iş başvuruları.',
                'canonical' => $site . '/career',
            ]),
            self::row('/terms-and-condition', 'Kullanım Şartları', 'Asıl site', [
                'title' => 'AgotaSoft Kullanım Şartları',
                'description' => 'AgotaSoft web sitesi kullanım şartları.',
                'canonical' => $site . '/terms-and-condition',
                'robots' => 'noindex, follow',
            ]),
        ];
    }

    /**
     * @param array<string,string> $defaults
     * @return array{path:string,label:string,group:string,defaults:array<string,mixed>}
     */
    private static function row(string $path, string $label, string $group, array $defaults): array
    {
        $base = self::emptyRecord($path);
        return [
            'path' => $path,
            'label' => $label,
            'group' => $group,
            'defaults' => array_merge($base, $defaults, [
                'path' => $path,
                'label' => $label,
            ]),
        ];
    }

    /**
     * @return array<string,mixed>
     */
    public static function emptyRecord(string $path = '/'): array
    {
        return [
            'path' => $path,
            'label' => $path,
            'title' => '',
            'description' => '',
            'keywords' => '',
            'author' => 'AgotaSoft Yazılım',
            'robots' => 'index, follow',
            'canonical' => '',
            'og_title' => '',
            'og_description' => '',
            'og_image' => '/images/agotasoft-logo.png',
            'og_url' => '',
            'og_type' => 'website',
            'og_locale' => 'tr_TR',
            'og_site_name' => 'AgotaSoft',
            'twitter_card' => 'summary_large_image',
            'twitter_title' => '',
            'twitter_description' => '',
            'twitter_image' => '/images/agotasoft-logo.png',
            'json_ld' => '',
            'extra_tags' => [],
        ];
    }

    public static function ensureSeed(): void
    {
        $pdo = Database::pdo();
        $count = (int) $pdo->query("SELECT COUNT(*) FROM entries WHERE type = 'seo'")->fetchColumn();
        if ($count > 0) {
            return;
        }
        $stmt = $pdo->prepare(
            'INSERT INTO entries (type, slug, title, data_json, sort_order, is_published) VALUES (?, ?, ?, ?, ?, 1)'
        );
        $i = 0;
        foreach (self::catalog() as $row) {
            $stmt->execute([
                'seo',
                $row['path'],
                $row['label'],
                json_encode($row['defaults'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
                $i++,
            ]);
        }
    }

    /**
     * @return array<string,array<string,mixed>>
     */
    public static function publishedMap(): array
    {
        $out = [];
        $stmt = Database::pdo()->query("SELECT slug, title, data_json FROM entries WHERE type = 'seo' AND is_published = 1");
        foreach ($stmt->fetchAll() as $row) {
            $data = json_decode_array($row['data_json']);
            $path = (string) ($data['path'] ?? $row['slug'] ?? '');
            if ($path === '') {
                continue;
            }
            if ($path[0] !== '/') {
                $path = '/' . $path;
            }
            $data['label'] = $data['label'] ?? $row['title'];
            $out[$path] = $data;
        }
        return $out;
    }
}
