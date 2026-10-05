"use client";

import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";

function BreadCrumb({ title }) {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const homeLabel = cms.nav?.[0]?.title || "Anasayfa";
	return (
		<div className="agf-page-head">
			<div className="agf-container">
				<h1 className="agf-headline agf-h2">{title}</h1>
				<div className="agf-crumb">
					<Link href={prefix || "/"}>{homeLabel}</Link>
					<i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i>
					<span>{title}</span>
				</div>
			</div>
		</div>
	);
}

export default BreadCrumb;
