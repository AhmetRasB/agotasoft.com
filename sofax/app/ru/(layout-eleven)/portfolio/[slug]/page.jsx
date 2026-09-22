import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import RelatedProject from "@/components/portfolio/single/RelatedProject";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";

export function generateStaticParams() {
	return staticParamsFor("portfolio", "ru");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("portfolio", "ru"), params.slug) || {};
	return {
		title: `${item.title || "Portfolio"} | AgotaSoft`,
		description: item.overview || item.category_label || "Кейс AgotaSoft",
	};
}

export default function PortfolioItemPage({ params }) {
	const item = findItem(cmsList("portfolio", "ru"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.title || "О проекте"} />
			<PortfolioDetails itemSlug={params.slug} />
			<RelatedProject itemSlug={params.slug} />
			<AutoSlider />
		</>
	);
}
