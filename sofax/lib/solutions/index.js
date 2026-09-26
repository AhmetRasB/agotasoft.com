import catalogTr from "./catalog.tr.json";
import catalogEn from "./catalog.en.json";
import catalogRu from "./catalog.ru.json";
import catalogUz from "./catalog.uz.json";
import catalogTk from "./catalog.tk.json";
import { DEFAULT_LOCALE, withLocale } from "@/lib/i18n/config";

// Light catalog (names, icons, taglines) — safe to ship to the client in the header.
// Long-form product copy lives in details.*.json and is only read by server pages.
const CATALOGS = { tr: catalogTr, en: catalogEn, ru: catalogRu, uz: catalogUz, tk: catalogTk };

export const GROUP_ORDER = ["core", "functions", "industries", "ecosystem"];

export function getCatalog(locale) {
	return CATALOGS[locale] || CATALOGS[DEFAULT_LOCALE];
}

export function productCount(catalog) {
	return catalog.categories.reduce((sum, category) => sum + category.products.length, 0);
}

export function findProduct(catalog, slug) {
	for (const category of catalog.categories) {
		const product = category.products.find((item) => item.slug === slug);
		if (product) return { product, category };
	}
	return null;
}

// Products that already have their own page link there; the rest get /solutions/<slug>.
export function productHref(product, prefix) {
	return withLocale(product.href || `/solutions/${product.slug}`, prefix);
}

export function detailSlugs() {
	return CATALOGS[DEFAULT_LOCALE].categories.flatMap((category) =>
		category.products.filter((product) => !product.href).map((product) => product.slug),
	);
}

export function groupedCategories(catalog) {
	return GROUP_ORDER.map((group) => ({
		group,
		label: catalog.ui.groups[group],
		categories: catalog.categories.filter((category) => category.group === group),
	})).filter((entry) => entry.categories.length);
}

export function fill(template, values) {
	return String(template || "").replace(/\{(\w+)\}/g, (match, key) => (key in values ? values[key] : match));
}

export function isSolutionsNavItem(item) {
	return Boolean(item?.submenu?.some((sub) => sub.url === "service" || sub.url === "solutions"));
}
