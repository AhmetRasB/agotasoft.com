"use client";
import { useCms } from "@/hooks/useCms";
import LanguageSwitcher from "@/components/common/header/LanguageSwitcher";

function FooterCopyright() {
	const cms = useCms();
	const year = new Date().getFullYear();
	const text = (cms.settings?.copyright || `© ${year} AgotaSoft. Tüm hakları saklıdır.`).replace(
		/©\s*\d{4}/,
		`© ${year}`,
	);
	return (
		<div className="sofax-footer-bottom center">
			<div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
				<p className="mb-0">{text}</p>
				<LanguageSwitcher />
			</div>
		</div>
	);
}

export default FooterCopyright;
