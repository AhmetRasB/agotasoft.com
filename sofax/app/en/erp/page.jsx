import Breadcrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ErpContent from "@/components/product-pages/ErpContent";

function ERPPage() {
	return (
		<>
			<Breadcrumb title={<CmsText path="pages.erp.title" fallback="AgotaSoft ERP System" />} />
			<ErpContent />
		</>
	);
}

export default ERPPage;
