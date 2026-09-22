"use client";

import Icon from "@/public/images/v5/icon5.png";
import Image from "next/image";
import Link from "next/link";
import CmsImg from "@/components/cms/CmsImg";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import { useCmsList } from "@/hooks/useCmsItem";
import { useLocalePrefix } from "@/hooks/useLocale";
import { itemPath, itemSlug as toSlug } from "@/lib/cms/itemSlug";

function RelatedProject({ itemSlug }) {
	const prefix = useLocalePrefix();
	const items = useCmsList("portfolio");
	const related = items.filter((item) => toSlug(item) !== toSlug({ slug: itemSlug })).slice(0, 2);

	return (
		<section className="sofax-section-padding bg-light">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<h2>Diğer Referanslarımız</h2>
				</div>
				<FadeInStaggerTwo className="row">
					{related.map((item) => (
						<FadeInStaggerTwoChildren className="col-lg-6" key={item.title}>
							<div className="sofax-portfolio-content-wrap">
								<div className="sofax-portfolio-thumb">
									<Link href={`${prefix}${itemPath("portfolio", item)}`}>
										<CmsImg src={item.image} alt={item.title || "Image"} width={800} height={520} />
									</Link>
								</div>
								<Link href={`${prefix}${itemPath("portfolio", item)}`}>
									<div className="sofax-portfolio-author-wrap">
										<div className="sofax-portfolio-author-data">
											<h4>{item.title}</h4>
											<p>{item.category_label}</p>
										</div>
										<div className="sofax-portfolio-author-icon">
											<Image src={Icon} alt="Icon " />
										</div>
									</div>
								</Link>
							</div>
						</FadeInStaggerTwoChildren>
					))}
				</FadeInStaggerTwo>
			</div>
		</section>
	);
}

export default RelatedProject;
