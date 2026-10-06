import { LOCALES, LOCALE_HREFLANG, SITE_URL, localePrefix } from "@/lib/i18n/config";
import { detailSlugs } from "@/lib/solutions";

const PATHS = [
	{ path: "/", changefreq: "weekly", priority: "1.0" },
	{ path: "/about-us", changefreq: "monthly", priority: "0.8" },
	{ path: "/contact-us", changefreq: "monthly", priority: "0.8" },
	{ path: "/service", changefreq: "weekly", priority: "0.9" },
	{ path: "/solutions", changefreq: "weekly", priority: "0.9" },
	{ path: "/erp", changefreq: "weekly", priority: "0.9" },
	{ path: "/crm", changefreq: "weekly", priority: "0.9" },
	{ path: "/pre-accounting", changefreq: "weekly", priority: "0.9" },
	{ path: "/lms", changefreq: "weekly", priority: "0.9" },
	{ path: "/karlilik", changefreq: "weekly", priority: "0.9" },
	{ path: "/adisyon-qr", changefreq: "weekly", priority: "0.9" },
	{ path: "/mobil-barkod", changefreq: "monthly", priority: "0.7" },
	{ path: "/kurumsal-website", changefreq: "monthly", priority: "0.7" },
	{ path: "/pricing", changefreq: "monthly", priority: "0.7" },
	{ path: "/portfolio", changefreq: "weekly", priority: "0.7" },
	{ path: "/team", changefreq: "monthly", priority: "0.5" },
	{ path: "/faq", changefreq: "monthly", priority: "0.5" },
	...detailSlugs().map((slug) => ({ path: `/solutions/${slug}`, changefreq: "monthly", priority: "0.6" })),
];

function urlFor(path, locale) {
	const prefix = localePrefix(locale);
	// Trailing slash: that is the URL the host serves (trailingSlash export) and the canonical.
	return `${SITE_URL}${prefix}${path === "/" ? "" : path}/`;
}

export async function GET() {
	const entries = PATHS.map(({ path, changefreq, priority }) => {
		const alternates = LOCALES.map(
			(locale) => `    <xhtml:link rel="alternate" hreflang="${LOCALE_HREFLANG[locale]}" href="${urlFor(path, locale)}" />`,
		).join("\n");
		const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(path, "tr")}" />`;

		return LOCALES.map(
			(locale) => `  <url>
    <loc>${urlFor(path, locale)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}
${xDefault}
  </url>`,
		).join("\n");
	}).join("\n");

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
