"use client";
import { useCms } from "@/hooks/useCms";

function FooterCopyright() {
	const cms = useCms();
	const year = new Date().getFullYear();
	const text = (cms.settings?.copyright || "© {year} AgotaSoft Yazılım. Tüm hakları saklıdır.").replace(
		/©\s*\d{4}/,
		`© ${year}`,
	);
	return (
		<div className="sofax-footer-bottom center">
			<p>{text}</p>
		</div>
	);
}

export default FooterCopyright;
