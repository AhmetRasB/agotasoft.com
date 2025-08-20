"use client";
import BreadCrumb from "@/components/common/Breadcrumb";
import FadeInUp from "@/components/animation/FadeInUp";
import AutoSlider from "@/components/common/auto-slider";
import { useState } from "react";

function Pricing() {
	const [selectedProduct, setSelectedProduct] = useState('all');
	
	const products = [
		{ id: 'all', name: 'Tüm Çözümler', icon: 'fas fa-th-large' },
		{ id: 'erp', name: 'ERP Sistemi', icon: 'fas fa-industry' },
		{ id: 'crm', name: 'CRM Sistemi', icon: 'fas fa-users' },
		{ id: 'accounting', name: 'Ön Muhasebe', icon: 'fas fa-calculator' },
		{ id: 'lms', name: 'LMS Eğitim', icon: 'fas fa-graduation-cap' }
	];

	const getPackagesForProduct = () => {
		if (selectedProduct === 'all') {
			return [
				{
					title: 'Başlangıç Paketi',
					subtitle: 'Küçük işletmeler için ideal',
					icon: 'fas fa-seedling',
					features: [
						'Temel ERP modülleri',
						'CRM müşteri yönetimi',
						'Ön muhasebe sistemi',
						'5 kullanıcıya kadar',
						'E-posta desteği',
						'Temel raporlar'
					],
					className: 'sofax-solution-starter'
				},
				{
					title: 'Profesyonel Paket',
					subtitle: 'Büyüyen işletmeler için',
					icon: 'fas fa-rocket',
					features: [
						'Tüm ERP modülleri',
						'Gelişmiş CRM özellikleri',
						'LMS eğitim sistemi',
						'25 kullanıcıya kadar',
						'Telefon desteği',
						'Gelişmiş raporlar',
						'Mobil uygulama'
					],
					className: 'sofax-solution-professional',
					popular: true
				},
				{
					title: 'Kurumsal Paket',
					subtitle: 'Büyük şirketler için',
					icon: 'fas fa-crown',
					features: [
						'Özelleştirilebilir tüm modüller',
						'AI destekli analiz',
						'API entegrasyonları',
						'Sınırsız kullanıcı',
						'7/24 öncelikli destek',
						'Özel raporlar',
						'Özel entegrasyonlar'
					],
					className: 'sofax-solution-enterprise'
				}
			];
		}
		
		// Ürün bazlı paketler
		const productPackages = {
			erp: [
				{
					title: 'Temel ERP',
					subtitle: 'Küçük işletmeler için',
					icon: 'fas fa-seedling',
					features: [
						'Stok yönetimi',
						'Temel finans',
						'Satış takibi',
						'5 kullanıcı',
						'E-posta desteği'
					],
					className: 'sofax-solution-starter'
				},
				{
					title: 'Profesyonel ERP',
					subtitle: 'Büyüyen işletmeler için',
					icon: 'fas fa-industry',
					features: [
						'Tüm ERP modülleri',
						'Üretim planlaması',
						'Gelişmiş raporlar',
						'25 kullanıcı',
						'Telefon desteği'
					],
					className: 'sofax-solution-professional',
					popular: true
				},
				{
					title: 'Kurumsal ERP',
					subtitle: 'Büyük şirketler için',
					icon: 'fas fa-crown',
					features: [
						'Özelleştirilebilir modüller',
						'API entegrasyonları',
						'Sınırsız kullanıcı',
						'7/24 destek',
						'Özel raporlar'
					],
					className: 'sofax-solution-enterprise'
				}
			],
			crm: [
				{
					title: 'Temel CRM',
					subtitle: 'Küçük satış ekipleri için',
					icon: 'fas fa-user-friends',
					features: [
						'Müşteri yönetimi',
						'Satış takibi',
						'E-posta entegrasyonu',
						'5 kullanıcı',
						'Temel raporlar'
					],
					className: 'sofax-solution-starter'
				},
				{
					title: 'Profesyonel CRM',
					subtitle: 'Büyüyen satış ekipleri için',
					icon: 'fas fa-chart-line',
					features: [
						'Gelişmiş CRM özellikleri',
						'Pazarlama otomasyonu',
						'Mobil uygulama',
						'25 kullanıcı',
						'Telefon desteği'
					],
					className: 'sofax-solution-professional',
					popular: true
				},
				{
					title: 'Kurumsal CRM',
					subtitle: 'Büyük satış organizasyonları için',
					icon: 'fas fa-trophy',
					features: [
						'AI destekli analiz',
						'Özel entegrasyonlar',
						'Sınırsız kullanıcı',
						'7/24 destek',
						'Özel raporlar'
					],
					className: 'sofax-solution-enterprise'
				}
			],
			accounting: [
				{
					title: 'Temel Ön Muhasebe',
					subtitle: 'Küçük işletmeler için',
					icon: 'fas fa-calculator',
					features: [
						'E-Fatura entegrasyonu',
						'Temel cari hesap',
						'Gider takibi',
						'3 kullanıcı',
						'E-posta desteği'
					],
					className: 'sofax-solution-starter'
				},
				{
					title: 'Profesyonel Ön Muhasebe',
					subtitle: 'Büyüyen işletmeler için',
					icon: 'fas fa-file-invoice-dollar',
					features: [
						'Gelişmiş cari hesap',
						'Vergi hesaplamaları',
						'Detaylı raporlar',
						'10 kullanıcı',
						'Telefon desteği'
					],
					className: 'sofax-solution-professional',
					popular: true
				},
				{
					title: 'Kurumsal Ön Muhasebe',
					subtitle: 'Büyük şirketler için',
					icon: 'fas fa-building',
					features: [
						'Çoklu şirket desteği',
						'API entegrasyonları',
						'Sınırsız kullanıcı',
						'7/24 destek',
						'Özel raporlar'
					],
					className: 'sofax-solution-enterprise'
				}
			],
			lms: [
				{
					title: 'Temel LMS',
					subtitle: 'Küçük eğitim kurumları için',
					icon: 'fas fa-book',
					features: [
						'Online ders yönetimi',
						'Temel sınav sistemi',
						'Sertifika yönetimi',
						'50 öğrenci',
						'E-posta desteği'
					],
					className: 'sofax-solution-starter'
				},
				{
					title: 'Profesyonel LMS',
					subtitle: 'Büyüyen eğitim kurumları için',
					icon: 'fas fa-graduation-cap',
					features: [
						'Gelişmiş sınav sistemi',
						'Video konferans entegrasyonu',
						'Performans analizi',
						'500 öğrenci',
						'Telefon desteği'
					],
					className: 'sofax-solution-professional',
					popular: true
				},
				{
					title: 'Kurumsal LMS',
					subtitle: 'Büyük eğitim organizasyonları için',
					icon: 'fas fa-university',
					features: [
						'Özelleştirilebilir platform',
						'API entegrasyonları',
						'Sınırsız öğrenci',
						'7/24 destek',
						'Özel raporlar'
					],
					className: 'sofax-solution-enterprise'
				}
			]
		};
		
		return productPackages[selectedProduct] || [];
	};

	return (
		<>
			<BreadCrumb title="Fiyatlandırma" />
			
			{/* Pricing Hero */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center mb-5">
									<h1>İşletmenizin Büyüklüğüne Uygun Paketler</h1>
									<p className="lead">
										AgotaSoft yazılım çözümleri için esnek fiyatlandırma seçenekleri. 
										Küçük işletmelerden büyük şirketlere kadar herkese uygun paketler.
									</p>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Product Selector */}
			<div className="section sofax-section-padding-bottom">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center mb-5">
									<h3 className="mb-4">Hangi Çözüm İçin Paket Arıyorsunuz?</h3>
									<div className="sofax-product-selector">
										{products.map(product => (
											<button
												key={product.id}
												onClick={() => setSelectedProduct(product.id)}
												className={`sofax-product-btn ${selectedProduct === product.id ? 'active' : ''}`}
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

			{/* Pricing Packages */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2 className="sofax-big-title">
										{selectedProduct === 'all' ? 'AgotaSoft Yazılım Paketleri' : 
										 products.find(p => p.id === selectedProduct)?.name + ' Paketleri'}
									</h2>
									<p>İşletmenizin büyüklüğüne uygun çözüm paketleri</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					<div className="row g-4">
						{getPackagesForProduct().map((pkg, index) => (
							<div key={index} className="col-lg-4">
								<FadeInUp>
									<div className={`sofax-product-card text-center ${pkg.className} ${pkg.popular ? 'border-primary' : ''}`} 
										 style={pkg.popular ? {transform: 'scale(1.05)'} : {}}>
										{pkg.popular && (
											<div className="sofax-badge-primary position-absolute" style={{top: '20px', right: '20px'}}>
												Popüler
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
											{pkg.features.map((feature, featureIndex) => (
												<li key={featureIndex} className="mb-2">
													<i className="fas fa-check text-success me-2"></i>
													{feature}
												</li>
											))}
										</ul>
										<a href={`/contact-us?package=${encodeURIComponent(pkg.title)}&product=${selectedProduct}`} 
										   className="sofax-btn-primary w-100">
											İletişime Geçin
										</a>
									</div>
								</FadeInUp>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Partners */}
			<AutoSlider />

			{/* CTA */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center">
									<h2 className="mb-4">Hangi Paket Size Uygun?</h2>
									<p className="mb-5 fs-5">
										Uzman danışmanlarımızla görüşerek işletmenizin ihtiyaçlarına 
										en uygun paketi belirleyin.
									</p>
									<div className="d-flex justify-content-center gap-4 flex-wrap">
										<a href="/contact-us" className="sofax-btn-primary">
											Ücretsiz Danışmanlık
										</a>
										<a href="/contact-us" className="sofax-btn-secondary">
											<i className="fas fa-envelope me-2"></i>
											İletişime Geçin
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
