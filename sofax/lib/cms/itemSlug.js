export function slugify(value) {
	const slug = String(value || "")
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
	return slug || "item";
}

export function itemSlug(item) {
	if (!item || typeof item !== "object") {
		return "item";
	}
	return slugify(item.slug || item.id || item.name || item.title);
}

export function findItem(list, slug) {
	const wanted = slugify(slug);
	return (Array.isArray(list) ? list : []).find((item) => itemSlug(item) === wanted) || null;
}

export function itemPath(type, item) {
	const map = {
		team: "/team",
		blog: "/blog",
		portfolio: "/portfolio",
		career: "/career",
		careers: "/career",
		service: "/service",
		services: "/service",
	};
	const base = map[type] || "";
	return `${base}/${itemSlug(item)}`;
}
