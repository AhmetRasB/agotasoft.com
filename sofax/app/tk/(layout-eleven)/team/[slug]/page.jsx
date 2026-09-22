import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleTeamDetails from "@/components/team-page/single/SingleTeamDetails";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";

export function generateStaticParams() {
	return staticParamsFor("team", "tk");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("team", "tk"), params.slug) || {};
	const name = item.name || "Topar agzasy";
	return {
		title: `${name} | AgotaSoft Topar`,
		description: item.bio || item.title || "AgotaSoft topar agzasy",
	};
}

export default function TeamMemberPage({ params }) {
	const item = findItem(cmsList("team", "tk"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.name || "Topar agzasy"} />
			<SingleTeamDetails itemSlug={params.slug} />
			<AutoSlider />
			<Faq />
		</>
	);
}
