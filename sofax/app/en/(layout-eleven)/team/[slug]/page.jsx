
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleTeamDetails from "@/components/team-page/single/SingleTeamDetails";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";

export function generateStaticParams() {
	return staticParamsFor("team", "en");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("team", "en"), params.slug) || {};
	const name = item.name || "Team Details";
	return {
		title: `${name} | AgotaSoft Team`,
		description: item.bio || item.title || "AgotaSoft team member",
	};
}

export default function TeamMemberPage({ params }) {
	const item = findItem(cmsList("team", "en"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.name || "Team Details"} />
			<SingleTeamDetails itemSlug={params.slug} locale="en" />
			<Faq />
		</>
	);
}
