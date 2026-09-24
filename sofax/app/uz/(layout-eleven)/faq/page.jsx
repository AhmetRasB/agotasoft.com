
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/faq-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Tez-tez so'raladigan savollar | AgotaSoft",
	description: "Tez-tez so'raladigan savollar",
	author: "AgotaSoft",
	alternates: buildAlternates("/faq"),
	openGraph: {
		title: "Tez-tez so'raladigan savollar | AgotaSoft",
		description: "Tez-tez so'raladigan savollar",
		type: "website",
		url: "https://agotasoft.com/faq",
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
		</>
	);
}

export default FaqPage;
