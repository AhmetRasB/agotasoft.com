import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft | ERP, CRM, Buxgalteriya va LMS dasturiy yechimlari",
	description: "Biznesingizni raqamli transformatsiya bilan kuchaytiring. AgotaSoft ERP, CRM, buxgalteriya va LMS yechimlari bilan samaradorlikni oshiring, xarajatlarni kamaytiring.",
	author: "AgotaSoft",
	alternates: buildAlternates("/"),
	openGraph: {
		title: "AgotaSoft: biznesingizni kelajakka olib boradigan aqlli dasturiy yechimlar",
		description: "Integratsiyalashgan ERP, CRM, buxgalteriya va LMS tizimlarimiz bilan operatsion samaradorlikni oshiring, xarajatlarni kamaytiring va raqobatda bir qadam oldinda bo'ling. AgotaSoft bilan raqamli transformatsiyangizni yakunlang.",
		type: "website",
		url: "https://agotasoft.com/",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft | ERP, CRM, Buxgalteriya va LMS dasturiy yechimlari",
		description: "Biznesingizni raqamli transformatsiya bilan kuchaytiring. AgotaSoft ERP, CRM, buxgalteriya va LMS yechimlari bilan samaradorlikni oshiring, xarajatlarni kamaytiring.",
	},
};
function LayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutOne;
