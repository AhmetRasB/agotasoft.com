"use client";
import DesktopMenu from "@/components/common/navigation/desktop-nav";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { useCms } from "@/hooks/useCms";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	const cms = useCms();
	const menuItemsData = cms.nav?.length ? cms.nav : [];
	const title = cms.settings?.site_name || "AgotaSoft";

	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopMenu />
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title={title} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
