export function mergeCms(defaults, live) {
	if (!live || typeof live !== "object") {
		return defaults;
	}
	const list = (value, fallback) => (Array.isArray(value) && value.length ? value : fallback);
	const team = list(live.team, defaults.team);
	const faq = list(live.faq, defaults.faq);
	return {
		...defaults,
		...live,
		settings: { ...defaults.settings, ...(live.settings || {}) },
		hero: { ...defaults.hero, ...(live.hero || {}) },
		cta: { ...defaults.cta, ...(live.cta || {}) },
		why_choose: { ...defaults.why_choose, ...(live.why_choose || {}) },
		home_services: { ...defaults.home_services, ...(live.home_services || {}) },
		footer: { ...defaults.footer, ...(live.footer || {}) },
		pages: mergePages(defaults.pages, live.pages),
		pricing: mergePricing(defaults.pricing, live.pricing),
		pricing_products: list(live.pricing_products, defaults.pricing_products),
		nav: list(live.nav, defaults.nav),
		partners: list(live.partners, defaults.partners),
		services: list(live.services, defaults.services),
		testimonials: list(live.testimonials, defaults.testimonials),
		team,
		team_columns: nonemptyColumns(live.team_columns) ? live.team_columns : groupTeam(team),
		portfolio: list(live.portfolio, defaults.portfolio),
		blog: list(live.blog, defaults.blog),
		faq,
		faq_columns: nonemptyFaq(live.faq_columns) ? live.faq_columns : groupFaq(faq),
		careers: list(live.careers, defaults.careers),
		partners_heading: live.partners_heading || defaults.partners_heading,
		testimonials_heading: live.testimonials_heading || defaults.testimonials_heading,
		seo: { ...(defaults.seo || {}), ...(live.seo || {}) },
	};
}

function mergePages(defaultsPages = {}, livePages = {}) {
	const out = { ...defaultsPages };
	for (const [slug, live] of Object.entries(livePages || {})) {
		const base = defaultsPages[slug] || {};
		const merged = { ...base, ...live };
		for (const key of Object.keys(base)) {
			if (Array.isArray(base[key]) && (!Array.isArray(live?.[key]) || live[key].length === 0)) {
				merged[key] = base[key];
			}
		}
		out[slug] = merged;
	}
	return out;
}

function mergePricing(defaultsPricing = {}, livePricing = {}) {
	if (!livePricing || typeof livePricing !== "object" || Array.isArray(livePricing)) {
		return defaultsPricing;
	}
	const out = { ...defaultsPricing };
	for (const [group, packages] of Object.entries(livePricing)) {
		out[group] = Array.isArray(packages) && packages.length ? packages : defaultsPricing[group] || [];
	}
	return out;
}

function groupTeam(team) {
	const cols = [[], [], [], []];
	(Array.isArray(team) ? team : []).forEach((member, index) => {
		let col = parseInt(member?.column, 10);
		if (Number.isNaN(col) || col < 0 || col > 3) {
			col = index % 4;
		}
		cols[col].push(member);
	});
	return cols;
}

function groupFaq(faq) {
	const columns = { 1: [], 2: [] };
	(Array.isArray(faq) ? faq : []).forEach((item) => {
		const col = String(item?.column ?? "1") === "2" ? "2" : "1";
		columns[col].push(item);
	});
	return columns;
}

function nonemptyColumns(value) {
	return Array.isArray(value) && value.some((col) => Array.isArray(col) && col.length);
}

function nonemptyFaq(value) {
	return Boolean(value && (value["1"]?.length || value["2"]?.length || value[1]?.length || value[2]?.length));
}

export { groupTeam, groupFaq };
