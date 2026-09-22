"use client";
import { useCms } from "@/hooks/useCms";
import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";

function DesktopMenu() {
	const cms = useCms();
	const items = cms.nav?.length ? cms.nav : [];

	return (
		<DesktopNav>
			{items.map((item) =>
				item.submenu?.length ? (
					<NavItem dropdown title={item.title} key={item.title}>
						<Dropdown>
							{item.submenu.map((sub) => (
								<DropdownItem url={sub.url} key={sub.title}>
									{sub.title}
								</DropdownItem>
							))}
						</Dropdown>
					</NavItem>
				) : (
					<NavItem url={item.url} key={item.title}>
						{item.title}
					</NavItem>
				)
			)}
		</DesktopNav>
	);
}

export default DesktopMenu;
