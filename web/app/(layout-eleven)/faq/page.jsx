
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/faq-page";
import { buildAlternates } from "@/lib/i18n/config";
import StructuredData, { faqPage } from "@/components/common/StructuredData";
import cms from "@/lib/cms/defaults.json";
export const metadata = {
	alternates: buildAlternates("/faq"),
	title: "Sıkça Sorulan Sorular | AgotaSoft",
	description: "AgotaSoft ürünleri hakkında sıkça sorulan sorular.",
};
function FaqPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.faq.title" fallback="Faq" />} />
			<Faq />
			<StructuredData data={faqPage(cms.faq)} />
		</>
	);
}

export default FaqPage;
