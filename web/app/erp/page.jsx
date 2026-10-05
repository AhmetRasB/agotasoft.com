import Breadcrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ErpContent from "@/components/product-pages/ErpContent";

function ERPPage() {
	return (
		<>
			<Breadcrumb title={<CmsText path="pages.erp.title" fallback="AgotaSoft ERP Sistemi" />} />
			<ErpContent />
		</>
	);
}

export default ERPPage;
