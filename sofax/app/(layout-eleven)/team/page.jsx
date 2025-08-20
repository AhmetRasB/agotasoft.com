import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import TeamMembers from "@/components/team-page/TeamMembers";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Team Page",
	description: "Sofax || Responsive Next.js Template",
};
function TeamPage() {
	return (
		<>
			<BreadCrumb title="Our Team" />
			<TeamMembers />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default TeamPage;
