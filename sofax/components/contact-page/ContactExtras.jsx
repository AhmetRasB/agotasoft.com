"use client";

import { useCms } from "@/hooks/useCms";

export default function ContactExtras() {
	const cms = useCms();
	const page = cms.pages?.contact || {};
	const settings = cms.settings || {};
	const email = settings.email || "info@agotasoft.com";
	const calendly = settings.calendly_url;
	const map = settings.map_embed;

	const options = [
		calendly
			? {
					icon: "fas fa-calendar",
					title: page.calendar_title || "Randevu Al",
					text: page.calendar_text || "Uygun saatte detaylı görüşme ayarlayın",
					button: page.calendar_button || "Randevu Al",
					href: calendly,
					external: true,
				}
			: null,
		settings.phone
			? {
					icon: "fas fa-phone",
					title: page.phone_title || "Hemen Arayın",
					text: page.phone_text || "Sorularınız için bizi arayabilirsiniz",
					button: settings.phone,
					href: `tel:${settings.phone.replace(/[^\d+]/g, "")}`,
				}
			: null,
		{
			icon: "fas fa-envelope",
			title: page.email_title || "E-posta Gönder",
			text: page.email_text || "Detaylı sorularınızı e-posta ile iletin",
			button: page.email_button || "E-posta Gönder",
			href: `mailto:${email}`,
		},
	].filter(Boolean);

	return (
		<>
			<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
				<div className="agf-container">
					<div className="agf-platform-head">
						<h2 className="agf-headline agf-h2">{page.quick_title || "Hızlı İletişim Seçenekleri"}</h2>
						<p className="agf-lede" style={{ margin: "12px auto 0" }}>
							{page.quick_subtitle || "Size en uygun iletişim yöntemini seçin"}
						</p>
					</div>
					<div className="agf-grid agf-grid--3">
						{options.map((opt) => (
							<div className="agf-contact-option" key={opt.title}>
								<div className="agf-card-icon" style={{ margin: "0 auto 16px" }}>
									<i className={opt.icon}></i>
								</div>
								<h5>{opt.title}</h5>
								<p className="agf-small" style={{ marginBottom: 18 }}>
									{opt.text}
								</p>
								<a
									href={opt.href}
									className="agf-btn agf-btn--ghost agf-btn--sm"
									{...(opt.external ? { target: "_blank", rel: "noreferrer" } : {})}
								>
									{opt.button}
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{map ? (
				<section className="agf-section--tight">
					<div className="agf-container">
						<div className="agf-contact-map">
							<iframe src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="AgotaSoft Ofis Konumu"></iframe>
							<div className="agf-contact-map-badge">
								<h6 style={{ margin: "0 0 2px", fontSize: 14 }}>{page.map_label || "AgotaSoft"}</h6>
								<p className="agf-small" style={{ margin: 0 }}>
									{settings.address}
								</p>
							</div>
						</div>
					</div>
				</section>
			) : null}
		</>
	);
}
