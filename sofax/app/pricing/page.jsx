"use client";
import BreadCrumb from "@/components/common/Breadcrumb";
import FadeInUp from "@/components/animation/FadeInUp";
import AutoSlider from "@/components/common/auto-slider";
import { useState } from "react";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

function Pricing() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const page = cms.pages?.pricing || {};
	const products = cms.pricing_products?.length
		? cms.pricing_products
		: [
				{ id: "all", name: "Tüm Çözümler", icon: "fas fa-th-large" },
				{ id: "erp", name: "ERP Sistemi", icon: "fas fa-industry" },
				{ id: "crm", name: "CRM Sistemi", icon: "fas fa-users" },
				{ id: "accounting", name: "Ön Muhasebe", icon: "fas fa-calculator" },
				{ id: "lms", name: "LMS Eğitim", icon: "fas fa-graduation-cap" },
			];
	const [selectedProduct, setSelectedProduct] = useState("all");
	const packages = cms.pricing?.[selectedProduct] || [];

	return (
		<>
			<BreadCrumb title={page.title || "Fiyatlandırma"} />

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center mb-5">
									<h1>{page.hero_title || "İşletmenizin Büyüklüğüne Uygun Paketler"}</h1>
									<p className="lead">
										{page.hero_subtitle ||
											"AgotaSoft yazılım çözümleri için esnek fiyatlandırma seçenekleri. Küçük işletmelerden büyük şirketlere kadar herkese uygun paketler."}
									</p>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding-bottom">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center mb-5">
									<h3 className="mb-4">{page.selector_title || "Hangi Çözüm İçin Paket Arıyorsunuz?"}</h3>
									<div className="sofax-product-selector">
										{products.map((product) => (
											<button
												key={product.id}
												onClick={() => setSelectedProduct(product.id)}
												className={`sofax-product-btn ${selectedProduct === product.id ? "active" : ""}`}
											>
												<i className={product.icon}></i>
												<span>{product.name}</span>
											</button>
										))}
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2 className="sofax-big-title">
										{selectedProduct === "all"
											? page.all_packages_title || "AgotaSoft Paketleri"
											: (products.find((p) => p.id === selectedProduct)?.name || "") + (page.package_suffix || " Paketleri")}
									</h2>
									<p>{page.packages_subtitle || "İşletmenizin büyüklüğüne uygun çözüm paketleri"}</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					<div className="row g-4">
						{packages.map((pkg, index) => (
							<div key={pkg.title + index} className="col-lg-4">
								<FadeInUp>
									<div
										className={`sofax-product-card text-center ${pkg.className || ""} ${pkg.popular ? "border-primary" : ""}`}
										style={pkg.popular ? { transform: "scale(1.05)" } : {}}
									>
										{pkg.popular && (
											<div className="sofax-badge-primary position-absolute" style={{ top: "20px", right: "20px" }}>
												{page.popular_label || "Popüler"}
											</div>
										)}
										<div className="sofax-product-icon sofax-solution-icon">
											<i className={pkg.icon}></i>
										</div>
										<h3 className="sofax-product-title">{pkg.title}</h3>
										<div className="mb-4">
											<p className="text-muted">{pkg.subtitle}</p>
										</div>
										<ul className="list-unstyled mb-4">
											{(pkg.features || []).map((feature) => (
												<li key={feature} className="mb-2">
													<i className="fas fa-check text-success me-2"></i>
													{feature}
												</li>
											))}
										</ul>
										<a
											href={withLocale(`/contact-us?package=${encodeURIComponent(pkg.title)}&product=${selectedProduct}`, prefix)}
											className="sofax-btn-primary w-100"
										>
											{page.contact_label || "İletişime Geçin"}
										</a>
									</div>
								</FadeInUp>
							</div>
						))}
					</div>
				</div>
			</div>

			<AutoSlider />

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center">
									<h2 className="mb-4">{page.cta_title || "Hangi Paket Size Uygun?"}</h2>
									<p className="mb-5 fs-5">
										{page.cta_text ||
											"Uzman danışmanlarımızla görüşerek işletmenizin ihtiyaçlarına en uygun paketi belirleyin."}
									</p>
									<div className="d-flex justify-content-center gap-4 flex-wrap">
										<a href={withLocale("/contact-us", prefix)} className="sofax-btn-primary">
											{page.cta_primary || "Ücretsiz Danışmanlık"}
										</a>
										<a href={withLocale("/contact-us", prefix)} className="sofax-btn-secondary">
											<i className="fas fa-envelope me-2"></i>
											{page.cta_secondary || "İletişime Geçin"}
										</a>
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Pricing;
