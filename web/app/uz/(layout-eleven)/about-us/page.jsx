import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import AboutContent from "@/components/about-page/AboutContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Biz haqimizda | AgotaSoft",
	description: "Ikki kishilik jamoamiz ERP, CRM, buxgalteriya va LMS sohalarida kompaniyalarning raqamli transformatsiyasiga yordam beradi.",
	author: "AgotaSoft",
	alternates: buildAlternates("/about-us", "uz"),
	openGraph: {
		title: "Biz haqimizda | AgotaSoft",
		description: "Ikki kishilik jamoamiz ERP, CRM, buxgalteriya va LMS sohalarida kompaniyalarning raqamli transformatsiyasiga yordam beradi.",
		type: "website",
		url: "https://agotasoft.com/uz/about-us",
	},
	twitter: {
		card: "summary_large_image",
		title: "Biz haqimizda | AgotaSoft",
		description: "Ikki kishilik jamoamiz ERP, CRM, buxgalteriya va LMS sohalarida kompaniyalarning raqamli transformatsiyasiga yordam beradi.",
	},
};

function AboutUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.about.title" fallback="Biz haqimizda" />} />
			<AboutContent />
		</>
	);
}

export default AboutUs;
