"use client";

import FadeInUp from "@/components/animation/FadeInUp";
import ProductModules from "@/components/product-pages/ProductModules";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

const FALLBACK_MODULES = [
	{ icon: "fas fa-chalkboard-teacher", title: "Ders Yönetimi", description: "Interaktif ders içerikleri oluşturun, video dersler ekleyin ve öğrenme materyallerini organize edin.", bullets: ["Video ders yükleme", "İnteraktif içerikler", "Ders programlama", "Materyal kütüphanesi"] },
	{ icon: "fas fa-clipboard-check", title: "Online Sınav Sistemi", description: "Çoktan seçmeli, açık uçlu ve karma sorularla online sınavlar oluşturun ve otomatik değerlendirin.", bullets: ["Çoklu soru türleri", "Otomatik değerlendirme", "Zamanlı sınavlar", "Soru bankası"] },
	{ icon: "fas fa-chart-line", title: "Performans Takibi", description: "Öğrenci ilerlemelerini takip edin, performans raporları oluşturun ve gelişim alanlarını belirleyin.", bullets: ["İlerleme takibi", "Performans raporları", "Başarı analitics", "Karşılaştırmalı analiz"] },
	{ icon: "fas fa-certificate", title: "Sertifika Yönetimi", description: "Otomatik sertifika oluşturma, dijital rozet sistemi ve başarı belgelerini yönetin.", bullets: ["Otomatik sertifika", "Dijital rozetler", "Özelleştirilebilir tasarım", "Sertifika doğrulama"] },
	{ icon: "fas fa-users-cog", title: "Kullanıcı Yönetimi", description: "Rol tabanlı erişim, grup yönetimi ve kullanıcı hesaplarını merkezi olarak yönetin.", bullets: ["Rol tabanlı erişim", "Grup yönetimi", "Toplu kullanıcı ekleme", "Aktif Dizin entegrasyonu"] },
	{ icon: "fas fa-comments", title: "İletişim Araçları", description: "Forum, mesajlaşma, canlı sohbet ve video konferans araçları ile etkileşimi artırın.", bullets: ["Tartışma forumları", "Anlık mesajlaşma", "Video konferans", "Bildirim sistemi"] },
];

const FALLBACK_BENEFITS = [
	{ icon: "fas fa-graduation-cap", title: "%80 Daha Etkili Öğrenme", text: "İnteraktif içerikler ve gamification ile öğrenme verimliliğini artırın." },
	{ icon: "fas fa-clock", title: "%60 Zaman Tasarrufu", text: "Otomatik değerlendirme ve raporlama ile eğitim yönetiminde zaman kazanın." },
	{ icon: "fas fa-mobile-alt", title: "Her Yerden Erişim", text: "Mobil uyumlu tasarım ile çalışanlar her yerden eğitimlere erişebilir." },
];

const FALLBACK_USECASES = [
	{ icon: "fas fa-building", title: "Kurumsal Eğitim", text: "Çalışan oryantasyonu, beceri geliştirme ve sürekli eğitim programları." },
	{ icon: "fas fa-user-tie", title: "Satış Eğitimi", text: "Ürün bilgisi, satış teknikleri ve müşteri hizmetleri eğitimleri." },
	{ icon: "fas fa-shield-alt", title: "Uyumluluk Eğitimi", text: "İş güvenliği, KVKK, kalite yönetimi ve yasal uyumluluk eğitimleri." },
	{ icon: "fas fa-laptop-code", title: "Teknik Eğitim", text: "Yazılım eğitimleri, teknik beceri geliştirme ve sertifikasyon programları." },
];

const FALLBACK_STATS = [
	{ number: "50K+", label: "Aktif Öğrenci" },
	{ number: "1000+", label: "Tamamlanan Kurs" },
	{ number: "95%", label: "Başarı Oranı" },
	{ number: "500+", label: "Kurumsal Müşteri" },
];

