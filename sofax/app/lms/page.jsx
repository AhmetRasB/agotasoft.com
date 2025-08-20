import FadeInUp from "@/components/animation/FadeInUp";
import Breadcrumb from "@/components/common/Breadcrumb";

function LMSPage() {
	return (
		<>
			<Breadcrumb title="AgotaSoft LMS Sistemi" />
			
			{/* Hero Section */}
			<div className="section sofax-section-padding sofax-hero">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-content">
									<h1 className="sofax-hero-title">
										AgotaSoft LMS: Kurumsal Eğitim ve Gelişim Platformunuz
									</h1>
									<p className="sofax-hero-subtitle">
										Ders yönetimi, online sınav sistemi, performans raporlama ve 
										sertifika yönetimi ile çalışanlarınızın gelişimini destekleyin. 
										Kurumsal eğitim süreçlerinizi dijitalleştirin.
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
											<i className="fas fa-graduation-cap"></i>
										</div>
										<h4>AgotaSoft LMS</h4>
										<p>Kurumsal Eğitim Platformu</p>
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
									<h2>LMS Modülleri ve Özellikleri</h2>
									<p>Kurumsal eğitim ve gelişim için ihtiyacınız olan tüm araçlar</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					
					<div className="row g-4">
						{/* Ders Yönetimi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-lms">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-chalkboard-teacher"></i>
									</div>
									<h3 className="sofax-feature-title">Ders Yönetimi</h3>
									<p className="sofax-feature-description">
										Interaktif ders içerikleri oluşturun, video dersler ekleyin 
										ve öğrenme materyallerini organize edin.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Video ders yükleme</li>
										<li><i className="fas fa-check text-success me-2"></i>İnteraktif içerikler</li>
										<li><i className="fas fa-check text-success me-2"></i>Ders programlama</li>
										<li><i className="fas fa-check text-success me-2"></i>Materyal kütüphanesi</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Sınav Sistemi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-lms">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-clipboard-check"></i>
									</div>
									<h3 className="sofax-feature-title">Online Sınav Sistemi</h3>
									<p className="sofax-feature-description">
										Çoktan seçmeli, açık uçlu ve karma sorularla 
										online sınavlar oluşturun ve otomatik değerlendirin.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Çoklu soru türleri</li>
										<li><i className="fas fa-check text-success me-2"></i>Otomatik değerlendirme</li>
										<li><i className="fas fa-check text-success me-2"></i>Zamanlı sınavlar</li>
										<li><i className="fas fa-check text-success me-2"></i>Soru bankası</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Performans Takibi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-lms">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-chart-line"></i>
									</div>
									<h3 className="sofax-feature-title">Performans Takibi</h3>
									<p className="sofax-feature-description">
										Öğrenci ilerlemelerini takip edin, performans 
										raporları oluşturun ve gelişim alanlarını belirleyin.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>İlerleme takibi</li>
										<li><i className="fas fa-check text-success me-2"></i>Performans raporları</li>
										<li><i className="fas fa-check text-success me-2"></i>Başarı analitics</li>
										<li><i className="fas fa-check text-success me-2"></i>Karşılaştırmalı analiz</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Sertifika Yönetimi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-lms">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-certificate"></i>
									</div>
									<h3 className="sofax-feature-title">Sertifika Yönetimi</h3>
									<p className="sofax-feature-description">
										Otomatik sertifika oluşturma, dijital rozet sistemi 
										ve başarı belgelerini yönetin.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Otomatik sertifika</li>
										<li><i className="fas fa-check text-success me-2"></i>Dijital rozetler</li>
										<li><i className="fas fa-check text-success me-2"></i>Özelleştirilebilir tasarım</li>
										<li><i className="fas fa-check text-success me-2"></i>Sertifika doğrulama</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* Kullanıcı Yönetimi */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-lms">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-users-cog"></i>
									</div>
									<h3 className="sofax-feature-title">Kullanıcı Yönetimi</h3>
									<p className="sofax-feature-description">
										Rol tabanlı erişim, grup yönetimi ve 
										kullanıcı hesaplarını merkezi olarak yönetin.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Rol tabanlı erişim</li>
										<li><i className="fas fa-check text-success me-2"></i>Grup yönetimi</li>
										<li><i className="fas fa-check text-success me-2"></i>Toplu kullanıcı ekleme</li>
										<li><i className="fas fa-check text-success me-2"></i>Aktif Dizin entegrasyonu</li>
									</ul>
								</div>
							</FadeInUp>
						</div>

						{/* İletişim Araçları */}
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-feature-card sofax-solution-lms">
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className="fas fa-comments"></i>
									</div>
									<h3 className="sofax-feature-title">İletişim Araçları</h3>
									<p className="sofax-feature-description">
										Forum, mesajlaşma, canlı sohbet ve 
										video konferans araçları ile etkileşimi artırın.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Tartışma forumları</li>
										<li><i className="fas fa-check text-success me-2"></i>Anlık mesajlaşma</li>
										<li><i className="fas fa-check text-success me-2"></i>Video konferans</li>
										<li><i className="fas fa-check text-success me-2"></i>Bildirim sistemi</li>
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
									<h2>Kurumsal Eğitimde Yeni Dönem</h2>
									<p>
										AgotaSoft LMS ile çalışanlarınızın gelişimini destekleyin, 
										eğitim süreçlerinizi optimize edin ve kurumsal bilgiyi paylaşın.
									</p>
									
									<div className="mt-4">
										<div className="d-flex align-items-start mb-4">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-graduation-cap"></i>
											</div>
											<div>
												<h5>%80 Daha Etkili Öğrenme</h5>
												<p>İnteraktif içerikler ve gamification ile öğrenme verimliliğini artırın.</p>
											</div>
										</div>
										
										<div className="d-flex align-items-start mb-4">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-clock"></i>
											</div>
											<div>
												<h5>%60 Zaman Tasarrufu</h5>
												<p>Otomatik değerlendirme ve raporlama ile eğitim yönetiminde zaman kazanın.</p>
											</div>
										</div>
										
										<div className="d-flex align-items-start mb-4">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-mobile-alt"></i>
											</div>
											<div>
												<h5>Her Yerden Erişim</h5>
												<p>Mobil uyumlu tasarım ile çalışanlar her yerden eğitimlere erişebilir.</p>
											</div>
										</div>
									</div>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-hero-thumb">
									<div className="text-center p-5 bg-primary text-white rounded">
										<div className="mb-4">
											<i className="fas fa-chart-bar" style={{fontSize: '64px', opacity: '0.8'}}></i>
										</div>
										<h4>LMS Performans Analizi</h4>
										<p>Eğitim süreçlerinizi analiz edin ve optimize edin</p>
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Use Cases Section */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2>Kullanım Alanları</h2>
									<p>AgotaSoft LMS'in farklı sektörlerdeki uygulama alanları</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					
					<div className="row g-4">
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="text-center p-4">
									<div className="sofax-feature-icon mx-auto mb-3" style={{width: '80px', height: '80px', fontSize: '32px'}}>
										<i className="fas fa-building"></i>
									</div>
									<h5>Kurumsal Eğitim</h5>
									<p>Çalışan oryantasyonu, beceri geliştirme ve sürekli eğitim programları.</p>
								</div>
							</FadeInUp>
						</div>
						
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="text-center p-4">
									<div className="sofax-feature-icon mx-auto mb-3" style={{width: '80px', height: '80px', fontSize: '32px'}}>
										<i className="fas fa-user-tie"></i>
									</div>
									<h5>Satış Eğitimi</h5>
									<p>Ürün bilgisi, satış teknikleri ve müşteri hizmetleri eğitimleri.</p>
								</div>
							</FadeInUp>
						</div>
						
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="text-center p-4">
									<div className="sofax-feature-icon mx-auto mb-3" style={{width: '80px', height: '80px', fontSize: '32px'}}>
										<i className="fas fa-shield-alt"></i>
									</div>
									<h5>Uyumluluk Eğitimi</h5>
									<p>İş güvenliği, KVKK, kalite yönetimi ve yasal uyumluluk eğitimleri.</p>
								</div>
							</FadeInUp>
						</div>
						
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="text-center p-4">
									<div className="sofax-feature-icon mx-auto mb-3" style={{width: '80px', height: '80px', fontSize: '32px'}}>
										<i className="fas fa-laptop-code"></i>
									</div>
									<h5>Teknik Eğitim</h5>
									<p>Yazılım eğitimleri, teknik beceri geliştirme ve sertifikasyon programları.</p>
								</div>
							</FadeInUp>
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
									<span className="sofax-stat-number">50K+</span>
									<p className="sofax-stat-label">Aktif Öğrenci</p>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="sofax-stat-item">
									<span className="sofax-stat-number">1000+</span>
									<p className="sofax-stat-label">Tamamlanan Kurs</p>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="sofax-stat-item">
									<span className="sofax-stat-number">95%</span>
									<p className="sofax-stat-label">Başarı Oranı</p>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="sofax-stat-item">
									<span className="sofax-stat-number">500+</span>
									<p className="sofax-stat-label">Kurumsal Müşteri</p>
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
									<h2 className="mb-4">Kurumsal Eğitim Dönüşümünüzü Başlatın</h2>
									<p className="mb-5 fs-5">
										30 günlük ücretsiz deneme ile AgotaSoft LMS'in gücünü keşfedin. 
										Kurulum, içerik yükleme ve eğitim desteği dahil.
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

export default LMSPage;
