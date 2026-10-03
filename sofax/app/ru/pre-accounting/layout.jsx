import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Бухгалтерия",
	description: "Программа первичного учёта с TRY, USD и EUR одновременно и продажами по штрихкоду; приложение iOS и веб-панель.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pre-accounting", "ru"),
	openGraph: {
		title: "AgotaSoft Бухгалтерия",
		description: "Программа первичного учёта с TRY, USD и EUR одновременно и продажами по штрихкоду; приложение iOS и веб-панель.",
		type: "website",
		url: "https://agotasoft.com/ru/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Бухгалтерия",
		description: "Программа первичного учёта с TRY, USD и EUR одновременно и продажами по штрихкоду; приложение iOS и веб-панель.",
	},
};

function PreAccountingLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default PreAccountingLayout;
