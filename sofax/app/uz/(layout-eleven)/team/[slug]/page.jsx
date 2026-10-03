
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleTeamDetails from "@/components/team-page/single/SingleTeamDetails";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";
import { buildAlternates } from "@/lib/i18n/config";

export function generateStaticParams() {
	return staticParamsFor("team", "uz");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("team", "uz"), params.slug) || {};
	const name = item.name || "Jamoa a'zosi";
	return {
		alternates: buildAlternates(`/team/${params.slug}`, "uz"),
		title: `${name} | AgotaSoft Jamoa`,
		description: item.bio || item.title || "AgotaSoft jamoasi a'zosi",
	};
}

export default function TeamMemberPage({ params }) {
	const item = findItem(cmsList("team", "uz"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.name || "Jamoa a'zosi"} />
			<SingleTeamDetails itemSlug={params.slug} locale="uz" />
			<Faq />
		</>
	);
}
