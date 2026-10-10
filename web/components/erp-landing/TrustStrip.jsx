"use client";
import { useLocale } from "@/hooks/useLocale";

const PARTNERS = [
	{ name: "Claude for Startups", soon: false },
	{ name: "ElevenLabs", soon: false },
	{ name: "Cloudflare for Startups", soon: false },
	{ name: "AWS", soon: true },
];

const COPY = {
	tr: { label: "Partnerlerimiz", soon: "Yakında" },
	en: { label: "Our partners", soon: "Coming soon" },
	ru: { label: "Наши партнёры", soon: "Скоро" },
	uz: { label: "Hamkorlarimiz", soon: "Tez orada" },
	tk: { label: "Hyzmatdaşlarymyz", soon: "Ýakynda" },
};

export default function TrustStrip() {
	const locale = useLocale();
	const copy = COPY[locale] || COPY.tr;

	return (
		<section className="agf-section--tight">
			<div className="agf-container">
				<p className="agf-strip-label">{copy.label}</p>
				<div className="agf-logo-grid">
					{PARTNERS.map((partner) => (
						<span className="agf-logo-chip" key={partner.name}>
							{partner.name}
							{partner.soon ? <small style={{ fontWeight: 500, color: "var(--ink-faint)" }}>{copy.soon}</small> : null}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
