"use client";

import { useCms } from "@/hooks/useCms";

export default function TermsContent({ pageKey = "terms" }) {
	const cms = useCms();
	const page = cms.pages?.[pageKey] || {};
	const sections = page.sections?.length ? page.sections : [];

	return (
		<section className="agf-section--tight">
			<div className="agf-container" style={{ maxWidth: 820 }}>
				<div style={{ marginBottom: 32 }}>
					<h2 className="agf-h3">{page.hero_title || page.title}</h2>
					<p>{page.intro || page.body}</p>
				</div>
				{sections.map((section) => (
					<div style={{ marginBottom: 28 }} key={section.title}>
						<h3 className="agf-h3">{section.title}</h3>
						{section.text ? <p>{section.text}</p> : null}
						{section.text2 ? <p>{section.text2}</p> : null}
						{section.items?.length ? (
							<ul>
								{section.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
