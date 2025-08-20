import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";
const menuItemsData = [
	{
		title: "Ana Sayfa",
		url: "#hero",
	},
	{
		title: "Hizmetler",
		url: "#service",
	},
	{
		title: "Fiyatlandırma",
		url: "#pricing",
	},
	{
		title: "Entegrasyonlar",
		url: "#integration",
	},
	{
		title: "Referanslar",
		url: "#testimonial",
	},
];
function Header() {
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<nav className="menu-block" id="append-menu-header">
							<ul className="site-menu-main">
								<li className="nav-item">
									<a href="#hero" className="nav-link-item">
										Ana Sayfa
									</a>
								</li>
								<li className="nav-item">
									<a href="#service" className="nav-link-item">
										Hizmetler
									</a>
								</li>
								<li className="nav-item">
									<a href="#pricing" className="nav-link-item">
										Fiyatlandırma
									</a>
								</li>
								<li className="nav-item">
									<a href="#integration" className="nav-link-item">
										Entegrasyonlar
									</a>
								</li>
								<li className="nav-item">
									<a href="#testimonial" className="nav-link-item">
										Referanslar
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="AgotaSoft" onePage={true} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
