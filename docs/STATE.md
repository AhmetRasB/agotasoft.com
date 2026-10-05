# STATE (2026-10-05)

## Hedef
agotasoft.com: Next.js 14 statik export (`web/`) + PHP/MySQL admin (`admin/`, `api/`), cPanel
paylaşımlı hostingde, Cloudflare arkasında. ERP odaklı sade site; 5 dil (tr/en/ru/uz/tk).

## Kararlar ve nedenleri
- Yayın cPanel'den zip yükle+aç (GitHub/Azure değil). Azure workflow'u sildik: kaynak yoktu, her push hata veriyordu.
- Admin "Yayınla" `data/site.json`'u ezer; içerik değişince dosya + DB'yi hedefli SQL ile birlikte güncelle.
- Çözümler menüsü/katalog içeriği kodda (`web/lib/solutions/`), admin'de değil: DB'ye dokunmadan yönetilsin.
- Hazır olmayan 76 ürün "Yakında" etiketli, olmayan özellik vaat edilmez (E-Fatura/GİB iddiası bu yüzden kalktı).
- Dil yönlendirmesi botlarda kapalı (Lighthouse/Google /en'e atılıyordu); her dil kendi canonical'ı.
- İkon/font/görsel küçültme derlemeye bağlı betiklerle (`web/scripts/`), CDN bağımlılığı kalktı.
- Şifre/kimlik bilgisi yazılmaz; cPanel girişini kullanıcı yapar, `cpsess…` linkini verir.

## Biten
- Mega menü + 86 ürünlük katalog + ürün sayfaları (5 dil); Ön Muhasebe, Kârlılık.NET, QR Menü sayfaları ekran görüntüleriyle.
- onmuhasebe.agotasoft.com (statik tasarım, `~/onmuhasebe.agotasoft.com`) yayında.
- SEO/performans/erişilebilirlik turu yayında (ana sayfa mobil 55→81, masaüstü 65→90). main = `ab187d1`.
- Template adı her yerden kalktı (klasör `sofax/` → `web/`, CSS öneki `sofax-` → `agota-`); favicon AgotaSoft "A" işaretiyle yenilendi; tk "re jim" → "režim".
- Ölçüm rehberi uygulandı (`docs/OLCUM.md`): GTM + çerez banner'ı + kaynak kaydı + CAPI; `NEXT_PUBLIC_GTM_ID` boş olduğu için canlıda kapalı.

## Yarım / açık
- Canlı DB'ye iki migration: `database/migrations/2026-10-rename-template-name.sql` (Yayınla'dan ÖNCE, yoksa eski adlar data/*.json'a geri yazılır) ve `2026-10-lead-attribution.sql`.
- `web/agotasoft-website-final/` ve `web/*.zip` eski çıktı kopyaları, içlerinde hâlâ "sofax" geçiyor; `web/public/images/v5/Sofax for Dev.zip` şablondan kalma. Silme kararı kullanıcıda.
- KVKK aydınlatma metni ve iade/iptal sayfaları yok (reklam onayı için gerekli).
- Cloudflare Cache Rule (HTML önbelleği, /admin ve /api hariç) eklenmedi; sunucu TTFB 1-3 sn, kalan en büyük kayıp bu. Eklenince her yüklemeden sonra Purge Everything.
- `web/agotasoft-website-final/data/site.json` eski kopya, izlenmiyor; `.claude/` yerel ayarlar commit dışı.
- Fiyat sayfasındaki doğrulanmamış maddeler (vergi hesabı, çoklu şirket, API, 7/24 destek); iletişim haritası Taksim, adres Üsküdar.
- Subdomain'de "ERP" etiketi ve agotasoft.com linki sorusu cevaplanmadı.

## Sıradaki ilk adım
Cloudflare Cache Rule'u ekletip canlıda Lighthouse'u tekrar ölç; sonra yukarıdaki doğrulanmamış fiyat maddelerini kullanıcıyla netleştir.

## Denenip işe yaramayanlar
- phpMyAdmin Import düğmesi bazen göndermiyor: dosyayı seç, `fi.files[0].text()` ile `index.php?route=/import` AJAX'ına POST et.
- Python urllib canlı siteyi 403 alır (Cloudflare); curl kullan.
- Dev sunucu açıkken `npm run build` `.next`'i bozar: durdur, `rm -rf .next`, build.
- `next/font` unicode-range değerlerini sabit yazı ister; sabit değişken derlemeyi kırar.
- `.htaccess` `<If>` bloğu yerine `_next/static/.htaccess` (postbuild yazar) kullanıldı.
- QR Menü yerel docker yığını eski sürümde, panel boş verdi; ekranlar QR oturumundan alındı.
