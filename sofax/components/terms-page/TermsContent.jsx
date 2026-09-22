"use client";

import { useCms } from "@/hooks/useCms";

export default function TermsContent({ pageKey = "terms" }) {
	const cms = useCms();
	const page = cms.pages?.[pageKey] || {};
	const sections = page.sections?.length ? page.sections : [];

	return (
		<section className="sofax-section-padding5">
			<div className="container">
				<div className="sofax-default-content  mb-40">
					<h2>{page.hero_title || page.title}</h2>
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
