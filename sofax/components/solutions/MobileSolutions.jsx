"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/hooks/useLocale";
import { localePrefix, withLocale } from "@/lib/i18n/config";
import { getCatalog, productCount, productHref } from "@/lib/solutions";

export default function MobileSolutions({ title, onNavigate }) {
	const locale = useLocale();
	const prefix = localePrefix(locale);
	const catalog = getCatalog(locale);
	const { ui } = catalog;
	const [openId, setOpenId] = useState(null);

	return (
		<>
			<div className="agf-mobile-link">{title}</div>
			<div className="agf-mobile-sub">
				<Link href={withLocale("/solutions", prefix)} className="agf-mobile-all" onClick={onNavigate}>
					{ui.all_solutions} ({productCount(catalog)}) <i className="fas fa-arrow-right"></i>
				</Link>
				{catalog.categories.map((category) => {
					const expanded = openId === category.id;
					return (
						<div key={category.id}>
							<button
								type="button"
								className={`agf-mobile-cat${expanded ? " is-open" : ""}`}
								aria-expanded={expanded}
								onClick={() => setOpenId(expanded ? null : category.id)}
							>
								<i className={category.icon}></i>
								<span>{category.name}</span>
								<i className="fas fa-chevron-down agf-mobile-cat-arrow"></i>
							</button>
							{expanded ? (
								<div className="agf-mobile-prods">
									{category.products.map((product) => (
										<Link href={productHref(product, prefix)} key={product.slug} onClick={onNavigate}>
											<i className={product.icon}></i>
											<span>{product.name}</span>
											{product.status === "soon" ? <span className="agf-soon">{ui.soon}</span> : null}
										</Link>
									))}
								</div>
							) : null}
						</div>
					);
				})}
			</div>
		</>
	);
}
