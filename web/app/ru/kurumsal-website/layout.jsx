import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Корпоративный сайт | AgotaSoft",
	description: "Профессиональная разработка корпоративных сайтов. Адаптивные, SEO-дружественные решения с панелью управления.",
	author: "AgotaSoft",
	alternates: buildAlternates("/kurumsal-website", "ru"),
	openGraph: {
		title: "AgotaSoft Корпоративный сайт",
		description: "Профессиональная разработка корпоративных сайтов. Адаптивные, SEO-дружественные решения с панелью управления.",
		type: "website",
		url: "https://agotasoft.com/ru/kurumsal-website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Корпоративный сайт",
		description: "Профессиональная разработка корпоративных сайтов. Адаптивные, SEO-дружественные решения с панелью управления.",
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
