
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleTeamDetails from "@/components/team-page/single/SingleTeamDetails";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";
import { buildAlternates } from "@/lib/i18n/config";

export function generateStaticParams() {
	return staticParamsFor("team");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("team"), params.slug) || {};
	const name = item.name || "Team Details";
	return {
		alternates: buildAlternates(`/team/${params.slug}`),
		title: `${name} | AgotaSoft Ekip`,
		description: item.bio || item.title || "AgotaSoft ekip üyesi",
	};
}

export default function TeamMemberPage({ params }) {
	const item = findItem(cmsList("team"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.name || "Team Details"} />
			<SingleTeamDetails itemSlug={params.slug} locale="tr" />
			<Faq />
		</>
	);
}
