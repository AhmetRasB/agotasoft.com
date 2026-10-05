"use client";

import { useCms } from "@/hooks/useCms";
import FaqAccordion from "@/components/common/FaqAccordion";

function Faq() {
	const cms = useCms();
	const page = cms.pages?.faq || {};
	return (
		<section className="agf-section" style={{ background: "var(--bg-soft)" }} id="faq">
			<div className="agf-container">
				<div className="agf-platform-head">
					<h2 className="agf-headline agf-h2">{page.hero_title}</h2>
				</div>
				<FaqAccordion />
			</div>
		</section>
	);
}

export default Faq;
