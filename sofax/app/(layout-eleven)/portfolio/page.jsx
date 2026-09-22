import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

export const metadata = {
	title: "Referanslarımız | AgotaSoft",
	description: "AgotaSoft'un gerçekleştirdiği projeler ve referans müşterileri.",
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.portfolio.title" fallback="Referanslar" />} />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;
