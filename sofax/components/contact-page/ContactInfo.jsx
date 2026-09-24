"use client";

import { useCms } from "@/hooks/useCms";

export default function ContactInfo() {
	const cms = useCms();
	const settings = cms.settings || {};
	const socials = [
		{ href: settings.social_linkedin, icon: "fab fa-linkedin-in" },
		{ href: settings.social_twitter, icon: "fab fa-x-twitter" },
		{ href: settings.social_facebook, icon: "fab fa-facebook-f" },
		{ href: settings.social_instagram, icon: "fab fa-instagram" },
	].filter((s) => s.href);

	return (
		<div>
			<h3 className="agf-h3" style={{ marginBottom: 24 }}>
				İletişim Bilgileri
			</h3>

			<div className="agf-contact-item">
				<div className="agf-card-icon" style={{ width: 44, height: 44, flexShrink: 0 }}>
					<i className="fas fa-map-marker-alt"></i>
				</div>
				<div>
					<h6>Adres</h6>
					<p>{settings.address}</p>
				</div>
			</div>

			{settings.phone ? (
				<div className="agf-contact-item">
					<div className="agf-card-icon" style={{ width: 44, height: 44, flexShrink: 0 }}>
						<i className="fas fa-phone"></i>
					</div>
					<div>
						<h6>Telefon</h6>
						<a href={`tel:${settings.phone.replace(/[^\d+]/g, "")}`}>{settings.phone}</a>
					</div>
				</div>
			) : null}

			<div className="agf-contact-item">
				<div className="agf-card-icon" style={{ width: 44, height: 44, flexShrink: 0 }}>
					<i className="fas fa-envelope"></i>
				</div>
				<div>
					<h6>E-posta</h6>
					<a href={`mailto:${settings.email}`}>{settings.email}</a>
				</div>
			</div>

			{socials.length ? (
				<div className="agf-social-row" style={{ marginTop: 8 }}>
					{socials.map((s) => (
						<a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer">
							<i className={s.icon}></i>
						</a>
					))}
				</div>
			) : null}
		</div>
	);
}
