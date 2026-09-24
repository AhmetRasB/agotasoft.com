import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Adisyon QR",
	description: "Облачное решение для кафе и ресторанов: QR-меню, заказы, кухонный экран и счета в одной системе.",
	author: "AgotaSoft",
	alternates: buildAlternates("/adisyon-qr"),
	openGraph: {
		title: "AgotaSoft Adisyon QR",
		description: "Облачное решение для кафе и ресторанов: QR-меню, заказы, кухонный экран и счета в одной системе.",
		type: "website",
		url: "https://agotasoft.com/adisyon-qr",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Adisyon QR",
		description: "Облачное решение для кафе и ресторанов: QR-меню, заказы, кухонный экран и счета в одной системе.",
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
