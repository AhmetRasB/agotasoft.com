
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/faq-page";
import { buildAlternates } from "@/lib/i18n/config";
import StructuredData, { faqPage } from "@/components/common/StructuredData";
import cms from "@/lib/cms/defaults.uz.json";
export const metadata = {
	title: "Tez-tez so'raladigan savollar | AgotaSoft",
	description: "Tez-tez so'raladigan savollar",
	author: "AgotaSoft",
	alternates: buildAlternates("/faq", "uz"),
	openGraph: {
		title: "Tez-tez so'raladigan savollar | AgotaSoft",
		description: "Tez-tez so'raladigan savollar",
		type: "website",
		url: "https://agotasoft.com/uz/faq",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tez-tez so'raladigan savollar | AgotaSoft",
		description: "Tez-tez so'raladigan savollar",
	},
};
function FaqPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.faq.title" fallback="Tez-tez so'raladigan savollar" />} />
			<Faq />
			<StructuredData data={faqPage(cms.faq)} />
		</>
	);
}

export default FaqPage;
