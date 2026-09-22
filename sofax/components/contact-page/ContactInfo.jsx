"use client";

import { useCms } from "@/hooks/useCms";

export default function ContactInfo() {
	const cms = useCms();
	const settings = cms.settings || {};
	return (
		<div className="sofax-contact-info">
			<h3 className="mb-4">İletişim Bilgileri</h3>

			<div className="sofax-contact-item mb-4">
				<div className="sofax-feature-icon me-3" style={{ width: "50px", height: "50px", fontSize: "20px" }}>
					<i className="fas fa-map-marker-alt"></i>
				</div>
				<div>
					<h6>Adres</h6>
					<p>{settings.address}</p>
				</div>
			</div>

			<div className="sofax-contact-item mb-4">
				<div className="sofax-feature-icon me-3" style={{ width: "50px", height: "50px", fontSize: "20px" }}>
					<i className="fas fa-envelope"></i>
				</div>
				<div>
					<h6>E-posta</h6>
					<p>
						<a href={`mailto:${settings.email}`}>{settings.email}</a>
					</p>
				</div>
			</div>

			<div className="sofax-social-links mt-4">
				<h6>Sosyal Medya</h6>
				<div className="d-flex gap-3">
					<a href={settings.social_linkedin} target="_blank" className="sofax-social-link">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href={settings.social_twitter} target="_blank" className="sofax-social-link">
						<i className="fab fa-twitter"></i>
					</a>
					<a href={settings.social_facebook} target="_blank" className="sofax-social-link">
						<i className="fab fa-facebook"></i>
					</a>
					<a href={settings.social_instagram} target="_blank" className="sofax-social-link">
						<i className="fab fa-instagram"></i>
					</a>
				</div>
			</div>
		</div>
	);
}
