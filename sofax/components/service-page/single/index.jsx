"use client";

import CmsImg from "@/components/cms/CmsImg";
import { useCmsItem } from "@/hooks/useCmsItem";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

function SingleServiceDetails({ itemSlug }) {
	const item = useCmsItem("services", itemSlug);
	const prefix = useLocalePrefix();
	const description = item.long_description || item.description;
	const bullets = item.bullets || [];

	return (
		<section className="agf-section--tight">
			<div className="agf-container">
				<div className="agf-split">
					<div>
						<div className="agf-card-icon">
							<i className={item.fa_icon || "fas fa-cogs"}></i>
						</div>
						<h2 className="agf-headline agf-h2" style={{ margin: "16px 0 12px" }}>
							{item.title}
						</h2>
						<p className="agf-lede">{description}</p>
						<div className="agf-hero-actions" style={{ justifyContent: "flex-start" }}>
							<a href={withLocale("/contact-us", prefix)} className="agf-btn agf-btn--primary">
								Ücretsiz Danışmanlık
							</a>
							<a href={withLocale("/service", prefix)} className="agf-btn agf-btn--ghost">
								Tüm Çözümler
							</a>
						</div>
					</div>
					<div>
						{item.image ? (
							<div className="agf-browser-frame" style={{ margin: 0 }}>
								<div className="agf-browser-bar">
									<span className="agf-browser-dot"></span>
									<span className="agf-browser-dot"></span>
									<span className="agf-browser-dot"></span>
								</div>
								<CmsImg src={item.image} alt={item.title} width={1200} height={700} />
							</div>
						) : null}
					</div>
				</div>

				{bullets.length ? (
					<div className="agf-grid agf-grid--2" style={{ marginTop: 40 }}>
						{bullets.map((line) => (
							<div className="agf-benefit-row" key={line}>
								<div className="agf-benefit-icon">
									<i className="fas fa-check"></i>
								</div>
								<div>
									<p style={{ margin: 0 }}>{line}</p>
								</div>
							</div>
						))}
					</div>
				) : null}
			</div>
		</section>
	);
}

export default SingleServiceDetails;
