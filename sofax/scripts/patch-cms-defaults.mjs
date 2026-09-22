import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const defaultsPath = join(root, "lib/cms/defaults.json");
const defaults = JSON.parse(readFileSync(defaultsPath, "utf8"));

Object.assign(defaults.pages.about, {
	mission_heading: "Misyon & Vizyon",
	mission_items: ["Müşteri odaklı çözümler", "Sürekli yenilik", "Kaliteli hizmet", "Güvenilir ortaklık"],
	vision_items: ["Sektör liderliği", "Uluslararası büyüme", "Teknoloji öncülüğü", "Sürdürülebilir gelişim"],
	values_title: "Değerlerimiz",
	values_subtitle: "AgotaSoft'ı farklı kılan temel değerlerimiz",
	values: [
		{ icon: "fas fa-handshake", title: "Güven", text: "Müşterilerimizle uzun vadeli, güvene dayalı ilişkiler kuruyoruz." },
		{ icon: "fas fa-lightbulb", title: "Yenilik", text: "Sürekli araştırma ve geliştirme ile teknolojide öncü olmaya odaklanıyoruz." },
		{ icon: "fas fa-award", title: "Kalite", text: "Her projede mükemmellik standardını yakalama konusunda kararlıyız." },
		{ icon: "fas fa-users", title: "Ekip Ruhu", text: "Güçlü ekip çalışması ile en zorlu projeleri başarıyla tamamlıyoruz." },
	],
	why_title: "Neden AgotaSoft'ı Seçmelisiniz?",
	why_text: "3 yıllık deneyimimiz, uzman ekibimiz ve müşteri odaklı yaklaşımımızla işletmenizin dijital dönüşümünde en güvenilir ortağınızız.",
	why_items: [
		{ icon: "fas fa-cogs", title: "Uzman Kadro", text: "Alanında uzman 15+ yazılım geliştirici ve danışman ekibimiz." },
		{ icon: "fas fa-headset", title: "7/24 Destek", text: "Kesintisiz teknik destek ve müşteri hizmetleri." },
		{ icon: "fas fa-shield-alt", title: "Yüksek Güvenlik", text: "ISO 27001 sertifikalı güvenlik standartları." },
		{ icon: "fas fa-puzzle-piece", title: "Kolay Entegrasyon", text: "Mevcut sistemlerinizle sorunsuz entegrasyon." },
	],
});

Object.assign(defaults.pages.contact, {
	quick_title: "Hızlı İletişim Seçenekleri",
	quick_subtitle: "Size en uygun iletişim yöntemini seçin",
	chat_title: "Canlı Destek",
	chat_text: "Online chat ile anında yardım alın",
	chat_button: "Sohbet Başlat",
	calendar_title: "Randevu Al",
	calendar_text: "Uygun saatte detaylı görüşme ayarlayın",
	calendar_button: "Randevu Al",
	email_title: "E-posta Gönder",
	email_text: "Detaylı sorularınızı e-posta ile iletin",
	email_button: "E-posta Gönder",
	map_label: "AgotaSoft Yazılım",
});

Object.assign(defaults.pages.service, {
	why_title: "Neden AgotaSoft Çözümlerini Seçmelisiniz?",
	why_text: "15 yıllık sektör deneyimi, uzman ekip ve müşteri odaklı yaklaşımımızla işletmenizin dijital dönüşümünde güvenilir ortağınızız.",
	why_items: [
		{ icon: "fas fa-rocket", title: "Hızlı Implementasyon", text: "2-4 hafta içinde sisteminizi devreye alıyoruz." },
		{ icon: "fas fa-headset", title: "7/24 Destek", text: "Kesintisiz teknik destek ve müşteri hizmetleri." },
		{ icon: "fas fa-shield-alt", title: "Yüksek Güvenlik", text: "ISO 27001 sertifikalı güvenlik standartları." },
		{ icon: "fas fa-cog", title: "Özelleştirme", text: "İşletmenizin ihtiyaçlarına özel çözümler." },
	],
	cta_title: "Hangi Çözüm İşletmenize Uygun?",
	cta_text: "Uzman danışmanlarımızla görüşerek işletmenizin ihtiyaçlarına en uygun çözümü belirleyin.",
	cta_primary: "Ücretsiz Danışmanlık",
	cta_secondary: "Fiyatları İncele",
});

