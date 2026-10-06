import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import AboutContent from "@/components/about-page/AboutContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "О нас | AgotaSoft",
	description: "Наша команда из двух человек помогает компаниям с цифровой трансформацией в сферах ERP, CRM, бухгалтерии и LMS.",
	author: "AgotaSoft",
	alternates: buildAlternates("/about-us", "ru"),
	openGraph: {
		title: "О нас | AgotaSoft",
		description: "Наша команда из двух человек помогает компаниям с цифровой трансформацией в сферах ERP, CRM, бухгалтерии и LMS.",
		type: "website",
		url: "https://agotasoft.com/ru/about-us",
	},
	twitter: {
		card: "summary_large_image",
		title: "О нас | AgotaSoft",
		description: "Наша команда из двух человек помогает компаниям с цифровой трансформацией в сферах ERP, CRM, бухгалтерии и LMS.",
	},
};

function AboutUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.about.title" fallback="О нас" />} />
			<AboutContent />
		</>
	);
}

export default AboutUs;
