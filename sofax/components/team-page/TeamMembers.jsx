"use client";

import SingleTeamMember from "./SingleTeamMember";
import { useCms } from "@/hooks/useCms";

export default function TeamMembers() {
	const cms = useCms();
	const page = cms.pages?.team || {};
	const columns = cms.team_columns?.length ? cms.team_columns : [[], [], [], []];
	const members = columns.flat();

	return (
		<section className="agf-section">
			<div className="agf-container">
				<div className="agf-platform-head">
					<h2 className="agf-headline agf-h2">{page.hero_title}</h2>
					<p className="agf-lede" style={{ margin: "12px auto 0" }}>
						{page.hero_subtitle}
					</p>
				</div>
				<div className="agf-grid agf-grid--4">
					{members.map((item, index) => (
						<SingleTeamMember key={item.name + index} member={item} />
					))}
				</div>
			</div>
		</section>
	);
}
