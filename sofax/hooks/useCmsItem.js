"use client";

import { useCms } from "@/hooks/useCms";
import { findItem } from "@/lib/cms/itemSlug";

export function useCmsItem(listKey, slug) {
	const cms = useCms();
	const list = cms[listKey] || [];
	if (!slug) {
		return list[0] || {};
	}
	return findItem(list, slug) || {};
}

export function useCmsList(listKey) {
	const cms = useCms();
	return cms[listKey] || [];
}
