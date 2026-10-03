"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import defaultsTr from "@/lib/cms/defaults.json";
import defaultsEn from "@/lib/cms/defaults.en.json";
import defaultsRu from "@/lib/cms/defaults.ru.json";
import defaultsUz from "@/lib/cms/defaults.uz.json";
import defaultsTk from "@/lib/cms/defaults.tk.json";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";
import { mergeCms } from "@/lib/cms/mergeCms";

const DEFAULTS_BY_LOCALE = {
	tr: defaultsTr,
	en: defaultsEn,
	ru: defaultsRu,
	uz: defaultsUz,
	tk: defaultsTk,
};

function localeFromPathname(pathname) {
	const seg = (pathname || "/").split("/")[1];
	return LOCALES.includes(seg) ? seg : DEFAULT_LOCALE;
}

function dataUrlFor(locale) {
	return locale === DEFAULT_LOCALE ? "/data/site.json" : `/data/site.${locale}.json`;
}

// One request per locale per page load, shared by every component that calls useCms()
// (header, footer, breadcrumbs, CmsText…), instead of one fetch per component.
const liveRequests = {};
const liveData = {};

function loadLive(locale) {
	if (!liveRequests[locale]) {
		const api = process.env.NEXT_PUBLIC_CMS_API || "";
		const urls = [dataUrlFor(locale), locale === DEFAULT_LOCALE ? `${api}/api/content.php` : null].filter(Boolean);
		liveRequests[locale] = (async () => {
			for (const url of urls) {
				try {
					const separator = url.includes("?") ? "&" : "?";
					const response = await fetch(`${url}${separator}t=${Date.now()}`, { cache: "no-store" });
					if (!response.ok) {
						continue;
					}
					const json = await response.json();
					if (json && typeof json === "object" && !json.error) {
						liveData[locale] = json;
						return json;
					}
				} catch {
					// try next source
				}
			}
			return null;
		})();
	}
	return liveRequests[locale];
}

export function useCms() {
	const pathname = usePathname();
	const locale = localeFromPathname(pathname);
	const defaults = DEFAULTS_BY_LOCALE[locale] || defaultsTr;
	const [data, setData] = useState(defaults);

	useEffect(() => {
		let cancelled = false;
		if (liveData[locale]) {
			setData(mergeCms(defaults, liveData[locale]));
			return undefined;
		}
		setData(defaults);
		loadLive(locale).then((json) => {
			if (!cancelled && json) setData(mergeCms(defaults, json));
		});
		return () => {
			cancelled = true;
		};
	}, [locale]);

	return { ...data, locale };
}
