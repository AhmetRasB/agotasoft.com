// Measurement helpers (Reklam, Analitik ve Ölçüm Rehberi): consent state, attribution capture,
// dataLayer events. Everything here is inert until NEXT_PUBLIC_GTM_ID is set and the visitor accepts.

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

const CONSENT_KEY = "ag_consent";
const ATTR_SESSION_KEY = "ag_attr_s";
const ATTR_KEY = "ag_attr";
const ATTR_TTL_MS = 90 * 24 * 60 * 60 * 1000;
const ATTR_PARAMS = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"gclid",
	"fbclid",
	"ttclid",
	"msclkid",
];

function read(storage, key) {
	try {
		return JSON.parse(storage.getItem(key) || "null");
	} catch {
		return null;
	}
}

function write(storage, key, value) {
	try {
		storage.setItem(key, JSON.stringify(value));
	} catch {
		// private mode / blocked storage: the site keeps working without it
	}
}

export function getConsent() {
	if (typeof window === "undefined") return null;
	const stored = read(window.localStorage, CONSENT_KEY);
	return stored && typeof stored.granted === "boolean" ? stored : null;
}

export function hasConsent() {
	return getConsent()?.granted === true;
}

export function storeConsent(granted) {
	write(window.localStorage, CONSENT_KEY, { granted, ts: Date.now() });
	if (granted) {
		// the session copy becomes the 90-day copy only once the visitor agrees
		const session = read(window.sessionStorage, ATTR_SESSION_KEY);
		if (session) write(window.localStorage, ATTR_KEY, { ...session, saved: Date.now() });
	} else {
		try {
			window.localStorage.removeItem(ATTR_KEY);
		} catch {
			// ignore
		}
	}
}

function gtag() {
	window.dataLayer = window.dataLayer || [];
	// gtag.js requires the real `arguments` object, not an array
	window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
}

export function setConsentMode(granted) {
	const state = granted ? "granted" : "denied";
	gtag("consent", "update", {
		ad_storage: state,
		analytics_storage: state,
		ad_user_data: state,
		ad_personalization: state,
	});
}

export function setConsentDefault() {
	gtag("consent", "default", {
		ad_storage: "denied",
		analytics_storage: "denied",
		ad_user_data: "denied",
		ad_personalization: "denied",
		wait_for_update: 500,
	});
}

export function loadGtm() {
	if (!GTM_ID || document.getElementById("ag-gtm")) return;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
	const script = document.createElement("script");
	script.id = "ag-gtm";
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
	document.head.appendChild(script);
}

// Keep UTM / click ids from the landing URL so the lead can be tied to its ad later.
export function captureAttribution() {
	const params = new URLSearchParams(window.location.search);
	const found = {};
	ATTR_PARAMS.forEach((key) => {
		const value = params.get(key);
		if (value) found[key] = value.slice(0, 200);
	});
	if (!Object.keys(found).length) return;
	const next = {
		...found,
		landing_page: window.location.pathname,
		referrer: document.referrer ? document.referrer.slice(0, 300) : "",
	};
	write(window.sessionStorage, ATTR_SESSION_KEY, next);
	if (hasConsent()) write(window.localStorage, ATTR_KEY, { ...next, saved: Date.now() });
}

function cookie(name) {
	const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
	return match ? decodeURIComponent(match[1]) : "";
}

// Only returns data for visitors who accepted; otherwise the lead carries no tracking data.
export function getAttribution() {
	if (!hasConsent()) return {};
	let stored = read(window.localStorage, ATTR_KEY) || read(window.sessionStorage, ATTR_SESSION_KEY) || {};
	if (stored.saved && Date.now() - stored.saved > ATTR_TTL_MS) stored = {};
	const { saved, ...attribution } = stored; // eslint-disable-line no-unused-vars
	const fbp = cookie("_fbp");
	let fbc = cookie("_fbc");
	if (!fbc && attribution.fbclid) fbc = `fb.1.${saved || Date.now()}.${attribution.fbclid}`;
	if (fbp) attribution.fbp = fbp;
	if (fbc) attribution.fbc = fbc;
	return attribution;
}

export function newEventId() {
	if (window.crypto?.randomUUID) return window.crypto.randomUUID();
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function pushEvent(event, params = {}) {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({ event, ...params });
}
