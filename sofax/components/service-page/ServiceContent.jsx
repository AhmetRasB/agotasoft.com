"use client";

import FadeInUp from "@/components/animation/FadeInUp";
import AutoSlider from "@/components/common/auto-slider";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import { itemPath } from "@/lib/cms/itemSlug";

const FALLBACK_WHY = [
	{ icon: "fas fa-rocket", title: "Hızlı Implementasyon", text: "2-4 hafta içinde sisteminizi devreye alıyoruz." },
	{ icon: "fas fa-headset", title: "7/24 Destek", text: "Kesintisiz teknik destek ve müşteri hizmetleri." },
	{ icon: "fas fa-shield-alt", title: "Yüksek Güvenlik", text: "ISO 27001 sertifikalı güvenlik standartları." },
	{ icon: "fas fa-cog", title: "Özelleştirme", text: "İşletmenizin ihtiyaçlarına özel çözümler." },
];

const DETAILS_LABEL = { tr: "Detaylı Bilgi", en: "Learn More", ru: "Подробнее", uz: "Batafsil ma'lumot", tk: "Giňişleýin maglumat" };
const VISIT_LABEL = { tr: "Siteyi Ziyaret Et", en: "Visit Site", ru: "Перейти на сайт", uz: "Saytga o'ting", tk: "Sahypa git" };

export default function ServiceContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const locale = prefix ? prefix.slice(1) : "tr";
	const page = cms.pages?.service || {};
	const services = cms.services || [];
	const whyItems = page.why_items?.length ? page.why_items : FALLBACK_WHY;

	return (
		<>
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center mb-5">
									<h1>{page.hero_title || "İşletmenizi Güçlendiren Yazılım Çözümleri"}</h1>
									<p className="lead">
										{page.hero_subtitle ||
											"ERP, CRM, Ön Muhasebe ve LMS alanlarında uzman ekibimizle işletmenizin tüm ihtiyaçlarına yanıt veriyoruz."}
									</p>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row g-4">
						{services.map((item) => (
							<div className="col-lg-6" key={item.title}>
								<FadeInUp>
									<div className={`sofax-product-card ${item.page_class || item.category || ""} h-100`}>
										<div className="sofax-product-icon sofax-solution-icon">
											<i className={item.fa_icon || "fas fa-cogs"}></i>
										</div>
										<h3 className="sofax-product-title">{item.title}</h3>
										<p className="sofax-product-description">{item.long_description || item.description}</p>
										<ul className="list-unstyled mb-4">
											{(item.bullets || []).map((bullet) => (
												<li className="mb-2" key={bullet}>
													<i className="fas fa-check text-success me-2"></i>
													{bullet}
												</li>
											))}
										</ul>
										<a
											href={
												item.external
													? item.link
													: withLocale(
															item.link && !String(item.link).includes("single-") ? item.link : itemPath("service", item),
															prefix,
														)
											}
											className="sofax-btn-primary"
											{...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
										>
											{item.external ? VISIT_LABEL[locale] || VISIT_LABEL.tr : DETAILS_LABEL[locale] || DETAILS_LABEL.tr}
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
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-default-content">
									<h2>{page.why_title || "Neden AgotaSoft Çözümlerini Seçmelisiniz?"}</h2>
									<p>
										{page.why_text ||
											"15 yıllık sektör deneyimi, uzman ekip ve müşteri odaklı yaklaşımımızla işletmenizin dijital dönüşümünde güvenilir ortağınızız."}
									</p>
									<div className="row mt-4">
										{whyItems.map((item) => (
											<div className="col-md-6" key={item.title}>
												<div className="sofax-feature-item mb-4">
													<div className="sofax-feature-icon me-3" style={{ width: "50px", height: "50px", fontSize: "20px" }}>
														<i className={item.icon}></i>
													</div>
													<div>
														<h6>{item.title}</h6>
														<p className="small">{item.text}</p>
													</div>
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
									<img src="/images/about/DashboardTR.png" alt="AgotaSoft Çözümleri" className="img-fluid" />
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<AutoSlider />

			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center">
									<h2 className="mb-4">{page.cta_title || "Hangi Çözüm İşletmenize Uygun?"}</h2>
									<p className="mb-5 fs-5">
										{page.cta_text ||
											"Uzman danışmanlarımızla görüşerek işletmenizin ihtiyaçlarına en uygun çözümü belirleyin."}
									</p>
									<div className="d-flex justify-content-center gap-4 flex-wrap">
										<a href={withLocale("/contact-us", prefix)} className="sofax-btn-primary">
											{page.cta_primary || "Ücretsiz Danışmanlık"}
										</a>
										<a href={withLocale("/pricing", prefix)} className="sofax-btn-secondary">
											{page.cta_secondary || "Fiyatları İncele"}
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
