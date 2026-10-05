import Footer from "@/components/home/home-five/footer";

import Header from "@/components/common/header";
function LayoutEleven({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default LayoutEleven;
