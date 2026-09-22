import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft CRM System | AgotaSoft",
	description: "Accelerate your business growth with a comprehensive customer database, sales opportunity tracking, marketing automation and customer service. Raise satisfaction, optimize sales performance.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/crm"),
	openGraph: {
		title: "AgotaSoft CRM: Strengthen Customer Relationships, Grow Your Sales",
		description: "Accelerate your business growth with a comprehensive customer database, sales opportunity tracking, marketing automation and customer service. Raise satisfaction, optimize sales performance.",
		type: "website",
		url: "https://agotasoft.com/crm",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft CRM System | AgotaSoft",
		description: "Accelerate your business growth with a comprehensive customer database, sales opportunity tracking, marketing automation and customer service. Raise satisfaction, optimize sales performance.",
	},
};

function CRMLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default CRMLayout;
