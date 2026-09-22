import JobDetails from "@/components/career-page/single/JobDetails";
import BreadCrumb from "@/components/common/Breadcrumb";
import LogoSlider from "@/components/common/logo-slider";
export const metadata = {
	title: "Pozisyon Detayı | AgotaSoft",
	description: "AgotaSoft açık pozisyon detayı.",
};
function SingleCareerPage() {
	return (
		<>
			<BreadCrumb title="UI/UX Designer" />
			<JobDetails />
			<LogoSlider light />
		</>
	);
}

export default SingleCareerPage;
