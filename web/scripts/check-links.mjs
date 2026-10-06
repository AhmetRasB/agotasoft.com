// Run after `next build`: every internal link in the exported pages must point at a file that exists.
// (Would have caught the 404s on translated pages.) Exits 1 when something is missing.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../out");
// Served by PHP / the host, not part of the static export.
const SKIP = /^\/(admin|api|data|storage)(\/|$)/;

function htmlFiles(dir, found = []) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) htmlFiles(full, found);
		else if (entry.name.endsWith(".html")) found.push(full);
	}
	return found;
}

function exists(urlPath) {
	const clean = decodeURIComponent(urlPath);
	const target = path.join(OUT, clean);
	if (clean.endsWith("/")) return fs.existsSync(path.join(target, "index.html"));
	return fs.existsSync(target) || fs.existsSync(`${target}.html`) || fs.existsSync(path.join(target, "index.html"));
}

const missing = new Map();
const pages = htmlFiles(OUT).filter((file) => !file.endsWith("404.html"));
for (const file of pages) {
	const html = fs.readFileSync(file, "utf8");
	for (const match of html.matchAll(/\shref="(\/[^"#?]*)/g)) {
		const href = match[1];
		if (href.startsWith("//") || SKIP.test(href) || exists(href)) continue;
		const page = "/" + path.relative(OUT, file).replace(/index\.html$/, "");
		if (!missing.has(href)) missing.set(href, new Set());
		missing.get(href).add(page);
	}
}

if (missing.size) {
	console.error(`check-links: ${missing.size} broken internal link target(s)`);
	for (const [href, from] of missing) {
		const sample = [...from].slice(0, 3).join(", ");
		console.error(`  ${href}  (on ${from.size} page(s), e.g. ${sample})`);
	}
	process.exit(1);
}
console.log(`check-links: ${pages.length} pages, no broken internal links`);
