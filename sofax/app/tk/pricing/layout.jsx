import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Bahalar | AgotaSoft",
	description: "AgotaSoft programma çözgütleri üçin çeýe baha mümkinçilikleri. Kiçi kärhanalardan uly kompaniýalara çenli hemmeler üçin paketler.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pricing", "tk"),
	openGraph: {
		title: "Biznesiňiziň ululygyna laýyk paketler",
		description: "AgotaSoft programma çözgütleri üçin çeýe baha mümkinçilikleri. Kiçi kärhanalardan uly kompaniýalara çenli hemmeler üçin paketler.",
		type: "website",
		url: "https://agotasoft.com/tk/pricing",
	},
	twitter: {
		card: "summary_large_image",
		title: "Bahalar | AgotaSoft",
		description: "AgotaSoft programma çözgütleri üçin çeýe baha mümkinçilikleri. Kiçi kärhanalardan uly kompaniýalara çenli hemmeler üçin paketler.",
	},
};

function PricingLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default PricingLayout;
