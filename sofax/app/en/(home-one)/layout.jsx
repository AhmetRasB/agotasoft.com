import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft | ERP, CRM, Bookkeeping and LMS Software Solutions",
	description: "Empower your business with digital transformation. Boost efficiency and cut costs with AgotaSoft's ERP, CRM, Bookkeeping and LMS software.",
	author: "AgotaSoft",
	alternates: buildAlternates("/"),
	openGraph: {
		title: "AgotaSoft: Smart Software That Takes Your Business Into the Future",
		description: "Boost operational efficiency, cut costs and stay ahead of the competition with our integrated ERP, CRM, Bookkeeping and LMS systems. Complete your digital transformation with AgotaSoft.",
		type: "website",
		url: "https://agotasoft.com/",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft | ERP, CRM, Bookkeeping and LMS Software Solutions",
		description: "Empower your business with digital transformation. Boost efficiency and cut costs with AgotaSoft's ERP, CRM, Bookkeeping and LMS software.",
	},
};
function LayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutOne;
