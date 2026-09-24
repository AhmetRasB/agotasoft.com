"use client";

import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import { itemPath } from "@/lib/cms/itemSlug";

const DETAILS_LABEL = { tr: "Detaylı Bilgi", en: "Learn More", ru: "Подробнее", uz: "Batafsil ma'lumot", tk: "Giňişleýin maglumat" };
const VISIT_LABEL = { tr: "Siteyi Ziyaret Et", en: "Visit Site", ru: "Перейти на сайт", uz: "Saytga o'ting", tk: "Sahypa git" };

export default function ServiceContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const locale = prefix ? prefix.slice(1) : "tr";
	const page = cms.pages?.service || {};
	const services = cms.services || [];
	const whyItems = page.why_items || [];

	return (
		<>
			<section className="agf-section--tight">
				<div className="agf-container agf-center">
					<p className="agf-lede" style={{ margin: "0 auto" }}>
						{page.hero_subtitle}
					</p>
				</div>
			</section>

			<section className="agf-section--tight" style={{ paddingTop: 0 }}>
				<div className="agf-container">
					<div className="agf-grid agf-grid--2">
						{services.map((item) => {
							const isExternal = item.external || /^https?:/.test(item.link || "");
							const href = isExternal
								? item.link
								: withLocale(item.link && !String(item.link).includes("single-") ? item.link : itemPath("service", item), prefix);
							return (
								<div className="agf-card" key={item.title}>
									<div className="agf-card-icon">
										<i className={item.fa_icon || "fas fa-cogs"}></i>
									</div>
									<h3>{item.title}</h3>
									<p>{item.long_description || item.description}</p>
									<ul style={{ marginBottom: 18 }}>
										{(item.bullets || []).map((bullet) => (
											<li key={bullet}>{bullet}</li>
										))}
									</ul>
									<a
										href={href}
										className="agf-btn agf-btn--ghost agf-btn--sm"
										{...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
									>
										{isExternal ? VISIT_LABEL[locale] || VISIT_LABEL.tr : DETAILS_LABEL[locale] || DETAILS_LABEL.tr}
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
				<div className="agf-container">
					<div className="agf-split">
						<div>
							<h2 className="agf-headline agf-h2" style={{ marginBottom: 12 }}>
								{page.why_title}
							</h2>
							<p className="agf-lede" style={{ marginBottom: 24 }}>
								{page.why_text}
							</p>
							{whyItems.map((item) => (
								<div className="agf-benefit-row" key={item.title}>
									<div className="agf-benefit-icon">
										<i className={item.icon}></i>
									</div>
									<div>
										<h4>{item.title}</h4>
										<p>{item.text}</p>
									</div>
								</div>
							))}
						</div>
						<div>
							<div className="agf-browser-frame" style={{ margin: 0 }}>
								<div className="agf-browser-bar">
									<span className="agf-browser-dot"></span>
									<span className="agf-browser-dot"></span>
									<span className="agf-browser-dot"></span>
								</div>
								<img src="/images/about/DashboardTR.png" alt="AgotaSoft Çözümleri" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-cta-banner">
						<h2 className="agf-headline agf-h2">{page.cta_title}</h2>
						<p>{page.cta_text}</p>
						<div className="agf-hero-actions">
							<a href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary">
								{page.cta_primary || "Ücretsiz Danışmanlık"}
							</a>
							<a
								href={withLocale("/pricing", prefix)}
								className="agf-btn agf-btn--ghost"
								style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}
							>
								{page.cta_secondary || "Fiyatları İncele"}
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
