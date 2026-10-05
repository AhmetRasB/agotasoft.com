import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "Kârlılık.NET | Анализ чистой прибыли для Trendyol и Hepsiburada";
const description = "Реальная чистая прибыль по заказам, товарам и магазинам за вычетом комиссии, доставки, сервисного сбора, налога у источника, НДС и рекламы. 14 дней бесплатно, karlilik.net";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik", "ru"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/ru/karlilik",
		locale: "ru_RU",
		images: [{ url: "/images/products/karlilik/dashboard.webp", width: 1600, height: 900 }],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/images/products/karlilik/dashboard.webp"],
	},
};

function KarlilikLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default KarlilikLayout;
