"use client";

import FaqAccordion from "./FaqAccordion";
import { useCms } from "@/hooks/useCms";

function Faq() {
	const cms = useCms();
	const page = cms.pages?.faq || {};
	return (
		<section className="section sofax-section-padding bg-light">
			<div className="container">
				<div className="sofax-section-title center max-width700">
					<h2>{page.hero_title || "These FAQs help clients learn about us"}</h2>
				</div>
				<div className="sofax-accordion-wrap1 sofax-accordion-wrap3">
					<FaqAccordion />
				</div>
			</div>
		</section>
	);
}

export default Faq;
