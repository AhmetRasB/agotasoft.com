import Link from "next/link";
import { notFound } from "next/navigation";
import BreadCrumb from "@/components/common/Breadcrumb";
import SolutionCard from "@/components/solutions/SolutionCard";
import { localePrefix, withLocale } from "@/lib/i18n/config";
import { findProduct, getCatalog } from "@/lib/solutions";
import { getDetails } from "@/lib/solutions/server";

export default function SolutionDetail({ locale, slug }) {
	const prefix = localePrefix(locale);
	const catalog = getCatalog(locale);
	const { ui } = catalog;
	const found = findProduct(catalog, slug);
	if (!found) notFound();

	const { product, category } = found;
	const details = getDetails(locale, slug) || {};
	const soon = product.status === "soon";
	const contactHref = `${withLocale("/contact-us", prefix)}?urun=${encodeURIComponent(slug)}#demo`;
	const related = category.products.filter((item) => item.slug !== slug).slice(0, 6);

	return (
		<>
			<BreadCrumb title={product.name} />

			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-split">
						<div>
							<Link href={withLocale(`/solutions#${category.id}`, prefix)} className="agf-eyebrow agf-sol-cat-link">
								<i className={category.icon}></i> {category.name}
							</Link>
							{soon ? (
								<span className="agf-hero-badge agf-sol-soon-badge">
									<span className="agf-status-dot agf-status-dot--soon"></span>
									{ui.soon}
								</span>
							) : null}
							<p className="agf-lede" style={{ margin: "0 0 28px" }}>
								{details.summary || product.tagline}
							</p>
							<div className="agf-hero-actions" style={{ justifyContent: "flex-start" }}>
								<Link href={contactHref} className="agf-btn agf-btn--primary">
									{ui.demo_cta}
								</Link>
								<Link href={withLocale("/solutions", prefix)} className="agf-btn agf-btn--ghost">
									{ui.all_solutions}
								</Link>
							</div>
						</div>

						<div className="agf-card agf-sol-compare">
							{details.manual ? (
								<>
									<div className="agf-sol-compare-row">
										<span className="agf-sol-compare-label">
											<i className="fas fa-hourglass-half"></i> {ui.manual_label}
										</span>
										<p>{details.manual}</p>
									</div>
									<div className="agf-sol-compare-arrow" aria-hidden="true">
										<i className="fas fa-arrow-down"></i>
									</div>
								</>
							) : null}
							<div className="agf-sol-compare-row agf-sol-compare-row--after">
								<span className="agf-sol-compare-label">
									<i className={product.icon}></i> {ui.does_label}
								</span>
								<p>{product.tagline}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{details.features?.length ? (
				<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
					<div className="agf-container">
						<div className="agf-split agf-sol-split">
							<div>
								<div className="agf-eyebrow">{ui.features_label}</div>
								<div className="agf-sol-features">
									{details.features.map((feature) => (
										<div className="agf-card agf-sol-feature" key={feature}>
											<i className="fas fa-check"></i>
											<span>{feature}</span>
										</div>
									))}
								</div>
							</div>
							<div>
								<div className="agf-eyebrow">{ui.audience_label}</div>
								<p className="agf-lede" style={{ margin: "0 0 20px" }}>
									{details.audience}
								</p>
								{soon ? (
									<div className="agf-sol-note">
										<i className="fas fa-circle-info"></i>
										<p>{ui.soon_note}</p>
									</div>
								) : null}
							</div>
						</div>
					</div>
				</section>
			) : null}

			{related.length ? (
				<section className="agf-section agf-sol-related">
					<div className="agf-container">
						<div className="agf-sol-head">
							<span className="agf-card-icon">
								<i className={category.icon}></i>
							</span>
							<div>
								<h2 className="agf-headline agf-h3">{ui.related_title}</h2>
								<p>{category.name}</p>
							</div>
						</div>
						<div className="agf-grid agf-grid--3">
							{related.map((item) => (
								<SolutionCard product={item} prefix={prefix} ui={ui} key={item.slug} />
							))}
						</div>
					</div>
				</section>
			) : null}

			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-cta-banner">
						<h2 className="agf-headline agf-h2">{ui.cta_title}</h2>
						<p>{ui.cta_text}</p>
						<div className="agf-hero-actions">
							<Link href={contactHref} className="agf-btn agf-btn--primary">
								{ui.demo_cta}
							</Link>
							<Link
								href={withLocale("/solutions", prefix)}
								className="agf-btn agf-btn--ghost"
								style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}
							>
								{ui.all_solutions}
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
