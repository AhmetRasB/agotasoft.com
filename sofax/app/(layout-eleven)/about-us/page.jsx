import FadeInUp from "@/components/animation/FadeInUp";
import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/common/auto-slider";

export const metadata = {
	title: "AgotaSoft Hakkımızda | İşletmenizi Geleceğe Taşıyan Yazılım Çözümleri",
	description: "AgotaSoft olarak, ERP, CRM, Ön Muhasebe ve LMS alanlarında uzman ekibimizle işletmelerin dijital dönüşümüne öncülük ediyoruz.",
	keywords: "AgotaSoft hakkımızda, yazılım firması, ERP uzmanı, CRM çözümleri, dijital dönüşüm",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft Hakkımızda | Yazılım Çözümlerinde Uzman Ekip",
		description: "3 yıllık deneyimimizle işletmelerin dijital dönüşümüne öncülük ediyoruz.",
		type: "website",
		url: "https://agotasoft.com/about-us",
	},
};

function AboutUs() {
	return (
		<>
			<BreadCrumb title="Hakkımızda" />
			
			{/* Hero About Section */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<FadeInUp>
								<div className="sofax-default-content text-center">
									<h1>AgotaSoft: İşletmenizi Geleceğe Taşıyan Yazılım Ortağınız</h1>
									<p className="lead">
										2021 yılından bu yana ERP, CRM, Ön Muhasebe ve LMS alanlarında 
										uzman ekibimizle işletmelerin dijital dönüşümüne öncülük ediyoruz.
									</p>
									<p>
										Türkiye'nin önde gelen yazılım firmalarından biri olan AgotaSoft, 
										işletmelerin operasyonel verimliliğini artıran, maliyetleri 
										düşüren ve rekabet gücünü yükselten entegre yazılım çözümleri sunmaktadır.
									</p>
									<div className="mt-5">
										<div className="row">
											<div className="col-6">
												<div className="sofax-stat-item text-center">
													<span className="sofax-stat-number h2 text-primary">3+</span>
													<p className="sofax-stat-label">Yıllık Deneyim</p>
												</div>
											</div>
											<div className="col-6">
												<div className="sofax-stat-item text-center">
													<span className="sofax-stat-number h2 text-primary">150+</span>
													<p className="sofax-stat-label">Mutlu Müşteri</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Mission Vision Section */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2>Misyon & Vizyon</h2>
								</div>
							</FadeInUp>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-feature-card h-100">
									<div className="sofax-feature-icon">
										<i className="fas fa-bullseye"></i>
									</div>
									<h3 className="sofax-feature-title">Misyonumuz</h3>
									<p className="sofax-feature-description">
										İşletmelerin dijital dönüşümünde güvenilir ortakları olmak, 
										teknoloji ile iş süreçlerini optimize ederek müşterilerimizin 
										rekabet avantajı elde etmelerini sağlamak.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Müşteri odaklı çözümler</li>
										<li><i className="fas fa-check text-success me-2"></i>Sürekli yenilik</li>
										<li><i className="fas fa-check text-success me-2"></i>Kaliteli hizmet</li>
										<li><i className="fas fa-check text-success me-2"></i>Güvenilir ortaklık</li>
									</ul>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-6">
							<FadeInUp>
								<div className="sofax-feature-card h-100">
									<div className="sofax-feature-icon">
										<i className="fas fa-eye"></i>
									</div>
									<h3 className="sofax-feature-title">Vizyonumuz</h3>
									<p className="sofax-feature-description">
										Türkiye'nin ve bölgenin önde gelen yazılım çözümleri sağlayıcısı 
										olarak, işletmelerin geleceğini şekillendiren teknolojilerin 
										öncüsü olmak.
									</p>
									<ul className="list-unstyled mt-3">
										<li><i className="fas fa-check text-success me-2"></i>Sektör liderliği</li>
										<li><i className="fas fa-check text-success me-2"></i>Uluslararası büyüme</li>
										<li><i className="fas fa-check text-success me-2"></i>Teknoloji öncülüğü</li>
										<li><i className="fas fa-check text-success me-2"></i>Sürdürülebilir gelişim</li>
									</ul>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Values Section */}
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2>Değerlerimiz</h2>
									<p>AgotaSoft'ı farklı kılan temel değerlerimiz</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="text-center">
									<div className="sofax-feature-icon mx-auto mb-3">
										<i className="fas fa-handshake"></i>
									</div>
									<h5>Güven</h5>
									<p>Müşterilerimizle uzun vadeli, güvene dayalı ilişkiler kuruyoruz.</p>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="text-center">
									<div className="sofax-feature-icon mx-auto mb-3">
										<i className="fas fa-lightbulb"></i>
									</div>
									<h5>Yenilik</h5>
									<p>Sürekli araştırma ve geliştirme ile teknolojide öncü olmaya odaklanıyoruz.</p>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="text-center">
									<div className="sofax-feature-icon mx-auto mb-3">
										<i className="fas fa-award"></i>
									</div>
									<h5>Kalite</h5>
									<p>Her projede mükemmellik standardını yakalama konusunda kararlıyız.</p>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="text-center">
									<div className="sofax-feature-icon mx-auto mb-3">
										<i className="fas fa-users"></i>
									</div>
									<h5>Ekip Ruhu</h5>
									<p>Güçlü ekip çalışması ile en zorlu projeleri başarıyla tamamlıyoruz.</p>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			{/* Why Choose Us */}
			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<FadeInUp>
								<div className="sofax-default-content text-center">
									<h2>Neden AgotaSoft'ı Seçmelisiniz?</h2>
									<p className="lead mb-5">
										3 yıllık deneyimimiz, uzman ekibimiz ve müşteri odaklı yaklaşımımızla 
										işletmenizin dijital dönüşümünde en güvenilir ortağınızız.
									</p>
								</div>
							</FadeInUp>
							
							<div className="row g-4 mt-4">
								<div className="col-lg-6">
									<FadeInUp>
										<div className="d-flex align-items-start">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-cogs"></i>
											</div>
											<div>
												<h5>Uzman Kadro</h5>
												<p>Alanında uzman 15+ yazılım geliştirici ve danışman ekibimiz.</p>
											</div>
										</div>
									</FadeInUp>
								</div>
								
								<div className="col-lg-6">
									<FadeInUp>
										<div className="d-flex align-items-start">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-headset"></i>
											</div>
											<div>
												<h5>7/24 Destek</h5>
												<p>Kesintisiz teknik destek ve müşteri hizmetleri.</p>
											</div>
										</div>
									</FadeInUp>
								</div>
								
								<div className="col-lg-6">
									<FadeInUp>
										<div className="d-flex align-items-start">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-shield-alt"></i>
											</div>
											<div>
												<h5>Yüksek Güvenlik</h5>
												<p>ISO 27001 sertifikalı güvenlik standartları.</p>
											</div>
										</div>
									</FadeInUp>
								</div>
								
								<div className="col-lg-6">
									<FadeInUp>
										<div className="d-flex align-items-start">
											<div className="sofax-feature-icon me-4" style={{width: '60px', height: '60px', fontSize: '24px'}}>
												<i className="fas fa-puzzle-piece"></i>
											</div>
											<div>
												<h5>Kolay Entegrasyon</h5>
												<p>Mevcut sistemlerinizle sorunsuz entegrasyon.</p>
											</div>
										</div>
									</FadeInUp>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	);
}

export default AboutUs;
