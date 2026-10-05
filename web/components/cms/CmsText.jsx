"use client";

import { useCms } from "@/hooks/useCms";

function getPath(obj, path) {
	return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export default function CmsText({ path, fallback = "" }) {
	const cms = useCms();
	const value = getPath(cms, path);
	return <>{value == null || value === "" ? fallback : value}</>;
}
