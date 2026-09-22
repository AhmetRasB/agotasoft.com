import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import AboutContent from "@/components/about-page/AboutContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Biz haqimizda | AgotaSoft",
	description: "2021 yildan beri mutaxassis jamoamiz ERP, CRM, buxgalteriya va LMS sohalarida kompaniyalarning raqamli transformatsiyasiga yo'l boshlamoqda.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/about-us"),
	openGraph: {
		title: "Biz haqimizda | AgotaSoft",
		description: "2021 yildan beri mutaxassis jamoamiz ERP, CRM, buxgalteriya va LMS sohalarida kompaniyalarning raqamli transformatsiyasiga yo'l boshlamoqda.",
		type: "website",
		url: "https://agotasoft.com/about-us",
	},
	twitter: {
		card: "summary_large_image",
		title: "Biz haqimizda | AgotaSoft",
		description: "2021 yildan beri mutaxassis jamoamiz ERP, CRM, buxgalteriya va LMS sohalarida kompaniyalarning raqamli transformatsiyasiga yo'l boshlamoqda.",
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
