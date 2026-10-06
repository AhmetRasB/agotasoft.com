export const DEFAULT_LOCALE = "tr";

export const LOCALES = ["tr", "en", "ru", "uz", "tk"];

export const LOCALE_LABELS = {
	tr: "Türkçe",
	en: "English",
	ru: "Русский",
	uz: "O'zbekcha",
	tk: "Türkmençe",
};

export const LOCALE_HREFLANG = {
	tr: "tr",
	en: "en",
	ru: "ru",
	uz: "uz",
	tk: "tk",
};

export const SITE_URL = "https://agotasoft.com";

export function localePrefix(locale) {
	return locale && locale !== DEFAULT_LOCALE ? `/${locale}` : "";
}

export function withLocale(path, prefix) {
	if (!path) return path;
	if (/^(https?:|mailto:|tel:|#)/.test(path)) {
		return path;
	}
	if (!prefix) {
		return path;
	}
	if (path === "/") {
		return prefix;
	}
	return `${prefix}${path.startsWith("/") ? "" : "/"}${path}`;
}

// Builds the alternates.languages block for generateMetadata / metadata exports.
// `path` is the canonical (default-locale) path, e.g. "/erp" or "/".
// `opts.onlyLocale` limits hreflang to that one language (pages that exist in a single language,
// such as the legal pages, so no hreflang points at a 404).
export function buildAlternates(path, locale = DEFAULT_LOCALE, opts = {}) {
	const languages = {};
	for (const code of opts.onlyLocale ? [opts.onlyLocale] : LOCALES) {
		const prefix = localePrefix(code);
		const url = path === "/" ? `${SITE_URL}${prefix}/` : `${SITE_URL}${prefix}${path}`;
		languages[LOCALE_HREFLANG[code]] = url;
	}
	languages["x-default"] = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
	// Each language version is canonical for itself; hreflang links tie the versions together.
	const canonicalPrefix = localePrefix(locale);
	return {
		canonical: path === "/" ? `${SITE_URL}${canonicalPrefix}/` : `${SITE_URL}${canonicalPrefix}${path}`,
		languages,
	};
}
