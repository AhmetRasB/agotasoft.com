import { LOCALES, DEFAULT_LOCALE } from "./config";

// Maps a BCP-47 language tag (e.g. "en-US", "ru", "de-DE") to one of our
// supported locales, or null if nothing matches.
function matchLocale(tag) {
	if (!tag) return null;
	const lang = tag.toLowerCase().split("-")[0];
	return LOCALES.includes(lang) ? lang : null;
}

// Reads the browser's preferred languages and returns the best supported
// locale, or null if none of them are supported (caller should fall back
// to DEFAULT_LOCALE in that case).
export function detectBrowserLocale() {
	if (typeof navigator === "undefined") return null;
	const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
	for (const tag of candidates) {
		const match = matchLocale(tag);
		if (match) return match;
	}
	return null;
}

export { DEFAULT_LOCALE };
