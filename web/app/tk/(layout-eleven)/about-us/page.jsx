import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import AboutContent from "@/components/about-page/AboutContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Biz hakda | AgotaSoft",
	description: "Iki adamdan ybarat toparymyz ERP, CRM, buhgalteriýa we LMS ugurlarynda kompaniýalaryň sanly özgertmesine kömek edýär.",
	author: "AgotaSoft",
	alternates: buildAlternates("/about-us", "tk"),
	openGraph: {
		title: "Biz hakda | AgotaSoft",
		description: "Iki adamdan ybarat toparymyz ERP, CRM, buhgalteriýa we LMS ugurlarynda kompaniýalaryň sanly özgertmesine kömek edýär.",
		type: "website",
		url: "https://agotasoft.com/tk/about-us",
	},
	twitter: {
		card: "summary_large_image",
		title: "Biz hakda | AgotaSoft",
		description: "Iki adamdan ybarat toparymyz ERP, CRM, buhgalteriýa we LMS ugurlarynda kompaniýalaryň sanly özgertmesine kömek edýär.",
	},
};

function AboutUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.about.title" fallback="Biz hakda" />} />
			<AboutContent />
		</>
	);
}

export default AboutUs;
