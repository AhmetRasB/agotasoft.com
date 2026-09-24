import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Mobil ştrih-kod ulgamy | AgotaSoft",
	description: "Ammar we dükanlaryňyzda ätiýaçlyk sanawyny, giriş-çykyşy we ätiýaçlyk yzarlamasyny mobil ştrih-kod skanerleri bilen çaltlandyryň.",
	author: "AgotaSoft",
	alternates: buildAlternates("/mobil-barkod"),
	openGraph: {
		title: "AgotaSoft Mobil ştrih-kod ulgamy",
		description: "Ammar we dükanlaryňyzda ätiýaçlyk sanawyny, giriş-çykyşy we ätiýaçlyk yzarlamasyny mobil ştrih-kod skanerleri bilen çaltlandyryň.",
		type: "website",
		url: "https://agotasoft.com/mobil-barkod",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Mobil ştrih-kod ulgamy",
		description: "Ammar we dükanlaryňyzda ätiýaçlyk sanawyny, giriş-çykyşy we ätiýaçlyk yzarlamasyny mobil ştrih-kod skanerleri bilen çaltlandyryň.",
	},
};

function MobilBarkodLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default MobilBarkodLayout;
