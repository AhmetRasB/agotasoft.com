"use client";

import { useCms } from "@/hooks/useCms";
import FaqAccordion from "./FaqAccordion";

function Faq() {
	const cms = useCms();
	const page = cms.pages?.faq || {};
	return (
		<section className="section sofax-section-padding bg-light" id="faq">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>{page.hero_title || "Sıkça sorulan sorular"}</h2>
					</div>
				</div>
				<div className="sofax-accordion-wrap1 sofax-accordion-wrap3">
					<FaqAccordion />
				</div>
			</div>
		</section>
	);
}

export default Faq;
