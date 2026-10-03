import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Buhgalteriýa",
	description: "TRY, USD we EUR-y bir wagtda alyp barýan, ştrih-kod bilen satuw edýän buhgalteriýa programmasy; iOS programmasy we web paneli.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pre-accounting", "tk"),
	openGraph: {
		title: "AgotaSoft Buhgalteriýa",
		description: "TRY, USD we EUR-y bir wagtda alyp barýan, ştrih-kod bilen satuw edýän buhgalteriýa programmasy; iOS programmasy we web paneli.",
		type: "website",
		url: "https://agotasoft.com/tk/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Buhgalteriýa",
		description: "TRY, USD we EUR-y bir wagtda alyp barýan, ştrih-kod bilen satuw edýän buhgalteriýa programmasy; iOS programmasy we web paneli.",
	},
};

function PreAccountingLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default PreAccountingLayout;
