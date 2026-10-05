"use client";

import { useCms } from "@/hooks/useCms";

function CareerCard({ job }) {
	return (
		<div className="agf-card">
			<h3>{job.title}</h3>
			<p className="agf-small" style={{ marginBottom: 12 }}>
				{job.type}
			</p>
			<p>{job.description}</p>
			<div className="agf-tag-row" style={{ marginBottom: 18 }}>
				{job.location ? <span className="agf-badge">{job.location}</span> : null}
				{job.salary ? <span className="agf-badge">{job.salary}</span> : null}
			</div>
			<a href={`mailto:info@agotasoft.com?subject=${encodeURIComponent(job.title)}`} className="agf-btn agf-btn--ghost agf-btn--sm">
				Başvur
			</a>
		</div>
	);
}

function Career() {
	const cms = useCms();
	const page = cms.pages?.career || {};
	const jobs = cms.careers || [];

	return (
		<section className="agf-section--tight">
			<div className="agf-container">
				<div className="agf-platform-head">
					<h2 className="agf-headline agf-h2">{page.hero_title}</h2>
					<p className="agf-lede" style={{ margin: "12px auto 0" }}>
						{page.hero_subtitle}
					</p>
				</div>

				{jobs.length ? (
					<>
						<h3 className="agf-h3" style={{ textAlign: "center", marginBottom: 24 }}>
							{page.open_title || "Açık pozisyonlar"}
						</h3>
						<div className="agf-grid agf-grid--3">
							{jobs.map((job, index) => (
								<CareerCard key={job.title + index} job={job} />
							))}
						</div>
					</>
				) : (
					<div className="agf-empty">
						<p>
							Şu anda açık pozisyonumuz bulunmuyor. Yine de özgeçmişinizi{" "}
							<a href="mailto:info@agotasoft.com">info@agotasoft.com</a> adresine gönderebilirsiniz.
						</p>
					</div>
				)}
			</div>
		</section>
	);
}

export default Career;
