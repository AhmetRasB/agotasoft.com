<?php

declare(strict_types=1);

final class Fields
{
    /**
     * @return array<string,string>
     */
    public static function labels(): array
    {
        return [
            'title' => 'Başlık',
            'name' => 'Ad',
            'slug' => 'Slug',
            'url' => 'URL',
            'link' => 'Link',
            'body' => 'Gövde metni',
            'text' => 'Metin',
            'description' => 'Açıklama',
            'subtitle' => 'Alt başlık',
            'hero_title' => 'Hero başlık',
            'hero_subtitle' => 'Hero alt başlık',
            'hero_image' => 'Hero görsel yolu',
            'hero_card_title' => 'Hero kart başlık',
            'hero_card_text' => 'Hero kart metin',
            'meta_title' => 'SEO başlık',
            'meta_description' => 'SEO açıklama',
            'form_title' => 'Form başlığı',
            'form_intro' => 'Form girişi',
            'cta_primary' => 'Birincil buton',
            'cta_secondary' => 'İkincil buton',
            'cta_title' => 'CTA başlık',
            'cta_text' => 'CTA metin',
            'cta_button' => 'CTA buton',
            'cta_pricing' => 'CTA fiyat link metni',
            'cta_primary_url' => 'Birincil buton URL',
            'cta_secondary_url' => 'İkincil buton URL',
            'button' => 'Buton metni',
            'button_url' => 'Buton URL',
            'note' => 'Not',
            'icon' => 'İkon',
            'fa_icon' => 'Font Awesome ikon',
            'image' => 'Görsel yolu',
            'img' => 'Görsel yolu',
            'alt' => 'Alt metin',
            'modules_title' => 'Modüller başlığı',
            'modules_subtitle' => 'Modüller alt başlığı',
            'modules' => 'Modüller',
            'benefits_title' => 'Faydalar başlığı',
            'benefits_text' => 'Faydalar metni',
            'benefits' => 'Faydalar',
            'showcase_title' => 'Vitrin başlığı',
            'showcase_text' => 'Vitrin metni',
            'showcase_image' => 'Vitrin görseli',
            'stats' => 'İstatistikler',
            'number' => 'Sayı',
            'label' => 'Etiket',
            'values_title' => 'Değerler başlığı',
            'values_subtitle' => 'Değerler alt başlığı',
            'values' => 'Değerler',
            'mission_title' => 'Misyon başlığı',
            'mission_text' => 'Misyon metni',
            'mission_heading' => 'Misyon & vizyon başlığı',
            'mission_items' => 'Misyon maddeleri',
            'vision_title' => 'Vizyon başlığı',
            'vision_text' => 'Vizyon metni',
            'vision_items' => 'Vizyon maddeleri',
            'why_title' => 'Neden biz başlığı',
            'why_text' => 'Neden biz metni',
            'why_items' => 'Neden biz maddeleri',
            'stat1_number' => 'İstatistik 1 sayı',
            'stat1_label' => 'İstatistik 1 etiket',
            'stat2_number' => 'İstatistik 2 sayı',
            'stat2_label' => 'İstatistik 2 etiket',
            'selector_title' => 'Seçici başlığı',
            'packages_subtitle' => 'Paketler alt başlığı',
            'contact_label' => 'İletişim etiketi',
            'popular_label' => 'Popüler etiketi',
            'quick_title' => 'Hızlı iletişim başlığı',
            'quick_subtitle' => 'Hızlı iletişim alt başlığı',
            'chat_title' => 'Sohbet başlığı',
            'chat_text' => 'Sohbet metni',
            'chat_button' => 'Sohbet butonu',
            'calendar_title' => 'Takvim başlığı',
            'calendar_text' => 'Takvim metni',
            'calendar_button' => 'Takvim butonu',
            'email_title' => 'E-posta başlığı',
            'email_text' => 'E-posta metni',
            'email_button' => 'E-posta butonu',
            'map_label' => 'Harita etiketi',
            'bullets' => 'Maddeler',
            'features' => 'Özellikler',
            'category' => 'Kategori',
            'category_label' => 'Kategori metni',
            'content' => 'İçerik',
            'date' => 'Tarih',
            'author' => 'Yazar',
            'designation' => 'Unvan',
            'rating' => 'Puan',
            'question' => 'Soru',
            'answer' => 'Cevap',
            'location' => 'Lokasyon',
            'salary' => 'Maaş',
            'type' => 'Tür',
            'parent_title' => 'Üst menü',
            'product_id' => 'Ürün grubu',
            'className' => 'CSS sınıfı',
            'page_class' => 'Kart CSS sınıfı',
            'mix_class' => 'Mixitup sınıfları',
            'column' => 'Kolon',
            'popular' => 'Popüler',
            'usecases' => 'Kullanım alanları',
            'usecases_title' => 'Kullanım alanları başlığı',
            'usecases_subtitle' => 'Kullanım alanları alt başlığı',
            'panel_title' => 'Panel başlığı',
            'panel_text' => 'Panel metni',
            'site_name' => 'Site adı',
            'logo' => 'Logo yolu',
            'email' => 'E-posta',
            'phone' => 'Telefon',
            'address' => 'Adres',
            'copyright' => 'Telif',
            'header_cta' => 'Header buton metni',
            'header_cta_url' => 'Header buton URL',
            'partners_heading' => 'Partner başlığı',
            'testimonials_heading' => 'Yorumlar başlığı',
            'seo_title' => 'SEO başlık',
            'seo_description' => 'SEO açıklama',
            'section1_title' => '1. bölüm başlık',
            'section1_text' => '1. bölüm metin',
            'section1_items' => '1. bölüm maddeler',
            'section2_title' => '2. bölüm başlık',
            'section2_text' => '2. bölüm metin',
            'section2_items' => '2. bölüm maddeler',
            'about' => 'Hakkında metni',
            'about_alt' => 'Hakkında (alternatif)',
            'col1_title' => '1. kolon başlık',
            'col1_links' => '1. kolon linkler',
            'col2_title' => '2. kolon başlık',
            'col2_links' => '2. kolon linkler',
            'col3_title' => '3. kolon başlık',
            'privacy_label' => 'Gizlilik etiketi',
            'privacy_url' => 'Gizlilik URL',
            'terms_label' => 'Şartlar etiketi',
            'terms_url' => 'Şartlar URL',
            'cookies_label' => 'Çerez etiketi',
            'cookies_url' => 'Çerez URL',
            'rating_text' => 'Puan metni',
            'extra_tags' => 'Özel meta etiketleri',
            'attr' => 'Öznitelik (name/property/http-equiv)',
            'key' => 'Anahtar',
        ];
    }

