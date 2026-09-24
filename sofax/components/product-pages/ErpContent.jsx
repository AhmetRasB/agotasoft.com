"use client";

import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import PlatformSection from "@/components/erp-landing/PlatformSection";
import AiSection from "@/components/erp-landing/AiSection";
import StatsSection from "@/components/erp-landing/StatsSection";
import FinalCta from "@/components/erp-landing/FinalCta";

export default function ErpContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.erp || {};
	const benefits = page.benefits || [];

	return (
		<>
			<section className="agf-section--tight">
				<div className="agf-container">
					<p className="agf-lede" style={{ margin: "0 auto 24px", textAlign: "center", maxWidth: 680 }}>
						{page.hero_subtitle}
					</p>
					<div className="agf-hero-actions">
						<a className="agf-btn agf-btn--primary" href={withLocale("/contact-us", prefix)}>
							{page.cta_primary || "Ücretsiz Demo"}
						</a>
						<a className="agf-btn agf-btn--ghost" href="#platform">
							{page.cta_secondary || "Özellikleri İncele"}
						</a>
					</div>
				</div>
			</section>

			<PlatformSection />
			<StatsSection />
			<AiSection />

			<section className="agf-section">
				<div className="agf-container">
					<div className="agf-split">
						<div>
							<div className="agf-eyebrow">NEDEN AGOTASOFT ERP</div>
							<h2 className="agf-headline agf-h2" style={{ marginBottom: 16 }}>
								{page.benefits_title}
							</h2>
							<p className="agf-lede" style={{ marginBottom: 8 }}>
								{page.benefits_text}
							</p>
							<div style={{ marginTop: 24 }}>
								{benefits.map((b) => (
									<div className="agf-benefit-row" key={b.title}>
										<div className="agf-benefit-icon">
											<i className={b.icon}></i>
										</div>
										<div>
											<h4>{b.title}</h4>
											<p>{b.text}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div>
							<div className="agf-browser-frame">
								<div className="agf-browser-bar">
									<span className="agf-browser-dot"></span>
									<span className="agf-browser-dot"></span>
									<span className="agf-browser-dot"></span>
								</div>
								<img src={page.showcase_image || "/images/about/Benefits.png"} alt={page.showcase_title || "AgotaSoft ERP"} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<FinalCta />
		</>
	);
}
