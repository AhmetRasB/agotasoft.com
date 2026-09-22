import SingleBlog from "@/components/blog-page/single-blog";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import { cmsList, staticParamsFor } from "@/lib/cms/staticParams";
import { findItem } from "@/lib/cms/itemSlug";

export function generateStaticParams() {
	return staticParamsFor("blog");
}

export function generateMetadata({ params }) {
	const post = findItem(cmsList("blog"), params.slug) || {};
	return {
		title: `${post.title || "Blog"} | AgotaSoft`,
		description: post.description || "AgotaSoft blog",
	};
}

export default function BlogPostPage({ params }) {
	const post = findItem(cmsList("blog"), params.slug) || {};
	return (
		<>
			<BreadCrumb title={post.title || "Blog Details"} />
			<SingleBlog itemSlug={params.slug} />
			<AutoSlider />
		</>
	);
}
