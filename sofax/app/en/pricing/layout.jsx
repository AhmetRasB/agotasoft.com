import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Pricing | AgotaSoft",
	description: "Flexible pricing options for AgotaSoft software solutions. Packages for everyone, from small businesses to large enterprises.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/pricing"),
	openGraph: {
		title: "Packages That Fit the Size of Your Business",
		description: "Flexible pricing options for AgotaSoft software solutions. Packages for everyone, from small businesses to large enterprises.",
		type: "website",
		url: "https://agotasoft.com/pricing",
	},
	twitter: {
		card: "summary_large_image",
		title: "Pricing | AgotaSoft",
		description: "Flexible pricing options for AgotaSoft software solutions. Packages for everyone, from small businesses to large enterprises.",
	},
};

function PricingLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default PricingLayout;
