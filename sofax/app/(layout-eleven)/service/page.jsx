import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ServiceContent from "@/components/service-page/ServiceContent";

export const metadata = {
	title: "AgotaSoft Çözümlerimiz | ERP, CRM, Ön Muhasebe ve LMS Hizmetleri",
	description: "AgotaSoft'ın sunduğu ERP, CRM, Ön Muhasebe ve LMS çözümlerini keşfedin. İşletmenizin ihtiyaçlarına özel yazılım hizmetleri.",
	keywords: "AgotaSoft hizmetler, ERP çözümleri, CRM hizmetleri, ön muhasebe, LMS eğitim sistemi",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft Çözümlerimiz | Yazılım Hizmetleri",
		description: "İşletmenizin dijital dönüşümü için kapsamlı yazılım çözümleri.",
		type: "website",
		url: "https://agotasoft.com/service",
	},
};

function ServicePage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.service.title" fallback="Çözümlerimiz" />} />
			<ServiceContent />
		</>
	);
}

export default ServicePage;
