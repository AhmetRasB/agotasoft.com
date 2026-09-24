"use client";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

export default function FinalCta() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const cta = cms.cta || {};

	return (
		<section className="agf-section--tight">
			<div className="agf-container">
				<div className="agf-cta-banner">
					<h2 className="agf-headline agf-h2">{cta.title}</h2>
					<p>{cta.text}</p>
					<a className="agf-btn agf-btn--primary" href={withLocale(cta.button_url || "/contact-us", prefix)}>
						{cta.button || "Demo Talep Edin"}
					</a>
					{cta.note ? (
						<p className="agf-small" style={{ marginTop: 16, color: "rgba(255,255,255,.5)" }}>
							{cta.note}
						</p>
					) : null}
				</div>
			</div>
		</section>
	);
}
