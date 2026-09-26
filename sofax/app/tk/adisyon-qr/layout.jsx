import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "AgotaSoft QR Menü | QR menýu, stoldan sargyt we hasap";
const description = "Kafe we restoranlar üçin QR menýu, stoldan sargyt we töleg, aşhana ekrany (KDS), çek printeri we hasap ulgamy. qrmenu.agotasoft.com";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/adisyon-qr"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/tk/adisyon-qr",
		locale: "tk_TM",
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
			{children}
			<Footer />
		</>
	);
}

export default AdisyonQrLayout;
