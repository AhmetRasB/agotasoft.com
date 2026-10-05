// Generates responsive WebP variants for the raster images the site references, plus a manifest
// with their intrinsic sizes (used by components/common/ResponsiveImage.jsx for srcset and
// width/height). Runs before every build; unchanged images are skipped.
//
//   node scripts/optimize-images.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = path.join(ROOT, "public");
const MANIFEST = path.join(ROOT, "lib/images/manifest.json");
const WIDTHS = [160, 480, 720, 960, 1600];
const SOURCE_DIRS = ["components", "app", "lib", "public/data", "../data"];
// Template sections no route renders anymore.
const SKIP = /components\/home\/home-(?!five|one)/;
const REF = /\/images\/[A-Za-z0-9_./-]+?\.(?:png|jpe?g|webp)/g;

function walk(dir, out = []) {
	if (!fs.existsSync(dir)) return out;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full, out);
		else if (/\.(jsx?|json)$/.test(entry.name) && !SKIP.test(full.split(path.sep).join("/"))) out.push(full);
	}
	return out;
}

function referencedImages() {
	const refs = new Set();
	for (const dir of SOURCE_DIRS) {
		for (const file of walk(path.join(ROOT, dir))) {
			if (file === MANIFEST) continue;
			for (const match of fs.readFileSync(file, "utf8").matchAll(REF)) refs.add(match[0]);
		}
	}
	return [...refs].filter((ref) => !/-\d+\.webp$/.test(ref)).sort();
}

const variantPath = (src, width) => src.replace(/\.(png|jpe?g|webp)$/i, `-${width}.webp`);

async function main() {
	const manifest = {};
	let generated = 0;
	for (const src of referencedImages()) {
		const file = path.join(PUBLIC, src);
		if (!fs.existsSync(file)) continue;
		const { width, height } = await sharp(file).metadata();
		const widths = WIDTHS.filter((w) => w < width);
		if (width <= 1600 && !widths.includes(width)) widths.push(width);
		const entry = { w: width, h: height };
		if (width > 320) {
			const mtime = fs.statSync(file).mtimeMs;
			for (const w of widths) {
				const out = path.join(PUBLIC, variantPath(src, w));
				if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= mtime) continue;
				await sharp(file).resize({ width: w }).webp({ quality: 78, effort: 5 }).toFile(out);
				generated += 1;
			}
			entry.widths = widths;
		}
		manifest[src] = entry;
	}
	fs.mkdirSync(path.dirname(MANIFEST), { recursive: true });
	fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, "\t") + "\n");
	console.log(`images: ${Object.keys(manifest).length} referenced, ${generated} variants written`);
}

main();
