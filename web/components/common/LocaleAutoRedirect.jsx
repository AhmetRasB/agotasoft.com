"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES, DEFAULT_LOCALE, localePrefix } from "@/lib/i18n/config";
import { detectBrowserLocale } from "@/lib/i18n/detectLocale";

const STORAGE_KEY = "agf-locale-decided";

// Crawlers, PageSpeed/Lighthouse and automated browsers must see the URL they asked for:
// redirecting them would hide the Turkish pages from search engines and distort measurements.
const BOT_PATTERN =
	/bot|crawl|spider|slurp|lighthouse|pagespeed|headless|google|bing|yandex|baidu|duckduck|facebookexternalhit|embedly|preview/i;

function isAutomatedVisitor() {
	if (typeof navigator === "undefined") return true;
	return Boolean(navigator.webdriver) || BOT_PATTERN.test(navigator.userAgent || "");
}

export default function LocaleAutoRedirect() {
	const pathname = usePathname() || "/";
	const router = useRouter();

	useEffect(() => {
		try {
			if (isAutomatedVisitor()) return;
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
