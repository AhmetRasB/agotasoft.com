import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft ERP System | AgotaSoft",
	description: "Manage inventory, finance, production planning, procurement and HR with one integrated system. Increase efficiency, cut costs and accelerate growth.",
	author: "AgotaSoft",
	alternates: buildAlternates("/erp"),
	openGraph: {
		title: "AgotaSoft ERP: Every Process From Production to Finance, on One Platform",
		description: "Manage inventory, finance, production planning, procurement and HR with one integrated system. Increase efficiency, cut costs and accelerate growth.",
		type: "website",
		url: "https://agotasoft.com/erp",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft ERP System | AgotaSoft",
		description: "Manage inventory, finance, production planning, procurement and HR with one integrated system. Increase efficiency, cut costs and accelerate growth.",
	},
};

function ERPLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default ERPLayout;
