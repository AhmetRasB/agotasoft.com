"use client";

import FadeInUp from "@/components/animation/FadeInUp";

export default function ProductModules({ title, subtitle, modules, cardClass }) {
	return (
		<div className="section sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<FadeInUp>
							<div className="sofax-section-title text-center mb-5">
								<h2>{title}</h2>
								<p>{subtitle}</p>
							</div>
						</FadeInUp>
					</div>
				</div>
				<div className="row g-4">
					{modules.map((mod) => (
						<div className="col-lg-4 col-md-6" key={mod.title}>
							<FadeInUp>
								<div className={`sofax-feature-card ${cardClass}`}>
									<div className="sofax-feature-icon sofax-solution-icon">
										<i className={mod.icon}></i>
									</div>
									<h3 className="sofax-feature-title">{mod.title}</h3>
									<p className="sofax-feature-description">{mod.description}</p>
									<ul className="list-unstyled mt-3">
										{(mod.bullets || []).map((bullet) => (
											<li key={bullet}>
												<i className="fas fa-check text-success me-2"></i>
												{bullet}
											</li>
										))}
									</ul>
								</div>
							</FadeInUp>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
