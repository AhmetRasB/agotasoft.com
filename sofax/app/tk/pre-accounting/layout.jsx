import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft buhgalteriýa ulgamy | AgotaSoft",
	description: "E-hasap-faktura integrasiýasy, jari hasap dolandyryşy, çykdajy yzarlamasy we maliýe hasabaty bilen kiçi we orta kärhanalaryň maliýe proseslerini ýeňilleşdirýän giň gerimli buhgalteriýa çözgüdi.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pre-accounting"),
	openGraph: {
		title: "AgotaSoft buhgalteriýa: maliýe gözegçiligi doly siziň elilizde",
		description: "E-hasap-faktura integrasiýasy, jari hasap dolandyryşy, çykdajy yzarlamasy we maliýe hasabaty bilen kiçi we orta kärhanalaryň maliýe proseslerini ýeňilleşdirýän giň gerimli buhgalteriýa çözgüdi.",
		type: "website",
		url: "https://agotasoft.com/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft buhgalteriýa ulgamy | AgotaSoft",
		description: "E-hasap-faktura integrasiýasy, jari hasap dolandyryşy, çykdajy yzarlamasy we maliýe hasabaty bilen kiçi we orta kärhanalaryň maliýe proseslerini ýeňilleşdirýän giň gerimli buhgalteriýa çözgüdi.",
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
