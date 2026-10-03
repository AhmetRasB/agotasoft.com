"use client";

import { useCms } from "@/hooks/useCms";

export default function ContactInfo() {
	const cms = useCms();
	const settings = cms.settings || {};
	const socials = [
		{ href: settings.social_linkedin, icon: "fab fa-linkedin-in", label: "LinkedIn" },
		{ href: settings.social_twitter, icon: "fab fa-twitter", label: "Twitter" },
		{ href: settings.social_facebook, icon: "fab fa-facebook-f", label: "Facebook" },
		{ href: settings.social_instagram, icon: "fab fa-instagram", label: "Instagram" },
	].filter((s) => s.href);

	return (
		<div>
			<h2 className="agf-h3" style={{ marginBottom: 24 }}>
				İletişim Bilgileri
			</h2>

			<div className="agf-contact-item">
				<div className="agf-card-icon" style={{ width: 44, height: 44, flexShrink: 0 }}>
					<i className="fas fa-map-marker-alt"></i>
				</div>
				<div>
					<p className="agf-contact-label">Adres</p>
					<p>{settings.address}</p>
				</div>
			</div>

			{settings.phone ? (
				<div className="agf-contact-item">
					<div className="agf-card-icon" style={{ width: 44, height: 44, flexShrink: 0 }}>
						<i className="fas fa-phone"></i>
					</div>
					<div>
						<p className="agf-contact-label">Telefon</p>
						<a href={`tel:${settings.phone.replace(/[^\d+]/g, "")}`}>{settings.phone}</a>
					</div>
				</div>
			) : null}

			<div className="agf-contact-item">
				<div className="agf-card-icon" style={{ width: 44, height: 44, flexShrink: 0 }}>
					<i className="fas fa-envelope"></i>
				</div>
				<div>
					<p className="agf-contact-label">E-posta</p>
					<a href={`mailto:${settings.email}`}>{settings.email}</a>
				</div>
			</div>

			{socials.length ? (
				<div className="agf-social-row" style={{ marginTop: 8 }}>
					{socials.map((s) => (
						<a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`AgotaSoft ${s.label}`}>
							<i className={s.icon} aria-hidden="true"></i>
						</a>
					))}
				</div>
			) : null}
		</div>
	);
}
