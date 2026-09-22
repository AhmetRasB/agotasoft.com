import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleTeamDetails from "@/components/team-page/single/SingleTeamDetails";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";

export function generateStaticParams() {
	return staticParamsFor("team", "uz");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("team", "uz"), params.slug) || {};
	const name = item.name || "Jamoa a'zosi";
	return {
		title: `${name} | AgotaSoft Jamoa`,
		description: item.bio || item.title || "AgotaSoft jamoasi a'zosi",
	};
}

export default function TeamMemberPage({ params }) {
	const item = findItem(cmsList("team", "uz"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.name || "Jamoa a'zosi"} />
			<SingleTeamDetails itemSlug={params.slug} />
			<AutoSlider />
			<Faq />
		</>
	);
}
