"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/hooks/useLocale";
import { localePrefix, withLocale } from "@/lib/i18n/config";
import { getCatalog, groupedCategories, productCount, productHref } from "@/lib/solutions";

export default function MegaMenu({ title }) {
	const locale = useLocale();
	const prefix = localePrefix(locale);
	const catalog = getCatalog(locale);
	const { ui } = catalog;
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [activeId, setActiveId] = useState(catalog.categories[0].id);
	const closeTimer = useRef(null);

	const active = catalog.categories.find((category) => category.id === activeId) || catalog.categories[0];
	const tiles = active.layout === "tiles";

	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		if (!open) return undefined;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	useEffect(() => () => clearTimeout(closeTimer.current), []);

	const show = () => {
		clearTimeout(closeTimer.current);
		setOpen(true);
	};
	const hide = () => {
		clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => setOpen(false), 140);
	};
	const close = () => setOpen(false);

	return (
		<div className="agf-nav-item agf-nav-item--mega" onMouseEnter={show} onMouseLeave={hide}>
			<button
				type="button"
				className={`agf-nav-link${open ? " is-open" : ""}`}
				aria-expanded={open}
				aria-haspopup="true"
				onClick={() => setOpen((value) => !value)}
			>
				{title} <i className="fas fa-chevron-down" style={{ fontSize: "10px" }}></i>
			</button>

			<div className={`agf-mega${open ? " is-open" : ""}`}>
				<div className="agf-container agf-mega-inner">
					<div className="agf-mega-cats" role="tablist" aria-orientation="vertical">
						{groupedCategories(catalog).map(({ group, label, categories }) => (
							<div className="agf-mega-group" key={group}>
								<div className="agf-mega-group-label">{label}</div>
								{categories.map((category) => (
									<button
										type="button"
										role="tab"
										aria-selected={category.id === active.id}
										className={`agf-mega-cat${category.id === active.id ? " is-active" : ""}`}
										key={category.id}
										onMouseEnter={() => setActiveId(category.id)}
										onFocus={() => setActiveId(category.id)}
										onClick={() => setActiveId(category.id)}
									>
										<i className={category.icon}></i>
										<span>{category.name}</span>
										<i className="fas fa-chevron-right agf-mega-cat-arrow"></i>
									</button>
								))}
							</div>
						))}
					</div>

					<div className="agf-mega-panel" role="tabpanel">
						<div className="agf-mega-head">
							<div>
								<div className="agf-mega-title">{active.name}</div>
								<p>{active.description}</p>
							</div>
							<Link href={withLocale(`/solutions#${active.id}`, prefix)} className="agf-mega-more" onClick={close}>
								{ui.explore_category} <i className="fas fa-arrow-right"></i>
							</Link>
						</div>

						<div className={`agf-mega-grid${tiles ? " agf-mega-grid--tiles" : ""}`}>
							{active.products.map((product) => (
								<Link href={productHref(product, prefix)} className="agf-mega-prod" key={product.slug} onClick={close}>
									<span className="agf-mega-prod-icon">
										<i className={product.icon}></i>
									</span>
									<span className="agf-mega-prod-body">
										{tiles ? <span className="agf-mega-prod-sector">{product.sector}</span> : null}
										<span className="agf-mega-prod-name">
											{product.name}
											{product.status === "soon" ? <span className="agf-soon">{ui.soon}</span> : null}
										</span>
										{tiles ? null : <span className="agf-mega-prod-tag">{product.tagline}</span>}
									</span>
								</Link>
							))}
						</div>

						<div className="agf-mega-foot">
							<Link href={withLocale("/solutions", prefix)} className="agf-mega-more" onClick={close}>
								{ui.all_solutions} ({productCount(catalog)}) <i className="fas fa-arrow-right"></i>
							</Link>
							<Link href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary agf-btn--sm" onClick={close}>
								{ui.demo}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
