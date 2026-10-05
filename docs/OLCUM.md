# Ölçüm ve reklam altyapısı

Kaynak: `Reklam_Analitik_Olcum_Rehberi.docx`. Bu depo yalnızca agotasoft.com'u kapsar; ceptenevar.com, gorevimne.com,
planlayalim.com, karlilik.net ve qrmenu.agotasoft.com kendi kodlarında aynı kurulumu ister.

## Koda girenler (agotasoft.com)

| Rehber | Karşılığı |
|---|---|
| §1 GTM | `NEXT_PUBLIC_GTM_ID` doluysa GTM yüklenir; GA4, Meta Pixel, Google Ads, Clarity GTM içinde etiket olarak eklenir. |
| §2 Olaylar | `view_item` (ürün ve fiyat sayfaları), `generate_lead` (demo formu, `event_id` ile). `sign_up`, `begin_checkout`, `purchase` bu sitede yok; ürün uygulamalarına eklenir. |
| §3 Kaynak | UTM, `gclid`, `fbclid`, `ttclid`, `msclkid`, `_fbp`, `_fbc` oturumda tutulur; onaydan sonra 90 gün saklanır ve demo formuyla `contact_messages.attribution` alanına yazılır. Admin'de mesaj sayfasında "Kaynak" olarak görünür. |
| §3 CAPI | `.env`'de `META_PIXEL_ID` + `META_CAPI_TOKEN` varsa lead, tarayıcıdaki aynı `event_id` ile Meta'ya sunucudan da gider (`admin/src/ServerEvents.php`). |
| §5 KVKK | Çerez banner'ı (5 dil), Consent Mode v2 varsayılanı "denied"; GTM yalnızca "Kabul Et"ten sonra yüklenir. Altbilgideki "Çerez tercihleri" bağlantısı kararı geri açar. |

`NEXT_PUBLIC_GTM_ID` boşken sitede hiçbir izleme ve banner yoktur (şu anki canlı durum).

## Sizin yapacaklarınız

1. GTM container açıp ID'yi `web/.env.local`'a yazın (`NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`), yeniden derleyin.
2. GTM'de etiketler: GA4 Configuration, `generate_lead` ve `view_item` olay etiketleri, Meta Pixel (`Lead`, `event_id` = dataLayer `event_id`), Google Ads dönüşümü + Enhanced Conversions, isteğe bağlı Clarity.
   Her etiketin Consent ayarı yerleşik (Consent Mode) olarak bırakılır.
3. Canlı veritabanında `database/migrations/2026-10-lead-attribution.sql` dosyasını bir kez çalıştırın.
4. Domain doğrulaması: Search Console ve Meta (Aggregated Event Measurement).
5. alt alan adı (qrmenu.agotasoft.com): GA4'te aynı stream, GTM'de linker/çapraz alan adı ayarı.
6. KVKK aydınlatma metni ve iade/iptal koşulları sayfaları yok; reklam onayı için gerekir. Veri sorumlusu bilgisi ve hukuki metin sizden gelmeli.

## Yayından önce test (§8)

Tag Assistant ve GA4 DebugView; Meta Events Manager > Test Events (`META_CAPI_TEST_CODE` ile sunucu tarafı da görünür),
Event Match Quality; test demo talebinin olayı tarayıcıdan ve sunucudan tek kez düşürdüğünü doğrulayın.
Başlangıç bütçesi günlük 100-200 TL, tek hedefli kampanya.
