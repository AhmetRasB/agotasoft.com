"use client";

import CmsImg from "@/components/cms/CmsImg";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { itemPath } from "@/lib/cms/itemSlug";

function PortfolioList() {
	const cms = useCms();
	const page = cms.pages?.portfolio || {};
	const items = cms.portfolio || [];
	const prefix = useLocalePrefix();

	return (
		<section className="agf-section">
			<div className="agf-container">
				<div className="agf-platform-head">
					<h2 className="agf-headline agf-h2">{page.hero_title}</h2>
				</div>
				<div className="agf-grid agf-grid--3">
					{items.map((item, index) => (
						<Link className="agf-case-card" href={`${prefix}${itemPath("portfolio", item)}`} key={item.title + index}>
							<CmsImg src={item.image} alt={item.title || "portfolio"} width={800} height={600} />
							<div className="agf-case-body">
								<h3>{item.title}</h3>
								<p>{item.category_label}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

export default PortfolioList;
