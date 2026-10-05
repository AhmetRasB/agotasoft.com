import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
function FaqAccordion() {
	return (
		<div className="agota-accordion-section-wrapper">
			<div className="accordion agota-accordion-section-v2" id="agota-accordion2">
				<div className="accordion-item agota-accordion-item ">
					<h3 className="accordion-header agota-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
						>
							What everybody ought to knoe about digital?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#agota-accordion2"
					>
						<div className="accordion-body agota-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
				<div className="accordion-item agota-accordion-item ">
					<h3 className="accordion-header agota-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
						>
							How do you approach strategic planning?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#agota-accordion2">
						<div className="accordion-body agota-accordion-body">
							ake a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
				<div className="accordion-item agota-accordion-item ">
					<h3 className="accordion-header agota-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
						>
							Is there a guaranteed result?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#agota-accordion2">
						<div className="accordion-body agota-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
			</div>
			<div className="accordion agota-accordion-section-v2 mt-24" id="agota-accordion3">
				<div className="accordion-item agota-accordion-item ">
					<h3 className="accordion-header agota-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
						>
							What services does AgotaSoft provide?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseFour"
						className="accordion-collapse collapse show"
						data-bs-parent="#agota-accordion3"
					>
						<div className="accordion-body agota-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
				<div className="accordion-item agota-accordion-item ">
					<h3 className="accordion-header agota-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
						>
							What services does AgotaSoft provide?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#agota-accordion3">
						<div className="accordion-body agota-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
				<div className="accordion-item agota-accordion-item ">
					<h3 className="accordion-header agota-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSix"
						>
							What is a strategic to block?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#agota-accordion3">
						<div className="accordion-body agota-accordion-body">
							Take a trivial example which undertakes laborious physical a exercise except to obtain some
							advantage pleasure.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FaqAccordion;
