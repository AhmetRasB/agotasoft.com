import BreadCrumb from "@/components/common/Breadcrumb";
import FadeInUp from "@/components/animation/FadeInUp";
import AutoSlider from "@/components/common/auto-slider";

export const metadata = {
	title: "AgotaSoft Çözümlerimiz | ERP, CRM, Ön Muhasebe ve LMS Hizmetleri",
	description: "AgotaSoft'ın sunduğu ERP, CRM, Ön Muhasebe ve LMS çözümlerini keşfedin. İşletmenizin ihtiyaçlarına özel yazılım hizmetleri.",
	keywords: "AgotaSoft hizmetler, ERP çözümleri, CRM hizmetleri, ön muhasebe, LMS eğitim sistemi",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft Çözümlerimiz | Yazılım Hizmetleri",
		description: "İşletmenizin dijital dönüşümü için kapsamlı yazılım çözümleri.",
		type: "website",
		url: "https://agotasoft.com/service",
	},
};

function ServicePage() {
	return (
		<>
			<BreadCrumb title="Çözümlerimiz" />
			
			{/* Services Hero */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center mb-5">
									<h1>İşletmenizi Güçlendiren Yazılım Çözümleri</h1>
									<p className="lead">
										ERP, CRM, Ön Muhasebe ve LMS alanlarında uzman ekibimizle 
										işletmenizin tüm ihtiyaçlarına yanıt veriyoruz.
									</p>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Main Services */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row g-4">
						{/* ERP Service */}
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-product-card sofax-solution-erp h-100">
									<div className="sofax-product-icon sofax-solution-icon">
										<i className="fas fa-cogs"></i>
									</div>
									<h3 className="sofax-product-title">ERP Sistemi</h3>
									<p className="sofax-product-description">
										Üretimden finansa, stok yönetiminden satın almaya kadar tüm işletme 
										süreçlerinizi tek platformda yönetin. Entegre ERP çözümümüz ile 
										operasyonel verimliliğinizi artırın.
									</p>
									<ul className="list-unstyled mb-4">
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Stok ve Depo Yönetimi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Finans ve Muhasebe</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Üretim Planlaması</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Satın Alma Yönetimi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>İnsan Kaynakları</li>
									</ul>
									<a href="/erp" className="sofax-btn-primary">Detaylı Bilgi</a>
								</div>
							</FadeInUp>
						</div>

						{/* CRM Service */}
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-product-card sofax-solution-crm h-100">
									<div className="sofax-product-icon sofax-solution-icon">
										<i className="fas fa-handshake"></i>
									</div>
									<h3 className="sofax-product-title">CRM Sistemi</h3>
									<p className="sofax-product-description">
										Müşteri ilişkilerinizi güçlendirin, satış süreçlerinizi optimize edin 
										ve pazarlama otomasyonu ile büyümenizi hızlandırın. 360° müşteri 
										görünümü ile satışlarınızı artırın.
									</p>
									<ul className="list-unstyled mb-4">
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Müşteri Veritabanı Yönetimi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Satış Fırsatı Takibi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Pazarlama Otomasyonu</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Müşteri Hizmetleri</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Analiz ve Raporlama</li>
									</ul>
									<a href="/crm" className="sofax-btn-primary">Detaylı Bilgi</a>
								</div>
							</FadeInUp>
						</div>

						{/* Pre-Accounting Service */}
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-product-card sofax-solution-accounting h-100">
									<div className="sofax-product-icon sofax-solution-icon">
										<i className="fas fa-calculator"></i>
									</div>
									<h3 className="sofax-product-title">Ön Muhasebe Sistemi</h3>
									<p className="sofax-product-description">
										E-Fatura entegrasyonu, cari hesap yönetimi ve gider takibi ile 
										KOBİ'lerin finansal süreçlerini kolaylaştıran kapsamlı ön muhasebe çözümü.
									</p>
									<ul className="list-unstyled mb-4">
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>E-Fatura Entegrasyonu</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Cari Hesap Yönetimi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Gider Takibi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Vergi Yönetimi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Finansal Raporlama</li>
									</ul>
									<a href="/pre-accounting" className="sofax-btn-primary">Detaylı Bilgi</a>
								</div>
							</FadeInUp>
						</div>

						{/* LMS Service */}
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-product-card sofax-solution-lms h-100">
									<div className="sofax-product-icon sofax-solution-icon">
										<i className="fas fa-graduation-cap"></i>
									</div>
									<h3 className="sofax-product-title">LMS Eğitim Sistemi</h3>
									<p className="sofax-product-description">
										Ders yönetimi, online sınav sistemi, performans raporlama ve sertifika 
										yönetimi ile çalışanlarınızın gelişimini destekleyin.
									</p>
									<ul className="list-unstyled mb-4">
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Online Ders Yönetimi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Sınav Sistemi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Sertifika Yönetimi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Performans Takibi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>İletişim Araçları</li>
									</ul>
									<a href="/lms" className="sofax-btn-primary">Detaylı Bilgi</a>
								</div>
							</FadeInUp>
						</div>

						{/* QrMenu Service */}
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-product-card sofax-solution-qrmenu h-100">
									<div className="sofax-product-icon sofax-solution-icon">
										<i className="fas fa-qrcode"></i>
									</div>
									<h3 className="sofax-product-title">QrMenu Sistemi</h3>
									<p className="sofax-product-description">
										Restoran ve kafeler için temassız dijital menü çözümü. QR kod ile 
										kolay erişim, sipariş yönetimi ve ödeme entegrasyonu.
									</p>
									<ul className="list-unstyled mb-4">
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Dijital Menü Yönetimi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>QR Kod Entegrasyonu</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Sipariş Takibi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Ödeme Entegrasyonu</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Çoklu Dil Desteği</li>
									</ul>
									<a href="/contact-us" className="sofax-btn-primary">Detaylı Bilgi</a>
								</div>
							</FadeInUp>
						</div>

						{/* Corporate Website Service */}
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-product-card sofax-solution-website h-100">
									<div className="sofax-product-icon sofax-solution-icon">
										<i className="fas fa-globe"></i>
									</div>
									<h3 className="sofax-product-title">Kurumsal Website</h3>
									<p className="sofax-product-description">
										Profesyonel kurumsal web sitesi tasarımı ve geliştirme. Modern, 
										responsive ve SEO uyumlu web çözümleri.
									</p>
									<ul className="list-unstyled mb-4">
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Responsive Tasarım</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>SEO Optimizasyonu</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>İçerik Yönetim Sistemi</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Hızlı Yükleme</li>
										<li className="mb-2"><i className="fas fa-check text-success me-2"></i>Güvenlik Sertifikaları</li>
									</ul>
									<a href="/contact-us" className="sofax-btn-primary">Detaylı Bilgi</a>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Why Choose Our Services */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-default-content">
									<h2>Neden AgotaSoft Çözümlerini Seçmelisiniz?</h2>
									<p>
										15 yıllık sektör deneyimi, uzman ekip ve müşteri odaklı yaklaşımımızla 
										işletmenizin dijital dönüşümünde güvenilir ortağınızız.
									</p>
									
									<div className="row mt-4">
										<div className="col-md-6">
											<div className="sofax-feature-item mb-4">
												<div className="sofax-feature-icon me-3" style={{width: '50px', height: '50px', fontSize: '20px'}}>
													<i className="fas fa-rocket"></i>
												</div>
												<div>
													<h6>Hızlı Implementasyon</h6>
													<p className="small">2-4 hafta içinde sisteminizi devreye alıyoruz.</p>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="sofax-feature-item mb-4">
												<div className="sofax-feature-icon me-3" style={{width: '50px', height: '50px', fontSize: '20px'}}>
													<i className="fas fa-headset"></i>
												</div>
												<div>
													<h6>7/24 Destek</h6>
													<p className="small">Kesintisiz teknik destek ve müşteri hizmetleri.</p>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="sofax-feature-item mb-4">
												<div className="sofax-feature-icon me-3" style={{width: '50px', height: '50px', fontSize: '20px'}}>
													<i className="fas fa-shield-alt"></i>
												</div>
												<div>
													<h6>Yüksek Güvenlik</h6>
													<p className="small">ISO 27001 sertifikalı güvenlik standartları.</p>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="sofax-feature-item mb-4">
												<div className="sofax-feature-icon me-3" style={{width: '50px', height: '50px', fontSize: '20px'}}>
													<i className="fas fa-cog"></i>
												</div>
												<div>
													<h6>Özelleştirme</h6>
													<p className="small">İşletmenizin ihtiyaçlarına özel çözümler.</p>
												</div>
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
										src="/images/v2/dashboard.png" 
										alt="AgotaSoft Çözümleri" 
										className="img-fluid"
									/>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Partners */}
			<AutoSlider />

			{/* CTA */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center">
									<h2 className="mb-4">Hangi Çözüm İşletmenize Uygun?</h2>
									<p className="mb-5 fs-5">
										Uzman danışmanlarımızla görüşerek işletmenizin ihtiyaçlarına 
										en uygun çözümü belirleyin.
									</p>
									<div className="d-flex justify-content-center gap-4 flex-wrap">
										<a href="/contact-us" className="sofax-btn-primary">
											Ücretsiz Danışmanlık
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

export default ServicePage;
