"use client";

import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

function Tags() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const posts = cms.blog || [];
	const tags = [...new Set(posts.map((post) => post.category).filter(Boolean))];

	if (!tags.length) {
		return null;
	}

	return (
		<div className="sofax-subscription-field-group">
			<h4>Popüler Etiketler:</h4>
			{tags.map((tag) => (
				<Link className="sofax-default-btn pill outline-btn" key={tag} href={withLocale("/blog", prefix)}>
					{tag}
				</Link>
			))}
		</div>
	);
}

export default Tags;
