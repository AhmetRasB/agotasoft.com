import Breadcrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import PreAccountingContent from "@/components/product-pages/PreAccountingContent";

function PreAccountingPage() {
	return (
		<>
			<Breadcrumb title={<CmsText path="pages.pre-accounting.title" fallback="AgotaSoft Bookkeeping System" />} />
			<PreAccountingContent />
		</>
	);
}

export default PreAccountingPage;
