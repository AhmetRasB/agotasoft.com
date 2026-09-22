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

function LanguageSwitcher() {
	const pathname = usePathname() || "/";
	const current = useLocale();
	const [open, setOpen] = useState(false);

	return (
		<div className="sofax-lang-switcher" style={{ position: "relative", marginLeft: "12px" }}>
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-label="Change language"
				style={{
					display: "flex",
					alignItems: "center",
					gap: "6px",
					background: "transparent",
					border: "1px solid #e2e2e2",
					borderRadius: "20px",
					padding: "6px 12px",
					fontSize: "14px",
					cursor: "pointer",
				}}
			>
				<span>{FLAG[current]}</span>
				<span>{current.toUpperCase()}</span>
			</button>
			{open ? (
				<ul
					style={{
						position: "absolute",
						top: "110%",
						right: 0,
						background: "#fff",
						border: "1px solid #eee",
						borderRadius: "10px",
						boxShadow: "0 8px 24px rgba(0,0,0,.12)",
						listStyle: "none",
						margin: 0,
						padding: "6px",
						minWidth: "160px",
						zIndex: 50,
					}}
					onMouseLeave={() => setOpen(false)}
				>
					{LOCALES.map((loc) => (
						<li key={loc}>
							<a
								href={pathWithLocale(pathname, loc)}
								style={{
									display: "flex",
									alignItems: "center",
									gap: "8px",
									padding: "8px 10px",
									borderRadius: "8px",
									color: loc === current ? "#7c5cff" : "#111",
									fontWeight: loc === current ? 700 : 400,
									textDecoration: "none",
									fontSize: "14px",
								}}
							>
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
