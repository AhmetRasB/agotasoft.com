import detailsTr from "./details.tr.json";
import detailsEn from "./details.en.json";
import detailsRu from "./details.ru.json";
import detailsUz from "./details.uz.json";
import detailsTk from "./details.tk.json";
import { DEFAULT_LOCALE, buildAlternates } from "@/lib/i18n/config";
import { detailSlugs, findProduct, getCatalog } from "./index";

// Server-only: imported by the static solution pages, never by client components.
const DETAILS = { tr: detailsTr, en: detailsEn, ru: detailsRu, uz: detailsUz, tk: detailsTk };

export function getDetails(locale, slug) {
	return (DETAILS[locale] || DETAILS[DEFAULT_LOCALE])[slug] || DETAILS[DEFAULT_LOCALE][slug] || null;
}

export function detailStaticParams() {
	return detailSlugs().map((slug) => ({ slug }));
}

export function catalogMetadata(locale) {
	const { ui } = getCatalog(locale);
	return {
		title: ui.meta_catalog_title,
		description: ui.meta_catalog_description,
		alternates: buildAlternates("/solutions", locale),
		openGraph: { title: ui.meta_catalog_title, description: ui.meta_catalog_description, type: "website" },
	};
}

export function detailMetadata(locale, slug) {
	const found = findProduct(getCatalog(locale), slug);
	if (!found) return {};
	const details = getDetails(locale, slug);
	const title = `${found.product.name}: ${found.product.tagline} | AgotaSoft`;
	const description = details?.summary || found.product.tagline;
	return {
		title,
		description,
		alternates: buildAlternates(`/solutions/${slug}`, locale),
		openGraph: { title, description, type: "website" },
	};
}
