"use client";

import { useState } from "react";
import { useCms } from "@/hooks/useCms";
import { useLocale, useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import { findProduct, getCatalog, productHref } from "@/lib/solutions";
import { READY_COPY, READY_PRODUCTS, formatPrice } from "@/lib/i18n/readyProducts";

const DEFAULT_PRODUCTS = [
	{ id: "all", name: "Tüm Çözümler", icon: "fas fa-th-large" },
	{ id: "erp", name: "ERP Sistemi", icon: "fas fa-industry" },
	{ id: "crm", name: "CRM Sistemi", icon: "fas fa-users" },
	{ id: "accounting", name: "Ön Muhasebe", icon: "fas fa-calculator" },
	{ id: "lms", name: "LMS Eğitim", icon: "fas fa-graduation-cap" },
];

export default function PricingContent() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const locale = useLocale();
	const ready = READY_COPY[locale] || READY_COPY.tr;
	const catalog = getCatalog(locale);
	const page = cms.pages?.pricing || {};
	const products = cms.pricing_products?.length ? cms.pricing_products : DEFAULT_PRODUCTS;
	const [selectedProduct, setSelectedProduct] = useState("all");
	const packages = cms.pricing?.[selectedProduct] || [];

	return (
		<>
			<section className="agf-section--tight">
				<div className="agf-container agf-center">
					<p className="agf-lede" style={{ margin: "0 auto", maxWidth: 680 }}>
						{page.hero_subtitle ||
							"AgotaSoft yazılım çözümleri için esnek fiyatlandırma seçenekleri. Küçük işletmelerden büyük şirketlere kadar herkese uygun paketler."}
					</p>
				</div>
			</section>

			<section className="agf-section--tight" style={{ paddingTop: 0 }}>
				<div className="agf-container agf-center">
					<h3 className="agf-h3" style={{ marginBottom: 20 }}>
						{page.selector_title || "Hangi Çözüm İçin Paket Arıyorsunuz?"}
					</h3>
					<div className="agf-tabs">
						{products.map((product) => (
							<button
								key={product.id}
								onClick={() => setSelectedProduct(product.id)}
								className={`agf-tab ${selectedProduct === product.id ? "agf-tab--active" : ""}`}
							>
								<i className={product.icon}></i>
								<span>{product.name}</span>
							</button>
						))}
					</div>
				</div>
			</section>

			<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
				<div className="agf-container">
					<div className="agf-platform-head">
						<h2 className="agf-headline agf-h2">
							{selectedProduct === "all"
								? page.all_packages_title || "AgotaSoft Paketleri"
								: (products.find((p) => p.id === selectedProduct)?.name || "") + (page.package_suffix || " Paketleri")}
						</h2>
						<p className="agf-lede" style={{ margin: "12px auto 0" }}>
							{page.packages_subtitle || "İşletmenizin büyüklüğüne uygun çözüm paketleri"}
						</p>
					</div>
					<div className="agf-grid agf-grid--3">
						{packages.map((pkg, index) => (
							<div className={`agf-price-card ${pkg.popular ? "agf-price-card--popular" : ""}`} key={pkg.title + index}>
								{pkg.popular ? <span className="agf-price-badge">{page.popular_label || "Popüler"}</span> : null}
								<div className="agf-card-icon">
									<i className={pkg.icon}></i>
								</div>
								<h3>{pkg.title}</h3>
								<p className="agf-small">{pkg.subtitle}</p>
								<ul>
									{(pkg.features || []).map((feature) => (
										<li key={feature}>{feature}</li>
									))}
								</ul>
								<a
									href={withLocale(`/contact-us?package=${encodeURIComponent(pkg.title)}&product=${selectedProduct}`, prefix)}
									className={`agf-btn ${pkg.popular ? "agf-btn--primary" : "agf-btn--ghost"}`}
								>
									{page.contact_label || "İletişime Geçin"}
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-platform-head">
						<h2 className="agf-headline agf-h2">{ready.title}</h2>
						<p className="agf-lede" style={{ margin: "12px auto 0" }}>
							{ready.subtitle}
						</p>
					</div>
					<div className="agf-grid agf-grid--4">
						{READY_PRODUCTS.map(({ slug, price }) => {
							const found = findProduct(catalog, slug);
							if (!found) return null;
							const { product } = found;
							return (
								<div className="agf-price-card" key={slug} style={{ display: "flex", flexDirection: "column" }}>
									<div className="agf-card-icon">
										<i className={product.icon}></i>
									</div>
									<h3>{product.name}</h3>
									<p className="agf-small">{product.tagline}</p>
									<p style={{ fontWeight: 700, fontSize: 18, margin: "12px 0" }}>{formatPrice(price, ready.units[price.per], locale)}</p>
									<a href={productHref(product, prefix)} className="agf-btn agf-btn--ghost" style={{ marginTop: "auto" }}>
										{ready.cta}
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="agf-section--tight">
				<div className="agf-container">
					<div className="agf-cta-banner">
						<h2 className="agf-headline agf-h2">{page.cta_title || "Hangi Paket Size Uygun?"}</h2>
						<p>
							{page.cta_text || "Uzman danışmanlarımızla görüşerek işletmenizin ihtiyaçlarına en uygun paketi belirleyin."}
						</p>
						<div className="agf-hero-actions">
							<a href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary">
								{page.cta_primary || "Ücretsiz Danışmanlık"}
							</a>
							<a
								href={withLocale("/contact-us", prefix)}
								className="agf-btn agf-btn--ghost"
								style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}
							>
								<i className="fas fa-envelope"></i> {page.cta_secondary || "İletişime Geçin"}
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
