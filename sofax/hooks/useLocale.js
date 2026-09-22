"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { DEFAULT_LOCALE, LOCALES, LOCALE_HREFLANG, localePrefix } from "@/lib/i18n/config";

export function useLocale() {
	const pathname = usePathname() || "/";
	const seg = pathname.split("/")[1];
	const locale = LOCALES.includes(seg) ? seg : DEFAULT_LOCALE;

	useEffect(() => {
		if (typeof document !== "undefined") {
			document.documentElement.lang = LOCALE_HREFLANG[locale] || locale;
		}
	}, [locale]);

	return locale;
}

export function useLocalePrefix() {
	return localePrefix(useLocale());
}
