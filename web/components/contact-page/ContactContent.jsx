"use client";

import ContactInfo from "@/components/contact-page/ContactInfo";
import DemoRequestForm from "@/components/contact-page/DemoRequestForm";
import ContactExtras from "@/components/contact-page/ContactExtras";
import CmsText from "@/components/cms/CmsText";

export default function ContactContent() {
	return (
		<>
			<section className="agf-section--tight">
				<div className="agf-container agf-center">
					<p className="agf-lede" style={{ margin: "0 auto", maxWidth: 680 }}>
						<CmsText
							path="pages.contact.hero_subtitle"
							fallback="AgotaSoft yazılım çözümleri hakkında detaylı bilgi almak, demo talep etmek veya projelerinizi görüşmek için bizimle iletişime geçin."
						/>
					</p>
				</div>
			</section>

			<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
				<div className="agf-container">
					<div className="agf-split agf-split--contact">
						<div className="agf-card">
							<ContactInfo />
						</div>
						<div className="agf-card" id="demo" style={{ scrollMarginTop: 90 }}>
							<DemoRequestForm />
						</div>
					</div>
				</div>
			</section>

			<ContactExtras />
		</>
	);
}
