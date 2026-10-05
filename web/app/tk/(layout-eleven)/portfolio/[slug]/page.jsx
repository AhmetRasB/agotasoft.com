
import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import RelatedProject from "@/components/portfolio/single/RelatedProject";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";
import { buildAlternates } from "@/lib/i18n/config";

export function generateStaticParams() {
	return staticParamsFor("portfolio", "tk");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("portfolio", "tk"), params.slug) || {};
	return {
		alternates: buildAlternates(`/portfolio/${params.slug}`, "tk"),
		title: `${item.title || "Portfolio"} | AgotaSoft`,
		description: item.overview || item.category_label || "AgotaSoft taslamasy",
	};
}

export default function PortfolioItemPage({ params }) {
	const item = findItem(cmsList("portfolio", "tk"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.title || "Taslama jikme-jigi"} />
			<PortfolioDetails itemSlug={params.slug} />
			<RelatedProject itemSlug={params.slug} />
		</>
	);
}
