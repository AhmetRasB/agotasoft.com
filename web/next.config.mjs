/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static export: the site is uploaded as plain files (see README.md).
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
		loader: "custom",
		loaderFile: "./imageLoader.js",
	},
	reactStrictMode: true,
};

export default nextConfig;
