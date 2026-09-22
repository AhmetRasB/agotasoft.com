"use client";

import FadeInUp from "@/components/animation/FadeInUp";
import ProductModules from "@/components/product-pages/ProductModules";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

const FALLBACK_MODULES = [
	{ icon: "fas fa-file-invoice", title: "E-Fatura Entegrasyonu", description: "GİB entegrasyonu ile e-fatura oluşturma, gönderme ve alma işlemlerini otomatikleştirin.", bullets: ["GİB entegrasyonu", "Otomatik fatura oluşturma", "E-arşiv fatura", "Toplu fatura işlemleri"] },
	{ icon: "fas fa-address-book", title: "Cari Hesap Yönetimi", description: "Müşteri ve tedarikçi hesaplarınızı takip edin, borç-alacak durumlarını kontrol edin.", bullets: ["Cari kart yönetimi", "Borç-alacak takibi", "Vade analizleri", "Cari ekstre raporları"] },
	{ icon: "fas fa-receipt", title: "Gider Takibi", description: "Tüm giderlerinizi kategorize edin, takip edin ve gider analizleri yapın.", bullets: ["Gider kategorileri", "Fiş ve belge yönetimi", "Gider onay süreçleri", "Gider raporları"] },
	{ icon: "fas fa-university", title: "Banka Yönetimi", description: "Banka hesaplarınızı takip edin, nakit akışınızı kontrol edin ve banka mutabakatı yapın.", bullets: ["Çoklu banka hesabı", "Nakit akış takibi", "Banka mutabakatı", "Çek-senet yönetimi"] },
	{ icon: "fas fa-percentage", title: "Vergi Yönetimi", description: "KDV, stopaj ve diğer vergi hesaplamalarını otomatikleştirin, beyanname hazırlayın.", bullets: ["Otomatik vergi hesaplama", "KDV beyannamesi", "Stopaj hesaplamaları", "Vergi raporları"] },
	{ icon: "fas fa-chart-bar", title: "Finansal Raporlama", description: "Detaylı finansal raporlar, gelir-gider analizleri ve karlılık raporları.", bullets: ["Gelir-gider raporu", "Karlılık analizi", "Nakit akış raporu", "Özelleştirilebilir raporlar"] },
];

const FALLBACK_BENEFITS = [
	{ icon: "fas fa-clock", title: "%70 Daha Hızlı Faturalama", text: "E-Fatura entegrasyonu ile faturalama süreçlerinizi hızlandırın." },
	{ icon: "fas fa-shield-alt", title: "%100 Yasal Uyumluluk", text: "Türkiye'deki tüm yasal düzenlemelere tam uyumlu sistem." },
	{ icon: "fas fa-calculator", title: "Otomatik Hesaplamalar", text: "Vergi, KDV ve stopaj hesaplamalarını otomatik olarak yapın." },
];

const FALLBACK_PLANS = [
	{ title: "Başlangıç", icon: "fas fa-seedling", price: "₺299", period: "/ay", popular: false, features: ["5 Kullanıcıya kadar", "E-Fatura entegrasyonu", "Temel raporlar", "E-posta desteği"], button: "Başlayın" },
	{ title: "Profesyonel", icon: "fas fa-rocket", price: "₺599", period: "/ay", popular: true, features: ["15 Kullanıcıya kadar", "Tüm modüller", "Gelişmiş raporlar", "Telefon desteği", "Entegrasyon desteği"], button: "Başlayın" },
];

