import JobDetails from "@/components/career-page/single/JobDetails";
import BreadCrumb from "@/components/common/Breadcrumb";
import LogoSlider from "@/components/common/logo-slider";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Single Carrer Page",
	description: "Sofax || Responsive Next.js Template",
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
