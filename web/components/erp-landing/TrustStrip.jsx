"use client";
import { useCms } from "@/hooks/useCms";

export default function TrustStrip() {
	const cms = useCms();
	const clients = (cms.portfolio || []).slice(0, 6);
	if (!clients.length) return null;

	return (
		<section className="agf-section--tight">
			<div className="agf-container">
				<p className="agf-strip-label">{cms.settings?.site_name || "AgotaSoft"} ile çalışan işletmeler</p>
				<div className="agf-logo-grid">
					{clients.map((c) => (
						<span className="agf-logo-chip" key={c.slug}>
							{c.title}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
