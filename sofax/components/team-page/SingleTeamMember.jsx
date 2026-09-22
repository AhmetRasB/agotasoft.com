"use client";

import CmsImg from "@/components/cms/CmsImg";
import Link from "next/link";
import FadeInUp from "../animation/FadeInUp";
import { useLocalePrefix } from "@/hooks/useLocale";
import { itemPath } from "@/lib/cms/itemSlug";

function SingleTeamMember({ member }) {
	const prefix = useLocalePrefix();
	const href = `${prefix}${itemPath("team", member)}`;
	return (
		<Link href={href}>
			<div className={`sofax-team-member-wrap ${member.className || ""}`}>
				<FadeInUp className="sofax-team-member-img">
					<CmsImg src={member.image} alt={member.name || "team member"} width={400} height={480} />
				</FadeInUp>
				<div className="sofax-team-member-content">
					<h4>{member.name}</h4>
					<p>{member.title}</p>
				</div>
			</div>
		</Link>
	);
}

export default SingleTeamMember;
