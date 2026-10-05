import Breadcrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import CrmContent from "@/components/product-pages/CrmContent";

function CRMPage() {
	return (
		<>
			<Breadcrumb title={<CmsText path="pages.crm.title" fallback="AgotaSoft CRM Sistemi" />} />
			<CrmContent />
		</>
	);
}

export default CRMPage;
