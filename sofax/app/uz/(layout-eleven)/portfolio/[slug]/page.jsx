import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import RelatedProject from "@/components/portfolio/single/RelatedProject";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";

export function generateStaticParams() {
	return staticParamsFor("portfolio", "uz");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("portfolio", "uz"), params.slug) || {};
	return {
		title: `${item.title || "Portfolio"} | AgotaSoft`,
		description: item.overview || item.category_label || "AgotaSoft loyihasi",
	};
}

export default function PortfolioItemPage({ params }) {
	const item = findItem(cmsList("portfolio", "uz"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.title || "Loyiha tafsilotlari"} />
			<PortfolioDetails itemSlug={params.slug} />
			<RelatedProject itemSlug={params.slug} />
			<AutoSlider />
		</>
	);
}
