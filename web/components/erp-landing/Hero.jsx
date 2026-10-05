"use client";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import ResponsiveImage from "@/components/common/ResponsiveImage";

export default function Hero() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const hero = cms.hero || {};
	const heroImage = cms.pages?.erp?.hero_image || "/images/about/DashboardTR.png";

	return (
		<section className="agf-hero">
			<div className="agf-container">
				<div className="agf-hero-badge">
					<i className="fas fa-wand-magic-sparkles" aria-hidden="true"></i> {hero.rating_text || "AI destekli, KOBİ'ler için tasarlandı"}
				</div>
				<h1 className="agf-headline agf-h1">{hero.title}</h1>
				<p className="agf-hero-lede">{hero.subtitle}</p>
				<div className="agf-hero-actions">
					<a className="agf-btn agf-btn--primary" href={withLocale(hero.cta_primary_url || "/contact-us", prefix)}>
						{hero.cta_primary || "Demo Talep Edin"}
					</a>
					<a className="agf-btn agf-btn--ghost" href={withLocale(hero.cta_secondary_url || "/erp", prefix)}>
						{hero.cta_secondary || "Modülleri İncele"}
					</a>
				</div>
			</div>
			<div className="agf-container">
				<div className="agf-browser-frame">
					<div className="agf-browser-bar">
						<span className="agf-browser-dot"></span>
						<span className="agf-browser-dot"></span>
						<span className="agf-browser-dot"></span>
					</div>
					<ResponsiveImage src={heroImage} alt="AgotaSoft ERP Dashboard" priority sizes="(max-width: 1240px) calc(100vw - 32px), 1180px" />
				</div>
			</div>
		</section>
	);
}
