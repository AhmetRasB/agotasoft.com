import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Loyihalarimiz | AgotaSoft",
	description: "Loyihalarimiz va yakunlangan ishlarimiz",
	author: "AgotaSoft",
	alternates: buildAlternates("/portfolio"),
	openGraph: {
		title: "Loyihalarimiz | AgotaSoft",
		description: "Loyihalarimiz va yakunlangan ishlarimiz",
		type: "website",
		url: "https://agotasoft.com/portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Loyihalarimiz | AgotaSoft",
		description: "Loyihalarimiz va yakunlangan ishlarimiz",
	},
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.portfolio.title" fallback="Loyihalarimiz" />} />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;
