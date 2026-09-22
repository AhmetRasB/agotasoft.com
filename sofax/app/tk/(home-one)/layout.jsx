import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft | ERP, CRM, Buhgalteriýa we LMS programma çözgütleri",
	description: "Biznesiňizi sanly özgertme bilen güýçlendiriň. AgotaSoft ERP, CRM, buhgalteriýa we LMS çözgütleri bilen netijeliligi ýokarlandyryň, çykdajylary azaldyň.",
	author: "AgotaSoft",
	alternates: buildAlternates("/"),
	openGraph: {
		title: "AgotaSoft: biznesiňizi geljege alyp barýan akylly programma çözgütleri",
		description: "Integrirlenen ERP, CRM, buhgalteriýa we LMS ulgamlarymyz bilen amaly netijeligi ýokarlandyryň, çykdajylary azaldyň we bäsdeşlikde bir ädim öňde boluň. AgotaSoft bilen sanly özgertmäňizi tamamlaň.",
		type: "website",
		url: "https://agotasoft.com/",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft | ERP, CRM, Buhgalteriýa we LMS programma çözgütleri",
		description: "Biznesiňizi sanly özgertme bilen güýçlendiriň. AgotaSoft ERP, CRM, buhgalteriýa we LMS çözgütleri bilen netijeliligi ýokarlandyryň, çykdajylary azaldyň.",
	},
};
function LayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutOne;
