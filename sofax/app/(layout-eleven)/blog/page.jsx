import Blog from "@/components/blog-page";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
export const metadata = {
	title: "Blog | AgotaSoft",
	description: "ERP, CRM ve dijital dönüşüm üzerine AgotaSoft blog yazıları.",
};
function BlogPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.blog.title" fallback="Blog" />} />
			<Blog />
			<AutoSlider />
		</>
	);
}

export default BlogPage;
