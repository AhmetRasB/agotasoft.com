"use client";

import FadeInUp from "@/components/animation/FadeInUp";
import { useCms } from "@/hooks/useCms";

const FALLBACK_VALUES = [
	{ icon: "fas fa-handshake", title: "Güven", text: "Müşterilerimizle uzun vadeli, güvene dayalı ilişkiler kuruyoruz." },
	{ icon: "fas fa-lightbulb", title: "Yenilik", text: "Sürekli araştırma ve geliştirme ile teknolojide öncü olmaya odaklanıyoruz." },
	{ icon: "fas fa-award", title: "Kalite", text: "Her projede mükemmellik standardını yakalama konusunda kararlıyız." },
	{ icon: "fas fa-users", title: "Ekip Ruhu", text: "Güçlü ekip çalışması ile en zorlu projeleri başarıyla tamamlıyoruz." },
];

const FALLBACK_WHY = [
	{ icon: "fas fa-cogs", title: "Uzman Kadro", text: "Alanında uzman 15+ yazılım geliştirici ve danışman ekibimiz." },
	{ icon: "fas fa-headset", title: "7/24 Destek", text: "Kesintisiz teknik destek ve müşteri hizmetleri." },
	{ icon: "fas fa-shield-alt", title: "Yüksek Güvenlik", text: "ISO 27001 sertifikalı güvenlik standartları." },
	{ icon: "fas fa-puzzle-piece", title: "Kolay Entegrasyon", text: "Mevcut sistemlerinizle sorunsuz entegrasyon." },
];

const FALLBACK_MISSION = ["Müşteri odaklı çözümler", "Sürekli yenilik", "Kaliteli hizmet", "Güvenilir ortaklık"];
const FALLBACK_VISION = ["Sektör liderliği", "Uluslararası büyüme", "Teknoloji öncülüğü", "Sürdürülebilir gelişim"];

export default function AboutContent() {
	const cms = useCms();
	const page = cms.pages?.about || {};
	const values = page.values?.length ? page.values : FALLBACK_VALUES;
	const whyItems = page.why_items?.length ? page.why_items : FALLBACK_WHY;
	const missionItems = page.mission_items?.length ? page.mission_items : FALLBACK_MISSION;
	const visionItems = page.vision_items?.length ? page.vision_items : FALLBACK_VISION;

	return (
		<>
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<FadeInUp>
								<div className="sofax-default-content text-center">
									<h1>{page.hero_title || "AgotaSoft: İşletmenizi Geleceğe Taşıyan Yazılım Ortağınız"}</h1>
									<p className="lead">
										{page.hero_subtitle ||
											"2021 yılından bu yana ERP, CRM, Ön Muhasebe ve LMS alanlarında uzman ekibimizle işletmelerin dijital dönüşümüne öncülük ediyoruz."}
									</p>
									<p>
										{page.body ||
											"Türkiye'nin önde gelen yazılım firmalarından biri olan AgotaSoft, işletmelerin operasyonel verimliliğini artıran, maliyetleri düşüren ve rekabet gücünü yükselten entegre yazılım çözümleri sunmaktadır."}
									</p>
									<div className="mt-5">
										<div className="row">
											<div className="col-6">
												<div className="sofax-stat-item text-center">
													<span className="sofax-stat-number h2 text-primary">{page.stat1_number || "3+"}</span>
													<p className="sofax-stat-label">{page.stat1_label || "Yıllık Deneyim"}</p>
												</div>
											</div>
											<div className="col-6">
												<div className="sofax-stat-item text-center">
													<span className="sofax-stat-number h2 text-primary">{page.stat2_number || "150+"}</span>
													<p className="sofax-stat-label">{page.stat2_label || "Mutlu Müşteri"}</p>
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

			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2>{page.mission_heading || "Misyon & Vizyon"}</h2>
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
									<h3 className="sofax-feature-title">{page.mission_title || "Misyonumuz"}</h3>
									<p className="sofax-feature-description">
										{page.mission_text ||
											"İşletmelerin dijital dönüşümünde güvenilir ortakları olmak, teknoloji ile iş süreçlerini optimize ederek müşterilerimizin rekabet avantajı elde etmelerini sağlamak."}
									</p>
									<ul className="list-unstyled mt-3">
										{missionItems.map((item) => (
											<li key={item}>
												<i className="fas fa-check text-success me-2"></i>
												{item}
											</li>
										))}
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
									<h3 className="sofax-feature-title">{page.vision_title || "Vizyonumuz"}</h3>
									<p className="sofax-feature-description">
										{page.vision_text ||
											"Türkiye'nin ve bölgenin önde gelen yazılım çözümleri sağlayıcısı olarak, işletmelerin geleceğini şekillendiren teknolojilerin öncüsü olmak."}
									</p>
									<ul className="list-unstyled mt-3">
										{visionItems.map((item) => (
											<li key={item}>
												<i className="fas fa-check text-success me-2"></i>
												{item}
											</li>
										))}
									</ul>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="sofax-section-title text-center mb-5">
									<h2>{page.values_title || "Değerlerimiz"}</h2>
									<p>{page.values_subtitle || "AgotaSoft'ı farklı kılan temel değerlerimiz"}</p>
								</div>
							</FadeInUp>
						</div>
					</div>
					<div className="row g-4">
						{values.map((item) => (
							<div className="col-lg-3 col-md-6" key={item.title}>
								<FadeInUp>
									<div className="text-center">
										<div className="sofax-feature-icon mx-auto mb-3">
											<i className={item.icon}></i>
										</div>
										<h5>{item.title}</h5>
										<p>{item.text}</p>
									</div>
								</FadeInUp>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<FadeInUp>
								<div className="sofax-default-content text-center">
									<h2>{page.why_title || "Neden AgotaSoft'ı Seçmelisiniz?"}</h2>
									<p className="lead mb-5">
										{page.why_text ||
											"3 yıllık deneyimimiz, uzman ekibimiz ve müşteri odaklı yaklaşımımızla işletmenizin dijital dönüşümünde en güvenilir ortağınızız."}
									</p>
								</div>
							</FadeInUp>

							<div className="row g-4 mt-4">
								{whyItems.map((item) => (
									<div className="col-lg-6" key={item.title}>
										<FadeInUp>
											<div className="d-flex align-items-start">
												<div className="sofax-feature-icon me-4" style={{ width: "60px", height: "60px", fontSize: "24px" }}>
													<i className={item.icon}></i>
												</div>
												<div>
													<h5>{item.title}</h5>
													<p>{item.text}</p>
												</div>
											</div>
										</FadeInUp>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
