"use client";

import { useState } from "react";
import ProductModules from "@/components/product-pages/ProductModules";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

const isExternal = (url) => /^https?:\/\//.test(url || "");

// Internal paths get the locale prefix; external product sites (karlilik.net, qrmenu…) open in a new tab.
function CtaLink({ href, prefix, className, style, children }) {
	if (isExternal(href)) {
		return (
			<a href={href} className={className} style={style} target="_blank" rel="noopener">
				{children}
			</a>
		);
	}
	return (
		<a href={href.startsWith("#") ? href : withLocale(href, prefix)} className={className} style={style}>
			{children}
		</a>
	);
}

function FeatureFrame({ frame, url, image, alt }) {
	if (frame === "screen") {
		return (
			<figure className="agf-browser agf-browser--screen">
				<img src={image} alt={alt} loading="lazy" />
			</figure>
		);
	}
	if (frame === "browser") {
		return (
			<figure className="agf-browser">
				<div className="agf-browser-bar" aria-hidden="true">
					<span></span>
					<span></span>
					<span></span>
					{url ? <em>{url}</em> : null}
				</div>
				<img src={image} alt={alt} loading="lazy" />
			</figure>
		);
	}
	return (
		<div className="agf-phone">
			<img src={image} alt={alt} loading="lazy" />
		</div>
	);
}

function ProductFaq({ items }) {
	const [open, setOpen] = useState(0);
	return (
		<div className="agf-product-faq">
			{items.map((item, index) => (
				<div className="agf-accordion-item" key={item.question}>
					<button
						className="agf-accordion-btn"
						type="button"
						aria-expanded={open === index}
						onClick={() => setOpen(open === index ? -1 : index)}
					>
						<span>{item.question}</span>
						<i className="fas fa-plus agf-accordion-icon"></i>
					</button>
					{open === index ? <div className="agf-accordion-body">{item.answer}</div> : null}
				</div>
			))}
		</div>
	);
}

