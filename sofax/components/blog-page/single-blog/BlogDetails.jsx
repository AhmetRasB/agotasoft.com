"use client";

import Navigation from "./Navigation";
import BlogThumb from "@/public/images/blog/blogthumb1.png";
import FadeInUp from "../../animation/FadeInUp";
import BlogTag from "./BlogTag";
import CmsImg from "@/components/cms/CmsImg";
import { useCmsItem } from "@/hooks/useCmsItem";

function BlogDetails({ itemSlug }) {
	const post = useCmsItem("blog", itemSlug);

	return (
		<>
			<div className="sofax-inner-blog-details-wrap">
				<FadeInUp className="sofax-inner-blog-details-img ">
					<CmsImg src={post.image || BlogThumb} alt={post.title || "Blog Thumb"} width={1100} height={620} />
				</FadeInUp>
				<div className="sofax-inner-blog-details-content">
					<h3>{post.title || "AgotaSoft Blog"}</h3>
					<p>{post.description || ""}</p>
				</div>
				{post.content
					? String(post.content)
							.split(/\n\n+/)
							.map((block, index) => {
								const lines = block.split("\n");
								if (lines.length > 1 && /^\d+\./.test(lines[0])) {
									return (
										<div className="sofax-inner-blog-details-content-data" key={index}>
											<h4>{lines[0]}</h4>
											<p>{lines.slice(1).join(" ")}</p>
										</div>
									);
								}
								return (
									<div className="sofax-inner-blog-details-content" key={index}>
										<p>{block}</p>
									</div>
								);
							})
					: null}
			</div>

			<BlogTag post={post} />

			<Navigation itemSlug={itemSlug} />
		</>
	);
}

export default BlogDetails;
