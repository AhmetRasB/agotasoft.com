import LogoSlider from "@/components/career-page/logo-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import dynamic from "next/dynamic";

const Career = dynamic(() => import("@/components/career-page"), {
	ssr: false,
});
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Karýera | AgotaSoft",
	description: "Açyk orunlarymyza goşulyň, AgotaSoft toparynda programma üpjünçilik we sanly özgertme taslamalarynda ýer alyň.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/career"),
	openGraph: {
		title: "Karýera | AgotaSoft",
		description: "Açyk orunlarymyza goşulyň, AgotaSoft toparynda programma üpjünçilik we sanly özgertme taslamalarynda ýer alyň.",
		type: "website",
		url: "https://agotasoft.com/career",
	},
	twitter: {
		card: "summary_large_image",
		title: "Karýera | AgotaSoft",
		description: "Açyk orunlarymyza goşulyň, AgotaSoft toparynda programma üpjünçilik we sanly özgertme taslamalarynda ýer alyň.",
	},
};
function CareerPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.career.title" fallback="Karýera" />} />
			<Career />
			<LogoSlider />
		</>
	);
}

export default CareerPage;