Object.assign(defaults.pages.pricing, {
	selector_title: "Hangi Çözüm İçin Paket Arıyorsunuz?",
	packages_subtitle: "İşletmenizin büyüklüğüne uygun çözüm paketleri",
	cta_title: "Hangi Paket Size Uygun?",
	cta_text: "Uzman danışmanlarımızla görüşerek işletmenizin ihtiyaçlarına en uygun paketi belirleyin.",
	cta_primary: "Ücretsiz Danışmanlık",
	cta_secondary: "İletişime Geçin",
	contact_label: "İletişime Geçin",
	popular_label: "Popüler",
});

Object.assign(defaults.pages.erp, {
	cta_primary: "Ücretsiz Demo",
	cta_secondary: "Özellikleri İncele",
	hero_image: "/images/about/DashboardTR.png",
	modules_title: "ERP Modülleri ve Özellikleri",
	modules_subtitle: "İşletmenizin tüm süreçlerini kapsayan kapsamlı ERP çözümü",
	modules: [
		{ icon: "fas fa-boxes", title: "Stok Yönetimi", description: "Gerçek zamanlı stok takibi, otomatik yeniden sipariş, depo yönetimi ve stok hareketlerinin detaylı raporlanması.", bullets: ["Gerçek zamanlı stok takibi", "Otomatik yeniden sipariş", "Çoklu depo yönetimi", "Barkod entegrasyonu"] },
		{ icon: "fas fa-chart-line", title: "Finans Yönetimi", description: "Muhasebe, bütçe planlama, nakit akış yönetimi ve detaylı finansal raporlama özellikleri.", bullets: ["Genel muhasebe", "Bütçe ve planlama", "Nakit akış takibi", "Finansal raporlar"] },
		{ icon: "fas fa-industry", title: "Üretim Planlaması", description: "Üretim planlaması, kapasite yönetimi, kalite kontrol ve üretim maliyeti analizi.", bullets: ["Üretim planlaması", "Kapasite yönetimi", "Kalite kontrol", "Maliyet analizi"] },
		{ icon: "fas fa-shopping-cart", title: "Satın Alma Yönetimi", description: "Tedarikçi yönetimi, satın alma süreçleri, teklif alma ve satın alma performans analizi.", bullets: ["Tedarikçi yönetimi", "Teklif alma süreci", "Satın alma onay akışı", "Performans analizi"] },
		{ icon: "fas fa-users", title: "İnsan Kaynakları", description: "Personel yönetimi, bordro, izin takibi ve performans değerlendirme sistemi.", bullets: ["Personel dosyaları", "Bordro yönetimi", "İzin ve mesai takibi", "Performans değerlendirme"] },
		{ icon: "fas fa-chart-pie", title: "Raporlama & Analiz", description: "Kapsamlı raporlama, iş zekası, dashboard'lar ve karar destek sistemleri.", bullets: ["Gerçek zamanlı dashboard", "Özelleştirilebilir raporlar", "İş zekası araçları", "KPI takibi"] },
	],
	benefits_title: "Neden AgotaSoft ERP?",
	benefits_text: "AgotaSoft ERP, işletmenizin tüm süreçlerini entegre ederek operasyonel verimliliği artırır ve büyümenizi destekler.",
	benefits: [
		{ icon: "fas fa-rocket", title: "%40 Daha Hızlı Süreçler", text: "Otomatik iş akışları ve entegre sistemlerle süreç sürelerinizi kısaltın." },
		{ icon: "fas fa-shield-alt", title: "Yüksek Güvenlik", text: "256-bit SSL şifreleme ve çoklu yetkilendirme ile verileriniz güvende." },
		{ icon: "fas fa-cloud", title: "Bulut Tabanlı", text: "Her yerden erişim, otomatik yedekleme ve güncellemeler." },
	],
	showcase_title: "ERP Sistemi ile Elde Edeceğiniz Faydalar",
	showcase_text: "AgotaSoft ERP ile işletmenizin tüm süreçlerini optimize edin ve rekabette öne geçin.",
	showcase_image: "/images/about/Benefits.png",
	stats: [
		{ number: "%60", label: "Zaman Tasarrufu" },
		{ number: "%45", label: "Maliyet Azalması" },
		{ number: "%80", label: "Verimlilik Artışı" },
		{ number: "%90", label: "Müşteri Memnuniyeti" },
	],
	cta_title: "ERP Sisteminizi Bugün Kurmaya Başlayın",
	cta_text: "30 günlük ücretsiz deneme ile AgotaSoft ERP'nin gücünü keşfedin. Kurulum ve eğitim desteği dahil.",
	cta_button: "Ücretsiz Demo Talep Edin",
	cta_pricing: "Fiyatları İncele",
});

