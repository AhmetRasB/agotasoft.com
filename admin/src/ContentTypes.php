<?php

declare(strict_types=1);

final class ContentTypes
{
    /**
     * @return array<string,array<string,mixed>>
     */
    public static function all(): array
    {
        return [
            'nav' => [
                'label' => 'Menü',
                'singular' => 'Menü öğesi',
                'fields' => [
                    'title' => ['label' => 'Başlık', 'type' => 'text', 'required' => true],
                    'url' => ['label' => 'URL', 'type' => 'text', 'help' => 'Örn. / veya about-us veya erp'],
                    'parent_title' => ['label' => 'Üst menü başlığı', 'type' => 'text', 'help' => 'Alt menü için üst öğenin başlığı (boş = ana menü)'],
                ],
            ],
            'partner' => [
                'label' => 'Partner logoları',
                'singular' => 'Partner',
                'fields' => [
                    'name' => ['label' => 'Ad', 'type' => 'text', 'required' => true],
                    'img' => ['label' => 'Görsel yolu', 'type' => 'text'],
                    'alt' => ['label' => 'Alt metin', 'type' => 'text'],
                ],
            ],
            'service' => [
                'label' => 'Çözümler',
                'singular' => 'Çözüm',
                'fields' => [
                    'title' => ['label' => 'Başlık', 'type' => 'text', 'required' => true],
                    'description' => ['label' => 'Kısa açıklama', 'type' => 'textarea'],
                    'icon' => ['label' => 'İkon yolu', 'type' => 'text'],
                    'link' => ['label' => 'Link', 'type' => 'text'],
                    'category' => ['label' => 'CSS sınıfı', 'type' => 'text'],
                    'fa_icon' => ['label' => 'Font Awesome ikon', 'type' => 'text'],
                    'bullets' => ['label' => 'Madde işaretleri (satır satır)', 'type' => 'textarea'],
                    'page_class' => ['label' => 'Kart CSS sınıfı', 'type' => 'text'],
                ],
            ],
            'testimonial' => [
                'label' => 'Yorumlar',
                'singular' => 'Yorum',
                'fields' => [
                    'author' => ['label' => 'Yazar', 'type' => 'text', 'required' => true],
                    'designation' => ['label' => 'Unvan', 'type' => 'text'],
                    'description' => ['label' => 'Yorum', 'type' => 'textarea', 'required' => true],
                    'rating' => ['label' => 'Puan (1-5)', 'type' => 'text'],
                    'img' => ['label' => 'Fotoğraf yolu', 'type' => 'text'],
                ],
            ],
            'pricing' => [
                'label' => 'Fiyat paketleri',
                'singular' => 'Paket',
                'fields' => [
                    'title' => ['label' => 'Paket adı', 'type' => 'text', 'required' => true],
                    'product_id' => ['label' => 'Ürün grubu', 'type' => 'text', 'help' => 'all, erp, crm, accounting, lms'],
                    'subtitle' => ['label' => 'Alt başlık', 'type' => 'text'],
                    'icon' => ['label' => 'Font Awesome ikon', 'type' => 'text'],
                    'className' => ['label' => 'Kart CSS sınıfı', 'type' => 'text'],
                    'popular' => ['label' => 'Popüler (1 veya 0)', 'type' => 'text'],
                    'features' => ['label' => 'Özellikler (satır satır)', 'type' => 'textarea'],
                ],
            ],
            'team' => [
                'label' => 'Ekip',
                'singular' => 'Üye',
                'fields' => [
                    'name' => ['label' => 'Ad', 'type' => 'text', 'required' => true],
                    'title' => ['label' => 'Unvan', 'type' => 'text'],
                    'image' => ['label' => 'Görsel yolu', 'type' => 'text'],
                    'bio' => ['label' => 'Kısa biyografi (detay sayfası)', 'type' => 'textarea'],
                    'experience' => ['label' => 'Deneyim (ör. 11+ Years)', 'type' => 'text'],
                    'phone' => ['label' => 'Telefon', 'type' => 'text'],
                    'social_twitter' => ['label' => 'Twitter URL', 'type' => 'text'],
                    'social_facebook' => ['label' => 'Facebook URL', 'type' => 'text'],
                    'social_instagram' => ['label' => 'Instagram URL', 'type' => 'text'],
                    'social_linkedin' => ['label' => 'LinkedIn URL', 'type' => 'text'],
                    'experience_text' => ['label' => 'Deneyim paragraf 1', 'type' => 'textarea'],
                    'experience_text_2' => ['label' => 'Deneyim paragraf 2', 'type' => 'textarea'],
                    'className' => ['label' => 'CSS sınıfı', 'type' => 'text'],
                    'column' => ['label' => 'Kolon (0-3, ana sayfa/ekip ızgarası)', 'type' => 'text'],
                ],
            ],
            'portfolio' => [
                'label' => 'Portföy',
                'singular' => 'Proje',
                'fields' => [
                    'title' => ['label' => 'Başlık', 'type' => 'text', 'required' => true],
                    'category_label' => ['label' => 'Kategori metni', 'type' => 'text'],
                    'mix_class' => ['label' => 'Mixitup sınıfları', 'type' => 'text'],
                    'image' => ['label' => 'Görsel yolu', 'type' => 'text'],
                    'client' => ['label' => 'Müşteri (detay)', 'type' => 'text'],
                    'services' => ['label' => 'Hizmetler (detay)', 'type' => 'text'],
                    'date' => ['label' => 'Tarih (detay)', 'type' => 'text'],
                    'website' => ['label' => 'Website URL', 'type' => 'text'],
                    'overview' => ['label' => 'Proje özeti', 'type' => 'textarea'],
                    'objective' => ['label' => 'Objective', 'type' => 'textarea'],
                    'scope' => ['label' => 'Scope', 'type' => 'textarea'],
                    'audience' => ['label' => 'Target audience', 'type' => 'textarea'],
                    'research' => ['label' => 'Research', 'type' => 'textarea'],
                    'feedback' => ['label' => 'User feedback', 'type' => 'textarea'],
                    'url' => ['label' => 'Eski link (boş bırakın, otomatik üretilir)', 'type' => 'text'],
                ],
            ],
            'blog' => [
                'label' => 'Blog',
                'singular' => 'Yazı',
                'fields' => [
                    'title' => ['label' => 'Başlık', 'type' => 'text', 'required' => true],
                    'slug' => ['label' => 'Slug', 'type' => 'text'],
                    'category' => ['label' => 'Kategori', 'type' => 'text'],
                    'date' => ['label' => 'Tarih', 'type' => 'text'],
                    'image' => ['label' => 'Görsel yolu', 'type' => 'text'],
                    'description' => ['label' => 'Özet', 'type' => 'textarea'],
                    'content' => ['label' => 'İçerik', 'type' => 'textarea'],
                ],
            ],
            'faq' => [
                'label' => 'SSS',
                'singular' => 'Soru',
                'fields' => [
                    'question' => ['label' => 'Soru', 'type' => 'text', 'required' => true],
                    'answer' => ['label' => 'Cevap', 'type' => 'textarea', 'required' => true],
                    'column' => ['label' => 'Kolon (1 veya 2)', 'type' => 'text'],
                ],
            ],
            'career' => [
                'label' => 'Kariyer',
                'singular' => 'Pozisyon',
                'fields' => [
                    'title' => ['label' => 'Pozisyon', 'type' => 'text', 'required' => true],
                    'type' => ['label' => 'Çalışma şekli', 'type' => 'text'],
                    'location' => ['label' => 'Lokasyon', 'type' => 'text'],
                    'salary' => ['label' => 'Maaş', 'type' => 'text'],
                    'description' => ['label' => 'Açıklama', 'type' => 'textarea'],
                    'responsibilities' => ['label' => 'Sorumluluklar (satır satır)', 'type' => 'textarea'],
                    'requirements' => ['label' => 'Gereksinimler (satır satır)', 'type' => 'textarea'],
                    'skills' => ['label' => 'Yetkinlikler (satır satır)', 'type' => 'textarea'],
                    'mix_class' => ['label' => 'Mixitup sınıfları', 'type' => 'text'],
                    'url' => ['label' => 'Eski link (boş bırakın)', 'type' => 'text'],
                ],
            ],
            'page' => [
                'label' => 'Sayfalar',
                'singular' => 'Sayfa',
                'fields' => [
                    'slug' => ['label' => 'Slug', 'type' => 'text', 'required' => true, 'help' => 'home, about, contact, service, erp, crm, lms, pre-accounting, terms, pricing'],
                    'title' => ['label' => 'Başlık', 'type' => 'text', 'required' => true],
                    'meta_title' => ['label' => 'SEO başlık', 'type' => 'text'],
                    'meta_description' => ['label' => 'SEO açıklama', 'type' => 'textarea'],
                    'hero_title' => ['label' => 'Hero başlık', 'type' => 'text'],
                    'hero_subtitle' => ['label' => 'Hero alt başlık', 'type' => 'textarea'],
                    'body' => ['label' => 'Gövde / ek metin (JSON veya düz metin)', 'type' => 'textarea', 'help' => 'Sayfa gövdesi. JSON `{...}` ise yayınlanırken diğer alanlarla birleşir (modüller, istatistikler vb.).'],
                ],
            ],
        ];
    }

    public static function get(string $type): ?array
    {
        return self::all()[$type] ?? null;
    }
}
