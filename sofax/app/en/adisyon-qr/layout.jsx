import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Adisyon QR",
	description: "A cloud solution for cafés and restaurants that combines QR menu, ordering, kitchen display and billing in one system.",
	author: "AgotaSoft",
	alternates: buildAlternates("/adisyon-qr"),
	openGraph: {
		title: "AgotaSoft Adisyon QR",
		description: "A cloud solution for cafés and restaurants that combines QR menu, ordering, kitchen display and billing in one system.",
		type: "website",
		url: "https://agotasoft.com/adisyon-qr",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Adisyon QR",
		description: "A cloud solution for cafés and restaurants that combines QR menu, ordering, kitchen display and billing in one system.",
	},
};

function AdisyonQrLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default AdisyonQrLayout;