    public static function label(string $key): string
    {
        $labels = self::labels();
        if (isset($labels[$key])) {
            return $labels[$key];
        }
        $pretty = str_replace(['_', '-'], ' ', $key);
        return mb_convert_case($pretty, MB_CASE_TITLE, 'UTF-8');
    }

    public static function publicPath(?string $slug): string
    {
        $map = [
            'home' => '/',
            'about' => '/about-us',
            'contact' => '/contact-us',
            'service' => '/service',
            'pricing' => '/pricing',
            'erp' => '/erp',
            'crm' => '/crm',
            'lms' => '/lms',
            'pre-accounting' => '/pre-accounting',
            'team' => '/team',
            'portfolio' => '/portfolio',
            'blog' => '/blog',
            'faq' => '/faq',
            'career' => '/career',
            'terms' => '/terms-and-condition',
        ];
        $slug = (string) $slug;
        return $map[$slug] ?? ($slug !== '' ? '/' . ltrim($slug, '/') : '/');
    }

    public static function publicBase(): string
    {
        return rtrim((string) Config::get('APP_PUBLIC_URL', 'http://localhost:3000'), '/');
    }

    /**
     * Merge schema fields with stored JSON so every existing key is editable.
     *
     * @param array<string,array<string,mixed>> $schemaFields
     * @param array<string,mixed> $data
     * @return array<string,mixed>
     */
    public static function editable(array $schemaFields, array $data): array
    {
        $out = [];
        foreach ($schemaFields as $name => $field) {
            if ($name === 'slug') {
                continue;
            }
            $out[$name] = $data[$name] ?? '';
        }
        foreach ($data as $name => $value) {
            if ($name === 'id' || $name === 'slug' || array_key_exists($name, $out)) {
                continue;
            }
            $out[$name] = $value;
        }
        return $out;
    }

