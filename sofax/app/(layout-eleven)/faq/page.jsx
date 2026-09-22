import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/faq-page";
export const metadata = {
	title: "Sıkça Sorulan Sorular | AgotaSoft",
	description: "AgotaSoft ürünleri hakkında sıkça sorulan sorular.",
};
function FaqPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.faq.title" fallback="Faq" />} />
			<Faq />
			<AutoSlider />
		</>
	);
}

export default FaqPage;
