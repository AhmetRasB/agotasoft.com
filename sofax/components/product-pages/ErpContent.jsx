"use client";

import FadeInUp from "@/components/animation/FadeInUp";
import ProductModules from "@/components/product-pages/ProductModules";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

const FALLBACK_MODULES = [
	{ icon: "fas fa-boxes", title: "Stok Yönetimi", description: "Gerçek zamanlı stok takibi, otomatik yeniden sipariş, depo yönetimi ve stok hareketlerinin detaylı raporlanması.", bullets: ["Gerçek zamanlı stok takibi", "Otomatik yeniden sipariş", "Çoklu depo yönetimi", "Barkod entegrasyonu"] },
	{ icon: "fas fa-chart-line", title: "Finans Yönetimi", description: "Muhasebe, bütçe planlama, nakit akış yönetimi ve detaylı finansal raporlama özellikleri.", bullets: ["Genel muhasebe", "Bütçe ve planlama", "Nakit akış takibi", "Finansal raporlar"] },
	{ icon: "fas fa-industry", title: "Üretim Planlaması", description: "Üretim planlaması, kapasite yönetimi, kalite kontrol ve üretim maliyeti analizi.", bullets: ["Üretim planlaması", "Kapasite yönetimi", "Kalite kontrol", "Maliyet analizi"] },
	{ icon: "fas fa-shopping-cart", title: "Satın Alma Yönetimi", description: "Tedarikçi yönetimi, satın alma süreçleri, teklif alma ve satın alma performans analizi.", bullets: ["Tedarikçi yönetimi", "Teklif alma süreci", "Satın alma onay akışı", "Performans analizi"] },
	{ icon: "fas fa-users", title: "İnsan Kaynakları", description: "Personel yönetimi, bordro, izin takibi ve performans değerlendirme sistemi.", bullets: ["Personel dosyaları", "Bordro yönetimi", "İzin ve mesai takibi", "Performans değerlendirme"] },
	{ icon: "fas fa-chart-pie", title: "Raporlama & Analiz", description: "Kapsamlı raporlama, iş zekası, dashboard'lar ve karar destek sistemleri.", bullets: ["Gerçek zamanlı dashboard", "Özelleştirilebilir raporlar", "İş zekası araçları", "KPI takibi"] },
];

const FALLBACK_BENEFITS = [
	{ icon: "fas fa-rocket", title: "%40 Daha Hızlı Süreçler", text: "Otomatik iş akışları ve entegre sistemlerle süreç sürelerinizi kısaltın." },
	{ icon: "fas fa-shield-alt", title: "Yüksek Güvenlik", text: "256-bit SSL şifreleme ve çoklu yetkilendirme ile verileriniz güvende." },
	{ icon: "fas fa-cloud", title: "Bulut Tabanlı", text: "Her yerden erişim, otomatik yedekleme ve güncellemeler." },
];

const FALLBACK_STATS = [
	{ number: "%60", label: "Zaman Tasarrufu" },
	{ number: "%45", label: "Maliyet Azalması" },
	{ number: "%80", label: "Verimlilik Artışı" },
	{ number: "%90", label: "Müşteri Memnuniyeti" },
];

export default function ErpContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.erp || {};
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
										{page.hero_title || "AgotaSoft ERP: Üretimden Finansa Tüm Süreçleriniz Tek Platformda"}
									</h1>
									<p className="sofax-hero-subtitle">
										{page.hero_subtitle ||
											"Stok yönetimi, finans, üretim planlaması, satın alma ve insan kaynakları süreçlerinizi entegre bir sistemle yönetin. Verimliliği artırın, maliyetleri düşürün ve büyümenizi hızlandırın."}
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
										src={page.hero_image || "/images/about/DashboardTR.png"}
										alt="AgotaSoft ERP Dashboard"
										className="img-fluid rounded"
									/>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<ProductModules
				title={page.modules_title || "ERP Modülleri ve Özellikleri"}
				subtitle={page.modules_subtitle || "İşletmenizin tüm süreçlerini kapsayan kapsamlı ERP çözümü"}
				modules={modules}
				cardClass="sofax-solution-erp"
			/>

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-default-content">
									<h2>{page.benefits_title || "Neden AgotaSoft ERP?"}</h2>
									<p>
										{page.benefits_text ||
											"AgotaSoft ERP, işletmenizin tüm süreçlerini entegre ederek operasyonel verimliliği artırır ve büyümenizi destekler."}
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
									<img
										src={page.hero_image || "/images/about/DashboardTR.png"}
										alt="AgotaSoft ERP Dashboard"
										className="img-fluid"
									/>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-thumb">
									<img
										src={page.showcase_image || "/images/about/Benefits.png"}
										alt="AgotaSoft ERP Faydaları"
										className="img-fluid rounded"
									/>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-default-content">
									<h2>{page.showcase_title || "ERP Sistemi ile Elde Edeceğiniz Faydalar"}</h2>
									<p className="lead">
										{page.showcase_text ||
											"AgotaSoft ERP ile işletmenizin tüm süreçlerini optimize edin ve rekabette öne geçin."}
									</p>
									<div className="row mt-4">
										{stats.map((stat) => (
											<div className="col-6" key={stat.label}>
												<div className="text-center mb-4">
													<div className="sofax-stat-number h3 text-success">{stat.number}</div>
													<p className="sofax-stat-label">{stat.label}</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center">
									<h2 className="mb-4">{page.cta_title || "ERP Sisteminizi Bugün Kurmaya Başlayın"}</h2>
									<p className="mb-5 fs-5">
										{page.cta_text ||
											"30 günlük ücretsiz deneme ile AgotaSoft ERP'nin gücünü keşfedin. Kurulum ve eğitim desteği dahil."}
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
