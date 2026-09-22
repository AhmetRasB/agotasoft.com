"use client";

import FadeInStagger from "../animation/FadeInStagger";
import SingleTeamMember from "./SingleTeamMember";
import { useCms } from "@/hooks/useCms";

export default function TeamMembers() {
	const cms = useCms();
	const page = cms.pages?.team || {};
	const columns = cms.team_columns?.length
		? cms.team_columns
		: [[], [], [], []];

	return (
		<section className="section sofax-section-padding">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<h2>{page.hero_title || "Başarımızın arkasındaki ekip"}</h2>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-aboutus-content-text our-teaminner">
								<p>
									{page.hero_subtitle ||
										"Uzman kadromuzla işletmelerin dijital dönüşümüne öncülük ediyoruz."}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{columns.map((items, index) => (
						<FadeInStagger key={index} className="col-lg-3 col-md-6" index={index}>
							{items.map((item, memberIndex) => (
								<SingleTeamMember key={item.name + memberIndex} member={item} />
							))}
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}