    /**
     * @param array<string,mixed> $posted
     * @param array<string,mixed> $existing
     * @return array<string,mixed>
     */
    public static function fromPost(array $posted, array $existing = []): array
    {
        $merged = $existing;
        foreach ($posted as $key => $value) {
            $prev = $existing[$key] ?? null;
            if (is_string($value) && is_array($prev) && self::isLineList($prev)) {
                $merged[(string) $key] = self::lines($value);
                continue;
            }
            $merged[(string) $key] = $value;
        }
        return self::normalize($merged);
    }

    public static function normalize(mixed $value): mixed
    {
        if (!is_array($value)) {
            return is_string($value) ? $value : (string) $value;
        }
        if (isset($value['_keep'])) {
            unset($value['_keep']);
        }
        if ($value === []) {
            return [];
        }
        if (self::isLineList($value)) {
            return $value;
        }
        if (self::isObjectList($value) || self::looksLikeIndexed($value)) {
            $items = [];
            foreach (self::reindex($value) as $item) {
                if (is_array($item)) {
                    $items[] = self::normalize($item);
                } elseif (is_string($item) && str_contains($item, "\n")) {
                    $items = array_merge($items, self::lines($item));
                } else {
                    $trimmed = trim((string) $item);
                    if ($trimmed !== '') {
                        $items[] = $trimmed;
                    }
                }
            }
            return $items;
        }
        $out = [];
        foreach ($value as $key => $item) {
            if (is_string($item) && self::existingWasList($value, (string) $key) === false) {
                $out[(string) $key] = $item;
                continue;
            }
            $out[(string) $key] = self::normalizeField((string) $key, $item);
        }
        return $out;
    }

    private static function normalizeField(string $key, mixed $value): mixed
    {
        if (is_array($value)) {
            return self::normalize($value);
        }
        $string = (string) $value;
        if (self::isMultilineKey($key)) {
            return self::lines($string);
        }
        return $string;
    }

    public static function isMultilineKey(string $key): bool
    {
        return in_array($key, ['bullets', 'features', 'mission_items', 'vision_items'], true)
            || str_ends_with($key, '_items') && !in_array($key, ['why_items', 'section1_items', 'section2_items'], true);
    }

