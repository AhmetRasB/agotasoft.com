import Breadcrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import LmsContent from "@/components/product-pages/LmsContent";

function LMSPage() {
	return (
		<>
			<Breadcrumb title={<CmsText path="pages.lms.title" fallback="AgotaSoft LMS ulgamy" />} />
			<LmsContent />
		</>
	);
}

export default LMSPage;
