"use client";

import { useCms } from "@/hooks/useCms";

export default function ContactExtras() {
	const cms = useCms();
	const page = cms.pages?.contact || {};
	const settings = cms.settings || {};
	const email = settings.email || "info@agotasoft.com";
	const calendly = settings.calendly_url || "https://calendly.com/agotasoft";
	const map = settings.map_embed ||
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.31!2d29.0236!3d41.0214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zw5xza8O8ZGFyLCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1234567890!5m2!1str!2str";

	return (
		<>
			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="text-center mb-5">
								<h2>{page.quick_title || "Hızlı İletişim Seçenekleri"}</h2>
								<p>{page.quick_subtitle || "Size en uygun iletişim yöntemini seçin"}</p>
							</div>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-4 col-md-6">
							<div className="sofax-contact-option text-center p-4">
								<div className="sofax-feature-icon mx-auto mb-3">
									<i className="fas fa-comments"></i>
								</div>
								<h5>{page.chat_title || "Canlı Destek"}</h5>
								<p>{page.chat_text || "Online chat ile anında yardım alın"}</p>
								<button type="button" className="sofax-btn-secondary">
									{page.chat_button || "Sohbet Başlat"}
								</button>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="sofax-contact-option text-center p-4">
								<div className="sofax-feature-icon mx-auto mb-3">
									<i className="fas fa-calendar"></i>
								</div>
								<h5>{page.calendar_title || "Randevu Al"}</h5>
								<p>{page.calendar_text || "Uygun saatte detaylı görüşme ayarlayın"}</p>
								<a href={calendly} target="_blank" rel="noreferrer" className="sofax-btn-secondary">
									{page.calendar_button || "Randevu Al"}
								</a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="sofax-contact-option text-center p-4">
								<div className="sofax-feature-icon mx-auto mb-3">
									<i className="fas fa-envelope"></i>
								</div>
								<h5>{page.email_title || "E-posta Gönder"}</h5>
								<p>{page.email_text || "Detaylı sorularınızı e-posta ile iletin"}</p>
								<a href={`mailto:${email}`} className="sofax-btn-secondary">
									{page.email_button || "E-posta Gönder"}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="container-fluid px-0">
					<div className="row g-0">
						<div className="col-12">
							<div style={{ height: "400px", backgroundColor: "#f8f9fa", position: "relative" }}>
								<iframe
									src={map}
									width="100%"
									height="400"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="AgotaSoft Yazılım Ofis Konumu"
								></iframe>
								<div className="position-absolute top-50 start-50 translate-middle">
									<div className="bg-white p-3 rounded shadow">
										<h6 className="mb-1">{page.map_label || "AgotaSoft Yazılım"}</h6>
										<p className="small mb-0">{settings.address || "Üsküdar, İstanbul"}</p>
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
