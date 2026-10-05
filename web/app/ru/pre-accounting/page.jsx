import Breadcrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import PreAccountingContent from "@/components/product-pages/PreAccountingContent";

function PreAccountingPage() {
	return (
		<>
			<Breadcrumb title={<CmsText path="pages.pre-accounting.title" fallback="Система AgotaSoft «Бухгалтерия»" />} />
			<PreAccountingContent />
		</>
	);
}

export default PreAccountingPage;
