import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Mobile Barcode System | AgotaSoft",
	description: "Speed up stock counting, check-in/out and inventory tracking in your warehouses and stores with mobile barcode scanners.",
	author: "AgotaSoft",
	alternates: buildAlternates("/mobil-barkod"),
	openGraph: {
		title: "AgotaSoft Mobile Barcode System",
		description: "Speed up stock counting, check-in/out and inventory tracking in your warehouses and stores with mobile barcode scanners.",
		type: "website",
		url: "https://agotasoft.com/mobil-barkod",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Mobile Barcode System",
		description: "Speed up stock counting, check-in/out and inventory tracking in your warehouses and stores with mobile barcode scanners.",
	},
};

function MobilBarkodLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default MobilBarkodLayout;
