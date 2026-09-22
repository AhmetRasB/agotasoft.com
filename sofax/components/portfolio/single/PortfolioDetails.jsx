"use client";

import Icon from "@/public/images/portfolio/Icon1.png";
import Thumbs from "@/public/images/portfolio/image3.png";
import Image from "next/image";
import CmsImg from "@/components/cms/CmsImg";
import { useCmsItem } from "@/hooks/useCmsItem";
function PortfolioDetails({ itemSlug }) {
	const item = useCmsItem("portfolio", itemSlug);
	const page = {};
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="sofax-default-content portfolio-details-content">
					<h2>{page.hero_title || item.title || "Gradients can range from simple transitions to more complex ones"}</h2>
				</div>
				<div className="portfolio-details-thumb wow fadeInUpX">
					<CmsImg src={item.image || Thumbs} alt={item.title || "Image"} width={1200} height={700} />
				</div>
				<div className="sofax-portfolio-authore">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="portfolio-details-content2">
								<p>Müşteri :</p>
								<h4>{item.client || item.title}</h4>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="portfolio-details-content2">
								<p>Kullanılan Çözüm :</p>
								<h4>{item.services || item.category_label || "AgotaSoft ERP"}</h4>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="portfolio-details-content2">
								<p>Durum :</p>
								<h4>{item.date || "Devam eden proje"}</h4>
							</div>
						</div>
						{item.website ? (
							<div className="col-lg-3 col-md-6">
								<div className="portfolio-details-content2">
									<p>Web Sitesi :</p>
									<h4>
										Siteyi Görüntüle
										<a href={item.website} target="_blank" rel="noopener noreferrer">
											<Image src={Icon} alt="Icon 2" />
										</a>
									</h4>
								</div>
							</div>
						) : null}
					</div>
				</div>
				{item.overview ? (
					<div className="portfolio-details-content3">
						<h3>Proje Özeti :</h3>
						<p>{item.overview}</p>
					</div>
				) : null}
				{item.objective || item.scope || item.audience || item.research ? (
					<div className="sofax-portfolio-authore-wrap">
						{item.objective ? (
							<div className="sofax-portfolio-authore-text">
								<h4>1. Amaç</h4>
								<p>{item.objective}</p>
							</div>
						) : null}
						{item.scope ? (
							<div className="sofax-portfolio-authore-text">
								<h4>2. Kapsam</h4>
								<p>{item.scope}</p>
							</div>
						) : null}
						{item.audience ? (
							<div className="sofax-portfolio-authore-text">
								<h4>3. Sektör</h4>
								<p>{item.audience}</p>
							</div>
						) : null}
						{item.research ? (
							<div className="sofax-portfolio-authore-text">
								<h4>4. Notlar</h4>
								<p>{item.research}</p>
							</div>
						) : null}
					</div>
				) : null}
				{item.feedback ? (
					<div className="portfolio-details-content-bottom">
						<h3>Müşteri Görüşü :</h3>
						<p>{item.feedback}</p>
					</div>
				) : null}
			</div>
		</section>
	);
}

export default PortfolioDetails;
