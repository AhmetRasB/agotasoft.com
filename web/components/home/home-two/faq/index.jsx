import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<section className="section agota-section-padding bg-light" id="faq">
			<div className="container">
				<div className="agota-section-title center">
					<div className="tg-heading-subheading">
						<h2>
							<TextSplitFadeIn> If you want to know anything asked us </TextSplitFadeIn>
						</h2>
					</div>
				</div>
				<div className="agota-accordion-wrap1 agota-accordion-wrap2">
					<div className="agota-accordion-section-wrapper">
						<FaqAccordion />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faq;
