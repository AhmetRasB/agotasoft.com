"use client";

import Link from "next/link";
import CmsImg from "@/components/cms/CmsImg";
import { useCmsList } from "@/hooks/useCmsItem";
import { useLocalePrefix } from "@/hooks/useLocale";
import { itemPath, itemSlug as toSlug } from "@/lib/cms/itemSlug";

function RelatedProject({ itemSlug }) {
	const prefix = useLocalePrefix();
	const items = useCmsList("portfolio");
	const related = items.filter((item) => toSlug(item) !== toSlug({ slug: itemSlug })).slice(0, 2);
	if (!related.length) return null;

	return (
		<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
			<div className="agf-container">
				<div className="agf-platform-head">
					<h2 className="agf-headline agf-h2">Diğer Referanslarımız</h2>
				</div>
				<div className="agf-grid agf-grid--2">
					{related.map((item) => (
						<Link className="agf-case-card" href={`${prefix}${itemPath("portfolio", item)}`} key={item.title}>
							<CmsImg src={item.image} alt={item.title || "Image"} width={800} height={520} />
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

export default RelatedProject;
