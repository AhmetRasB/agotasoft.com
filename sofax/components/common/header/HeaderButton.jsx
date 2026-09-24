"use client";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

function HeaderButton() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const label = cms.settings?.header_cta || "Demo Talep Edin";
	const href = withLocale(cms.settings?.header_cta_url || "/contact-us", prefix);

	return (
		<Link className="agf-btn agf-btn--primary agf-btn--sm" href={href}>
			{label}
		</Link>
	);
}

export default HeaderButton;
