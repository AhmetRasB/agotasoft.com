"use client";

export default function ProductModules({ title, subtitle, modules, numberLabel = "01", sectionLabel = "MODÜLLER" }) {
	return (
		<section className="agf-section" id="features">
			<div className="agf-container">
				<div className="agf-platform-head">
					<div className="agf-eyebrow">
						<span className="agf-eyebrow-num">{numberLabel}</span> {sectionLabel}
					</div>
					<h2 className="agf-headline agf-h2">{title}</h2>
					<p className="agf-lede" style={{ margin: "12px auto 0" }}>
						{subtitle}
					</p>
				</div>
				<div className={`agf-grid ${(modules || []).length % 4 === 0 && (modules || []).length > 4 ? "agf-grid--4" : "agf-grid--3"}`}>
					{(modules || []).map((mod) => (
						<div className="agf-card" key={mod.title}>
							<div className="agf-card-icon">
								<i className={mod.icon}></i>
							</div>
							<h3>{mod.title}</h3>
							<p>{mod.description}</p>
							{mod.bullets?.length ? (
								<ul>
									{mod.bullets.slice(0, 3).map((bullet) => (
										<li key={bullet}>{bullet}</li>
									))}
								</ul>
							) : null}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
