import ArrowRight from "@/public/images/v1/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
import CmsImg from "@/components/cms/CmsImg";

import { itemPath } from "@/lib/cms/itemSlug";

function BlogCard({ blog }) {
	const href = itemPath("blog", blog);
	const { title, category, description, date, image } = blog;
	return (
		<>
			<div className="sofax-inner-blog-img">
				<CmsImg src={image} alt={title || "blog thumb"} width={900} height={520} />
			</div>
			<div className="sofax-inner-blog-content">
				<div className="sofax-inner-blog-meta">
					<Link href={href}>
						<h5>{category}</h5>
						<ul>
							<li>{date}</li>
						</ul>
					</Link>
				</div>
				<div className="sofax-inner-blog-text">
					<Link href={href}>
						<h3>{title}</h3>
					</Link>
					<p>{description}</p>
				</div>
				<Link className="sofax-icon-btn sofax-blog-icon-btn" href={href}>
					Learn More <Image src={ArrowRight} alt="arrow right" />
				</Link>
			</div>
		</>
	);
}

export default BlogCard;
