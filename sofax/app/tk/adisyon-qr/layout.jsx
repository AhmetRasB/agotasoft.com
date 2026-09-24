import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Adisyon QR",
	description: "Kafe we restoranlar üçin QR menýu, sargyt, aşhana ekrany we hasaby bir ulgamda birleşdirýän bulut çözgüdi.",
	author: "AgotaSoft",
	alternates: buildAlternates("/adisyon-qr"),
	openGraph: {
		title: "AgotaSoft Adisyon QR",
		description: "Kafe we restoranlar üçin QR menýu, sargyt, aşhana ekrany we hasaby bir ulgamda birleşdirýän bulut çözgüdi.",
		type: "website",
		url: "https://agotasoft.com/adisyon-qr",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Adisyon QR",
		description: "Kafe we restoranlar üçin QR menýu, sargyt, aşhana ekrany we hasaby bir ulgamda birleşdirýän bulut çözgüdi.",
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
