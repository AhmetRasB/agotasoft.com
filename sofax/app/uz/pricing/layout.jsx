import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Narxlar | AgotaSoft",
	description: "AgotaSoft dasturiy yechimlari uchun moslashuvchan narx variantlari. Kichik bizneslardan yirik kompaniyalargacha hammaga mos paketlar.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pricing", "uz"),
	openGraph: {
		title: "Biznesingiz hajmiga mos paketlar",
		description: "AgotaSoft dasturiy yechimlari uchun moslashuvchan narx variantlari. Kichik bizneslardan yirik kompaniyalargacha hammaga mos paketlar.",
		type: "website",
		url: "https://agotasoft.com/uz/pricing",
	},
	twitter: {
		card: "summary_large_image",
		title: "Narxlar | AgotaSoft",
		description: "AgotaSoft dasturiy yechimlari uchun moslashuvchan narx variantlari. Kichik bizneslardan yirik kompaniyalargacha hammaga mos paketlar.",
	},
};

function PricingLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default PricingLayout;
