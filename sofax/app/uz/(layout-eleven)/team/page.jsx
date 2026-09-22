import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import TeamMembers from "@/components/team-page/TeamMembers";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Jamoamiz | AgotaSoft",
	description: "Mutaxassis jamoamiz bilan kompaniyalarning raqamli transformatsiyasiga yo'l boshlaymiz.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/team"),
	openGraph: {
		title: "Jamoamiz | AgotaSoft",
		description: "Mutaxassis jamoamiz bilan kompaniyalarning raqamli transformatsiyasiga yo'l boshlaymiz.",
		type: "website",
		url: "https://agotasoft.com/team",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jamoamiz | AgotaSoft",
		description: "Mutaxassis jamoamiz bilan kompaniyalarning raqamli transformatsiyasiga yo'l boshlaymiz.",
	},
};
function TeamPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.team.title" fallback="Jamoamiz" />} />
			<TeamMembers />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default TeamPage;
