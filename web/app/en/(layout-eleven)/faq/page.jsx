
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/faq-page";
import { buildAlternates } from "@/lib/i18n/config";
import StructuredData, { faqPage } from "@/components/common/StructuredData";
import cms from "@/lib/cms/defaults.en.json";
export const metadata = {
	title: "Frequently Asked Questions | AgotaSoft",
	description: "Frequently asked questions",
	author: "AgotaSoft",
	alternates: buildAlternates("/faq", "en"),
	openGraph: {
		title: "Frequently Asked Questions | AgotaSoft",
		description: "Frequently asked questions",
		type: "website",
		url: "https://agotasoft.com/en/faq",
	},
	twitter: {
		card: "summary_large_image",
		title: "Frequently Asked Questions | AgotaSoft",
		description: "Frequently asked questions",
	},
};
function FaqPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.faq.title" fallback="Frequently Asked Questions" />} />
			<Faq />
			<StructuredData data={faqPage(cms.faq)} />
		</>
	);
}

export default FaqPage;
