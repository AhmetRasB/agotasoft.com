"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/hooks/useLocale";
import {
	GTM_ID,
	captureAttribution,
	getConsent,
	loadGtm,
	pushEvent,
	setConsentDefault,
	setConsentMode,
	storeConsent,
} from "@/lib/analytics";

export const OPEN_CONSENT_EVENT = "ag-open-consent";

const COPY = {
	tr: {
		text: "Siteyi geliştirmek ve reklam performansını ölçmek için çerezler kullanıyoruz. Onay vermezseniz analitik ve reklam çerezleri çalışmaz.",
		more: "Çerez Politikası",
		accept: "Kabul Et",
		reject: "Reddet",
		label: "Çerez tercihleri",
	},
	en: {
		text: "We use cookies to improve the site and measure ad performance. Analytics and advertising cookies stay off unless you accept.",
		more: "Cookie Policy",
		accept: "Accept",
		reject: "Reject",
		label: "Cookie preferences",
	},
	ru: {
		text: "Мы используем файлы cookie, чтобы улучшать сайт и измерять эффективность рекламы. Без вашего согласия аналитические и рекламные cookie не работают.",
		more: "Политика cookie",
		accept: "Принять",
		reject: "Отклонить",
		label: "Настройки cookie",
	},
	uz: {
		text: "Saytni yaxshilash va reklama samaradorligini o'lchash uchun cookie fayllardan foydalanamiz. Rozilik bermasangiz, analitik va reklama cookie'lari ishlamaydi.",
		more: "Cookie siyosati",
		accept: "Qabul qilish",
		reject: "Rad etish",
		label: "Cookie sozlamalari",
	},
	tk: {
		text: "Sahypany gowulandyrmak we mahabat netijelerini ölçemek üçin cookie ulanýarys. Razylyk bermeseňiz, analitiki we mahabat cookie-leri işlemeýär.",
		more: "Cookie syýasaty",
		accept: "Kabul etmek",
		reject: "Ret etmek",
		label: "Cookie sazlamalary",
	},
};

const PRODUCT_PAGES = {
	"/erp": "ERP",
	"/crm": "CRM",
	"/pre-accounting": "Ön Muhasebe",
	"/lms": "LMS",
	"/karlilik": "Kârlılık.NET",
	"/adisyon-qr": "QR Menü",
	"/mobil-barkod": "Mobil Barkod",
	"/kurumsal-website": "Kurumsal Website",
	"/pricing": "Fiyatlandırma",
};

// İlgi aşaması: product and pricing page views (rehber §2). Locale prefix and trailing slash are ignored.
function viewItemFor(pathname) {
	const path = pathname.replace(/^\/(en|ru|uz|tk)(?=\/|$)/, "").replace(/\/$/, "") || "/";
	if (PRODUCT_PAGES[path]) return { item_id: path.slice(1), item_name: PRODUCT_PAGES[path] };
	const solution = path.match(/^\/solutions\/([^/]+)$/);
	if (solution) return { item_id: solution[1], item_name: solution[1] };
	return null;
}

export default function Analytics() {
	const pathname = usePathname() || "/";
	const locale = useLocale();
	const copy = COPY[locale] || COPY.tr;
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!GTM_ID) return undefined;
		setConsentDefault();
		captureAttribution();
		const stored = getConsent();
		if (stored?.granted) {
			setConsentMode(true);
			loadGtm();
		} else if (!stored) {
			setOpen(true);
		}
		const reopen = () => setOpen(true);
		window.addEventListener(OPEN_CONSENT_EVENT, reopen);
		return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
	}, []);

	useEffect(() => {
		if (!GTM_ID) return;
		const item = viewItemFor(pathname);
		if (item) pushEvent("view_item", { ecommerce: { items: [item] } });
	}, [pathname]);

	function decide(granted) {
		const wasGranted = getConsent()?.granted === true;
		storeConsent(granted);
		setConsentMode(granted);
		setOpen(false);
		if (granted) {
			loadGtm();
		} else if (wasGranted) {
			// tags already running in this page: reload so they are gone, not just paused
			window.location.reload();
		}
	}

	if (!GTM_ID || !open) return null;

	return (
		<div className="agf-consent" role="dialog" aria-label={copy.label}>
			<p>
				{copy.text}{" "}
				<a href="/cookies-policy">{copy.more}</a>
			</p>
			<div className="agf-consent-actions">
				<button type="button" className="agf-btn agf-btn--ghost agf-btn--sm" onClick={() => decide(false)}>
					{copy.reject}
				</button>
				<button type="button" className="agf-btn agf-btn--primary agf-btn--sm" onClick={() => decide(true)}>
					{copy.accept}
				</button>
			</div>
		</div>
	);
}

// Footer link that reopens the banner so a visitor can change their mind (rehber §5).
export function ConsentLink() {
	const locale = useLocale();
	const copy = COPY[locale] || COPY.tr;
	if (!GTM_ID) return null;
	return (
		<button type="button" className="agf-linkbtn" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
			{copy.label}
		</button>
	);
}
