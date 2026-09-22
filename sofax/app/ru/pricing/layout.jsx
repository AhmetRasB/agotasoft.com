import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Тарифы | AgotaSoft",
	description: "Гибкие тарифные планы для программных решений AgotaSoft. Пакеты для всех — от малого бизнеса до крупных предприятий.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/pricing"),
	openGraph: {
		title: "Пакеты, подходящие для размера вашего бизнеса",
		description: "Гибкие тарифные планы для программных решений AgotaSoft. Пакеты для всех — от малого бизнеса до крупных предприятий.",
		type: "website",
		url: "https://agotasoft.com/pricing",
	},
	twitter: {
		card: "summary_large_image",
		title: "Тарифы | AgotaSoft",
		description: "Гибкие тарифные планы для программных решений AgotaSoft. Пакеты для всех — от малого бизнеса до крупных предприятий.",
	},
};

function PricingLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default PricingLayout;
