import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import AboutContent from "@/components/about-page/AboutContent";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	alternates: buildAlternates("/about-us"),
	title: "AgotaSoft Hakkımızda | İşletmenizi Geleceğe Taşıyan Yazılım Çözümleri",
	description: "ERP, CRM, Ön Muhasebe ve LMS alanlarında iki kişilik ekibimizle işletmelerin dijital dönüşümüne destek oluyoruz.",
	keywords: "AgotaSoft hakkımızda, yazılım firması, ERP uzmanı, CRM çözümleri, dijital dönüşüm",
	author: "AgotaSoft",
	openGraph: {
		title: "AgotaSoft Hakkımızda | Yazılım Çözümlerinde Uzman Ekip",
		description: "İki kişilik ekibimizle işletmelerin dijital dönüşümüne destek oluyoruz.",
		type: "website",
		url: "https://agotasoft.com/about-us",
	},
};

function AboutUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.about.title" fallback="Hakkımızda" />} />
			<AboutContent />
		</>
	);
}

export default AboutUs;
