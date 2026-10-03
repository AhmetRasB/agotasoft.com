"use client";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { itemPath } from "@/lib/cms/itemSlug";
import ResponsiveImage from "@/components/common/ResponsiveImage";

const LABEL = { tr: "Referanslarımız", en: "Case Studies", ru: "Наши проекты", uz: "Loyihalarimiz", tk: "Taslamalarymyz" };

export default function CaseStudies() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const locale = prefix ? prefix.slice(1) : "tr";
	const items = cms.portfolio || [];
	if (!items.length) return null;

	return (
		<section className="agf-section">
			<div className="agf-container">
				<div className="agf-platform-head">
					<div className="agf-eyebrow">
						<span className="agf-eyebrow-num">03</span> {LABEL[locale] || LABEL.tr}
					</div>
					<h2 className="agf-headline agf-h2">{cms.pages?.portfolio?.hero_title}</h2>
				</div>
				<div className="agf-grid agf-grid--3">
					{items.map((item) => (
						<a className="agf-case-card" href={`${prefix}${itemPath("portfolio", item)}`} key={item.slug}>
							<ResponsiveImage src={item.image} alt={item.title} sizes="(max-width: 860px) calc(100vw - 32px), 380px" />
							<div className="agf-case-body">
								<h3>{item.title}</h3>
								<p>{item.category_label}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
