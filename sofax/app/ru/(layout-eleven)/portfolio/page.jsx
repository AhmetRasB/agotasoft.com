import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Наши проекты | AgotaSoft",
	description: "Наши проекты и реализованные кейсы",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/portfolio"),
	openGraph: {
		title: "Наши проекты | AgotaSoft",
		description: "Наши проекты и реализованные кейсы",
		type: "website",
		url: "https://agotasoft.com/portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Наши проекты | AgotaSoft",
		description: "Наши проекты и реализованные кейсы",
	},
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.portfolio.title" fallback="Наши проекты" />} />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;
