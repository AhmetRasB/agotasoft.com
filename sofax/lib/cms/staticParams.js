import fs from "fs";
import path from "path";
import defaults from "@/lib/cms/defaults.json";
import { itemSlug } from "@/lib/cms/itemSlug";

function liveCms(locale) {
	try {
		const filename = locale && locale !== "tr" ? `public/data/site.${locale}.json` : "public/data/site.json";
		const file = path.join(process.cwd(), filename);
		if (fs.existsSync(file)) {
			return JSON.parse(fs.readFileSync(file, "utf8"));
		}
	} catch {
		// fall back to defaults
	}
	return {};
}

export function cmsList(key, locale = "tr") {
	const live = liveCms(locale);
	if (Array.isArray(live[key]) && live[key].length) {
		return live[key];
	}
	return defaults[key] || [];
}

export function staticParamsFor(key, locale = "tr") {
	return cmsList(key, locale).map((item) => ({ slug: itemSlug(item) }));
}
