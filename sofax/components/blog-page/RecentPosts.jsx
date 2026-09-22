"use client";

import CmsImg from "@/components/cms/CmsImg";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";

import { itemPath } from "@/lib/cms/itemSlug";

function RecentPosts() {
	const cms = useCms();
	const recentPostData = (cms.blog || []).slice(0, 3);

	return (
		<div className="sofax-subscription-field-post">
			<h4>Son Yazılar:</h4>
			{recentPostData.map((post, index) => (
				<Link href={itemPath("blog", post)} key={post.slug || post.title || index}>
					<div className="title-post-thumb">
						<div className="title-post-img">
							<CmsImg src={post.image} alt={post.title || "blog post image"} width={120} height={90} />
						</div>
						<div className="title-post-content">
							<ul>
								<li>{post.date}</li>
							</ul>
							<h6>{post.title}</h6>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default RecentPosts;
