"use client";

import ProductModules from "@/components/product-pages/ProductModules";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import StructuredData, { softwareApplication } from "@/components/common/StructuredData";

export default function LmsContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.lms || {};

	return (
		<>
			<StructuredData
				data={softwareApplication({ name: page.title, description: page.hero_subtitle, path: "/lms", prefix, image: page.hero_image })}
			/>
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
									<ResponsiveImage src={page.hero_image} alt={page.hero_card_title || "AgotaSoft LMS"} priority sizes="(max-width: 860px) calc(100vw - 32px), 560px" />
								</div>
							) : (
								<div className="agf-card agf-center" style={{ padding: 48 }}>
									<div className="agf-card-icon" style={{ margin: "0 auto 16px", width: 56, height: 56, fontSize: 24 }}>
										<i className="fas fa-graduation-cap"></i>
									</div>
									<h3>{page.hero_card_title || "AgotaSoft LMS"}</h3>
									<p>{page.hero_card_text}</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			<ProductModules title={page.modules_title} subtitle={page.modules_subtitle} modules={page.modules} numberLabel="01" sectionLabel="MODÜLLER" />

			<section className="agf-container">
				<div className="agf-stats">
					{(page.stats || []).map((s) => (
						<div className="agf-stat" key={s.label}>
							<div className="agf-stat-num">{s.number}</div>
							<div className="agf-stat-label">{s.label}</div>
						</div>
					))}
				</div>
			</section>

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

			{page.usecases?.length ? (
				<section className="agf-section--tight" style={{ background: "var(--bg-soft)" }}>
					<div className="agf-container">
						<div className="agf-platform-head">
							<h2 className="agf-headline agf-h2">{page.usecases_title}</h2>
							<p className="agf-lede" style={{ margin: "12px auto 0" }}>
								{page.usecases_subtitle}
							</p>
						</div>
						<div className="agf-grid agf-grid--4">
							{page.usecases.map((u) => (
								<div className="agf-mini-card" key={u.title}>
									<div className="agf-mini-icon">
										<i className={u.icon}></i>
									</div>
									<div>
										<h4>{u.title}</h4>
										<p>{u.text}</p>
									</div>
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
							<a href={withLocale("/pricing", prefix)} className="agf-btn agf-btn--ghost" style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}>
								{page.cta_pricing || "Fiyatları İncele"}
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
