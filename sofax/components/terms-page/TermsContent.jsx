"use client";

import { useCms } from "@/hooks/useCms";

const FALLBACK_SECTIONS = [
	{
		title: "Interpretation",
		text: "outlining the rules, responsibilities, and expectations for both parties. These terms typically cover aspects such as usage rights, payment terms, privacy policies, dispute resolution, and any other relevant terms that govern the use of the service. Users are usually required to agree to these terms before using the service, and they serve as a legally binding contract between the user and the provider.",
		items: [
			"‘’Client you & your refer to you, the person accessing this website’’ .",
			"“Party parties, or us refer to both the clients and ourselves”.",
			"“The company , ourselves we & us refer to our agency”.",
		],
	},
	{
		title: "Intellectual Property",
		text: "Both Parties agree to keep confidential any information provided by the other Party that is not publicly available. This includes but is not limited to business strategies, financial information, and proprietary data.All intellectual property rights in the work produced during the engagement shall belong to the Client upon full payment, unless otherwise agreed upon in writing.",
		text2: "Either party may terminate the agreement with written notice if the other party breaches any material term or condition. Termination may also occur by mutual agreement.",
	},
	{
		title: "Fees and Payment",
		items: [
			"The client agrees to pay the fees as specified in the proposal or agreement.",
			"Late payments may incur additional charges or result in the suspension.",
			"Payment trems, including any deposit requirements.",
		],
	},
	{
		title: "Changees to Terms & Conditions",
		text: "We reserve the right to amend these terms and conditions at any time. All changes will be posted on this website. These terms and conditions constitute the entire agreement between the Parties and supersede all prior discussions, negotiations, and understandings. We shall not be liable for any indirect, special, or consequential damages, or any loss of revenue, profits, or data arising in connection with our services.",
	},
	{
		title: "Contact Information",
		text: "If you have any questions or concerns regarding these terms and conditions, please contact us.",
	},
];

export default function TermsContent() {
	const cms = useCms();
	const page = cms.pages?.terms || {};
	const sections = page.sections?.length ? page.sections : FALLBACK_SECTIONS;

	return (
		<section className="sofax-section-padding5">
			<div className="container">
				<div className="sofax-default-content  mb-40">
					<h2>{page.hero_title || page.title || "Terms & condition of service :"}</h2>
					<p>{page.intro || page.body}</p>
				</div>
				{sections.map((section, index) => (
					<div
						className={`sofax-career-details-content terms-condition ${index === sections.length - 1 ? "mb130" : "mb-40"}`}
						key={section.title}
					>
						<h3>{section.title}</h3>
						{section.text ? <p>{section.text}</p> : null}
						{section.text2 ? <p>{section.text2}</p> : null}
						{section.items?.length ? (
							<div className="sofax-career-details-data condition">
								<ul>
									{section.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
