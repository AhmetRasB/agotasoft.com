
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import TeamMembers from "@/components/team-page/TeamMembers";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Toparymyz | AgotaSoft",
	description: "Bilermenler toparymyz bilen kompaniýalaryň sanly özgertmesine ýol açýarys.",
	author: "AgotaSoft",
	alternates: buildAlternates("/team"),
	openGraph: {
		title: "Toparymyz | AgotaSoft",
		description: "Bilermenler toparymyz bilen kompaniýalaryň sanly özgertmesine ýol açýarys.",
		type: "website",
		url: "https://agotasoft.com/team",
	},
	twitter: {
		card: "summary_large_image",
		title: "Toparymyz | AgotaSoft",
		description: "Bilermenler toparymyz bilen kompaniýalaryň sanly özgertmesine ýol açýarys.",
	},
};
function TeamPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.team.title" fallback="Toparymyz" />} />
			<TeamMembers />
			<Faq />
		</>
	);
}

export default TeamPage;
