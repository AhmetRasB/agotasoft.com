/* eslint-disable react/prop-types */
import Link from "next/link";
import { useLocalePrefix } from "@/hooks/useLocale";
import ArrowDown from "./ArrowDown";
function NavItem({ dropdown, title, children, url = "" }) {
	const prefix = useLocalePrefix();
	const urlFormated = url !== "/" ? `${prefix}/${url}` : prefix || "/";

	return dropdown ? (
		<li className="nav-item nav-item-has-children">
			<a href="#" className="nav-link-item drop-trigger">
				{title} <ArrowDown />
			</a>
			{children}
		</li>
	) : (
		<li className="nav-item">
			<Link href={urlFormated} className="nav-link-item">
				{children}
			</Link>
		</li>
	);
}

export default NavItem;
