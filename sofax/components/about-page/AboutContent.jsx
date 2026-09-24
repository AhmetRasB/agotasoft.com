"use client";

import { useCms } from "@/hooks/useCms";

export default function AboutContent() {
	const cms = useCms();
	const page = cms.pages?.about || {};
	const values = page.values || [];
	const whyItems = page.why_items || [];
	const missionItems = page.mission_items || [];
	const visionItems = page.vision_items || [];

	return (
		<>
			<section className="agf-section--tight">
				<div className="agf-container agf-center">
					<p className="agf-lede" style={{ margin: "0 auto 12px" }}>
						{page.hero_subtitle}
					</p>
					<p className="agf-small" style={{ maxWidth: 640, margin: "0 auto" }}>
						{page.body}
					</p>
					<div className="agf-hero-actions" style={{ marginTop: 32 }}>
						<div className="agf-stat">
							<div className="agf-stat-num">{page.stat1_number || "3+"}</div>
							<div className="agf-stat-label">{page.stat1_label}</div>
						</div>
						<div className="agf-stat">
							<div className="agf-stat-num">{page.stat2_number || "150+"}</div>
							<div className="agf-stat-label">{page.stat2_label}</div>
						</div>
					</div>
				</div>
			</section>

			<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
				<div className="agf-container">
					<div className="agf-platform-head">
						<h2 className="agf-headline agf-h2">{page.mission_heading}</h2>
					</div>
					<div className="agf-grid agf-grid--2">
						<div className="agf-card">
							<div className="agf-card-icon">
								<i className="fas fa-bullseye"></i>
							</div>
							<h3>{page.mission_title}</h3>
							<p>{page.mission_text}</p>
							<ul>
								{missionItems.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
						<div className="agf-card">
							<div className="agf-card-icon">
								<i className="fas fa-eye"></i>
							</div>
							<h3>{page.vision_title}</h3>
							<p>{page.vision_text}</p>
							<ul>
								{visionItems.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="agf-section">
				<div className="agf-container">
					<div className="agf-platform-head">
						<h2 className="agf-headline agf-h2">{page.values_title}</h2>
						<p className="agf-lede" style={{ margin: "12px auto 0" }}>
							{page.values_subtitle}
						</p>
					</div>
					<div className="agf-grid agf-grid--4">
						{values.map((item) => (
							<div className="agf-card agf-center" key={item.title}>
								<div className="agf-card-icon" style={{ margin: "0 auto 16px" }}>
									<i className={item.icon}></i>
								</div>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="agf-section" style={{ background: "var(--bg-soft)" }}>
				<div className="agf-container">
					<div className="agf-platform-head">
						<h2 className="agf-headline agf-h2">{page.why_title}</h2>
						<p className="agf-lede" style={{ margin: "12px auto 0" }}>
							{page.why_text}
						</p>
					</div>
					<div className="agf-grid agf-grid--2">
						{whyItems.map((item) => (
							<div className="agf-benefit-row" key={item.title} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: 18 }}>
								<div className="agf-benefit-icon">
									<i className={item.icon}></i>
								</div>
								<div>
									<h4>{item.title}</h4>
									<p>{item.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