Object.assign(defaults.pages.crm, {
	cta_primary: "Ücretsiz Demo",
	cta_secondary: "Özellikleri İncele",
	hero_image: "/images/CRM.png",
	hero_subtitle: "Kapsamlı müşteri veritabanı, satış fırsatı takibi, pazarlama otomasyonu ve müşteri hizmetleri ile işletmenizin büyümesini hızlandırın. Müşteri memnuniyetini artırın, satış performansınızı optimize edin.",
	modules_title: "CRM Modülleri ve Özellikleri",
	modules_subtitle: "Müşteri ilişkilerinizi yönetmek için ihtiyacınız olan tüm araçlar",
	modules: [
		{ icon: "fas fa-database", title: "Müşteri Veritabanı", description: "Tüm müşteri bilgilerinizi merkezi bir veritabanında organize edin. Detaylı müşteri profilleri ve etkileşim geçmişi.", bullets: ["360° müşteri görünümü", "İletişim geçmişi", "Müşteri segmentasyonu", "Özel alanlar"] },
		{ icon: "fas fa-handshake", title: "Satış Yönetimi", description: "Satış süreçlerinizi optimize edin, fırsatları takip edin ve satış performansınızı artırın.", bullets: ["Satış hunisi yönetimi", "Fırsat takibi", "Teklif yönetimi", "Satış raporları"] },
		{ icon: "fas fa-bullhorn", title: "Pazarlama Otomasyonu", description: "E-posta kampanyaları, lead nurturing ve pazarlama süreçlerinizi otomatikleştirin.", bullets: ["E-posta kampanyaları", "Lead scoring", "Otomatik iş akışları", "Kampanya analizi"] },
		{ icon: "fas fa-headset", title: "Müşteri Hizmetleri", description: "Destek talepleri, ticket yönetimi ve müşteri memnuniyeti takibi.", bullets: ["Ticket yönetimi", "Canlı destek", "Bilgi bankası", "Memnuniyet anketleri"] },
		{ icon: "fas fa-chart-line", title: "Analiz & Raporlama", description: "Satış performansı, müşteri davranışları ve pazarlama ROI analizi.", bullets: ["Satış dashboard'u", "Performans raporları", "Müşteri analizi", "ROI hesaplama"] },
		{ icon: "fas fa-mobile-alt", title: "Mobil Erişim", description: "iOS ve Android uygulamaları ile her yerden CRM sisteminize erişim.", bullets: ["Mobil uygulama", "Offline çalışma", "Push bildirimleri", "Senkronizasyon"] },
	],
	benefits_title: "CRM ile İşletmenizde Fark Yaratın",
	benefits_text: "AgotaSoft CRM ile müşteri ilişkilerinizi güçlendirin, satış süreçlerinizi optimize edin ve büyümenizi hızlandırın.",
	benefits: [
		{ icon: "fas fa-chart-line", title: "%35 Daha Fazla Satış", text: "Etkili lead yönetimi ve satış süreç optimizasyonu ile satışlarınızı artırın." },
		{ icon: "fas fa-heart", title: "%50 Daha Yüksek Müşteri Memnuniyeti", text: "Kişiselleştirilmiş hizmet ve hızlı yanıt süreleri ile müşteri memnuniyetini artırın." },
		{ icon: "fas fa-clock", title: "%60 Zaman Tasarrufu", text: "Otomatik süreçler ve entegre sistem ile zaman tasarrufu sağlayın." },
	],
	stats: [
		{ number: "98%", label: "Müşteri Memnuniyeti" },
		{ number: "35%", label: "Satış Artışı" },
		{ number: "60%", label: "Zaman Tasarrufu" },
		{ number: "10K+", label: "Mutlu Kullanıcı" },
	],
	cta_title: "CRM Dönüşümünüzü Bugün Başlatın",
	cta_text: "14 günlük ücretsiz deneme ile AgotaSoft CRM'in gücünü keşfedin. Kurulum ve eğitim desteği dahil.",
	cta_button: "Ücretsiz Demo Talep Edin",
	cta_pricing: "Fiyatları İncele",
});

