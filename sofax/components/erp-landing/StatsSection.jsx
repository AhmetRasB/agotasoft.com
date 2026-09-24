"use client";
import { useCms } from "@/hooks/useCms";

export default function StatsSection() {
	const cms = useCms();
	const stats = cms.pages?.erp?.stats || [];
	if (!stats.length) return null;

	return (
		<section className="agf-container">
			<div className="agf-stats">
				{stats.map((s) => (
					<div className="agf-stat" key={s.label}>
						<div className="agf-stat-num">{s.number}</div>
						<div className="agf-stat-label">{s.label}</div>
					</div>
				))}
			</div>
		</section>
	);
}
