"use client";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";

function HeaderLogo() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const src = cms.settings?.logo || "/images/agotasoft-logo.png";
	const name = cms.settings?.site_name || "AgotaSoft";
	return (
		<Link href={prefix || "/"} className="agf-logo">
			<img src={src} alt={name} />
		</Link>
	);
}

export default HeaderLogo;