Object.assign(defaults.pages.lms, {
	cta_primary: "Ücretsiz Demo",
	cta_secondary: "Özellikleri İncele",
	hero_card_title: "AgotaSoft LMS",
	hero_card_text: "Kurumsal Eğitim Platformu",
	modules_title: "LMS Modülleri ve Özellikleri",
	modules_subtitle: "Kurumsal eğitim ve gelişim için ihtiyacınız olan tüm araçlar",
	modules: [
		{ icon: "fas fa-chalkboard-teacher", title: "Ders Yönetimi", description: "Interaktif ders içerikleri oluşturun, video dersler ekleyin ve öğrenme materyallerini organize edin.", bullets: ["Video ders yükleme", "İnteraktif içerikler", "Ders programlama", "Materyal kütüphanesi"] },
		{ icon: "fas fa-clipboard-check", title: "Online Sınav Sistemi", description: "Çoktan seçmeli, açık uçlu ve karma sorularla online sınavlar oluşturun ve otomatik değerlendirin.", bullets: ["Çoklu soru türleri", "Otomatik değerlendirme", "Zamanlı sınavlar", "Soru bankası"] },
		{ icon: "fas fa-chart-line", title: "Performans Takibi", description: "Öğrenci ilerlemelerini takip edin, performans raporları oluşturun ve gelişim alanlarını belirleyin.", bullets: ["İlerleme takibi", "Performans raporları", "Başarı analitics", "Karşılaştırmalı analiz"] },
		{ icon: "fas fa-certificate", title: "Sertifika Yönetimi", description: "Otomatik sertifika oluşturma, dijital rozet sistemi ve başarı belgelerini yönetin.", bullets: ["Otomatik sertifika", "Dijital rozetler", "Özelleştirilebilir tasarım", "Sertifika doğrulama"] },
		{ icon: "fas fa-users-cog", title: "Kullanıcı Yönetimi", description: "Rol tabanlı erişim, grup yönetimi ve kullanıcı hesaplarını merkezi olarak yönetin.", bullets: ["Rol tabanlı erişim", "Grup yönetimi", "Toplu kullanıcı ekleme", "Aktif Dizin entegrasyonu"] },
		{ icon: "fas fa-comments", title: "İletişim Araçları", description: "Forum, mesajlaşma, canlı sohbet ve video konferans araçları ile etkileşimi artırın.", bullets: ["Tartışma forumları", "Anlık mesajlaşma", "Video konferans", "Bildirim sistemi"] },
	],
	benefits_title: "Kurumsal Eğitimde Yeni Dönem",
	benefits_text: "AgotaSoft LMS ile çalışanlarınızın gelişimini destekleyin, eğitim süreçlerinizi optimize edin ve kurumsal bilgiyi paylaşın.",
	benefits: [
		{ icon: "fas fa-graduation-cap", title: "%80 Daha Etkili Öğrenme", text: "İnteraktif içerikler ve gamification ile öğrenme verimliliğini artırın." },
		{ icon: "fas fa-clock", title: "%60 Zaman Tasarrufu", text: "Otomatik değerlendirme ve raporlama ile eğitim yönetiminde zaman kazanın." },
		{ icon: "fas fa-mobile-alt", title: "Her Yerden Erişim", text: "Mobil uyumlu tasarım ile çalışanlar her yerden eğitimlere erişebilir." },
	],
	panel_title: "LMS Performans Analizi",
	panel_text: "Eğitim süreçlerinizi analiz edin ve optimize edin",
	usecases_title: "Kullanım Alanları",
	usecases_subtitle: "AgotaSoft LMS'in farklı sektörlerdeki uygulama alanları",
	usecases: [
		{ icon: "fas fa-building", title: "Kurumsal Eğitim", text: "Çalışan oryantasyonu, beceri geliştirme ve sürekli eğitim programları." },
		{ icon: "fas fa-user-tie", title: "Satış Eğitimi", text: "Ürün bilgisi, satış teknikleri ve müşteri hizmetleri eğitimleri." },
		{ icon: "fas fa-shield-alt", title: "Uyumluluk Eğitimi", text: "İş güvenliği, KVKK, kalite yönetimi ve yasal uyumluluk eğitimleri." },
		{ icon: "fas fa-laptop-code", title: "Teknik Eğitim", text: "Yazılım eğitimleri, teknik beceri geliştirme ve sertifikasyon programları." },
	],
	stats: [
		{ number: "50K+", label: "Aktif Öğrenci" },
		{ number: "1000+", label: "Tamamlanan Kurs" },
		{ number: "95%", label: "Başarı Oranı" },
		{ number: "500+", label: "Kurumsal Müşteri" },
	],
	cta_title: "Kurumsal Eğitim Dönüşümünüzü Başlatın",
	cta_text: "30 günlük ücretsiz deneme ile AgotaSoft LMS'in gücünü keşfedin. Kurulum, içerik yükleme ve eğitim desteği dahil.",
	cta_button: "Ücretsiz Demo Talep Edin",
	cta_pricing: "Fiyatları İncele",
});

