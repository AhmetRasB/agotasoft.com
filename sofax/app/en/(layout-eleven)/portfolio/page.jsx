import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Case Studies | AgotaSoft",
	description: "Our Case Studies and Completed Projects",
	author: "AgotaSoft",
	alternates: buildAlternates("/portfolio"),
	openGraph: {
		title: "Case Studies | AgotaSoft",
		description: "Our Case Studies and Completed Projects",
		type: "website",
		url: "https://agotasoft.com/portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Case Studies | AgotaSoft",
		description: "Our Case Studies and Completed Projects",
	},
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.portfolio.title" fallback="Case Studies" />} />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;
