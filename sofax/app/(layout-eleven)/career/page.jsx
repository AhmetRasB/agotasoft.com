import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import dynamic from "next/dynamic";
import { buildAlternates } from "@/lib/i18n/config";

const Career = dynamic(() => import("@/components/career-page"), {
	ssr: false,
});
export const metadata = {
	alternates: buildAlternates("/career"),
	title: "Kariyer | AgotaSoft",
	description: "AgotaSoft'ta kariyer fırsatlarını keşfedin.",
};
function CareerPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.career.title" fallback="Kariyer" />} />
			<Career />
		</>
	);
}

export default CareerPage;
