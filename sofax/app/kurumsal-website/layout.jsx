import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Kurumsal Website | AgotaSoft",
	description: "Profesyonel kurumsal web sitesi tasarımı ve geliştirme. Responsive, SEO uyumlu ve yönetim panelli çözümler.",
	author: "AgotaSoft",
	alternates: buildAlternates("/kurumsal-website"),
	openGraph: {
		title: "AgotaSoft Kurumsal Website",
		description: "Profesyonel kurumsal web sitesi tasarımı ve geliştirme. Responsive, SEO uyumlu ve yönetim panelli çözümler.",
		type: "website",
		url: "https://agotasoft.com/kurumsal-website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Kurumsal Website",
		description: "Profesyonel kurumsal web sitesi tasarımı ve geliştirme. Responsive, SEO uyumlu ve yönetim panelli çözümler.",
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
