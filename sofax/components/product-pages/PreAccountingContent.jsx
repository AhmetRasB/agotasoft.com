"use client";

import ProductModules from "@/components/product-pages/ProductModules";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

export default function PreAccountingContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.["pre-accounting"] || {};
	const plans = page.local_plans || [];

	return (
		<>
			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-split">
						<div>
							<p className="agf-lede">{page.hero_subtitle}</p>
							<div className="agf-hero-actions" style={{ justifyContent: "flex-start" }}>
								<a href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary">
									{page.cta_primary || "Ücretsiz Demo"}
								</a>
								<a href="#features" className="agf-btn agf-btn--ghost">
									{page.cta_secondary || "Özellikleri İncele"}
								</a>
							</div>
						</div>
						<div>
							{page.hero_image ? (
								<div className="agf-browser-frame" style={{ margin: 0 }}>
									<div className="agf-browser-bar">
										<span className="agf-browser-dot"></span>
										<span className="agf-browser-dot"></span>
										<span className="agf-browser-dot"></span>
									</div>
									<img src={page.hero_image} alt={page.hero_card_title || "AgotaSoft Ön Muhasebe"} />
								</div>
							) : (
								<div className="agf-card agf-center" style={{ padding: 48 }}>
									<div className="agf-card-icon" style={{ margin: "0 auto 16px", width: 56, height: 56, fontSize: 24 }}>
										<i className="fas fa-calculator"></i>
									</div>
									<h3>{page.hero_card_title || "AgotaSoft Ön Muhasebe"}</h3>
									<p>{page.hero_card_text}</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			<ProductModules title={page.modules_title} subtitle={page.modules_subtitle} modules={page.modules} numberLabel="01" sectionLabel="MODÜLLER" />

			<section className="agf-section">
				<div className="agf-container">
					<div className="agf-platform-head">
						<h2 className="agf-headline agf-h2">{page.benefits_title}</h2>
						<p className="agf-lede" style={{ margin: "12px auto 0" }}>
							{page.benefits_text}
						</p>
					</div>
					<div className="agf-grid agf-grid--3">
						{(page.benefits || []).map((b) => (
							<div className="agf-card agf-center" key={b.title}>
								<div className="agf-card-icon" style={{ margin: "0 auto 16px" }}>
									<i className={b.icon}></i>
								</div>
								<h3>{b.title}</h3>
								<p>{b.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{plans.length ? (
				<section className="agf-section--tight" style={{ background: "var(--bg-soft)" }}>
					<div className="agf-container">
						<div className="agf-platform-head">
							<h2 className="agf-headline agf-h2">{page.local_pricing_title}</h2>
							<p className="agf-lede" style={{ margin: "12px auto 0" }}>
								{page.local_pricing_subtitle}
							</p>
						</div>
						<div className="agf-grid agf-grid--2" style={{ maxWidth: 720, margin: "0 auto" }}>
							{plans.map((plan) => (
								<div className={`agf-price-card ${plan.popular ? "agf-price-card--popular" : ""}`} key={plan.title}>
									{plan.popular ? <span className="agf-price-badge">Popüler</span> : null}
									<div className="agf-card-icon">
										<i className={plan.icon}></i>
									</div>
									<h3>{plan.title}</h3>
									<p className="agf-small">
										<strong style={{ color: "var(--ink)", fontSize: 22 }}>{plan.price}</strong> {plan.period}
									</p>
									<ul>
										{(plan.features || []).map((f) => (
											<li key={f}>{f}</li>
										))}
									</ul>
									<a href={withLocale("/contact-us", prefix)} className={`agf-btn ${plan.popular ? "agf-btn--primary" : "agf-btn--ghost"}`}>
										{plan.button || "Başlayın"}
									</a>
								</div>
							))}
						</div>
					</div>
				</section>
			) : null}

			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-cta-banner">
						<h2 className="agf-headline agf-h2">{page.cta_title}</h2>
						<p>{page.cta_text}</p>
						<div className="agf-hero-actions">
							<a href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary">
								{page.cta_button || "Ücretsiz Demo Talep Edin"}
							</a>
							<a href={page.cta_phone_url || "tel:+908001234567"} className="agf-btn agf-btn--ghost" style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}>
								<i className="fas fa-phone"></i> {page.cta_phone || "Hemen Arayın"}
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
