import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Ön Muhasebe",
	description: "TL, USD ve EUR'u aynı anda takip eden, barkodla satış yapan ön muhasebe programı; iOS uygulaması ve web paneli.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pre-accounting"),
	openGraph: {
		title: "AgotaSoft Ön Muhasebe",
		description: "TL, USD ve EUR'u aynı anda takip eden, barkodla satış yapan ön muhasebe programı; iOS uygulaması ve web paneli.",
		type: "website",
		url: "https://agotasoft.com/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Ön Muhasebe",
		description: "TL, USD ve EUR'u aynı anda takip eden, barkodla satış yapan ön muhasebe programı; iOS uygulaması ve web paneli.",
	},
};

function PreAccountingLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default PreAccountingLayout;
