import SingleBlog from "@/components/blog-page/single-blog";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "Blog Detayı | AgotaSoft",
	description: "AgotaSoft blog yazısı detayı.",
};
function SingleBlogPage() {
	return (
		<>
			<BreadCrumb title="Blog Details" />
			<SingleBlog />
			<AutoSlider />
		</>
	);
}

export default SingleBlogPage;
