import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Taslamalarymyz | AgotaSoft",
	description: "Taslamalarymyz we tamamlanan işlerimiz",
	author: "AgotaSoft",
	alternates: buildAlternates("/portfolio", "tk"),
	openGraph: {
		title: "Taslamalarymyz | AgotaSoft",
		description: "Taslamalarymyz we tamamlanan işlerimiz",
		type: "website",
		url: "https://agotasoft.com/tk/portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Taslamalarymyz | AgotaSoft",
		description: "Taslamalarymyz we tamamlanan işlerimiz",
	},
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.portfolio.title" fallback="Taslamalarymyz" />} />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;
