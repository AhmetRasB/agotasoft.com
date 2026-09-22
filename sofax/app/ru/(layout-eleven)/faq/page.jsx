import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/faq-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Часто задаваемые вопросы | AgotaSoft",
	description: "Часто задаваемые вопросы",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/faq"),
	openGraph: {
		title: "Часто задаваемые вопросы | AgotaSoft",
		description: "Часто задаваемые вопросы",
		type: "website",
		url: "https://agotasoft.com/faq",
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
			<AutoSlider />
		</>
	);
}

export default FaqPage;
