import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/home/home-five/faq";
import TeamMembers from "@/components/team-page/TeamMembers";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Наша команда | AgotaSoft",
	description: "Наша команда экспертов возглавляет цифровую трансформацию бизнеса.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/team"),
	openGraph: {
		title: "Наша команда | AgotaSoft",
		description: "Наша команда экспертов возглавляет цифровую трансформацию бизнеса.",
		type: "website",
		url: "https://agotasoft.com/team",
	},
	twitter: {
		card: "summary_large_image",
		title: "Наша команда | AgotaSoft",
		description: "Наша команда экспертов возглавляет цифровую трансформацию бизнеса.",
	},
};
function TeamPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.team.title" fallback="Наша команда" />} />
			<TeamMembers />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default TeamPage;
