"use client";

import CmsImg from "@/components/cms/CmsImg";
import { useCmsItem } from "@/hooks/useCmsItem";

function PortfolioDetails({ itemSlug }) {
	const item = useCmsItem("portfolio", itemSlug);

	return (
		<section className="agf-section--tight">
			<div className="agf-container">
				<h2 className="agf-headline agf-h2" style={{ marginBottom: 28 }}>
					{item.title}
				</h2>
				<div className="agf-browser-frame" style={{ margin: "0 0 32px" }}>
					<div className="agf-browser-bar">
						<span className="agf-browser-dot"></span>
						<span className="agf-browser-dot"></span>
						<span className="agf-browser-dot"></span>
					</div>
					<CmsImg src={item.image} alt={item.title || "Image"} width={1200} height={800} />
				</div>

				<div className="agf-grid agf-grid--4" style={{ marginBottom: 32 }}>
					<div>
						<p className="agf-small" style={{ color: "var(--ink-faint)", marginBottom: 4 }}>
							Müşteri
						</p>
						<h4 style={{ margin: 0 }}>{item.client || item.title}</h4>
					</div>
					<div>
						<p className="agf-small" style={{ color: "var(--ink-faint)", marginBottom: 4 }}>
							Kullanılan Çözüm
						</p>
						<h4 style={{ margin: 0 }}>{item.services || item.category_label || "AgotaSoft ERP"}</h4>
					</div>
					<div>
						<p className="agf-small" style={{ color: "var(--ink-faint)", marginBottom: 4 }}>
							Durum
						</p>
						<h4 style={{ margin: 0 }}>{item.date || "Devam eden proje"}</h4>
					</div>
					{item.website ? (
						<div>
							<p className="agf-small" style={{ color: "var(--ink-faint)", marginBottom: 4 }}>
								Web Sitesi
							</p>
							<a href={item.website} target="_blank" rel="noopener noreferrer" className="agf-btn agf-btn--ghost agf-btn--sm">
								Siteyi Görüntüle
							</a>
						</div>
					) : null}
				</div>

				{item.overview ? (
					<div style={{ marginBottom: 24 }}>
						<h3 className="agf-h3">Proje Özeti</h3>
						<p>{item.overview}</p>
					</div>
				) : null}

				{item.objective || item.scope || item.audience || item.research ? (
					<div className="agf-grid agf-grid--2" style={{ marginBottom: 24 }}>
						{item.objective ? (
							<div className="agf-card">
								<h4>1. Amaç</h4>
								<p>{item.objective}</p>
							</div>
						) : null}
						{item.scope ? (
							<div className="agf-card">
								<h4>2. Kapsam</h4>
								<p>{item.scope}</p>
							</div>
						) : null}
						{item.audience ? (
							<div className="agf-card">
								<h4>3. Sektör</h4>
								<p>{item.audience}</p>
							</div>
						) : null}
						{item.research ? (
							<div className="agf-card">
								<h4>4. Notlar</h4>
								<p>{item.research}</p>
							</div>
						) : null}
					</div>
				) : null}

				{item.feedback ? (
					<div className="agf-card" style={{ background: "var(--bg-soft)" }}>
						<h3 className="agf-h3">Müşteri Görüşü</h3>
						<p>{item.feedback}</p>
					</div>
				) : null}
			</div>
		</section>
	);
}

export default PortfolioDetails;
