/* eslint-disable react/prop-types */
import Link from "next/link";
import { useLocalePrefix } from "@/hooks/useLocale";
import ArrowDown from "./ArrowDown";
function DropdownItem({ dropdown, children, title, url }) {
	const prefix = useLocalePrefix();
	const urlFormated = url !== "/" ? `${prefix}/${url}` : prefix || "/";
	return dropdown ? (
		<li className="sub-menu--item nav-item-has-children">
			<a href="#" data-menu-get="h3" className="drop-trigger">
				{title} <ArrowDown />
			</a>
			{children}
		</li>
	) : (
		<li className="sub-menu--item">
			<Link href={urlFormated}>
				<span className="menu-item-text">{children}</span>
			</Link>
		</li>
	);
}

export default DropdownItem;
