import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "AgotaSoft QR Menü | QR menyu, stoldan buyurtma va hisob";
const description = "Kafe va restoranlar uchun QR menyu, stoldan buyurtma va to'lov, oshxona ekrani (KDS), chek printeri va hisob tizimi. qrmenu.agotasoft.com";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/adisyon-qr", "uz"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/uz/adisyon-qr",
		locale: "uz_UZ",
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
