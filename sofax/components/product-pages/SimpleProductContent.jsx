"use client";

import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import StructuredData, { softwareApplication } from "@/components/common/StructuredData";

const DEMO_LABEL = { tr: "Ücretsiz Demo", en: "Free Demo", ru: "Бесплатное демо", uz: "Bepul demo", tk: "Mugt demo" };
const FEATURES_LABEL = { tr: "Özellikleri İncele", en: "See Features", ru: "Возможности", uz: "Imkoniyatlar", tk: "Aýratynlyklar" };
const FEATURES_TITLE = { tr: "Özellikler", en: "Features", ru: "Возможности", uz: "Imkoniyatlar", tk: "Aýratynlyklar" };

export default function SimpleProductContent({ serviceId }) {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const locale = prefix ? prefix.slice(1) : "tr";
	const item = (cms.services || []).find((s) => s.id === serviceId) || {};
	const bullets = item.bullets || [];
	const servicePage = cms.pages?.service || {};

	return (
		<>
			<StructuredData
				data={softwareApplication({ name: item.title, description: item.description, path: item.link || "", prefix })}
			/>
			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-split">
						<div>
							<div className="agf-card-icon">
								<i className={item.fa_icon || "fas fa-cube"}></i>
							</div>
							<p className="agf-lede" style={{ margin: "16px 0 24px" }}>
								{item.long_description || item.description}
							</p>
							<div className="agf-hero-actions" style={{ justifyContent: "flex-start" }}>
								<a href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary">
									{DEMO_LABEL[locale] || DEMO_LABEL.tr}
								</a>
								<a href="#features" className="agf-btn agf-btn--ghost">
									{FEATURES_LABEL[locale] || FEATURES_LABEL.tr}
								</a>
							</div>
						</div>
						<div>
							{item.image ? (
								<div className="agf-browser-frame" style={{ margin: 0 }}>
									<div className="agf-browser-bar">
										<span className="agf-browser-dot"></span>
										<span className="agf-browser-dot"></span>
										<span className="agf-browser-dot"></span>
									</div>
									<ResponsiveImage src={item.image} alt={item.title} sizes="(max-width: 860px) calc(100vw - 32px), 560px" />
								</div>
							) : null}
						</div>
					</div>
				</div>
			</section>

			{bullets.length ? (
				<section className="agf-section" id="features" style={{ background: "var(--bg-soft)" }}>
					<div className="agf-container">
						<div className="agf-platform-head">
							<h2 className="agf-headline agf-h2">{FEATURES_TITLE[locale] || FEATURES_TITLE.tr}</h2>
						</div>
						<div className="agf-grid agf-grid--3">
							{bullets.map((bullet) => (
								<div className="agf-card" key={bullet}>
									<div className="agf-card-icon">
										<i className="fas fa-check"></i>
									</div>
									<h3>{bullet}</h3>
								</div>
							))}
						</div>
					</div>
				</section>
			) : null}

			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-cta-banner">
						<h2 className="agf-headline agf-h2">{servicePage.cta_title}</h2>
						<p>{servicePage.cta_text}</p>
						<div className="agf-hero-actions">
							<a href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary">
								{servicePage.cta_primary || DEMO_LABEL[locale] || DEMO_LABEL.tr}
							</a>
							<a
								href={withLocale("/service", prefix)}
								className="agf-btn agf-btn--ghost"
								style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}
							>
								{servicePage.cta_secondary}
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
