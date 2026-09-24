import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft ERP | Işiňizi dolandyrýan ýeke-täk platforma",
	description: "AI kömekli AgotaSoft ERP bilen ammar, öndüriş, maliýe we satyn alma proseslerini bir platformada dolandyryň.",
	author: "AgotaSoft",
	alternates: buildAlternates("/"),
	openGraph: {
		title: "AgotaSoft ERP: işiňizi dolandyrýan ýeke-täk platforma",
		description: "Ammar, öndüriş, maliýe we satyn almany bir ekranda birleşdiriň. AI kömegi bilen, çalt gurulýar.",
		type: "website",
		url: "https://agotasoft.com/tk/",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft ERP | Işiňizi dolandyrýan ýeke-täk platforma",
		description: "AI kömekli AgotaSoft ERP bilen ammar, öndüriş, maliýe we satyn alma proseslerini bir platformada dolandyryň.",
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
