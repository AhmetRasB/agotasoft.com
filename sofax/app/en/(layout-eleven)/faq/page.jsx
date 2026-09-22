import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/faq-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Frequently Asked Questions | AgotaSoft",
	description: "Frequently asked questions",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/faq"),
	openGraph: {
		title: "Frequently Asked Questions | AgotaSoft",
		description: "Frequently asked questions",
		type: "website",
		url: "https://agotasoft.com/faq",
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
			<AutoSlider />
		</>
	);
}

export default FaqPage;
