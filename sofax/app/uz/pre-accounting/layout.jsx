import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft buxgalteriya tizimi | AgotaSoft",
	description: "E-hisob-faktura integratsiyasi, joriy hisob boshqaruvi, xarajatlarni kuzatish va moliyaviy hisobot bilan KO'B'larning moliyaviy jarayonlarini osonlashtiruvchi keng qamrovli buxgalteriya yechimi.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/pre-accounting"),
	openGraph: {
		title: "AgotaSoft buxgalteriya: moliyaviy nazorat to'liq qo'lingizda",
		description: "E-hisob-faktura integratsiyasi, joriy hisob boshqaruvi, xarajatlarni kuzatish va moliyaviy hisobot bilan KO'B'larning moliyaviy jarayonlarini osonlashtiruvchi keng qamrovli buxgalteriya yechimi.",
		type: "website",
		url: "https://agotasoft.com/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft buxgalteriya tizimi | AgotaSoft",
		description: "E-hisob-faktura integratsiyasi, joriy hisob boshqaruvi, xarajatlarni kuzatish va moliyaviy hisobot bilan KO'B'larning moliyaviy jarayonlarini osonlashtiruvchi keng qamrovli buxgalteriya yechimi.",
	},
};

function PreAccountingLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default PreAccountingLayout;
