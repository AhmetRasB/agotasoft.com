"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES, DEFAULT_LOCALE, localePrefix } from "@/lib/i18n/config";
import { detectBrowserLocale } from "@/lib/i18n/detectLocale";

const STORAGE_KEY = "agf-locale-decided";

export default function LocaleAutoRedirect() {
	const pathname = usePathname() || "/";
	const router = useRouter();

	useEffect(() => {
		try {
			if (window.localStorage.getItem(STORAGE_KEY)) return;

			const firstSegment = pathname.split("/")[1];
			const onDefaultLocalePath = !LOCALES.includes(firstSegment);
			if (!onDefaultLocalePath) {
				// Visitor landed directly on a locale-prefixed URL (shared link, search
				// result, etc.) — that's already an explicit signal, don't second-guess it.
				window.localStorage.setItem(STORAGE_KEY, "1");
				return;
			}

			const detected = detectBrowserLocale();
			window.localStorage.setItem(STORAGE_KEY, "1");
			if (!detected || detected === DEFAULT_LOCALE) return;

			const prefix = localePrefix(detected);
			const target = pathname === "/" ? prefix : `${prefix}${pathname}`;
			router.replace(target + window.location.search);
		} catch {
			// localStorage unavailable (private mode, etc.) — skip auto-redirect entirely.
		}
	}, [pathname, router]);

	return null;
}
