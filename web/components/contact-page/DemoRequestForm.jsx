"use client";

import { useEffect, useState } from "react";
import { useCms } from "@/hooks/useCms";
import { useLocale } from "@/hooks/useLocale";
import { fill, findProduct, getCatalog } from "@/lib/solutions";
import { getAttribution, hasConsent, newEventId, pushEvent } from "@/lib/analytics";
import { DEMO_FORM, PRICING_PRODUCT_SLUG } from "@/lib/i18n/demoForm";

function contactApi() {
	const base = process.env.NEXT_PUBLIC_CMS_API || "";
	return `${base}/api/contact.php`;
}

export default function DemoRequestForm() {
	const cms = useCms();
	const page = cms.pages?.contact || {};
	const [status, setStatus] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const locale = useLocale();
	const [preset, setPreset] = useState(null);

	const copy = DEMO_FORM[locale] || DEMO_FORM.tr;
	const catalog = getCatalog(locale);
	const liveProducts = catalog.categories.flatMap((cat) => cat.products).filter((p) => p.status === "live");

	// /contact-us/?urun=<slug> (from a product page) or ?product=<id>&package=<name> (from pricing)
	// preselects the product and, for a package, notes it in the message.
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const slug = params.get("urun") || PRICING_PRODUCT_SLUG[params.get("product")] || "";
		const pkg = params.get("package") || "";
		const found = slug ? findProduct(getCatalog(locale), slug) : null;
		if (!found && !pkg) return;
		const base = found ? fill(getCatalog(locale).ui.contact_message, { product: found.product.name }) : "";
		setPreset({
			name: found?.product.name || "",
			message: [base, pkg ? `${copy.package}: ${pkg.slice(0, 80)}` : ""].filter(Boolean).join("\n"),
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [locale]);

	async function onSubmit(event) {
		event.preventDefault();
		setStatus("");
		setSubmitting(true);
		const form = event.currentTarget;
		const data = {
			name: form.name.value,
			company: form.company.value,
			email: form.email.value,
			phone: form.phone.value,
			subject: form.subject.value,
			employees: form.employees.value,
			message: form.message.value,
			newsletter: form.newsletter.checked ? 1 : 0,
			privacy: form.privacy.checked ? 1 : 0,
			website: form.website.value,
			locale,
		};
		// Lead attribution (rehber §3): only for visitors who accepted tracking. The same event_id goes to
		// the browser pixel and the server so Meta/Google can de-duplicate the lead.
		const consented = hasConsent();
		const eventId = newEventId();
		data.event_id = eventId;
		data.consent = consented ? 1 : 0;
		if (consented) data.attribution = getAttribution();
		try {
			const response = await fetch(contactApi(), {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			const json = await response.json();
			if (response.status === 429) {
				setStatus(copy.tooMany);
			} else if (!response.ok || !json.ok) {
				setStatus(copy.invalid);
			} else {
				pushEvent("generate_lead", { event_id: eventId, lead_product: data.subject });
				setStatus(copy.ok);
				form.reset();
			}
		} catch {
			setStatus(copy.retry);
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div>
			<h2 className="agf-h3" style={{ marginBottom: 8 }}>
				{page.form_title || copy.title}
			</h2>
			<p className="agf-small" style={{ marginBottom: 24 }}>
				{page.form_intro || copy.intro}
			</p>

			<form onSubmit={onSubmit} key={preset?.name || preset?.message || "default"}>
				<input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

				<div className="agf-form-row">
					<div className="agf-field">
						<label htmlFor="demo-name">{copy.name} *</label>
						<input type="text" id="demo-name" name="name" placeholder={copy.namePh} required />
					</div>
					<div className="agf-field">
						<label htmlFor="demo-company">{copy.company} *</label>
						<input type="text" id="demo-company" name="company" placeholder={copy.companyPh} required />
					</div>
				</div>

				<div className="agf-form-row">
					<div className="agf-field">
						<label htmlFor="demo-email">{copy.email} *</label>
						<input type="email" id="demo-email" name="email" placeholder={copy.emailPh} required />
					</div>
					<div className="agf-field">
						<label htmlFor="demo-phone">{copy.phone} *</label>
						<input type="tel" id="demo-phone" name="phone" placeholder={copy.phonePh} required />
					</div>
				</div>

				<div className="agf-form-row">
					<div className="agf-field">
						<label htmlFor="demo-subject">{copy.subject} *</label>
						<select id="demo-subject" name="subject" required defaultValue={preset?.name || ""}>
							<option value="">{copy.choose}</option>
							{liveProducts.map((product) => (
								<option key={product.slug} value={product.name}>
									{product.name}
								</option>
							))}
							<option value={copy.all}>{copy.all}</option>
							<option value={copy.other}>{copy.other}</option>
						</select>
					</div>
					<div className="agf-field">
						<label htmlFor="demo-employees">{copy.employees}</label>
						<select id="demo-employees" name="employees" defaultValue="">
							<option value="">{copy.choose}</option>
							<option value="1-10">1-10 {copy.people}</option>
							<option value="11-50">11-50 {copy.people}</option>
							<option value="51-200">51-200 {copy.people}</option>
							<option value="201-500">201-500 {copy.people}</option>
							<option value="500+">500+ {copy.people}</option>
						</select>
					</div>
				</div>

				<div className="agf-field">
					<label htmlFor="demo-message">{copy.message}</label>
					<textarea id="demo-message" name="message" rows="5" defaultValue={preset?.message || ""} placeholder={copy.messagePh}></textarea>
				</div>

				<label className="agf-checkbox">
					<input type="checkbox" id="privacy" name="privacy" required />
					<span>
						<a href="/privacy-policy" target="_blank" rel="noopener">
							{copy.privacyLink}
						</a>
						{copy.privacyRest} *
					</span>
				</label>

				<label className="agf-checkbox">
					<input type="checkbox" id="newsletter" name="newsletter" />
					<span>{copy.newsletter}</span>
				</label>

				<button type="submit" className="agf-btn agf-btn--primary" disabled={submitting}>
					<i className="fas fa-paper-plane"></i> {submitting ? copy.sending : copy.submit}
				</button>
				{status ? <p className="agf-form-status">{status}</p> : null}
			</form>
		</div>
	);
}
