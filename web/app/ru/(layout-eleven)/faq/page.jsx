
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/faq-page";
import { buildAlternates } from "@/lib/i18n/config";
import StructuredData, { faqPage } from "@/components/common/StructuredData";
import cms from "@/lib/cms/defaults.ru.json";
export const metadata = {
	title: "Часто задаваемые вопросы | AgotaSoft",
	description: "Часто задаваемые вопросы",
	author: "AgotaSoft",
	alternates: buildAlternates("/faq", "ru"),
	openGraph: {
		title: "Часто задаваемые вопросы | AgotaSoft",
		description: "Часто задаваемые вопросы",
		type: "website",
		url: "https://agotasoft.com/ru/faq",
	},
	twitter: {
		card: "summary_large_image",
		title: "Часто задаваемые вопросы | AgotaSoft",
		description: "Часто задаваемые вопросы",
	},
};
function FaqPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.faq.title" fallback="Часто задаваемые вопросы" />} />
			<Faq />
			<StructuredData data={faqPage(cms.faq)} />
		</>
	);
}

export default FaqPage;
