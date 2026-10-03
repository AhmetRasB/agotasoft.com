import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "AgotaSoft QR Menü | QR menu, table ordering and billing";
const description = "QR menu, ordering and payment at the table, kitchen display (KDS), receipt printer and billing system for cafés and restaurants. qrmenu.agotasoft.com";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/adisyon-qr", "en"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/en/adisyon-qr",
		locale: "en_US",
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
