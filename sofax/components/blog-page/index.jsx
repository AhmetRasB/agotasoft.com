"use client";

import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";
import FadeInStagger from "../animation/FadeInStagger";
import BlogCard from "./BlogCard";
import NewsLetter from "./NewsLetter";
import Pagination from "./Pagination";
import { useCms } from "@/hooks/useCms";

function Blog() {
	const cms = useCms();
	const blogData = cms.blog || [];

	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{blogData.map((blog, index) => (
							<FadeInStagger className="sofax-inner-blog-wrap" key={blog.slug || blog.title || index} index={index}>
								<BlogCard blog={blog} />
							</FadeInStagger>
						))}
						<Pagination />
					</div>
					<div className="col-lg-4">
						<div className="sofax-inner-blog-sidebar-menu">
							<Search />
							<Categories />
							<RecentPosts />
							<Tags />
							<NewsLetter />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blog;
