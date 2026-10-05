"use client";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import MegaMenu from "@/components/solutions/MegaMenu";
import { isSolutionsNavItem } from "@/lib/solutions";

function DesktopMenu() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const items = cms.nav?.length ? cms.nav : [];

	return (
		<nav className="agf-nav">
			{items.map((item) => {
				if (isSolutionsNavItem(item)) {
					return <MegaMenu title={item.title} key={item.title} />;
				}
				const hasSub = item.submenu?.length;
				const href = withLocale(item.url === "/" ? "/" : `/${item.url}`, prefix);
				return (
					<div className="agf-nav-item" key={item.title}>
						{hasSub ? (
							<>
								<span className="agf-nav-link" style={{ cursor: "default" }}>
									{item.title} <i className="fas fa-chevron-down" style={{ fontSize: "10px" }}></i>
								</span>
								<div className="agf-nav-dropdown">
									{item.submenu.map((sub) => (
										<Link href={withLocale(`/${sub.url}`, prefix)} key={sub.title}>
											{sub.title}
										</Link>
									))}
								</div>
							</>
						) : (
							<Link href={href} className="agf-nav-link">
								{item.title}
							</Link>
						)}
					</div>
				);
			})}
		</nav>
	);
}

export default DesktopMenu;
