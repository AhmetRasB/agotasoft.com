import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ServiceContent from "@/components/service-page/ServiceContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Çözgütlerimiz | AgotaSoft",
	description: "Bilermenler toparymyz ERP, CRM, buhgalteriýa we LMS ugurlarynda biznesiňiziň ähli isleglerine jogap berýär.",
	author: "AgotaSoft",
	alternates: buildAlternates("/service", "tk"),
	openGraph: {
		title: "Çözgütlerimiz | AgotaSoft",
		description: "Bilermenler toparymyz ERP, CRM, buhgalteriýa we LMS ugurlarynda biznesiňiziň ähli isleglerine jogap berýär.",
		type: "website",
		url: "https://agotasoft.com/tk/service",
	},
	twitter: {
		card: "summary_large_image",
		title: "Çözgütlerimiz | AgotaSoft",
		description: "Bilermenler toparymyz ERP, CRM, buhgalteriýa we LMS ugurlarynda biznesiňiziň ähli isleglerine jogap berýär.",
	},
};

function ServicePage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.service.title" fallback="Çözgütlerimiz" />} />
			<ServiceContent />
		</>
	);
}

export default ServicePage;
