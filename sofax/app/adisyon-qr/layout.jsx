import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Adisyon QR",
	description: "Kafe ve restoranlar için QR menü, sipariş, mutfak ekranı ve adisyonu tek sistemde birleştiren bulut çözüm.",
	author: "AgotaSoft",
	alternates: buildAlternates("/adisyon-qr"),
	openGraph: {
		title: "AgotaSoft Adisyon QR",
		description: "Kafe ve restoranlar için QR menü, sipariş, mutfak ekranı ve adisyonu tek sistemde birleştiren bulut çözüm.",
		type: "website",
		url: "https://agotasoft.com/adisyon-qr",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Adisyon QR",
		description: "Kafe ve restoranlar için QR menü, sipariş, mutfak ekranı ve adisyonu tek sistemde birleştiren bulut çözüm.",
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
