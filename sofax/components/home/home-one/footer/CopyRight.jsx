"use client";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import LanguageSwitcher from "@/components/common/header/LanguageSwitcher";

function CopyRight() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const footer = cms.footer || {};
	const year = new Date().getFullYear();
	const text = (cms.settings?.copyright || `© ${year} AgotaSoft. Tüm hakları saklıdır.`).replace(/©\s*\d{4}/, `© ${year}`);

	return (
		<div className="sofax-footer-bottom center">
			<div className="row align-items-center g-3">
				<div className="col-md-4">
					<p className="mb-0">{text}</p>
				</div>
				<div className="col-md-5">
					<div className="sofax-footer-links text-md-center">
						<a href={withLocale(footer.privacy_url || "/privacy-policy", prefix)} className="me-3">
							{footer.privacy_label}
						</a>
						<a href={withLocale(footer.terms_url || "/terms-and-condition", prefix)} className="me-3">
							{footer.terms_label}
						</a>
						<a href={withLocale(footer.cookies_url || "/cookies-policy", prefix)}>{footer.cookies_label}</a>
					</div>
				</div>
				<div className="col-md-3 d-flex justify-content-md-end">
					<LanguageSwitcher />
				</div>
			</div>
		</div>
	);
}

export default CopyRight;
