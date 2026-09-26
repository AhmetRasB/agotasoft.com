import Link from "next/link";
import BreadCrumb from "@/components/common/Breadcrumb";
import SolutionCard from "@/components/solutions/SolutionCard";
import { localePrefix, withLocale } from "@/lib/i18n/config";
import { fill, getCatalog, productCount } from "@/lib/solutions";

export default function SolutionsCatalog({ locale }) {
	const prefix = localePrefix(locale);
	const catalog = getCatalog(locale);
	const { ui } = catalog;

	return (
		<>
			<BreadCrumb title={ui.solutions} />

			<section className="agf-section--tight">
				<div className="agf-container agf-center">
					<span className="agf-hero-badge">
						<span className="agf-status-dot"></span>
						{fill(ui.catalog_badge, { products: productCount(catalog), categories: catalog.categories.length })}
					</span>
					<h2 className="agf-headline agf-h2" style={{ margin: "18px auto 12px", maxWidth: 780 }}>
						{ui.catalog_title}
					</h2>
					<p className="agf-lede" style={{ margin: "0 auto", maxWidth: 720 }}>
						{ui.catalog_subtitle}
					</p>
					<nav className="agf-sol-chips" aria-label={ui.solutions}>
						{catalog.categories.map((category) => (
							<a href={`#${category.id}`} key={category.id}>
								<i className={category.icon}></i>
								{category.name}
							</a>
						))}
					</nav>
				</div>
			</section>

			{catalog.categories.map((category, index) => (
				<section
					id={category.id}
					className="agf-sol-section"
					style={index % 2 === 0 ? { background: "var(--bg-soft)" } : undefined}
					key={category.id}
				>
					<div className="agf-container">
						<div className="agf-sol-head">
							<span className="agf-card-icon">
								<i className={category.icon}></i>
							</span>
							<div>
								<h2 className="agf-headline agf-h3">{category.name}</h2>
								<p>{category.description}</p>
							</div>
						</div>
						<div className="agf-grid agf-grid--3">
							{category.products.map((product) => (
								<SolutionCard product={product} prefix={prefix} ui={ui} key={product.slug} />
							))}
						</div>
					</div>
				</section>
			))}

			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-cta-banner">
						<h2 className="agf-headline agf-h2">{ui.cta_title}</h2>
						<p>{ui.cta_text}</p>
						<div className="agf-hero-actions">
							<Link href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary">
								{ui.demo_cta}
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
