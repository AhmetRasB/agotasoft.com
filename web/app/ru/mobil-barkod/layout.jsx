import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Мобильная система штрихкодов | AgotaSoft",
	description: "Ускорьте инвентаризацию, приёмку/отгрузку и учёт запасов на складах и в магазинах с помощью мобильных сканеров.",
	author: "AgotaSoft",
	alternates: buildAlternates("/mobil-barkod", "ru"),
	openGraph: {
		title: "AgotaSoft Мобильная система штрихкодов",
		description: "Ускорьте инвентаризацию, приёмку/отгрузку и учёт запасов на складах и в магазинах с помощью мобильных сканеров.",
		type: "website",
		url: "https://agotasoft.com/ru/mobil-barkod",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Мобильная система штрихкодов",
		description: "Ускорьте инвентаризацию, приёмку/отгрузку и учёт запасов на складах и в магазинах с помощью мобильных сканеров.",
	},
};

function MobilBarkodLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default MobilBarkodLayout;
