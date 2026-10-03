"use client";

import { useEffect, useState } from "react";
import { useCms } from "@/hooks/useCms";
import { useLocale } from "@/hooks/useLocale";
import { fill, findProduct, getCatalog } from "@/lib/solutions";

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

	// /contact-us/?urun=<slug> (from a solution page) preselects that product.
	useEffect(() => {
		const slug = new URLSearchParams(window.location.search).get("urun");
		if (!slug) return;
		const catalog = getCatalog(locale);
		const found = findProduct(catalog, slug);
		if (!found) return;
		setPreset({
			name: found.product.name,
			message: fill(catalog.ui.contact_message, { product: found.product.name }),
		});
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
			website: form.website.value,
		};
		try {
			const response = await fetch(contactApi(), {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			const json = await response.json();
			if (!response.ok || !json.ok) {
				setStatus("Gönderilemedi. Lütfen bilgilerinizi kontrol edin.");
			} else {
				setStatus("Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.");
				form.reset();
			}
		} catch {
			setStatus("Gönderilemedi. Lütfen daha sonra tekrar deneyin.");
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div>
			<h2 className="agf-h3" style={{ marginBottom: 8 }}>
				{page.form_title || "Demo Talep Formu"}
			</h2>
			<p className="agf-small" style={{ marginBottom: 24 }}>
				{page.form_intro ||
					"Aşağıdaki formu doldurarak ücretsiz demo talebinde bulunabilir, uzman ekibimizle görüşme ayarlayabilirsiniz."}
			</p>

			<form onSubmit={onSubmit} key={preset?.name || "default"}>
				<input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

				<div className="agf-form-row">
					<div className="agf-field">
						<label htmlFor="demo-name">Ad Soyad *</label>
						<input type="text" id="demo-name" name="name" placeholder="Adınız ve soyadınız" required />
					</div>
					<div className="agf-field">
						<label htmlFor="demo-company">Şirket Adı *</label>
						<input type="text" id="demo-company" name="company" placeholder="Şirket adınız" required />
					</div>
				</div>

				<div className="agf-form-row">
					<div className="agf-field">
						<label htmlFor="demo-email">E-posta *</label>
						<input type="email" id="demo-email" name="email" placeholder="ornek@sirket.com" required />
					</div>
					<div className="agf-field">
						<label htmlFor="demo-phone">Telefon *</label>
						<input type="tel" id="demo-phone" name="phone" placeholder="+90 (5xx) xxx xx xx" required />
					</div>
				</div>

				<div className="agf-form-row">
					<div className="agf-field">
						<label htmlFor="demo-subject">İlgilendiğiniz Çözüm *</label>
						<select id="demo-subject" name="subject" required defaultValue={preset?.name || ""}>
							<option value="">Seçiniz</option>
							{preset ? <option value={preset.name}>{preset.name}</option> : null}
							<option value="erp">ERP Sistemi</option>
							<option value="crm">CRM Sistemi</option>
							<option value="accounting">Ön Muhasebe</option>
							<option value="lms">LMS Sistemi</option>
							<option value="all">Tüm Çözümler</option>
							<option value="other">Diğer</option>
						</select>
					</div>
					<div className="agf-field">
						<label htmlFor="demo-employees">Çalışan Sayısı</label>
						<select id="demo-employees" name="employees" defaultValue="">
							<option value="">Seçiniz</option>
							<option value="1-10">1-10 kişi</option>
							<option value="11-50">11-50 kişi</option>
							<option value="51-200">51-200 kişi</option>
							<option value="201-500">201-500 kişi</option>
							<option value="500+">500+ kişi</option>
						</select>
					</div>
				</div>

				<div className="agf-field">
					<label htmlFor="demo-message">Mesajınız</label>
					<textarea id="demo-message" name="message" rows="5" defaultValue={preset?.message || ""} placeholder="Projeniz, ihtiyaçlarınız veya sorularınız hakkında detaylar..."></textarea>
				</div>

				<label className="agf-checkbox">
					<input type="checkbox" id="privacy" required />
					<span>
						<a href="/privacy-policy" target="_blank">
							Gizlilik Politikası
						</a>
						&apos;nı okudum ve kabul ediyorum. *
					</span>
				</label>

				<label className="agf-checkbox">
					<input type="checkbox" id="newsletter" name="newsletter" />
					<span>AgotaSoft&apos;tan güncellemeler ve özel teklifler almak istiyorum.</span>
				</label>

				<button type="submit" className="agf-btn agf-btn--primary" disabled={submitting}>
					<i className="fas fa-paper-plane"></i> {submitting ? "Gönderiliyor..." : "Demo Talep Et"}
				</button>
				{status ? <p className="agf-form-status">{status}</p> : null}
			</form>
		</div>
	);
}