Object.assign(defaults.pages["pre-accounting"], {
	cta_primary: "Ücretsiz Demo",
	cta_secondary: "Özellikleri İncele",
	hero_card_title: "AgotaSoft Ön Muhasebe",
	hero_card_text: "Finansal Kontrol Sistemi",
	hero_subtitle: "E-Fatura entegrasyonu, cari hesap yönetimi, gider takibi ve finansal raporlama ile KOBİ'lerin finansal süreçlerini kolaylaştıran kapsamlı ön muhasebe çözümü.",
	modules_title: "Ön Muhasebe Modülleri ve Özellikleri",
	modules_subtitle: "KOBİ'ler için özel tasarlanmış finansal yönetim araçları",
	modules: [
		{ icon: "fas fa-file-invoice", title: "E-Fatura Entegrasyonu", description: "GİB entegrasyonu ile e-fatura oluşturma, gönderme ve alma işlemlerini otomatikleştirin.", bullets: ["GİB entegrasyonu", "Otomatik fatura oluşturma", "E-arşiv fatura", "Toplu fatura işlemleri"] },
		{ icon: "fas fa-address-book", title: "Cari Hesap Yönetimi", description: "Müşteri ve tedarikçi hesaplarınızı takip edin, borç-alacak durumlarını kontrol edin.", bullets: ["Cari kart yönetimi", "Borç-alacak takibi", "Vade analizleri", "Cari ekstre raporları"] },
		{ icon: "fas fa-receipt", title: "Gider Takibi", description: "Tüm giderlerinizi kategorize edin, takip edin ve gider analizleri yapın.", bullets: ["Gider kategorileri", "Fiş ve belge yönetimi", "Gider onay süreçleri", "Gider raporları"] },
		{ icon: "fas fa-university", title: "Banka Yönetimi", description: "Banka hesaplarınızı takip edin, nakit akışınızı kontrol edin ve banka mutabakatı yapın.", bullets: ["Çoklu banka hesabı", "Nakit akış takibi", "Banka mutabakatı", "Çek-senet yönetimi"] },
		{ icon: "fas fa-percentage", title: "Vergi Yönetimi", description: "KDV, stopaj ve diğer vergi hesaplamalarını otomatikleştirin, beyanname hazırlayın.", bullets: ["Otomatik vergi hesaplama", "KDV beyannamesi", "Stopaj hesaplamaları", "Vergi raporları"] },
		{ icon: "fas fa-chart-bar", title: "Finansal Raporlama", description: "Detaylı finansal raporlar, gelir-gider analizleri ve karlılık raporları.", bullets: ["Gelir-gider raporu", "Karlılık analizi", "Nakit akış raporu", "Özelleştirilebilir raporlar"] },
	],
	benefits_title: "KOBİ'ler İçin Özel Tasarlandı",
	benefits_text: "AgotaSoft Ön Muhasebe, küçük ve orta ölçekli işletmelerin finansal süreçlerini kolaylaştırmak için özel olarak tasarlanmıştır.",
	benefits: [
		{ icon: "fas fa-clock", title: "%70 Daha Hızlı Faturalama", text: "E-Fatura entegrasyonu ile faturalama süreçlerinizi hızlandırın." },
		{ icon: "fas fa-shield-alt", title: "%100 Yasal Uyumluluk", text: "Türkiye'deki tüm yasal düzenlemelere tam uyumlu sistem." },
		{ icon: "fas fa-calculator", title: "Otomatik Hesaplamalar", text: "Vergi, KDV ve stopaj hesaplamalarını otomatik olarak yapın." },
	],
	panel_title: "Finansal Raporlama",
	panel_text: "Detaylı mali raporlar ve analiz araçları",
	local_pricing_title: "Uygun Fiyatlarla Başlayın",
	local_pricing_subtitle: "KOBİ'ler için özel fiyatlandırma paketleri",
	local_plans: [
		{ title: "Başlangıç", icon: "fas fa-seedling", price: "₺299", period: "/ay", popular: false, features: ["5 Kullanıcıya kadar", "E-Fatura entegrasyonu", "Temel raporlar", "E-posta desteği"], button: "Başlayın" },
		{ title: "Profesyonel", icon: "fas fa-rocket", price: "₺599", period: "/ay", popular: true, features: ["15 Kullanıcıya kadar", "Tüm modüller", "Gelişmiş raporlar", "Telefon desteği", "Entegrasyon desteği"], button: "Başlayın" },
	],
	cta_title: "Finansal Kontrolünüzü Elinize Alın",
	cta_text: "30 günlük ücretsiz deneme ile Sofax Ön Muhasebe'nin gücünü keşfedin. Kurulum ve eğitim desteği dahil.",
	cta_button: "Ücretsiz Demo Talep Edin",
	cta_phone: "Hemen Arayın",
	cta_phone_url: "tel:+908001234567",
});

