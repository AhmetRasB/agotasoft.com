import Thumb from "@/public/images/v10/thumb4v10.png";
import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";
function AboutThree() {
	return (
		<section className="section agota-section-padding bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="agota-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>know anything asked about us</h2>
							</div>
							<p>
								Website files on a server and providing the necessary technologies and support to keep
								the site running.
							</p>
							<FadeInUp className="extra-mt agota-faq-thumbv10">
								<Image src={Thumb} alt="thumb" />
							</FadeInUp>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="agota-accordion-wrap1 agota-accordion-wrap3 ml-70">
							<div className="agota-accordion-section-wrapper">
								<FadeInStaggerTwo
									className="accordion agota-accordion-section-v10"
									id="agota-accordion"
								>
									<FadeInStaggerTwoChildren className="accordion-item agota-accordion-item">
										<h3 className="accordion-header agota-accordion-header">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
											>
												Why buy a domain name from AgotaSoft?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											data-bs-parent="#agota-accordion"
										>
											<div className="accordion-body agota-accordion-body">
												We strive to deliver outstanding customer experiences. We are guarantee
												it will to be handed the over.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item agota-accordion-item">
										<h3 className="accordion-header agota-accordion-header" id="headingOne">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
											>
												How does domain registration work?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											data-bs-parent="#agota-accordion"
										>
											<div className="accordion-body agota-accordion-body">
												We strive to deliver outstanding customer experiences. We are guarantee
												it will to be handed the over.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item agota-accordion-item">
										<h3 className="accordion-header agota-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
											>
												Entities involved in domain registration?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											data-bs-parent="#agota-accordion"
										>
											<div className="accordion-body agota-accordion-body">
												We strive to deliver outstanding customer experiences. We are guarantee
												it will to be handed the over.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
								</FadeInStaggerTwo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutThree;
