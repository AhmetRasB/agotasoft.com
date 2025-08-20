import BreadCrumb from "@/components/common/Breadcrumb";
import FadeInUp from "@/components/animation/FadeInUp";

export const metadata = {
	title: "AgotaSoft İletişim | Bizimle İletişime Geçin - Demo Talep Edin",
	description: "AgotaSoft ERP, CRM, Ön Muhasebe ve LMS çözümleri hakkında bilgi almak, demo talep etmek için bizimle iletişime geçin.",
	keywords: "AgotaSoft iletişim, demo talep, yazılım danışmanlığı, ERP demo, CRM demo",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft İletişim | Demo Talep Edin",
		description: "Yazılım çözümlerimiz hakkında bilgi almak için bizimle iletişime geçin.",
		type: "website",
		url: "https://agotasoft.com/contact-us",
	},
};

function ContactUs() {
	return (
		<>
			<BreadCrumb title="İletişim" />
			
			{/* Contact Hero Section */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center mb-5">
									<h1>Bizimle İletişime Geçin</h1>
									<p className="lead">
										AgotaSoft yazılım çözümleri hakkında detaylı bilgi almak, 
										demo talep etmek veya projelerinizi görüşmek için bizimle iletişime geçin.
									</p>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Info & Form Section */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row g-5">
						{/* Contact Information */}
						<div className="col-lg-4">
							<FadeInUp>
								<div className="sofax-contact-info">
									<h3 className="mb-4">İletişim Bilgileri</h3>
									
									<div className="sofax-contact-item mb-4">
										<div className="sofax-feature-icon me-3" style={{width: '50px', height: '50px', fontSize: '20px'}}>
											<i className="fas fa-map-marker-alt"></i>
										</div>
										<div>
											<h6>Adres</h6>
											<p>İstanbul, Üsküdar</p>
										</div>
									</div>
									

									<div className="sofax-contact-item mb-4">
										<div className="sofax-feature-icon me-3" style={{width: '50px', height: '50px', fontSize: '20px'}}>
											<i className="fas fa-envelope"></i>
										</div>
										<div>
											<h6>E-posta</h6>
											<p>
												<a href="mailto:info@agotasoft.com">info@agotasoft.com</a>
											</p>
										</div>
									</div>
									


									{/* Social Media */}
									<div className="sofax-social-links mt-4">
										<h6>Sosyal Medya</h6>
										<div className="d-flex gap-3">
											<a href="https://linkedin.com/company/agotasoft" target="_blank" className="sofax-social-link">
												<i className="fab fa-linkedin"></i>
											</a>
											<a href="https://twitter.com/agotasoft" target="_blank" className="sofax-social-link">
												<i className="fab fa-twitter"></i>
											</a>
											<a href="https://facebook.com/agotasoft" target="_blank" className="sofax-social-link">
												<i className="fab fa-facebook"></i>
											</a>
											<a href="https://instagram.com/agotasoft" target="_blank" className="sofax-social-link">
												<i className="fab fa-instagram"></i>
											</a>
										</div>
									</div>
								</div>
							</FadeInUp>
						</div>

						{/* Contact Form */}
						<div className="col-lg-8">
							<FadeInUp>
								<div className="sofax-contact-form">
									<h3 className="mb-4">Demo Talep Formu</h3>
									<p className="mb-4">
										Aşağıdaki formu doldurarak ücretsiz demo talebinde bulunabilir, 
										uzman ekibimizle görüşme ayarlayabilirsiniz.
									</p>
									
									<form className="sofax-form">
										<div className="row">
											<div className="col-md-6">
												<div className="sofax-form-group">
													<label className="sofax-form-label">Ad Soyad *</label>
													<input 
														type="text" 
														className="sofax-form-control" 
														placeholder="Adınız ve soyadınız"
														required
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="sofax-form-group">
													<label className="sofax-form-label">Şirket Adı *</label>
													<input 
														type="text" 
														className="sofax-form-control" 
														placeholder="Şirket adınız"
														required
													/>
												</div>
											</div>
										</div>
										
										<div className="row">
											<div className="col-md-6">
												<div className="sofax-form-group">
													<label className="sofax-form-label">E-posta *</label>
													<input 
														type="email" 
														className="sofax-form-control" 
														placeholder="ornek@sirket.com"
														required
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="sofax-form-group">
													<label className="sofax-form-label">Telefon *</label>
													<input 
														type="tel" 
														className="sofax-form-control" 
														placeholder="+90 (5xx) xxx xx xx"
														required
													/>
												</div>
											</div>
										</div>
										
										<div className="row">
											<div className="col-md-6">
												<div className="sofax-form-group">
													<label className="sofax-form-label">İlgilendiğiniz Çözüm *</label>
													<select className="sofax-form-control" required>
														<option value="">Seçiniz</option>
														<option value="erp">ERP Sistemi</option>
														<option value="crm">CRM Sistemi</option>
														<option value="accounting">Ön Muhasebe</option>
														<option value="lms">LMS Sistemi</option>
														<option value="all">Tüm Çözümler</option>
														<option value="other">Diğer</option>
													</select>
												</div>
											</div>
											<div className="col-md-6">
												<div className="sofax-form-group">
													<label className="sofax-form-label">Çalışan Sayısı</label>
													<select className="sofax-form-control">
														<option value="">Seçiniz</option>
														<option value="1-10">1-10 kişi</option>
														<option value="11-50">11-50 kişi</option>
														<option value="51-200">51-200 kişi</option>
														<option value="201-500">201-500 kişi</option>
														<option value="500+">500+ kişi</option>
													</select>
												</div>
											</div>
										</div>
										
										<div className="sofax-form-group">
											<label className="sofax-form-label">Mesajınız</label>
											<textarea 
												className="sofax-form-control" 
												rows="5" 
												placeholder="Projeniz, ihtiyaçlarınız veya sorularınız hakkında detaylar..."
											></textarea>
										</div>
										
										<div className="sofax-form-group">
											<div className="form-check">
												<input 
													className="form-check-input" 
													type="checkbox" 
													id="privacy" 
													required
												/>
												<label className="form-check-label" htmlFor="privacy">
													<a href="/privacy-policy" target="_blank">Gizlilik Politikası</a>'nı okudum ve kabul ediyorum. *
												</label>
											</div>
										</div>
										
										<div className="sofax-form-group">
											<div className="form-check">
												<input 
													className="form-check-input" 
													type="checkbox" 
													id="newsletter"
												/>
												<label className="form-check-label" htmlFor="newsletter">
													AgotaSoft'tan güncellemeler ve özel teklifler almak istiyorum.
												</label>
											</div>
										</div>
										
										<button type="submit" className="sofax-btn-primary">
											<i className="fas fa-paper-plane me-2"></i>
											Demo Talep Et
										</button>
									</form>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Quick Contact Options */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center mb-5">
									<h2>Hızlı İletişim Seçenekleri</h2>
									<p>Size en uygun iletişim yöntemini seçin</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					<div className="row g-4">

						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-contact-option text-center p-4">
									<div className="sofax-feature-icon mx-auto mb-3">
										<i className="fas fa-comments"></i>
									</div>
									<h5>Canlı Destek</h5>
									<p>Online chat ile anında yardım alın</p>
									<button className="sofax-btn-secondary" onclick="openChat()">
										Sohbet Başlat
									</button>
								</div>
							</FadeInUp>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-contact-option text-center p-4">
									<div className="sofax-feature-icon mx-auto mb-3">
										<i className="fas fa-calendar"></i>
									</div>
									<h5>Randevu Al</h5>
									<p>Uygun saatte detaylı görüşme ayarlayın</p>
									<a href="https://calendly.com/agotasoft" target="_blank" className="sofax-btn-secondary">
										Randevu Al
									</a>
								</div>
							</FadeInUp>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<FadeInUp>
								<div className="sofax-contact-option text-center p-4">
									<div className="sofax-feature-icon mx-auto mb-3">
										<i className="fas fa-envelope"></i>
									</div>
									<h5>E-posta Gönder</h5>
									<p>Detaylı sorularınızı e-posta ile iletin</p>
									<a href="mailto:info@agotasoft.com" className="sofax-btn-secondary">
										E-posta Gönder
									</a>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="section">
				<div className="container-fluid px-0">
					<div className="row g-0">
						<div className="col-12">
							<div style={{height: '400px', backgroundColor: '#f8f9fa', position: 'relative'}}>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.31!2d29.0236!3d41.0214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zw5xza8O8ZGFyLCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1234567890!5m2!1str!2str"
									width="100%"
									height="400"
									style={{border: 0}}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="AgotaSoft Yazılım Ofis Konumu"
								></iframe>
								<div className="position-absolute top-50 start-50 translate-middle">
									<div className="bg-white p-3 rounded shadow">
										<h6 className="mb-1">AgotaSoft Yazılım</h6>
										<p className="small mb-0">Üsküdar, İstanbul</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactUs;
