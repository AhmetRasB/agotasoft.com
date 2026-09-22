import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import TeamMembers from "@/components/team-page/TeamMembers";
export const metadata = {
	title: "Ekibimiz | AgotaSoft",
	description: "AgotaSoft ekibiyle tanışın.",
};
function TeamPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.team.title" fallback="Ekibimiz" />} />
			<TeamMembers />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default TeamPage;
