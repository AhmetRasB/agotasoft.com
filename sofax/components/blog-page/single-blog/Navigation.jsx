"use client";

import Icon1 from "@/public/images/blog/Icon1.png";
import Icon2 from "@/public/images/blog/Icon2.png";
import Thumb1 from "@/public/images/blog/blogthumb4.png";
import Thumb2 from "@/public/images/blog/blogthumb5.png";
import Image from "next/image";
import Link from "next/link";
import CmsImg from "@/components/cms/CmsImg";
import { useCmsList } from "@/hooks/useCmsItem";
import { itemPath, itemSlug as toSlug } from "@/lib/cms/itemSlug";

function Navigation({ itemSlug }) {
	const posts = useCmsList("blog");
	const index = posts.findIndex((post) => toSlug(post) === toSlug({ slug: itemSlug }));
	const prev = index > 0 ? posts[index - 1] : posts[posts.length - 1] || null;
	const next = index >= 0 && index < posts.length - 1 ? posts[index + 1] : posts[0] || null;
	const prevHref = prev ? itemPath("blog", prev) : "/blog";
	const nextHref = next ? itemPath("blog", next) : "/blog";

	return (
		<div className="sofax-post-navigation-wrapper">
			<div className="nav-preview-wrap">
				<div className="nav-preview-icon">
					<Link href={prevHref}>
						<Image src={Icon1} alt="arrow Icon" />
						Preview Post
					</Link>
				</div>
				<div className="title-post-thumb sofax-post-navigation-wrap">
					<div className="title-post-img">
						{prev?.image ? <CmsImg src={prev.image} alt={prev.title || "blog thumb"} width={120} height={90} /> : <Image src={Thumb1} alt="blog thumb" />}
					</div>
					<div className="title-post-content">
						<ul>
							<li>{prev?.date || "April 13, 2024"}</li>
						</ul>
						<h6>{prev?.title || "Six what ifs that could the transforma digital agency"}</h6>
					</div>
				</div>
			</div>
			<div className="nav-preview-wrap">
				<div className="nav-preview-icon ml-650">
					<Link href={nextHref}>
						Next Post
						<Image src={Icon2} alt="arrow icon" />
					</Link>
				</div>
				<div className="title-post-thumb sofax-post-navigation-wrap">
					<div className="title-post-content">
						<ul>
							<li>{next?.date || "11 April, 2024"}</li>
						</ul>
						<h6>{next?.title || "We have been to strategy thought leader for nearly"}</h6>
					</div>
					<div className="title-post-img">
						{next?.image ? <CmsImg src={next.image} alt={next.title || "blog thumb"} width={120} height={90} /> : <Image src={Thumb2} alt="blog thumb" />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
