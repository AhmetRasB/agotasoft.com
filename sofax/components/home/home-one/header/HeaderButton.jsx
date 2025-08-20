import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="sofax-btn-primary sofax-header-btn" data-text="Demo Talep Edin" href="/contact-us">
				<span className="button-wraper">Demo Talep Edin</span>
			</Link>
		</div>
	);
}

export default HeaderButton;