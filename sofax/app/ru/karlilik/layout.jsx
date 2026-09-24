import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "Karlılık.NET | AgotaSoft",
	description: "Аналитика прибыли на базе ИИ для продавцов Trendyol и Hepsiburada: реальная чистая прибыль с учётом комиссий, доставки и налогов.",
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik"),
	openGraph: {
		title: "Karlılık.NET | AgotaSoft",
		description: "Аналитика прибыли на базе ИИ для продавцов Trendyol и Hepsiburada: реальная чистая прибыль с учётом комиссий, доставки и налогов.",
		type: "website",
		url: "https://agotasoft.com/karlilik",
	},
	twitter: {
		card: "summary_large_image",
		title: "Karlılık.NET | AgotaSoft",
		description: "Аналитика прибыли на базе ИИ для продавцов Trendyol и Hepsiburada: реальная чистая прибыль с учётом комиссий, доставки и налогов.",
	},
};

function KarlilikLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default KarlilikLayout;
