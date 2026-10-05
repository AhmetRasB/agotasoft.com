import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "AgotaSoft QR Menü | QR menü, masadan sipariş ve adisyon";
const description = "Kafe ve restoranlar için QR menü, masadan sipariş ve ödeme, mutfak ekranı (KDS), fiş yazıcı ve adisyon sistemi. qrmenu.agotasoft.com";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/adisyon-qr"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/adisyon-qr",
		locale: "tr_TR",
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
