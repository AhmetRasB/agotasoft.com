"use client";
import { useCms } from "@/hooks/useCms";

export default function AiSection() {
	const cms = useCms();
	const page = cms.pages?.erp || {};
	const items = page.ai_items || [];

	return (
		<section className="agf-section agf-section--tight" style={{ background: "var(--bg-soft)" }}>
			<div className="agf-container">
				<div className="agf-platform-head">
					<div className="agf-eyebrow">
						<span className="agf-eyebrow-num">02</span> YAPAY ZEKA
					</div>
					<h2 className="agf-headline agf-h2">{page.ai_title}</h2>
					<p className="agf-lede" style={{ margin: "12px auto 0" }}>
						{page.ai_subtitle}
					</p>
				</div>
				<div className="agf-grid agf-grid--4">
					{items.map((item) => (
						<div className="agf-card" key={item.title} style={{ background: "#fff" }}>
							<div className="agf-card-icon">
								<i className={item.icon}></i>
							</div>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