Object.assign(defaults.pages.terms, {
	intro: "Welcome to our agency. These terms and conditions outline the rules and regulations for our services. By the accessing this website and or using to our services. You accepts these the terms and conditions in full.",
	sections: [
		{
			title: "Interpretation",
			text: "outlining the rules, responsibilities, and expectations for both parties. These terms typically cover aspects such as usage rights, payment terms, privacy policies, dispute resolution, and any other relevant terms that govern the use of the service. Users are usually required to agree to these terms before using the service, and they serve as a legally binding contract between the user and the provider.",
			items: [
				"‘’Client you & your refer to you, the person accessing this website’’ .",
				"“Party parties, or us refer to both the clients and ourselves”.",
				"“The company , ourselves we & us refer to our agency”.",
			],
		},
		{
			title: "Intellectual Property",
			text: "Both Parties agree to keep confidential any information provided by the other Party that is not publicly available. This includes but is not limited to business strategies, financial information, and proprietary data.All intellectual property rights in the work produced during the engagement shall belong to the Client upon full payment, unless otherwise agreed upon in writing.",
			text2: "Either party may terminate the agreement with written notice if the other party breaches any material term or condition. Termination may also occur by mutual agreement.",
		},
		{
			title: "Fees and Payment",
			items: [
				"The client agrees to pay the fees as specified in the proposal or agreement.",
				"Late payments may incur additional charges or result in the suspension.",
				"Payment trems, including any deposit requirements.",
			],
		},
		{
			title: "Changees to Terms & Conditions",
			text: "We reserve the right to amend these terms and conditions at any time. All changes will be posted on this website. These terms and conditions constitute the entire agreement between the Parties and supersede all prior discussions, negotiations, and understandings. We shall not be liable for any indirect, special, or consequential damages, or any loss of revenue, profits, or data arising in connection with our services.",
		},
		{
			title: "Contact Information",
			text: "If you have any questions or concerns regarding these terms and conditions, please contact us.",
		},
	],
});

