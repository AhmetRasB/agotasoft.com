"use client";

import CmsImg from "@/components/cms/CmsImg";
import Link from "next/link";
import { useLocalePrefix } from "@/hooks/useLocale";
import { itemPath } from "@/lib/cms/itemSlug";

function SingleTeamMember({ member }) {
	const prefix = useLocalePrefix();
	const href = `${prefix}${itemPath("team", member)}`;
	return (
		<Link href={href} className="agf-team-card">
			<div className="agf-team-card-img">
				<CmsImg src={member.image} alt={member.name || "team member"} width={400} height={480} />
			</div>
			<div className="agf-team-card-body">
				<h3>{member.name}</h3>
				<p>{member.title}</p>
			</div>
		</Link>
	);
}

export default SingleTeamMember;