export default function DetailedProductContent({ pageKey, fallbackIcon = "fas fa-cube", catalogSlug }) {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.[pageKey] || {};
	const facts = page.facts || [];
	const features = page.features || [];
	const steps = page.steps || [];
	const benefits = page.benefits || [];
	const gallery = page.gallery || [];
	const links = page.links || [];
	const faq = page.faq || [];
	const highlights = page.highlights;
	const contactHref = `/contact-us?urun=${encodeURIComponent(catalogSlug || pageKey)}#demo`;

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
								<CtaLink href={page.cta_primary_url || contactHref} prefix={prefix} className="agf-btn agf-btn--primary">
									{page.cta_primary}
								</CtaLink>
								<CtaLink href={page.cta_secondary_url || "#features"} prefix={prefix} className="agf-btn agf-btn--ghost">
									{page.cta_secondary}
									{isExternal(page.cta_secondary_url) ? <i className="fas fa-arrow-up-right-from-square agf-ext-icon"></i> : null}
								</CtaLink>
							</div>
							{page.hero_note ? <p className="agf-hero-note">{page.hero_note}</p> : null}
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

			{highlights?.items?.length ? (
				<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
					<div className="agf-container">
						<div className="agf-split agf-highlights">
							<div>
								<div className="agf-eyebrow">{highlights.label}</div>
								<h2 className="agf-headline agf-h2" style={{ marginBottom: 14 }}>
									{highlights.title}
								</h2>
								<p className="agf-lede">{highlights.text}</p>
							</div>
							<div className="agf-card">
								<ul className="agf-checklist agf-checklist--2col">
									{highlights.items.map((item) => (
										<li key={item}>
											<i className="fas fa-check"></i>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>
			) : null}

			{gallery.length ? (
				<section className="agf-section agf-gallery">
					<div className="agf-container">
						<div className="agf-platform-head">
							<h2 className="agf-headline agf-h2">{page.gallery_title}</h2>
							<p className="agf-lede" style={{ margin: "12px auto 0" }}>
								{page.gallery_text}
							</p>
						</div>
						<div className={`agf-grid ${gallery.length === 4 ? "agf-grid--4" : "agf-grid--3"}`}>
							{gallery.map((shot) => (
								<figure className="agf-shot" key={shot.src}>
									<div className="agf-phone">
										<img src={shot.src} alt={shot.caption} loading="lazy" />
									</div>
									<figcaption>{shot.caption}</figcaption>
								</figure>
							))}
						</div>
					</div>
				</section>
			) : null}

			{features.length && page.features_title ? (
				<section className="agf-section--tight agf-features-head">
					<div className="agf-container">
						<div className="agf-platform-head">
							<div className="agf-eyebrow">{page.features_label}</div>
							<h2 className="agf-headline agf-h2">{page.features_title}</h2>
							{page.features_text ? (
								<p className="agf-lede" style={{ margin: "12px auto 0" }}>
									{page.features_text}
								</p>
							) : null}
						</div>
					</div>
				</section>
			) : null}

			{features.map((feature, index) => {
				const frame = feature.frame || page.features_frame;
				const media = frame === "browser" || frame === "screen";
				return (
				<section
					className="agf-section"
					style={index % 2 === 0 ? { background: "var(--bg-soft)" } : undefined}
					key={feature.title}
				>
					<div className="agf-container">
						<div
							className={`agf-split${index % 2 === 1 ? " agf-split--reverse" : ""}${media ? " agf-split--media" : ""}`}
						>
							<div>
								<div className="agf-eyebrow">{feature.label}</div>
								<h2 className="agf-headline agf-h2" style={{ marginBottom: 14 }}>
									{feature.title}
								</h2>
								{feature.text ? (
									<p className="agf-lede" style={{ marginBottom: 18 }}>
										{feature.text}
									</p>
								) : null}
								<ul className="agf-checklist">
									{(feature.bullets || []).map((bullet) => (
										<li key={bullet}>
											<i className="fas fa-check"></i>
											<span>{bullet}</span>
										</li>
									))}
								</ul>
							</div>
							<FeatureFrame
								frame={frame}
								url={feature.frame_url || page.features_url}
								image={feature.image}
								alt={feature.image_alt || feature.title}
							/>
						</div>
					</div>
				</section>
				);
			})}

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
					numberLabel={steps.length ? "02" : "01"}
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
						<div className={`agf-grid ${benefits.length === 4 ? "agf-grid--4" : "agf-grid--3"}`}>
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


			{links.length ? (
				<section className="agf-section">
					<div className="agf-container">
						<div className="agf-platform-head">
							<h2 className="agf-headline agf-h2">{page.links_title}</h2>
						</div>
						<div className="agf-grid agf-grid--4">
							{links.map((link) => (
								<CtaLink href={link.url} prefix={prefix} className="agf-card agf-link-card" key={link.url + link.title}>
									<div className="agf-card-icon">
										<i className={link.icon}></i>
									</div>
									<h3>
										{link.title}
										{isExternal(link.url) ? <i className="fas fa-arrow-up-right-from-square agf-ext-icon"></i> : null}
									</h3>
									<p>{link.text}</p>
								</CtaLink>
							))}
						</div>
					</div>
				</section>
			) : null}

			{faq.length ? (
				<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
					<div className="agf-container">
						<div className="agf-platform-head">
							<h2 className="agf-headline agf-h2">{page.faq_title}</h2>
						</div>
						<ProductFaq items={faq} />
					</div>
				</section>
			) : null}

			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-cta-banner">
						<h2 className="agf-headline agf-h2">{page.cta_title}</h2>
						<p>{page.cta_text}</p>
						<div className="agf-hero-actions">
							<CtaLink href={page.cta_button_url || contactHref} prefix={prefix} className="agf-btn agf-btn--primary">
								{page.cta_button}
							</CtaLink>
							<CtaLink
								href={page.cta_secondary_link_url || "/service"}
								prefix={prefix}
								className="agf-btn agf-btn--ghost"
								style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}
							>
								{page.cta_secondary_link}
								{isExternal(page.cta_secondary_link_url) ? (
									<i className="fas fa-arrow-up-right-from-square agf-ext-icon"></i>
								) : null}
							</CtaLink>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
