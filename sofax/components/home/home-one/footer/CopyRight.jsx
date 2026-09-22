"use client";
import { useCms } from "@/hooks/useCms";

function CopyRight() {
	const cms = useCms();
	const footer = cms.footer || {};
	return (
		<div className="sofax-footer-bottom center">
			<div className="row align-items-center">
				<div className="col-md-6">
					<p>{cms.settings?.copyright}</p>
				</div>
				<div className="col-md-6">
					<div className="sofax-footer-links text-md-end">
						<a href={footer.privacy_url || "/privacy-policy"} className="me-3">{footer.privacy_label}</a>
						<a href={footer.terms_url || "/terms-of-service"} className="me-3">{footer.terms_label}</a>
						<a href={footer.cookies_url || "/cookies-policy"}>{footer.cookies_label}</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CopyRight;
