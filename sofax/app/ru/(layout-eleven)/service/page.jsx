import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ServiceContent from "@/components/service-page/ServiceContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Решения | AgotaSoft",
	description: "Наша команда экспертов закрывает все потребности вашего бизнеса в сферах ERP, CRM, бухгалтерии и LMS.",
	author: "AgotaSoft",
	alternates: buildAlternates("/service"),
	openGraph: {
		title: "Решения | AgotaSoft",
		description: "Наша команда экспертов закрывает все потребности вашего бизнеса в сферах ERP, CRM, бухгалтерии и LMS.",
		type: "website",
		url: "https://agotasoft.com/service",
	},
	twitter: {
		card: "summary_large_image",
		title: "Решения | AgotaSoft",
		description: "Наша команда экспертов закрывает все потребности вашего бизнеса в сферах ERP, CRM, бухгалтерии и LMS.",
	},
};

function ServicePage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.service.title" fallback="Решения" />} />
			<ServiceContent />
		</>
	);
}

export default ServicePage;
