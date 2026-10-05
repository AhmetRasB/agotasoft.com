import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import AboutContent from "@/components/about-page/AboutContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "About Us | AgotaSoft",
	description: "Since 2021, our expert team has been leading businesses through digital transformation across ERP, CRM, Bookkeeping and LMS.",
	author: "AgotaSoft",
	alternates: buildAlternates("/about-us", "en"),
	openGraph: {
		title: "About Us | AgotaSoft",
		description: "Since 2021, our expert team has been leading businesses through digital transformation across ERP, CRM, Bookkeeping and LMS.",
		type: "website",
		url: "https://agotasoft.com/en/about-us",
	},
	twitter: {
		card: "summary_large_image",
		title: "About Us | AgotaSoft",
		description: "Since 2021, our expert team has been leading businesses through digital transformation across ERP, CRM, Bookkeeping and LMS.",
	},
};

function AboutUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.about.title" fallback="About Us" />} />
			<AboutContent />
		</>
	);
}

export default AboutUs;