export default function PreAccountingContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.["pre-accounting"] || {};
	const modules = page.modules?.length ? page.modules : FALLBACK_MODULES;
	const benefits = page.benefits?.length ? page.benefits : FALLBACK_BENEFITS;
	const plans = page.local_plans?.length ? page.local_plans : FALLBACK_PLANS;

	return (
		<>
			<div className="section sofax-section-padding sofax-hero">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-content">
									<h1 className="sofax-hero-title">
										{page.hero_title || "AgotaSoft Ön Muhasebe: Finansal Kontrol Tamamen Sizin Elinizde"}
									</h1>
									<p className="sofax-hero-subtitle">
										{page.hero_subtitle ||
											"E-Fatura entegrasyonu, cari hesap yönetimi, gider takibi ve finansal raporlama ile KOBİ'lerin finansal süreçlerini kolaylaştıran kapsamlı ön muhasebe çözümü."}
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
										<img src={page.hero_image} alt={page.hero_card_title || "AgotaSoft Ön Muhasebe"} className="img-fluid rounded" />
									) : (
										<div className="text-center p-5 bg-light rounded">
											<div className="sofax-feature-icon mx-auto mb-3" style={{ width: "120px", height: "120px", fontSize: "48px" }}>
												<i className="fas fa-calculator"></i>
											</div>
											<h4>{page.hero_card_title || "AgotaSoft Ön Muhasebe"}</h4>
											<p>{page.hero_card_text || "Finansal Kontrol Sistemi"}</p>
										</div>
									)}
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<ProductModules
				title={page.modules_title || "Ön Muhasebe Modülleri ve Özellikleri"}
				subtitle={page.modules_subtitle || "KOBİ'ler için özel tasarlanmış finansal yönetim araçları"}
				modules={modules}
				cardClass="sofax-solution-accounting"
			/>

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-default-content">
									<h2>{page.benefits_title || "KOBİ'ler İçin Özel Tasarlandı"}</h2>
									<p>
										{page.benefits_text ||
											"AgotaSoft Ön Muhasebe, küçük ve orta ölçekli işletmelerin finansal süreçlerini kolaylaştırmak için özel olarak tasarlanmıştır."}
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
									<div className="text-center p-5 bg-success text-white rounded">
										<div className="mb-4">
											<i className="fas fa-file-invoice-dollar" style={{ fontSize: "64px", opacity: "0.8" }}></i>
										</div>
										<h4>{page.panel_title || "Finansal Raporlama"}</h4>
										<p>{page.panel_text || "Detaylı mali raporlar ve analiz araçları"}</p>
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
									<h2>{page.local_pricing_title || "Uygun Fiyatlarla Başlayın"}</h2>
									<p>{page.local_pricing_subtitle || "KOBİ'ler için özel fiyatlandırma paketleri"}</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					<div className="row justify-content-center">
						{plans.map((plan) => (
							<div className="col-lg-4 col-md-6" key={plan.title}>
								<FadeInUp>
									<div
										className={`sofax-product-card text-center ${plan.popular ? "border-success" : ""}`}
										style={plan.popular ? { transform: "scale(1.05)" } : {}}
									>
										{plan.popular ? (
											<div className="sofax-badge-success position-absolute" style={{ top: "20px", right: "20px" }}>
												Popüler
											</div>
										) : null}
										<div className="sofax-product-icon">
											<i className={plan.icon}></i>
										</div>
										<h3 className="sofax-product-title">{plan.title}</h3>
										<div className="mb-4">
											<span className="h2 text-success">{plan.price}</span>
											<span className="text-muted">{plan.period}</span>
										</div>
										<ul className="list-unstyled mb-4">
											{(plan.features || []).map((feature) => (
												<li className="mb-2" key={feature}>
													<i className="fas fa-check text-success me-2"></i>
													{feature}
												</li>
											))}
										</ul>
										<a href={withLocale("/contact-us", prefix)} className={plan.popular ? "sofax-btn-primary w-100" : "sofax-btn-accent w-100"}>
											{plan.button || "Başlayın"}
										</a>
									</div>
								</FadeInUp>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center">
									<h2 className="mb-4">{page.cta_title || "Finansal Kontrolünüzü Elinize Alın"}</h2>
									<p className="mb-5 fs-5">
										{page.cta_text ||
											"30 günlük ücretsiz deneme ile Sofax Ön Muhasebe'nin gücünü keşfedin. Kurulum ve eğitim desteği dahil."}
									</p>
									<div className="d-flex justify-content-center gap-4 flex-wrap">
										<a href={withLocale("/contact-us", prefix)} className="sofax-btn-primary">
											{page.cta_button || "Ücretsiz Demo Talep Edin"}
										</a>
										<a href={page.cta_phone_url || "tel:+908001234567"} className="sofax-btn-secondary">
											<i className="fas fa-phone me-2"></i>
											{page.cta_phone || "Hemen Arayın"}
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
