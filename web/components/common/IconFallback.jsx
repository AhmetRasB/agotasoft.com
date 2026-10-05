"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import iconSubset from "@/lib/icons/fa-subset.json";

// The site ships a Font Awesome subset (app/fa-subset.css). If a page shows an icon outside it
// (e.g. one picked later in the admin panel), load the full stylesheet once so it still renders.
const FULL_CSS = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
const KNOWN = new Set(iconSubset.icons);
const UTILITY = /^fa-(solid|regular|brands|classic|sharp|fw|lg|xs|sm|xl|2xs|2xl|\dx|10x|spin|spin-pulse|spin-reverse|pulse|beat|beat-fade|bounce|fade|flip|shake|rotate-\d+|rotate-by|flip-horizontal|flip-vertical|flip-both|border|pull-left|pull-right|inverse|stack|stack-1x|stack-2x|ul|li|width-auto)$/;

let loaded = false;

export default function IconFallback() {
	const pathname = usePathname();

	useEffect(() => {
		if (loaded) return;
		const check = () => {
			if (loaded) return;
			for (const el of document.querySelectorAll('[class*="fa-"]')) {
				for (const cls of el.classList) {
					if (cls.startsWith("fa-") && !UTILITY.test(cls) && !KNOWN.has(cls.slice(3))) {
						loaded = true;
						const link = document.createElement("link");
						link.rel = "stylesheet";
						link.href = FULL_CSS;
						link.crossOrigin = "anonymous";
						document.head.appendChild(link);
						return;
					}
				}
			}
		};
		// CMS content arrives after the first render, so look again shortly after.
		check();
		const timer = setTimeout(check, 2500);
		return () => clearTimeout(timer);
	}, [pathname]);

	return null;
}
