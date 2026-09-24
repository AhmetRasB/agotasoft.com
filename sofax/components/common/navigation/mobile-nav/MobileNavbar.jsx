"use client";
import Link from "next/link";
import { useState } from "react";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

function MobileNavbar({ menuItemsData = [] }) {
	const [open, setOpen] = useState(false);
	const prefix = useLocalePrefix();

	return (
		<>
			<button type="button" className="agf-burger" onClick={() => setOpen((v) => !v)} aria-label="Menü">
				<i className={`fas ${open ? "fa-xmark" : "fa-bars"}`} style={{ fontSize: "20px" }}></i>
			</button>
			{open ? (
				<div className="agf-mobile-panel">
					{menuItemsData.map((item) => {
						const href = withLocale(item.url === "/" ? "/" : `/${item.url}`, prefix);
						return (
							<div key={item.title}>
								{item.submenu?.length ? (
									<>
										<div className="agf-mobile-link">{item.title}</div>
										<div className="agf-mobile-sub">
											{item.submenu.map((sub) => (
												<Link href={withLocale(`/${sub.url}`, prefix)} key={sub.title} onClick={() => setOpen(false)}>
													{sub.title}
												</Link>
											))}
										</div>
									</>
								) : (
									<Link href={href} className="agf-mobile-link" onClick={() => setOpen(false)}>
										{item.title}
									</Link>
								)}
							</div>
						);
					})}
				</div>
			) : null}
		</>
	);
}

export default MobileNavbar;
