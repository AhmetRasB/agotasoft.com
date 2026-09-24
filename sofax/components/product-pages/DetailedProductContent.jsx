"use client";

import ProductModules from "@/components/product-pages/ProductModules";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

export default function DetailedProductContent({ pageKey, fallbackIcon = "fas fa-cube" }) {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.[pageKey] || {};
	const facts = page.facts || [];
	const steps = page.steps || [];
	const benefits = page.benefits || [];

	return (
		<>
			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-split">
						<div>
							{page.badge ? (
								<span className="agf-hero-badge">
									<span className="agf-status-dot"></span>
									{page.badge}
								</span>
							) : null}
							<p className="agf-lede" style={{ margin: "0 0 28px" }}>
								{page.hero_subtitle}
							</p>
							<div className="agf-hero-actions" style={{ justifyContent: "flex-start" }}>
								<a href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary">
									{page.cta_primary}
								</a>
								<a href="#features" className="agf-btn agf-btn--ghost">
									{page.cta_secondary}
								</a>
							</div>
						</div>
						{facts.length ? (
							<div className="agf-card agf-facts">
								<div className="agf-card-icon" style={{ width: 52, height: 52, fontSize: 22 }}>
									<i className={fallbackIcon}></i>
								</div>
								<h3>{page.facts_title}</h3>
								<ul>
									{facts.map((fact) => (
										<li key={fact.label}>
											<i className={fact.icon}></i>
											<span>{fact.label}</span>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
				</div>
			</section>

			{steps.length ? (
				<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
					<div className="agf-container">
						<div className="agf-platform-head">
							<div className="agf-eyebrow">
								<span className="agf-eyebrow-num">01</span> {page.steps_label}
							</div>
							<h2 className="agf-headline agf-h2">{page.steps_title}</h2>
						</div>
						<div className="agf-grid agf-grid--4">
							{steps.map((step, index) => (
								<div className="agf-card agf-step" key={step.title}>
									<span className="agf-step-num">{String(index + 1).padStart(2, "0")}</span>
									<h3>{step.title}</h3>
									<p>{step.text}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			) : null}

			{page.modules?.length ? (
				<ProductModules
					title={page.modules_title}
					subtitle={page.modules_subtitle}
					modules={page.modules}
					numberLabel="02"
					sectionLabel={page.modules_label}
				/>
			) : null}

			{benefits.length ? (
				<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
					<div className="agf-container">
						<div className="agf-platform-head">
							<h2 className="agf-headline agf-h2">{page.benefits_title}</h2>
							<p className="agf-lede" style={{ margin: "12px auto 0" }}>
								{page.benefits_text}
							</p>
						</div>
						<div className="agf-grid agf-grid--3">
							{benefits.map((b) => (
								<div className="agf-card" key={b.title}>
									<div className="agf-card-icon">
										<i className={b.icon}></i>
									</div>
									<h3>{b.title}</h3>
									<p>{b.text}</p>
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
								{page.cta_button}
							</a>
							<a
								href={withLocale("/service", prefix)}
								className="agf-btn agf-btn--ghost"
								style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}
							>
								{page.cta_secondary_link}
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
