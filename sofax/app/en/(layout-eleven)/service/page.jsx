import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ServiceContent from "@/components/service-page/ServiceContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Solutions | AgotaSoft",
	description: "Our expert team meets all your business needs across ERP, CRM, Bookkeeping and LMS.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/service"),
	openGraph: {
		title: "Solutions | AgotaSoft",
		description: "Our expert team meets all your business needs across ERP, CRM, Bookkeeping and LMS.",
		type: "website",
		url: "https://agotasoft.com/service",
	},
	twitter: {
		card: "summary_large_image",
		title: "Solutions | AgotaSoft",
		description: "Our expert team meets all your business needs across ERP, CRM, Bookkeeping and LMS.",
	},
};

function ServicePage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.service.title" fallback="Solutions" />} />
			<ServiceContent />
		</>
	);
}

export default ServicePage;
