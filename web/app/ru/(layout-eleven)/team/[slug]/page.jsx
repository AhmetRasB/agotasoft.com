
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleTeamDetails from "@/components/team-page/single/SingleTeamDetails";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";
import { buildAlternates } from "@/lib/i18n/config";

export function generateStaticParams() {
	return staticParamsFor("team", "ru");
}

export function generateMetadata({ params }) {
	const item = findItem(cmsList("team", "ru"), params.slug) || {};
	const name = item.name || "О сотруднике";
	return {
		alternates: buildAlternates(`/team/${params.slug}`, "ru"),
		title: `${name} | AgotaSoft Команда`,
		description: item.bio || item.title || "Член команды AgotaSoft",
	};
}

export default function TeamMemberPage({ params }) {
	const item = findItem(cmsList("team", "ru"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={item.name || "О сотруднике"} />
			<SingleTeamDetails itemSlug={params.slug} locale="ru" />
			<Faq />
		</>
	);
}
