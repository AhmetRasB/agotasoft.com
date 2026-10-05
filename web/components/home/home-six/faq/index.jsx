import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<section className="section agota-section-padding" id="faq">
			<div className="container">
				<div className="agota-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>If you want to know anything asked us</h2>
					</div>
				</div>
				<div className="agota-accordion-wrap1 agota-accordion-wrap3">
					<FaqAccordion />
				</div>
			</div>
		</section>
	);
}

export default Faq;