    /**
     * @return list<string>
     */
    public static function lines(string $value): array
    {
        return array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $value) ?: []), static fn ($line) => $line !== ''));
    }

    /**
     * @param array<mixed> $value
     */
    public static function isObjectList(array $value): bool
    {
        if ($value === []) {
            return false;
        }
        $indexed = self::looksLikeIndexed($value);
        if (!$indexed) {
            return false;
        }
        foreach (self::reindex($value) as $item) {
            if (is_array($item) && !self::isLineList($item) && $item !== []) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param array<mixed> $value
     */
    public static function isLineList(array $value): bool
    {
        if ($value === []) {
            return false;
        }
        if (!self::looksLikeIndexed($value)) {
            return false;
        }
        foreach (self::reindex($value) as $item) {
            if (is_array($item)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @param array<mixed> $value
     */
    public static function looksLikeIndexed(array $value): bool
    {
        if ($value === []) {
            return true;
        }
        foreach (array_keys($value) as $key) {
            if (!is_int($key) && !ctype_digit((string) $key)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @param array<mixed> $value
     * @return list<mixed>
     */
    public static function reindex(array $value): array
    {
        ksort($value, SORT_NUMERIC);
        return array_values($value);
    }

    /**
     * @param array<string,mixed> $parent
     */
    private static function existingWasList(array $parent, string $key): ?bool
    {
        return null;
    }

    /**
     * @param array<string,mixed> $blank
     */
    public static function blankItem(array $sample): array
    {
        $blank = [];
        foreach ($sample as $key => $value) {
            if (is_array($value)) {
                $blank[(string) $key] = self::isLineList($value) || self::isObjectList($value) ? [] : self::blankItem($value);
            } else {
                $blank[(string) $key] = '';
            }
        }
        return $blank;
    }

    public static function textareaKey(string $key, mixed $value): bool
    {
        if (is_array($value)) {
            return false;
        }
        $textKeys = [
            'body', 'text', 'description', 'hero_subtitle', 'subtitle', 'content', 'answer',
            'meta_description', 'form_intro', 'cta_text', 'benefits_text', 'why_text',
            'mission_text', 'vision_text', 'showcase_text', 'seo_description', 'about', 'about_alt',
        ];
        if (in_array($key, $textKeys, true)) {
            return true;
        }
        return is_string($value) && (strlen($value) > 120 || str_contains($value, "\n"));
    }

    /**
     * @param array<string,mixed> $item
     */
    public static function renderValue(string $name, string $key, mixed $value, int $depth = 0): void
    {
        if (is_array($value) && self::isLineList($value)) {
            self::renderLines($name, $key, $value);
            return;
        }
        if (is_array($value) && self::isObjectList($value)) {
            self::renderRepeater($name, $key, $value);
            return;
        }
        if (is_array($value)) {
            echo '<fieldset class="field-group">';
            echo '<legend>' . e(self::label($key)) . '</legend>';
            foreach ($value as $childKey => $child) {
                self::renderValue($name . '[' . $childKey . ']', (string) $childKey, $child, $depth + 1);
            }
            echo '</fieldset>';
            return;
        }
        $label = self::label($key);
        $isText = self::textareaKey($key, $value);
        echo '<label>' . e($label);
        if ($isText) {
            echo '<textarea name="' . e($name) . '" rows="4" data-preview-key="' . e($key) . '">' . e((string) $value) . '</textarea>';
        } else {
            echo '<input type="text" name="' . e($name) . '" value="' . e((string) $value) . '" data-preview-key="' . e($key) . '">';
        }
        echo '</label>';
    }

    /**
     * @param list<string> $lines
     */
    public static function renderLines(string $name, string $key, array $lines): void
    {
        echo '<label>' . e(self::label($key));
        echo '<small>Her satır bir madde</small>';
        echo '<textarea name="' . e($name) . '" rows="5" data-preview-key="' . e($key) . '" data-kind="lines">';
        echo e(implode("\n", array_map('strval', $lines)));
        echo '</textarea></label>';
    }

    /**
     * @param list<array<string,mixed>> $items
     */
    public static function renderRepeater(string $name, string $key, array $items): void
    {
        $sample = $items[0] ?? ['title' => '', 'text' => ''];
        if (!is_array($sample)) {
            $sample = ['title' => '', 'text' => ''];
        }
        $id = 'repeat-' . preg_replace('/[^a-z0-9]+/i', '-', $name);
        echo '<div class="repeat" id="' . e($id) . '">';
        echo '<input type="hidden" name="' . e($name) . '[_keep]" value="1">';
        echo '<div class="repeat-head"><strong>' . e(self::label($key)) . '</strong>';
        echo '<button type="button" class="btn btn-ghost" data-add-repeat="#' . e($id) . '">Öğe ekle</button></div>';
        echo '<template>';
        self::renderRepeatItem($name . '[__i__]', self::blankItem($sample), true);
        echo '</template>';
        foreach (array_values($items) as $i => $item) {
            if (!is_array($item)) {
                $item = ['text' => (string) $item];
            }
            self::renderRepeatItem($name . '[' . $i . ']', $item, false);
        }
        echo '</div>';
    }

    /**
     * @param array<string,mixed> $item
     */
    public static function renderRepeatItem(string $name, array $item, bool $template): void
    {
        echo '<div class="repeat-item">';
        echo '<div class="repeat-item-bar"><span>Öğe</span><button type="button" class="link-btn" data-remove-repeat>Kaldır</button></div>';
        foreach ($item as $key => $value) {
            if (is_array($value) && self::isLineList($value)) {
                self::renderLines($name . '[' . $key . ']', (string) $key, $value);
            } elseif (is_array($value) && self::isObjectList($value)) {
                self::renderRepeater($name . '[' . $key . ']', (string) $key, $value);
            } elseif (is_array($value)) {
                foreach ($value as $childKey => $child) {
                    self::renderValue($name . '[' . $key . '][' . $childKey . ']', (string) $childKey, $child);
                }
            } else {
                $isText = self::textareaKey((string) $key, $value);
                echo '<label>' . e(self::label((string) $key));
                if ($isText) {
                    echo '<textarea name="' . e($name . '[' . $key . ']') . '" rows="3">' . e((string) $value) . '</textarea>';
                } else {
                    echo '<input type="text" name="' . e($name . '[' . $key . ']') . '" value="' . e((string) $value) . '">';
                }
                echo '</label>';
            }
        }
        echo '</div>';
    }
}