export default function LmsContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.lms || {};
	const modules = page.modules?.length ? page.modules : FALLBACK_MODULES;
	const benefits = page.benefits?.length ? page.benefits : FALLBACK_BENEFITS;
	const usecases = page.usecases?.length ? page.usecases : FALLBACK_USECASES;
	const stats = page.stats?.length ? page.stats : FALLBACK_STATS;

	return (
		<>
			<div className="section sofax-section-padding sofax-hero">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-content">
									<h1 className="sofax-hero-title">
										{page.hero_title || "AgotaSoft LMS: Kurumsal Eğitim ve Gelişim Platformunuz"}
									</h1>
									<p className="sofax-hero-subtitle">
										{page.hero_subtitle ||
											"Ders yönetimi, online sınav sistemi, performans raporlama ve sertifika yönetimi ile çalışanlarınızın gelişimini destekleyin. Kurumsal eğitim süreçlerinizi dijitalleştirin."}
									</p>
									<div className="sofax-hero-buttons d-flex gap-4 mt-4">
										<a href={withLocale("/contact-us", prefix)} className="sofax-btn-primary">
											{page.cta_primary || "Ücretsiz Demo"}
										</a>
										<a href="#features" className="sofax-btn-secondary">
											{page.cta_secondary || "Özellikleri İncele"}
										</a>
									</div>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-thumb">
									{page.hero_image ? (
										<img src={page.hero_image} alt={page.hero_card_title || "AgotaSoft LMS"} className="img-fluid rounded" />
									) : (
										<div className="text-center p-5 bg-light rounded">
											<div className="sofax-feature-icon mx-auto mb-3" style={{ width: "120px", height: "120px", fontSize: "48px" }}>
												<i className="fas fa-graduation-cap"></i>
											</div>
											<h4>{page.hero_card_title || "AgotaSoft LMS"}</h4>
											<p>{page.hero_card_text || "Kurumsal Eğitim Platformu"}</p>
										</div>
									)}
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<ProductModules
				title={page.modules_title || "LMS Modülleri ve Özellikleri"}
				subtitle={page.modules_subtitle || "Kurumsal eğitim ve gelişim için ihtiyacınız olan tüm araçlar"}
				modules={modules}
				cardClass="sofax-solution-lms"
			/>

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-default-content">
									<h2>{page.benefits_title || "Kurumsal Eğitimde Yeni Dönem"}</h2>
									<p>
										{page.benefits_text ||
											"AgotaSoft LMS ile çalışanlarınızın gelişimini destekleyin, eğitim süreçlerinizi optimize edin ve kurumsal bilgiyi paylaşın."}
									</p>
									<div className="mt-4">
										{benefits.map((item) => (
											<div className="d-flex align-items-start mb-4" key={item.title}>
												<div className="sofax-feature-icon me-4" style={{ width: "60px", height: "60px", fontSize: "24px" }}>
													<i className={item.icon}></i>
												</div>
												<div>
													<h5>{item.title}</h5>
													<p>{item.text}</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-thumb">
									<div className="text-center p-5 bg-primary text-white rounded">
										<div className="mb-4">
											<i className="fas fa-chart-bar" style={{ fontSize: "64px", opacity: "0.8" }}></i>
										</div>
										<h4>{page.panel_title || "LMS Performans Analizi"}</h4>
										<p>{page.panel_text || "Eğitim süreçlerinizi analiz edin ve optimize edin"}</p>
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2>{page.usecases_title || "Kullanım Alanları"}</h2>
									<p>{page.usecases_subtitle || "AgotaSoft LMS'in farklı sektörlerdeki uygulama alanları"}</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					<div className="row g-4">
						{usecases.map((item) => (
							<div className="col-lg-3 col-md-6" key={item.title}>
								<FadeInUp>
									<div className="text-center p-4">
										<div className="sofax-feature-icon mx-auto mb-3" style={{ width: "80px", height: "80px", fontSize: "32px" }}>
											<i className={item.icon}></i>
										</div>
										<h5>{item.title}</h5>
										<p>{item.text}</p>
									</div>
								</FadeInUp>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="sofax-stats">
				<div className="container">
					<div className="row">
						{stats.map((stat) => (
							<div className="col-lg-3 col-md-6" key={stat.label}>
								<FadeInUp>
									<div className="sofax-stat-item">
										<span className="sofax-stat-number">{stat.number}</span>
										<p className="sofax-stat-label">{stat.label}</p>
									</div>
								</FadeInUp>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center">
									<h2 className="mb-4">{page.cta_title || "Kurumsal Eğitim Dönüşümünüzü Başlatın"}</h2>
									<p className="mb-5 fs-5">
										{page.cta_text ||
											"30 günlük ücretsiz deneme ile AgotaSoft LMS'in gücünü keşfedin. Kurulum, içerik yükleme ve eğitim desteği dahil."}
									</p>
									<div className="d-flex justify-content-center gap-4 flex-wrap">
										<a href={withLocale("/contact-us", prefix)} className="sofax-btn-primary">
											{page.cta_button || "Ücretsiz Demo Talep Edin"}
										</a>
										<a href={withLocale("/pricing", prefix)} className="sofax-btn-secondary">
											{page.cta_pricing || "Fiyatları İncele"}
										</a>
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
