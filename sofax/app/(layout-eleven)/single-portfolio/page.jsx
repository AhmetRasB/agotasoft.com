import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import RelatedProject from "@/components/portfolio/single/RelatedProject";
export const metadata = {
	title: "Referans Detayı | AgotaSoft",
	description: "AgotaSoft referans proje detayı.",
};
function SinglePortfolioPage() {
	return (
		<>
			<BreadCrumb title="Referans Detayı" />
			<PortfolioDetails />
			<RelatedProject />
			<AutoSlider />
		</>
	);
}

export default SinglePortfolioPage;
