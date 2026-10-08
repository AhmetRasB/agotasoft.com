# STATE (2026-10-08)

## Hedef
agotasoft.com: Next.js 14 statik export (`web/`) + PHP/MySQL admin (`admin/`, `api/`), cPanel
paylaşımlı hostingde (`uranus.hostingdunyam.net`, kullanıcı `agotaso1`, DB `agotaso1_web`), Cloudflare arkasında.
ERP odaklı sade site; 5 dil (tr/en/ru/uz/tk). Brain projesi: `agotasoft-web` (brain.agotasoft.com).

## Kararlar ve nedenleri
- Yayın cPanel'den zip yükle+aç (GitHub/Azure değil). Azure workflow'u sildik: kaynak yoktu, her push hata veriyordu. GitHub Actions (`.github/workflows/build.yml`) yalnızca build/lint/link/PHP kontrolü yapar, deploy etmez.
- Admin "Yayınla" `data/site.json`'u DB'den yeniden üretir. İçerik değişince dosya + DB'yi hedefli SQL ile birlikte güncelle; kod yayınından hemen sonra Yayınla'ya basma (panoda uyarı var).
- Çözümler menüsü/katalog içeriği kodda (`web/lib/solutions/`), admin'de değil: DB'ye dokunmadan yönetilsin.
- Hazır olmayan 76 ürün "Yakında" etiketli, olmayan özellik vaat edilmez (E-Fatura/GİB iddiası bu yüzden kalktı).
- Sitede doğrulanamayan iddia yazılmaz: ekip 2 kişi, 3 referans, ISO sertifikası yok, destek e-posta/telefon (saat vaadi yok), kaynaksız yüzde/rakam yok.
- Dil yönlendirmesi botlarda kapalı (Lighthouse/Google /en'e atılıyordu); her dil kendi canonical'ı.
- Yasal sayfalar yalnız TR'de var: diğer dillerde footer/form/çerez banner'ı TR sayfalarına gider, TR yasal sayfaların hreflang'i yalnız TR.
- Cepte Ne Var ve Görevim Ne katalogda doğrudan ceptenevar.com / gorevimne.com'a gider; AgotaRandevu = Planlayalim (planlayalim.com).
- İkon/font/görsel küçültme derlemeye bağlı betiklerle (`web/scripts/`), CDN bağımlılığı kalktı.
- Şifre/kimlik bilgisi yazılmaz; cPanel girişini kullanıcı yapar, `cpsess…` linkini verir (oturum kapanınca yeni link gerekir; phpMyAdmin geçici DB kullanıcısı da yenilenir).
- Ölçüm: GTM yalnız `NEXT_PUBLIC_GTM_ID` doluyken ve çerez onayından sonra yüklenir; ID boşken sitede izleme ve banner yoktur (`docs/OLCUM.md`).

## Biten (hepsi canlıda, main = `0c08443`)
- Mega menü + 86 ürünlük katalog + ürün sayfaları (5 dil); Ön Muhasebe, Kârlılık.NET, QR Menü sayfaları.
- onmuhasebe.agotasoft.com (statik tasarım, `~/onmuhasebe.agotasoft.com`) yayında.
- SEO/performans/erişilebilirlik turu (ana sayfa mobil 55→81, masaüstü 65→90).
- Şablon adı kalktı: klasör `sofax/` → `web/`, CSS öneki `sofax-` → `agota-`; favicon AgotaSoft "A" işareti; tk "re jim" → "režim".
- Ölçüm rehberi kodu: GTM, çerez banner'ı (5 dil, Consent Mode v2), `view_item`/`generate_lead`, UTM/click-id kaydı (`contact_messages.attribution`, `event_id`), isteğe bağlı Meta CAPI.
- Kanıtsız iddialar 5 dilde, canlı sayfalarda, `data/site*.json`'da ve DB'de temizlendi (ISO 27001, 7/24, 15+/150+/500+/50K+, yüzdeler, "2021'den beri"); Hakkımızda "2 Kişilik Ekip / 3 Referans"; ERP/CRM/LMS istatistik şeritleri kalktı. Yalnız Vizyon cümlesinde hedef ifadesi ("önde gelen … olmak") duruyor.
- Admin: `src/views/vendor` 404, girişte IP başına 15 dk'da 5 hata kilidi, 30 dk boşta zaman aşımı, POST+CSRF çıkış, install.sql'de varsayılan kullanıcı yok.
- İletişim API: IP başına 10 dk'da 5 gönderim, CORS yalnız kendi alan adı, adres başına saatte 1 otomatik yanıt, gizlilik onayı kaydı (`privacy_accepted_at`).
- Demo formu 5 dilde, ürün listesi katalogdaki 10 canlı üründen, `?urun=`/`?package=` ön seçimi.
- 404 düzeltmeleri, sitemap sonda slash (465 URL, lastmod yok), og:image her sayfada, HSTS, www→apex, kariyer sayfası gizli (noindex, menüde/sitemap'te yok), Calendly butonu kaldırıldı.
- Gizlilik metni: veri sorumlusu, KVKK 6698 atfı, hukuki dayanak, yurt dışına aktarım; rol/yedekleme vaadi çıktı.
- CI workflow ve `npm run check:links` (504 sayfada kırık link yok).
- Canlı DB `data/site.json`'dan yeniden kuruldu (`database/resync-2026-10-06.sql`): 81 içerik kaydı, blog 0, SEO 36→14, calendly boş, mesajlar (2) korundu. Yedekler: `entries_bak_20261006x`, `settings_bak_20261006x` (+ önceki `entries_bak_20261005`, `entries_bak_20261006`, `settings_bak_20261006`).
- Canlı sunucuda dosya yedeği: `/home/agotaso1/backup-20261006` (`data/`, `.htaccess`, yükleme zip parçaları).

## Yarım / açık
- **Sizde (yapılmadı):** eski `public_html/sofax/` klasörü hâlâ erişilebilir (`/sofax/public/data/site.json`), Çöp Kutusu'na taşınmalı; Cloudflare > Purge Everything; canlı admin şifresi değişmeli (varsayılan şifre git geçmişinde ve repo public); yedek tablolar ve `backup-20261006` klasörü işiniz bitince silinebilir.
- Doğrulanmadı: giriş kilidinin canlıdaki çalışması, iletişim formu hız sınırı ve "Kaynak" alanının admin mesajında görünmesi (bir test talebi gönderip bakın).
- Karar bekleyenler: fiyat sayfası (Kârlılık.NET, Cepte Ne Var, Görevim Ne, Planlayalim fiyatları ve ERP/CRM başlangıç fiyatı), 76 "Yakında" ürünün vitrini, ana sayfa konumlandırması (ERP mi, hazır ürünler mi), admin için Cloudflare Access/IP kısıtı, diğer dillerde yasal metin, veri sorumlusunun tescilli unvanı ve mesaj saklama süresi.
- GTM container ID girilmedi (izleme kapalı), GTM içi etiketler (GA4, Meta Pixel, Google Ads) ve Search Console doğrulaması yok; KVKK aydınlatma metni ve iade/iptal sayfaları yok (reklam onayı için gerekli).
- Cloudflare Cache Rule (HTML önbelleği, /admin ve /api hariç) eklenmedi; sunucu TTFB 1-3 sn, kalan en büyük kayıp. Eklenince her yüklemeden sonra Purge Everything. CSP başlığı yok (GTM ve satır içi betikler için ayrı tasarım gerekir); Next 14.2.20 yükseltilmedi.
- CMS yalnız TR içeriği yönetiyor (diğer diller ve katalog JSON'da); panel değişikliği botlara rebuild olmadan yansımaz; admin'de görsel yükleme ve yayın öncesi `site.json` yedeği yok; 2FA ve rol kontrolü yok; Cloudflare Turnstile yok.
- Silinemeyenler (izin denetimi silme işlemlerini engelliyor, `git rm` ile siz): `web/agotasoft-website-final/`, `web/*.zip`, `web/public/images/v5/Sofax for Dev.zip`, `web/staticwebapp.config.json`, `web/.github`, ~200 kullanılmayan şablon bileşeni. Canlıda eski AgotaRandevu detay sayfası dosyaları da kaldı (yeni derleme üretmiyor).
- İletişim haritası Taksim, adres Üsküdar; fiyat sayfasındaki doğrulanmamış maddeler (vergi hesabı, çoklu şirket, API) ve "Mobil uygulama" maddesi gözden geçirilmedi; subdomain'de "ERP" etiketi ve agotasoft.com linki sorusu cevaplanmadı.
- `web/agotasoft-website-final/data/` ve `.claude/`, `web/.claude/` yerel, commit dışı.

## Sıradaki ilk adım
Sizde kalan 3 adım: `sofax/` klasörünü kaldır, Cloudflare Purge Everything, admin şifresini değiştir. Sonra Cloudflare Cache Rule + canlıda Lighthouse; fiyat sayfası ve ana sayfa konumlandırması kararları.

## Denenip işe yaramayanlar
- phpMyAdmin Import düğmesi bazen göndermiyor: dosyayı seç, `fi.files[0].text()` ile `index.php?route=/import` AJAX'ına POST et. SQL'i AJAX ile `sql_query` parametresiyle de çalıştırmak mümkün (`CommonParams.get('token')`); phpMyAdmin sonuç tablolarını 25 satırla sınırlar, sorguya `LIMIT` ekle.
- Python urllib canlı siteyi 403 alır (Cloudflare); curl kullan.
- Dev sunucu açıkken `npm run build` `.next`'i bozar: durdur, `rm -rf .next`, build.
- `next/font` unicode-range değerlerini sabit yazı ister; sabit değişken derlemeyi kırar.
- `.htaccess` `<If>` bloğu yerine `_next/static/.htaccess` (postbuild yazar) kullanıldı.
- QR Menü yerel docker yığını eski sürümde, panel boş verdi; ekranlar QR oturumundan alındı.
- Claude in Chrome `file_upload` tek çağrıda 10 MB ile sınırlı: 38 MB'lık derleme 10 parça zip'e bölünüp (`/home/agotaso1/backup-20261006` altına yüklendi) cPanel API2 `Fileman::fileop op=extract` ile `public_html`'e açıldı. cPanel API'si aynı oturumdan `fetch('/cpsessXXXX/json-api/cpanel?…')` ile çağrılır.
- Claude Code "auto mode" izin denetimi toplu veritabanı silme/yazma, kalıcı dosya silme ve canlı veritabanına dosya yükleme gibi işlemleri chat onayına rağmen engelledi; dosya yükleme ancak izin modu değişince açıldı, veritabanı Import'u kullanıcı elle yaptı. Aynı işi başka araçla (computer use vb.) denemek de yasak.
- Brain'in "FAQ/Ekip içeriği statik HTML'de yok" tespiti yanlıştı: ilk HTML build'e gömülü defaults'tan üretiliyor.
