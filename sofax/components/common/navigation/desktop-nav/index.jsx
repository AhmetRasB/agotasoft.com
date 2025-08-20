import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>
			<NavItem url="/">Anasayfa</NavItem>
			<NavItem url="about-us">Hakkımızda</NavItem>
			<NavItem dropdown title="Çözümlerimiz">
				<Dropdown>
					<DropdownItem url="erp">ERP Sistemi</DropdownItem>
					<DropdownItem url="crm">CRM Sistemi</DropdownItem>
					<DropdownItem url="pre-accounting">Ön Muhasebe</DropdownItem>
					<DropdownItem url="lms">LMS Sistemi</DropdownItem>
				</Dropdown>
			</NavItem>
			<NavItem url="contact-us">İletişim</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
