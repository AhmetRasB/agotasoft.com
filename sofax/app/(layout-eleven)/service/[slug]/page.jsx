import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleServiceDetails from "@/components/service-page/single";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";

export function generateStaticParams() {
	return staticParamsFor("services");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("services"), params.slug) || {};
	return {
		title: `${item.title || "Service"} | AgotaSoft`,
		description: item.description || "AgotaSoft çözüm detayı",
	};
}

export default function ServiceItemPage({ params }) {
	const item = findItem(cmsList("services"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.title || "Service Details"} />
			<SingleServiceDetails itemSlug={params.slug} />
			<Faq />
			<AutoSlider />
		</>
	);
}
