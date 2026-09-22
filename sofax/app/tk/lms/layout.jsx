import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft LMS ulgamy | AgotaSoft",
	description: "Sapak dolandyryşy, onlaýn synag we netijelilik hasabaty bilen korporatiw bilim proseslerňizi sanlylaşdyryň.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/lms"),
	openGraph: {
		title: "AgotaSoft LMS: korporatiw bilim we ösüş platformaňyz",
		description: "Sapak dolandyryşy, onlaýn synag we netijelilik hasabaty bilen korporatiw bilim proseslerňizi sanlylaşdyryň.",
		type: "website",
		url: "https://agotasoft.com/lms",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft LMS ulgamy | AgotaSoft",
		description: "Sapak dolandyryşy, onlaýn synag we netijelilik hasabaty bilen korporatiw bilim proseslerňizi sanlylaşdyryň.",
	},
};

function LMSLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LMSLayout;
