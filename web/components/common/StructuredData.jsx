import { SITE_URL } from "@/lib/i18n/config";

// schema.org JSON-LD. Rendered into the static HTML at build time, so crawlers see it without JS.
export default function StructuredData({ data }) {
	if (!data) return null;
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const LANG = { "": "tr", "/en": "en", "/ru": "ru", "/uz": "uz", "/tk": "tk" };

export function softwareApplication({ name, description, path, prefix = "", category = "BusinessApplication", image }) {
	if (!name) return null;
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name,
		...(description ? { description } : {}),
		url: `${SITE_URL}${prefix}${path}`,
		applicationCategory: category,
		operatingSystem: "Web",
		inLanguage: LANG[prefix] || "tr",
		...(image ? { image: `${SITE_URL}${image}` } : {}),
		publisher: { "@id": `${SITE_URL}/#organization` },
	};
}

export function faqPage(items) {
	const list = (items || []).filter((item) => item?.question && item?.answer);
	if (!list.length) return null;
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: list.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: { "@type": "Answer", text: item.answer },
		})),
	};
}
