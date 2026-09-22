"use client";
import Icon from "@/public/images/v5/icon5.png";
import mixitup from "mixitup";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import CmsImg from "@/components/cms/CmsImg";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { itemPath } from "@/lib/cms/itemSlug";

const EMPTY = [];

function PortfolioList() {
	const cms = useCms();
	const page = cms.pages?.portfolio || {};
	const items = cms.portfolio || EMPTY;
	const prefix = useLocalePrefix();

	useEffect(() => {
		const container = document.querySelector(".sofax-portfolio-column");
		if (!container || !items.length) {
			return undefined;
		}
		const mixer = mixitup(container, {
			selectors: {
				target: ".mix",
			},
			animation: {
				duration: 500,
			},
		});
		return () => {
			mixer.destroy();
		};
	}, [items]);

	return (
		<div className="section sofax-section-padding">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<h2>{page.hero_title || "Referanslarımız ve tamamladığımız projeler"}</h2>
				</div>
				<div className="sofax-portfolio-column row">
					{items.map((item, index) => (
						<div className={`collection-grid-item mix col-md-6 ${item.mix_class || ""}`} key={item.title + index}>
							<div className="sofax-portfolio-content-wrap">
								<div className="sofax-portfolio-thumb">
									<Link href={`${prefix}${itemPath("portfolio", item)}`}>
										<CmsImg src={item.image} alt={item.title || "portfolio"} width={800} height={600} />
									</Link>
								</div>
								<Link href={`${prefix}${itemPath("portfolio", item)}`}>
									<div className="sofax-portfolio-author-wrap">
										<div className="sofax-portfolio-author-data">
											<h4>{item.title}</h4>
											<p>{item.category_label}</p>
										</div>
										<div className="sofax-portfolio-author-icon">
											<Image src={Icon} alt="Icon" />
										</div>
									</div>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
