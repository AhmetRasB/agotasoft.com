"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCms } from "@/hooks/useCms";

import { findItem } from "@/lib/cms/itemSlug";

function seoFromItem(cms, path) {
	const rules = [
		[/^\/team\/(.+)$/, "team", (item) => ({ title: `${item.name} | AgotaSoft Ekip`, description: item.bio || item.title })],
		[/^\/portfolio\/(.+)$/, "portfolio", (item) => ({ title: `${item.title} | AgotaSoft Portföy`, description: item.overview || item.category_label })],
		[/^\/career\/(.+)$/, "careers", (item) => ({ title: `${item.title} | AgotaSoft Kariyer`, description: item.description })],
		[/^\/service\/(.+)$/, "services", (item) => ({ title: `${item.title} | AgotaSoft`, description: item.description })],
	];
	for (const [re, key, make] of rules) {
		const match = path.match(re);
		if (!match) continue;
		const item = findItem(cms[key] || [], match[1]);
		if (item) return make(item);
	}
	return {};
}

function normalizePath(pathname) {
	if (!pathname || pathname === "/") return "/";
	return pathname.replace(/\/+$/, "") || "/";
}

function upsertMeta(kind, key, content) {
	if (!content) return;
	const selector =
		kind === "property"
			? `meta[property="${CSS.escape(key)}"]`
			: kind === "http-equiv"
				? `meta[http-equiv="${CSS.escape(key)}"]`
				: `meta[name="${CSS.escape(key)}"]`;
	let el = document.head.querySelector(`${selector}[data-cms-seo]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute("data-cms-seo", "1");
		if (kind === "property") el.setAttribute("property", key);
		else if (kind === "http-equiv") el.setAttribute("http-equiv", key);
		else el.setAttribute("name", key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

function upsertLink(rel, href) {
	if (!href) return;
	let el = document.head.querySelector(`link[rel="${rel}"][data-cms-seo]`);
	if (!el) {
		el = document.createElement("link");
		el.setAttribute("rel", rel);
		el.setAttribute("data-cms-seo", "1");
		document.head.appendChild(el);
	}
	el.setAttribute("href", href);
}

export default function CmsSeo() {
	const cms = useCms();
	const pathname = usePathname();

	useEffect(() => {
		const path = normalizePath(pathname);
		const stored = cms?.seo?.[path] || cms?.seo?.[path + "/"] || {};
		const seo = { ...seoFromItem(cms, path), ...stored };
		if (seo.title) {
			document.title = seo.title;
		}
		upsertMeta("name", "description", seo.description);
		upsertMeta("name", "keywords", seo.keywords);
		upsertMeta("name", "author", seo.author);
		upsertMeta("name", "robots", seo.robots);
		// The static page already carries the correct per-locale canonical (buildAlternates);
		// a second one from the CMS would conflict, so only fill it in when it is missing.
		if (!document.head.querySelector('link[rel="canonical"]:not([data-cms-seo])')) {
			upsertLink("canonical", seo.canonical);
		}

		upsertMeta("property", "og:title", seo.og_title || seo.title);
		upsertMeta("property", "og:description", seo.og_description || seo.description);
		upsertMeta("property", "og:image", seo.og_image);
		upsertMeta("property", "og:url", seo.og_url || seo.canonical);
		upsertMeta("property", "og:type", seo.og_type);
		upsertMeta("property", "og:locale", seo.og_locale);
		upsertMeta("property", "og:site_name", seo.og_site_name);

		upsertMeta("name", "twitter:card", seo.twitter_card);
		upsertMeta("name", "twitter:title", seo.twitter_title || seo.og_title || seo.title);
		upsertMeta("name", "twitter:description", seo.twitter_description || seo.og_description || seo.description);
		upsertMeta("name", "twitter:image", seo.twitter_image || seo.og_image);

		document.head.querySelectorAll("meta[data-cms-extra],script[data-cms-seo-ld]").forEach((node) => node.remove());

		(Array.isArray(seo.extra_tags) ? seo.extra_tags : []).forEach((tag) => {
			if (!tag?.key || !tag?.content) return;
			const kind = tag.attr === "property" || tag.attr === "http-equiv" ? tag.attr : "name";
			const el = document.createElement("meta");
			el.setAttribute("data-cms-seo", "1");
			el.setAttribute("data-cms-extra", "1");
			if (kind === "property") el.setAttribute("property", tag.key);
			else if (kind === "http-equiv") el.setAttribute("http-equiv", tag.key);
			else el.setAttribute("name", tag.key);
			el.setAttribute("content", tag.content);
			document.head.appendChild(el);
		});

		if (seo.json_ld && String(seo.json_ld).trim()) {
			const script = document.createElement("script");
			script.type = "application/ld+json";
			script.setAttribute("data-cms-seo-ld", "1");
			script.textContent = String(seo.json_ld).trim();
			document.head.appendChild(script);
		}
	}, [cms, pathname]);

	return null;
}