defaults.pages.team = {
	title: "Our Team",
	hero_title: "Meet the team work behind our succees",
	hero_subtitle: "Our team consists of a group of talents. We solve customer problems with sincerity. All of our team members are very intelligent and skilled.",
};

defaults.pages.portfolio = {
	title: "Our Portfolio",
	hero_title: "Check out all our latest feature projects",
};

defaults.pages.blog = {
	title: "Blog",
};

defaults.pages["single-blog"] = {
	title: "Blog Details",
};

defaults.pages["single-portfolio"] = {
	title: "Portfolio Deatails",
	hero_title: "Gradients can range from simple transitions to more complex ones",
	client_label: "Client :",
	client: "Henry Company",
	services_label: "Services :",
	services: "Web Design",
	date_label: "Date :",
	date: "March 27, 2024",
	website_label: "Website :",
	website: "Preview Project",
	overview_title: "Project Overview :",
	overview: '"Gradient Web Design" sounds like a project focused on incorporating gradients into web design. Gradients are a popular design element that involve a smooth transition between two or more colors. By creating a comprehensive project overview, you can ensure that the Gradient Web Design project progresses smoothly and achieves its objectives effectivel',
	related_title: "Related Project",
};

defaults.pages["single-team"] = {
	title: "Team Details",
};

defaults.pages["single-career"] = {
	title: "UI/UX Designer",
};

defaults.blog[0].content = `Optimizing your online store for maximum sales impact & exposure involves a multifaceted approach & incorporating a blog can be a crucial aspect of that strategy. Here's a detailed breakdown of how to leverage a blog to enhance your online store's performance:

1. Mobile Optimization
Ensure your online store is mobile-friendly, as a significant portion of online shopping occurs on mobile devices. Optimize your website design and user experience for smartphones and tablets to maximize accessibility and conversion rates.

2. Search Engine Optimization
Implement SEO best practices to improve your website's visibility in search engine results. This includes optimizing product descriptions, meta tags & URLs as well as building quality backlinks & creating valuable content that aligns with relevant keywords.

3. Review & Testimonials
Display customer reviews and testimonials prominently on your website to build trust and credibility. Positive reviews can reassure potential buyers and encourage them to complete their purchase.

4. Social Media Marketing
Leverage social media platforms to promote your online store & engage with your target audience. Create compelling content, run targeted ad campaigns, and actively interact with followers to drive traffic and generate sales.`;
defaults.blog[0].slug = "optimizing-your-online-store";

writeFileSync(defaultsPath, JSON.stringify(defaults, null, 2) + "\n");

const dataDir = join(root, "public/data");
mkdirSync(dataDir, { recursive: true });
writeFileSync(join(dataDir, "site.json"), JSON.stringify(defaults, null, 2) + "\n");
console.log("Patched defaults.json and public/data/site.json");
