import FadeInUp from "@/components/animation/FadeInUp";
import Breadcrumb from "@/components/common/Breadcrumb";

function ERPPage() {
	return (
		<>
			<Breadcrumb title="AgotaSoft ERP Sistemi" />
			
			{/* Hero Section */}
			<div className="section sofax-section-padding sofax-hero">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-content">
									<h1 className="sofax-hero-title">
										AgotaSoft ERP: Üretimden Finansa Tüm Süreçleriniz Tek Platformda
									</h1>
									<p className="sofax-hero-subtitle">
										Stok yönetimi, finans, üretim planlaması, satın alma ve insan kaynakları 
										süreçlerinizi entegre bir sistemle yönetin. Verimliliği artırın, 
										maliyetleri düşürün ve büyümenizi hızlandırın.
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
									<img 
										src="/images/about/DashboardTR.png" 
										alt="AgotaSoft ERP Dashboard" 
										className="img-fluid rounded"
									/>
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
									<h2>ERP Modülleri ve Özellikleri</h2>
									<p>İşletmenizin tüm süreçlerini kapsayan kapsamlı ERP çözümü</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					
					<div className="row g-4">
						{/* Stok Yönetimi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-erp">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-boxes"></i>
									</div>
									<h3 className="sofax-feature-title">Stok Yönetimi</h3>
									<p className="sofax-feature-description">
										Gerçek zamanlı stok takibi, otomatik yeniden sipariş, 
										depo yönetimi ve stok hareketlerinin detaylı raporlanması.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Gerçek zamanlı stok takibi</li>
										<li><i className="fas fa-check text-success me-2"></i>Otomatik yeniden sipariş</li>
										<li><i className="fas fa-check text-success me-2"></i>Çoklu depo yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>Barkod entegrasyonu</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Finans Yönetimi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-erp">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-chart-line"></i>
									</div>
									<h3 className="sofax-feature-title">Finans Yönetimi</h3>
									<p className="sofax-feature-description">
										Muhasebe, bütçe planlama, nakit akış yönetimi ve 
										detaylı finansal raporlama özellikleri.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Genel muhasebe</li>
										<li><i className="fas fa-check text-success me-2"></i>Bütçe ve planlama</li>
										<li><i className="fas fa-check text-success me-2"></i>Nakit akış takibi</li>
										<li><i className="fas fa-check text-success me-2"></i>Finansal raporlar</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Üretim Planlaması */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-erp">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-industry"></i>
									</div>
									<h3 className="sofax-feature-title">Üretim Planlaması</h3>
									<p className="sofax-feature-description">
										Üretim planlaması, kapasite yönetimi, kalite kontrol 
										ve üretim maliyeti analizi.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Üretim planlaması</li>
										<li><i className="fas fa-check text-success me-2"></i>Kapasite yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>Kalite kontrol</li>
										<li><i className="fas fa-check text-success me-2"></i>Maliyet analizi</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Satın Alma */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-erp">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-shopping-cart"></i>
									</div>
									<h3 className="sofax-feature-title">Satın Alma Yönetimi</h3>
									<p className="sofax-feature-description">
										Tedarikçi yönetimi, satın alma süreçleri, teklif alma 
										ve satın alma performans analizi.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Tedarikçi yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>Teklif alma süreci</li>
										<li><i className="fas fa-check text-success me-2"></i>Satın alma onay akışı</li>
										<li><i className="fas fa-check text-success me-2"></i>Performans analizi</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* İnsan Kaynakları */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-erp">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-users"></i>
									</div>
									<h3 className="sofax-feature-title">İnsan Kaynakları</h3>
									<p className="sofax-feature-description">
										Personel yönetimi, bordro, izin takibi ve 
										performans değerlendirme sistemi.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Personel dosyaları</li>
										<li><i className="fas fa-check text-success me-2"></i>Bordro yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>İzin ve mesai takibi</li>
										<li><i className="fas fa-check text-success me-2"></i>Performans değerlendirme</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Raporlama */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-erp">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-chart-pie"></i>
									</div>
									<h3 className="sofax-feature-title">Raporlama & Analiz</h3>
									<p className="sofax-feature-description">
										Kapsamlı raporlama, iş zekası, dashboard'lar ve 
										karar destek sistemleri.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Gerçek zamanlı dashboard</li>
										<li><i className="fas fa-check text-success me-2"></i>Özelleştirilebilir raporlar</li>
										<li><i className="fas fa-check text-success me-2"></i>İş zekası araçları</li>
										<li><i className="fas fa-check text-success me-2"></i>KPI takibi</li>
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
									<h2>Neden AgotaSoft ERP?</h2>
									<p>
										AgotaSoft ERP, işletmenizin tüm süreçlerini entegre ederek 
										operasyonel verimliliği artırır ve büyümenizi destekler.
									</p>
									
									<div className="mt-4">
										<div className="d-flex align-items-start mb-4">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-rocket"></i>
											</div>
											<div>
												<h5>%40 Daha Hızlı Süreçler</h5>
												<p>Otomatik iş akışları ve entegre sistemlerle süreç sürelerinizi kısaltın.</p>
											</div>
										</div>
										
										<div className="d-flex align-items-start mb-4">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-shield-alt"></i>
											</div>
											<div>
												<h5>Yüksek Güvenlik</h5>
												<p>256-bit SSL şifreleme ve çoklu yetkilendirme ile verileriniz güvende.</p>
											</div>
										</div>
										
										<div className="d-flex align-items-start mb-4">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-cloud"></i>
											</div>
											<div>
												<h5>Bulut Tabanlı</h5>
												<p>Her yerden erişim, otomatik yedekleme ve güncellemeler.</p>
											</div>
										</div>
									</div>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-thumb">
									<img 
										src="/images/about/DashboardTR.png" 
										alt="AgotaSoft ERP Dashboard" 
										className="img-fluid"
									/>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* ERP Benefits Showcase */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-thumb">
									<img 
										src="/images/about/Benefits.png" 
										alt="AgotaSoft ERP Faydaları" 
										className="img-fluid rounded"
									/>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-default-content">
									<h2>ERP Sistemi ile Elde Edeceğiniz Faydalar</h2>
									<p className="lead">
										AgotaSoft ERP ile işletmenizin tüm süreçlerini optimize edin 
										ve rekabette öne geçin.
									</p>
									
									<div className="row mt-4">
										<div className="col-6">
											<div className="text-center mb-4">
												<div className="sofax-stat-number h3 text-success">%60</div>
												<p className="sofax-stat-label">Zaman Tasarrufu</p>
											</div>
										</div>
										<div className="col-6">
											<div className="text-center mb-4">
												<div className="sofax-stat-number h3 text-success">%45</div>
												<p className="sofax-stat-label">Maliyet Azalması</p>
											</div>
										</div>
										<div className="col-6">
											<div className="text-center mb-4">
												<div className="sofax-stat-number h3 text-success">%80</div>
												<p className="sofax-stat-label">Verimlilik Artışı</p>
											</div>
										</div>
										<div className="col-6">
											<div className="text-center mb-4">
												<div className="sofax-stat-number h3 text-success">%90</div>
												<p className="sofax-stat-label">Müşteri Memnuniyeti</p>
											</div>
										</div>
									</div>
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
									<h2 className="mb-4">ERP Sisteminizi Bugün Kurmaya Başlayın</h2>
									<p className="mb-5 fs-5">
										30 günlük ücretsiz deneme ile AgotaSoft ERP'nin gücünü keşfedin. 
										Kurulum ve eğitim desteği dahil.
									</p>
									<div className="d-flex justify-content-center gap-4 flex-wrap">
										<a href="/contact-us" className="sofax-btn-primary">
											Ücretsiz Demo Talep Edin
										</a>
										<a href="/pricing" className="sofax-btn-secondary">
											Fiyatları İncele
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

export default ERPPage;
