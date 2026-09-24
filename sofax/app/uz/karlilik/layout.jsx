import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "Karlılık.NET | AgotaSoft",
	description: "Trendyol va Hepsiburada sotuvchilari uchun komissiya, yetkazib berish va soliqlarni hisobga olgan holda haqiqiy sof foydani ko'rsatuvchi sun'iy intellektli tahlil platformasi.",
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik"),
	openGraph: {
		title: "Karlılık.NET | AgotaSoft",
		description: "Trendyol va Hepsiburada sotuvchilari uchun komissiya, yetkazib berish va soliqlarni hisobga olgan holda haqiqiy sof foydani ko'rsatuvchi sun'iy intellektli tahlil platformasi.",
		type: "website",
		url: "https://agotasoft.com/karlilik",
	},
	twitter: {
		card: "summary_large_image",
		title: "Karlılık.NET | AgotaSoft",
		description: "Trendyol va Hepsiburada sotuvchilari uchun komissiya, yetkazib berish va soliqlarni hisobga olgan holda haqiqiy sof foydani ko'rsatuvchi sun'iy intellektli tahlil platformasi.",
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
