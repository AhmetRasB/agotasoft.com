import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Corporate Website | AgotaSoft",
	description: "Professional corporate website design and development. Responsive, SEO-friendly solutions with an admin panel.",
	author: "AgotaSoft",
	alternates: buildAlternates("/kurumsal-website"),
	openGraph: {
		title: "AgotaSoft Corporate Website",
		description: "Professional corporate website design and development. Responsive, SEO-friendly solutions with an admin panel.",
		type: "website",
		url: "https://agotasoft.com/kurumsal-website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Corporate Website",
		description: "Professional corporate website design and development. Responsive, SEO-friendly solutions with an admin panel.",
	},
};

function CorporateWebsiteLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default CorporateWebsiteLayout;
