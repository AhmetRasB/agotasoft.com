import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ServiceContent from "@/components/service-page/ServiceContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Yechimlarimiz | AgotaSoft",
	description: "Mutaxassis jamoamiz ERP, CRM, buxgalteriya va LMS sohalarida biznesingizning barcha ehtiyojlariga javob beradi.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/service"),
	openGraph: {
		title: "Yechimlarimiz | AgotaSoft",
		description: "Mutaxassis jamoamiz ERP, CRM, buxgalteriya va LMS sohalarida biznesingizning barcha ehtiyojlariga javob beradi.",
		type: "website",
		url: "https://agotasoft.com/service",
	},
	twitter: {
		card: "summary_large_image",
		title: "Yechimlarimiz | AgotaSoft",
		description: "Mutaxassis jamoamiz ERP, CRM, buxgalteriya va LMS sohalarida biznesingizning barcha ehtiyojlariga javob beradi.",
	},
};

function ServicePage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.service.title" fallback="Yechimlarimiz" />} />
			<ServiceContent />
		</>
	);
}

export default ServicePage;
