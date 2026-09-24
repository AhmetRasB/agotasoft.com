"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { LOCALES, LOCALE_LABELS, DEFAULT_LOCALE } from "@/lib/i18n/config";
import { useLocale } from "@/hooks/useLocale";

const FLAG = {
	tr: "🇹🇷",
	en: "🇬🇧",
	ru: "🇷🇺",
	uz: "🇺🇿",
	tk: "🇹🇲",
};

function markLocaleDecided() {
	try {
		window.localStorage.setItem("agf-locale-decided", "1");
	} catch {
		// localStorage unavailable — nothing to persist, the link navigation still works.
	}
}

function pathWithLocale(pathname, targetLocale) {
	const segments = pathname.split("/");
	const currentSeg = segments[1];
	const rest = LOCALES.includes(currentSeg) ? segments.slice(2) : segments.slice(1);
	const restPath = rest.join("/");
	if (targetLocale === DEFAULT_LOCALE) {
		return `/${restPath}`.replace(/\/+$/, "") || "/";
	}
	return `/${targetLocale}${restPath ? `/${restPath}` : ""}`;
}

// Sits in the footer bar next to the copyright line; opens upward so it
// never runs off the bottom of the page.
function LanguageSwitcher() {
	const pathname = usePathname() || "/";
	const current = useLocale();
	const [open, setOpen] = useState(false);

	return (
		<div className="agf-lang">
			<button type="button" className="agf-lang-btn" onClick={() => setOpen((v) => !v)} aria-label="Change language">
				<span>{FLAG[current]}</span>
				<span>{current.toUpperCase()}</span>
			</button>
			{open ? (
				<ul className="agf-lang-menu" onMouseLeave={() => setOpen(false)}>
					{LOCALES.map((loc) => (
						<li key={loc}>
							<a href={pathWithLocale(pathname, loc)} onClick={markLocaleDecided}>
								<span>{FLAG[loc]}</span>
								<span>{LOCALE_LABELS[loc]}</span>
							</a>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}

export default LanguageSwitcher;
