import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import dynamic from "next/dynamic";

const Career = dynamic(() => import("@/components/career-page"), {
	ssr: false,
});
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Karyera | AgotaSoft",
	description: "Ochiq lavozimlarimizga qo'shiling, AgotaSoft jamoasida dasturiy ta'minot va raqamli transformatsiya loyihalarida ishtirok eting.",
	author: "AgotaSoft",
	alternates: buildAlternates("/career"),
	openGraph: {
		title: "Karyera | AgotaSoft",
		description: "Ochiq lavozimlarimizga qo'shiling, AgotaSoft jamoasida dasturiy ta'minot va raqamli transformatsiya loyihalarida ishtirok eting.",
		type: "website",
		url: "https://agotasoft.com/career",
	},
	twitter: {
		card: "summary_large_image",
		title: "Karyera | AgotaSoft",
		description: "Ochiq lavozimlarimizga qo'shiling, AgotaSoft jamoasida dasturiy ta'minot va raqamli transformatsiya loyihalarida ishtirok eting.",
	},
};
function CareerPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.career.title" fallback="Karyera" />} />
			<Career />
		</>
	);
}

export default CareerPage;
