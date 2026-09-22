import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft Bookkeeping System | AgotaSoft",
	description: "A comprehensive bookkeeping solution that simplifies SMEs' financial processes with Turkish e-invoice integration, current-account management, expense tracking and financial reporting.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pre-accounting"),
	openGraph: {
		title: "AgotaSoft Bookkeeping: Financial Control, Fully in Your Hands",
		description: "A comprehensive bookkeeping solution that simplifies SMEs' financial processes with Turkish e-invoice integration, current-account management, expense tracking and financial reporting.",
		type: "website",
		url: "https://agotasoft.com/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Bookkeeping System | AgotaSoft",
		description: "A comprehensive bookkeeping solution that simplifies SMEs' financial processes with Turkish e-invoice integration, current-account management, expense tracking and financial reporting.",
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
