import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "AgotaSoft QR Menü | QR-меню, заказ со стола и счета";
const description = "QR-меню, заказ и оплата со стола, кухонный экран (KDS), чековый принтер и система счетов для кафе и ресторанов. qrmenu.agotasoft.com";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/adisyon-qr", "ru"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/ru/adisyon-qr",
		locale: "ru_RU",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
};

function AdisyonQrLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default AdisyonQrLayout;
