"use client";
import DesktopMenu from "@/components/common/navigation/desktop-nav";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { useCms } from "@/hooks/useCms";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	const cms = useCms();
	const menuItemsData = cms.nav?.length ? cms.nav : [];

	return (
		<header className="agf-header">
			<div className="agf-container agf-header-inner">
				<HeaderLogo />
				<DesktopMenu />
				<div className="agf-header-actions">
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} />
				</div>
			</div>
		</header>
	);
}

export default Header;
