
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import TeamMembers from "@/components/team-page/TeamMembers";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Our Team | AgotaSoft",
	description: "Our expert team leads businesses through digital transformation.",
	author: "AgotaSoft",
	alternates: buildAlternates("/team", "en"),
	openGraph: {
		title: "Our Team | AgotaSoft",
		description: "Our expert team leads businesses through digital transformation.",
		type: "website",
		url: "https://agotasoft.com/en/team",
	},
	twitter: {
		card: "summary_large_image",
		title: "Our Team | AgotaSoft",
		description: "Our expert team leads businesses through digital transformation.",
	},
};
function TeamPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.team.title" fallback="Our Team" />} />
			<TeamMembers />
			<Faq />
		</>
	);
}

export default TeamPage;
