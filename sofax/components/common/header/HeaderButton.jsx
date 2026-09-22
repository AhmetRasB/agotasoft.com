"use client";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

function HeaderButton() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const label = cms.settings?.header_cta_secondary || "Get started";
	const href = withLocale(cms.settings?.header_cta_url || "/contact-us", prefix);

	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="sofax-default-btn pill sofax-header-btn" data-text={label} href={href}>
				<span className="button-wraper">{label}</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
