"use client";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import ResponsiveImage from "@/components/common/ResponsiveImage";

function HeaderLogo() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const src = cms.settings?.logo || "/images/agotasoft-logo.png";
	const name = cms.settings?.site_name || "AgotaSoft";
	return (
		<Link href={prefix || "/"} className="agf-logo">
			<ResponsiveImage src={src} alt={name} eager sizes="56px" />
		</Link>
	);
}

export default HeaderLogo;
