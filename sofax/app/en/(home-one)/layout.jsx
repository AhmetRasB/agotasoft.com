import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft ERP | The One Platform Running Your Business",
	description: "Manage inventory, production, finance and procurement on one AI-assisted platform with AgotaSoft ERP.",
	author: "AgotaSoft",
	alternates: buildAlternates("/"),
	openGraph: {
		title: "AgotaSoft ERP: The One Platform Running Your Business",
		description: "Bring inventory, production, finance and procurement together on one screen. AI-assisted, quick to set up.",
		type: "website",
		url: "https://agotasoft.com/en/",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft ERP | The One Platform Running Your Business",
		description: "Manage inventory, production, finance and procurement on one AI-assisted platform with AgotaSoft ERP.",
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
