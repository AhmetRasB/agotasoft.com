import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Korporativ veb-sayt | AgotaSoft",
	description: "Professional korporativ veb-sayt dizayni va ishlab chiqish. Moslashuvchan, SEO'ga mos, boshqaruv paneli bilan yechimlar.",
	author: "AgotaSoft",
	alternates: buildAlternates("/kurumsal-website", "uz"),
	openGraph: {
		title: "AgotaSoft Korporativ veb-sayt",
		description: "Professional korporativ veb-sayt dizayni va ishlab chiqish. Moslashuvchan, SEO'ga mos, boshqaruv paneli bilan yechimlar.",
		type: "website",
		url: "https://agotasoft.com/uz/kurumsal-website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Korporativ veb-sayt",
		description: "Professional korporativ veb-sayt dizayni va ishlab chiqish. Moslashuvchan, SEO'ga mos, boshqaruv paneli bilan yechimlar.",
	},
};

function CorporateWebsiteLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default CorporateWebsiteLayout;
