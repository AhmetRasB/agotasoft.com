import FadeInUp from "@/components/animation/FadeInUp";
import Breadcrumb from "@/components/common/Breadcrumb";

function PreAccountingPage() {
	return (
		<>
			<Breadcrumb title="AgotaSoft Ön Muhasebe Sistemi" />
			
			{/* Hero Section */}
			<div className="section sofax-section-padding sofax-hero">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-content">
									<h1 className="sofax-hero-title">
										AgotaSoft Ön Muhasebe: Finansal Kontrol Tamamen Sizin Elinizde
									</h1>
									<p className="sofax-hero-subtitle">
										E-Fatura entegrasyonu, cari hesap yönetimi, gider takibi ve 
										finansal raporlama ile KOBİ'lerin finansal süreçlerini 
										kolaylaştıran kapsamlı ön muhasebe çözümü.
									</p>
									<div className="sofax-hero-buttons d-flex gap-4 mt-4">
										<a href="/contact-us" className="sofax-btn-primary">
											Ücretsiz Demo
										</a>
										<a href="#features" className="sofax-btn-secondary">
											Özellikleri İncele
										</a>
									</div>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-thumb">
									<div className="text-center p-5 bg-light rounded">
										<div className="sofax-feature-icon mx-auto mb-3" style={{width: '120px', height: '120px', fontSize: '48px'}}>
											<i className="fas fa-calculator"></i>
										</div>
										<h4>AgotaSoft Ön Muhasebe</h4>
										<p>Finansal Kontrol Sistemi</p>
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="section sofax-section-padding bg-light" id="features">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2>Ön Muhasebe Modülleri ve Özellikleri</h2>
									<p>KOBİ'ler için özel tasarlanmış finansal yönetim araçları</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					
					<div className="row g-4">
						{/* E-Fatura */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-accounting">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-file-invoice"></i>
									</div>
									<h3 className="sofax-feature-title">E-Fatura Entegrasyonu</h3>
									<p className="sofax-feature-description">
										GİB entegrasyonu ile e-fatura oluşturma, gönderme 
										ve alma işlemlerini otomatikleştirin.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>GİB entegrasyonu</li>
										<li><i className="fas fa-check text-success me-2"></i>Otomatik fatura oluşturma</li>
										<li><i className="fas fa-check text-success me-2"></i>E-arşiv fatura</li>
										<li><i className="fas fa-check text-success me-2"></i>Toplu fatura işlemleri</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Cari Hesap */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-accounting">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-address-book"></i>
									</div>
									<h3 className="sofax-feature-title">Cari Hesap Yönetimi</h3>
									<p className="sofax-feature-description">
										Müşteri ve tedarikçi hesaplarınızı takip edin, 
										borç-alacak durumlarını kontrol edin.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Cari kart yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>Borç-alacak takibi</li>
										<li><i className="fas fa-check text-success me-2"></i>Vade analizleri</li>
										<li><i className="fas fa-check text-success me-2"></i>Cari ekstre raporları</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Gider Yönetimi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-accounting">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-receipt"></i>
									</div>
									<h3 className="sofax-feature-title">Gider Takibi</h3>
									<p className="sofax-feature-description">
										Tüm giderlerinizi kategorize edin, takip edin ve 
										gider analizleri yapın.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Gider kategorileri</li>
										<li><i className="fas fa-check text-success me-2"></i>Fiş ve belge yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>Gider onay süreçleri</li>
										<li><i className="fas fa-check text-success me-2"></i>Gider raporları</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Banka Yönetimi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-accounting">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-university"></i>
									</div>
									<h3 className="sofax-feature-title">Banka Yönetimi</h3>
									<p className="sofax-feature-description">
										Banka hesaplarınızı takip edin, nakit akışınızı 
										kontrol edin ve banka mutabakatı yapın.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Çoklu banka hesabı</li>
										<li><i className="fas fa-check text-success me-2"></i>Nakit akış takibi</li>
										<li><i className="fas fa-check text-success me-2"></i>Banka mutabakatı</li>
										<li><i className="fas fa-check text-success me-2"></i>Çek-senet yönetimi</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Vergi Yönetimi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-accounting">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-percentage"></i>
									</div>
									<h3 className="sofax-feature-title">Vergi Yönetimi</h3>
									<p className="sofax-feature-description">
										KDV, stopaj ve diğer vergi hesaplamalarını 
										otomatikleştirin, beyanname hazırlayın.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Otomatik vergi hesaplama</li>
										<li><i className="fas fa-check text-success me-2"></i>KDV beyannamesi</li>
										<li><i className="fas fa-check text-success me-2"></i>Stopaj hesaplamaları</li>
										<li><i className="fas fa-check text-success me-2"></i>Vergi raporları</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Raporlama */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-accounting">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-chart-bar"></i>
									</div>
									<h3 className="sofax-feature-title">Finansal Raporlama</h3>
									<p className="sofax-feature-description">
										Detaylı finansal raporlar, gelir-gider analizleri 
										ve karlılık raporları.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Gelir-gider raporu</li>
										<li><i className="fas fa-check text-success me-2"></i>Karlılık analizi</li>
										<li><i className="fas fa-check text-success me-2"></i>Nakit akış raporu</li>
										<li><i className="fas fa-check text-success me-2"></i>Özelleştirilebilir raporlar</li>
									</ul>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Benefits Section */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-default-content">
									<h2>KOBİ'ler İçin Özel Tasarlandı</h2>
									<p>
										AgotaSoft Ön Muhasebe, küçük ve orta ölçekli işletmelerin 
										finansal süreçlerini kolaylaştırmak için özel olarak tasarlanmıştır.
									</p>
									
									<div className="mt-4">
										<div className="d-flex align-items-start mb-4">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-clock"></i>
											</div>
											<div>
												<h5>%70 Daha Hızlı Faturalama</h5>
												<p>E-Fatura entegrasyonu ile faturalama süreçlerinizi hızlandırın.</p>
											</div>
										</div>
										
										<div className="d-flex align-items-start mb-4">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-shield-alt"></i>
											</div>
											<div>
												<h5>%100 Yasal Uyumluluk</h5>
												<p>Türkiye'deki tüm yasal düzenlemelere tam uyumlu sistem.</p>
											</div>
										</div>
										
										<div className="d-flex align-items-start mb-4">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-calculator"></i>
											</div>
											<div>
												<h5>Otomatik Hesaplamalar</h5>
												<p>Vergi, KDV ve stopaj hesaplamalarını otomatik olarak yapın.</p>
											</div>
										</div>
									</div>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-thumb">
									<div className="text-center p-5 bg-success text-white rounded">
										<div className="mb-4">
											<i className="fas fa-file-invoice-dollar" style={{fontSize: '64px', opacity: '0.8'}}></i>
										</div>
										<h4>Finansal Raporlama</h4>
										<p>Detaylı mali raporlar ve analiz araçları</p>
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Pricing Section */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2>Uygun Fiyatlarla Başlayın</h2>
									<p>KOBİ'ler için özel fiyatlandırma paketleri</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-product-card text-center">
									<div className="sofax-product-icon">
										<i className="fas fa-seedling"></i>
									</div>
									<h3 className="sofax-product-title">Başlangıç</h3>
									<div className="mb-4">
										<span className="h2 text-success">₺299</span>
										<span className="text-muted">/ay</span>
									</div>
									<ul className="list-unstyled mb-4">
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>5 Kullanıcıya kadar</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>E-Fatura entegrasyonu</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Temel raporlar</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>E-posta desteği</li>
									</ul>
									<a href="/contact-us" className="sofax-btn-accent w-100">
										Başlayın
									</a>
								</div>
							</FadeInUp>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-product-card text-center border-success" style={{transform: 'scale(1.05)'}}>
									<div className="sofax-badge-success position-absolute" style={{top: '20px', right: '20px'}}>
										Popüler
									</div>
									<div className="sofax-product-icon">
										<i className="fas fa-rocket"></i>
									</div>
									<h3 className="sofax-product-title">Profesyonel</h3>
									<div className="mb-4">
										<span className="h2 text-success">₺599</span>
										<span className="text-muted">/ay</span>
									</div>
									<ul className="list-unstyled mb-4">
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>15 Kullanıcıya kadar</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Tüm modüller</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Gelişmiş raporlar</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Telefon desteği</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Entegrasyon desteği</li>
									</ul>
									<a href="/contact-us" className="sofax-btn-primary w-100">
										Başlayın
									</a>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center">
									<h2 className="mb-4">Finansal Kontrolünüzü Elinize Alın</h2>
									<p className="mb-5 fs-5">
										30 günlük ücretsiz deneme ile Sofax Ön Muhasebe'nin 
										gücünü keşfedin. Kurulum ve eğitim desteği dahil.
									</p>
									<div className="d-flex justify-content-center gap-4 flex-wrap">
										<a href="/contact-us" className="sofax-btn-primary">
											Ücretsiz Demo Talep Edin
										</a>
										<a href="tel:+908001234567" className="sofax-btn-secondary">
											<i className="fas fa-phone me-2"></i>
											Hemen Arayın
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

export default PreAccountingPage;
