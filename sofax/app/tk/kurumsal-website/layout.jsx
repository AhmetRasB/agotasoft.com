import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Korporatiw web sahypa | AgotaSoft",
	description: "Professional korporatiw web sahypa dizaýny we ösdürilmesi. Uýgunlaşykly, SEO-a laýyk, dolandyryş paneli bilen çözgütler.",
	author: "AgotaSoft",
	alternates: buildAlternates("/kurumsal-website"),
	openGraph: {
		title: "AgotaSoft Korporatiw web sahypa",
		description: "Professional korporatiw web sahypa dizaýny we ösdürilmesi. Uýgunlaşykly, SEO-a laýyk, dolandyryş paneli bilen çözgütler.",
		type: "website",
		url: "https://agotasoft.com/kurumsal-website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Korporatiw web sahypa",
		description: "Professional korporatiw web sahypa dizaýny we ösdürilmesi. Uýgunlaşykly, SEO-a laýyk, dolandyryş paneli bilen çözgütler.",
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
