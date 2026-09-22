"use client";

import FadeInUp from "@/components/animation/FadeInUp";
import ProductModules from "@/components/product-pages/ProductModules";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

const FALLBACK_MODULES = [
	{ icon: "fas fa-database", title: "Müşteri Veritabanı", description: "Tüm müşteri bilgilerinizi merkezi bir veritabanında organize edin. Detaylı müşteri profilleri ve etkileşim geçmişi.", bullets: ["360° müşteri görünümü", "İletişim geçmişi", "Müşteri segmentasyonu", "Özel alanlar"] },
	{ icon: "fas fa-handshake", title: "Satış Yönetimi", description: "Satış süreçlerinizi optimize edin, fırsatları takip edin ve satış performansınızı artırın.", bullets: ["Satış hunisi yönetimi", "Fırsat takibi", "Teklif yönetimi", "Satış raporları"] },
	{ icon: "fas fa-bullhorn", title: "Pazarlama Otomasyonu", description: "E-posta kampanyaları, lead nurturing ve pazarlama süreçlerinizi otomatikleştirin.", bullets: ["E-posta kampanyaları", "Lead scoring", "Otomatik iş akışları", "Kampanya analizi"] },
	{ icon: "fas fa-headset", title: "Müşteri Hizmetleri", description: "Destek talepleri, ticket yönetimi ve müşteri memnuniyeti takibi.", bullets: ["Ticket yönetimi", "Canlı destek", "Bilgi bankası", "Memnuniyet anketleri"] },
	{ icon: "fas fa-chart-line", title: "Analiz & Raporlama", description: "Satış performansı, müşteri davranışları ve pazarlama ROI analizi.", bullets: ["Satış dashboard'u", "Performans raporları", "Müşteri analizi", "ROI hesaplama"] },
	{ icon: "fas fa-mobile-alt", title: "Mobil Erişim", description: "iOS ve Android uygulamaları ile her yerden CRM sisteminize erişim.", bullets: ["Mobil uygulama", "Offline çalışma", "Push bildirimleri", "Senkronizasyon"] },
];

const FALLBACK_BENEFITS = [
	{ icon: "fas fa-chart-line", title: "%35 Daha Fazla Satış", text: "Etkili lead yönetimi ve satış süreç optimizasyonu ile satışlarınızı artırın." },
	{ icon: "fas fa-heart", title: "%50 Daha Yüksek Müşteri Memnuniyeti", text: "Kişiselleştirilmiş hizmet ve hızlı yanıt süreleri ile müşteri memnuniyetini artırın." },
	{ icon: "fas fa-clock", title: "%60 Zaman Tasarrufu", text: "Otomatik süreçler ve entegre sistem ile zaman tasarrufu sağlayın." },
];

const FALLBACK_STATS = [
	{ number: "98%", label: "Müşteri Memnuniyeti" },
	{ number: "35%", label: "Satış Artışı" },
	{ number: "60%", label: "Zaman Tasarrufu" },
	{ number: "10K+", label: "Mutlu Kullanıcı" },
];

export default function CrmContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.crm || {};
	const modules = page.modules?.length ? page.modules : FALLBACK_MODULES;
	const benefits = page.benefits?.length ? page.benefits : FALLBACK_BENEFITS;
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
										{page.hero_title || "AgotaSoft CRM: Müşteri İlişkilerinizi Güçlendirin, Satışlarınızı Artırın"}
									</h1>
									<p className="sofax-hero-subtitle">
										{page.hero_subtitle ||
											"Kapsamlı müşteri veritabanı, satış fırsatı takibi, pazarlama otomasyonu ve müşteri hizmetleri ile işletmenizin büyümesini hızlandırın. Müşteri memnuniyetini artırın, satış performansınızı optimize edin."}
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
									<img
										src={page.hero_image || "/images/CRM.png"}
										alt="AgotaSoft CRM Dashboard"
										className="img-fluid rounded"
									/>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<ProductModules
				title={page.modules_title || "CRM Modülleri ve Özellikleri"}
				subtitle={page.modules_subtitle || "Müşteri ilişkilerinizi yönetmek için ihtiyacınız olan tüm araçlar"}
				modules={modules}
				cardClass="sofax-solution-crm"
			/>

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<FadeInUp>
								<div className="sofax-default-content text-center">
									<h2>{page.benefits_title || "CRM ile İşletmenizde Fark Yaratın"}</h2>
									<p className="lead mb-5">
										{page.benefits_text ||
											"AgotaSoft CRM ile müşteri ilişkilerinizi güçlendirin, satış süreçlerinizi optimize edin ve büyümenizi hızlandırın."}
									</p>
								</div>
							</FadeInUp>
							<div className="row g-4 mt-4">
								{benefits.map((item) => (
									<div className="col-lg-4" key={item.title}>
										<FadeInUp>
											<div className="text-center">
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
									<h2 className="mb-4">{page.cta_title || "CRM Dönüşümünüzü Bugün Başlatın"}</h2>
									<p className="mb-5 fs-5">
										{page.cta_text ||
											"14 günlük ücretsiz deneme ile AgotaSoft CRM'in gücünü keşfedin. Kurulum ve eğitim desteği dahil."}
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
