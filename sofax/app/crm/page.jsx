import FadeInUp from "@/components/animation/FadeInUp";
import Breadcrumb from "@/components/common/Breadcrumb";

function CRMPage() {
	return (
		<>
			<Breadcrumb title="AgotaSoft CRM Sistemi" />
			
			{/* Hero Section */}
			<div className="section sofax-section-padding sofax-hero">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-content">
									<h1 className="sofax-hero-title">
										AgotaSoft CRM: Müşteri İlişkilerinizi Güçlendirin, Satışlarınızı Artırın
									</h1>
									<p className="sofax-hero-subtitle">
										Kapsamlı müşteri veritabanı, satış fırsatı takibi, pazarlama otomasyonu 
										ve müşteri hizmetleri ile işletmenizin büyümesini hızlandırın. 
										Müşteri memnuniyetini artırın, satış performansınızı optimize edin.
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
										src="/images/CRM.png" 
										alt="AgotaSoft CRM Dashboard" 
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
									<h2>CRM Modülleri ve Özellikleri</h2>
									<p>Müşteri ilişkilerinizi yönetmek için ihtiyacınız olan tüm araçlar</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					
					<div className="row g-4">
						{/* Müşteri Veritabanı */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-crm">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-database"></i>
									</div>
									<h3 className="sofax-feature-title">Müşteri Veritabanı</h3>
									<p className="sofax-feature-description">
										Tüm müşteri bilgilerinizi merkezi bir veritabanında organize edin. 
										Detaylı müşteri profilleri ve etkileşim geçmişi.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>360° müşteri görünümü</li>
										<li><i className="fas fa-check text-success me-2"></i>İletişim geçmişi</li>
										<li><i className="fas fa-check text-success me-2"></i>Müşteri segmentasyonu</li>
										<li><i className="fas fa-check text-success me-2"></i>Özel alanlar</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Satış Yönetimi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-crm">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-handshake"></i>
									</div>
									<h3 className="sofax-feature-title">Satış Yönetimi</h3>
									<p className="sofax-feature-description">
										Satış süreçlerinizi optimize edin, fırsatları takip edin 
										ve satış performansınızı artırın.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Satış hunisi yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>Fırsat takibi</li>
										<li><i className="fas fa-check text-success me-2"></i>Teklif yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>Satış raporları</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Pazarlama Otomasyonu */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-crm">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-bullhorn"></i>
									</div>
									<h3 className="sofax-feature-title">Pazarlama Otomasyonu</h3>
									<p className="sofax-feature-description">
										E-posta kampanyaları, lead nurturing ve pazarlama 
										süreçlerinizi otomatikleştirin.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>E-posta kampanyaları</li>
										<li><i className="fas fa-check text-success me-2"></i>Lead scoring</li>
										<li><i className="fas fa-check text-success me-2"></i>Otomatik iş akışları</li>
										<li><i className="fas fa-check text-success me-2"></i>Kampanya analizi</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Müşteri Hizmetleri */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-crm">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-headset"></i>
									</div>
									<h3 className="sofax-feature-title">Müşteri Hizmetleri</h3>
									<p className="sofax-feature-description">
										Destek talepleri, ticket yönetimi ve müşteri 
										memnuniyeti takibi.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Ticket yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>Canlı destek</li>
										<li><i className="fas fa-check text-success me-2"></i>Bilgi bankası</li>
										<li><i className="fas fa-check text-success me-2"></i>Memnuniyet anketleri</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Raporlama */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-crm">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-chart-line"></i>
									</div>
									<h3 className="sofax-feature-title">Analiz & Raporlama</h3>
									<p className="sofax-feature-description">
										Satış performansı, müşteri davranışları ve 
										pazarlama ROI analizi.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Satış dashboard'u</li>
										<li><i className="fas fa-check text-success me-2"></i>Performans raporları</li>
										<li><i className="fas fa-check text-success me-2"></i>Müşteri analizi</li>
										<li><i className="fas fa-check text-success me-2"></i>ROI hesaplama</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Mobil Erişim */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-crm">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-mobile-alt"></i>
									</div>
									<h3 className="sofax-feature-title">Mobil Erişim</h3>
									<p className="sofax-feature-description">
										iOS ve Android uygulamaları ile her yerden 
										CRM sisteminize erişim.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Mobil uygulama</li>
										<li><i className="fas fa-check text-success me-2"></i>Offline çalışma</li>
										<li><i className="fas fa-check text-success me-2"></i>Push bildirimleri</li>
										<li><i className="fas fa-check text-success me-2"></i>Senkronizasyon</li>
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
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<FadeInUp>
								<div className="sofax-default-content text-center">
									<h2>CRM ile İşletmenizde Fark Yaratın</h2>
									<p className="lead mb-5">
										AgotaSoft CRM ile müşteri ilişkilerinizi güçlendirin, 
										satış süreçlerinizi optimize edin ve büyümenizi hızlandırın.
									</p>
								</div>
							</FadeInUp>
							
							<div className="row g-4 mt-4">
								<div className="col-lg-4">
									<FadeInUp>
										<div className="text-center">
											<div className="sofax-feature-icon mx-auto mb-3" style={{width: '80px', height: '80px', fontSize: '32px'}}>
												<i className="fas fa-chart-line"></i>
											</div>
											<h5>%35 Daha Fazla Satış</h5>
											<p>Etkili lead yönetimi ve satış süreç optimizasyonu ile satışlarınızı artırın.</p>
										</div>
									</FadeInUp>
								</div>
								
								<div className="col-lg-4">
									<FadeInUp>
										<div className="text-center">
											<div className="sofax-feature-icon mx-auto mb-3" style={{width: '80px', height: '80px', fontSize: '32px'}}>
												<i className="fas fa-heart"></i>
											</div>
											<h5>%50 Daha Yüksek Müşteri Memnuniyeti</h5>
											<p>Kişiselleştirilmiş hizmet ve hızlı yanıt süreleri ile müşteri memnuniyetini artırın.</p>
										</div>
									</FadeInUp>
								</div>
								
								<div className="col-lg-4">
									<FadeInUp>
										<div className="text-center">
											<div className="sofax-feature-icon mx-auto mb-3" style={{width: '80px', height: '80px', fontSize: '32px'}}>
												<i className="fas fa-clock"></i>
											</div>
											<h5>%60 Zaman Tasarrufu</h5>
											<p>Otomatik süreçler ve entegre sistem ile zaman tasarrufu sağlayın.</p>
										</div>
									</FadeInUp>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Stats Section */}
			<div className="sofax-stats">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="sofax-stat-item">
									<span className="sofax-stat-number">98%</span>
									<p className="sofax-stat-label">Müşteri Memnuniyeti</p>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="sofax-stat-item">
									<span className="sofax-stat-number">35%</span>
									<p className="sofax-stat-label">Satış Artışı</p>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="sofax-stat-item">
									<span className="sofax-stat-number">60%</span>
									<p className="sofax-stat-label">Zaman Tasarrufu</p>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="sofax-stat-item">
									<span className="sofax-stat-number">10K+</span>
									<p className="sofax-stat-label">Mutlu Kullanıcı</p>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center">
									<h2 className="mb-4">CRM Dönüşümünüzü Bugün Başlatın</h2>
									<p className="mb-5 fs-5">
										14 günlük ücretsiz deneme ile AgotaSoft CRM'in gücünü keşfedin. 
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

export default CRMPage;
