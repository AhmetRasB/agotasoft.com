"use client";

import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

function Categories() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const posts = cms.blog || [];
	const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))];

	if (!categories.length) {
		return null;
	}

	return (
		<div className="sofax-subscription-field-categories">
			<h4>Kategoriler:</h4>
			<ul>
				{categories.map((category) => (
					<li key={category}>
						<Link href={withLocale("/blog", prefix)}>{category}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
