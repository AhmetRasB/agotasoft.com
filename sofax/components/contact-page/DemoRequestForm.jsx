"use client";

import { useState } from "react";
import { useCms } from "@/hooks/useCms";

function contactApi() {
	const base = process.env.NEXT_PUBLIC_CMS_API || "";
	return `${base}/api/contact.php`;
}

export default function DemoRequestForm() {
	const cms = useCms();
	const page = cms.pages?.contact || {};
	const [status, setStatus] = useState("");
	const [submitting, setSubmitting] = useState(false);

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
			<h3 className="agf-h3" style={{ marginBottom: 8 }}>
				{page.form_title || "Demo Talep Formu"}
			</h3>
			<p className="agf-small" style={{ marginBottom: 24 }}>
				{page.form_intro ||
					"Aşağıdaki formu doldurarak ücretsiz demo talebinde bulunabilir, uzman ekibimizle görüşme ayarlayabilirsiniz."}
			</p>

			<form onSubmit={onSubmit}>
				<input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

				<div className="agf-form-row">
					<div className="agf-field">
						<label>Ad Soyad *</label>
						<input type="text" name="name" placeholder="Adınız ve soyadınız" required />
					</div>
					<div className="agf-field">
						<label>Şirket Adı *</label>
						<input type="text" name="company" placeholder="Şirket adınız" required />
					</div>
				</div>

				<div className="agf-form-row">
					<div className="agf-field">
						<label>E-posta *</label>
						<input type="email" name="email" placeholder="ornek@sirket.com" required />
					</div>
					<div className="agf-field">
						<label>Telefon *</label>
						<input type="tel" name="phone" placeholder="+90 (5xx) xxx xx xx" required />
					</div>
				</div>

				<div className="agf-form-row">
					<div className="agf-field">
						<label>İlgilendiğiniz Çözüm *</label>
						<select name="subject" required defaultValue="">
							<option value="">Seçiniz</option>
							<option value="erp">ERP Sistemi</option>
							<option value="crm">CRM Sistemi</option>
							<option value="accounting">Ön Muhasebe</option>
							<option value="lms">LMS Sistemi</option>
							<option value="all">Tüm Çözümler</option>
							<option value="other">Diğer</option>
						</select>
					</div>
					<div className="agf-field">
						<label>Çalışan Sayısı</label>
						<select name="employees" defaultValue="">
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
					<label>Mesajınız</label>
					<textarea name="message" rows="5" placeholder="Projeniz, ihtiyaçlarınız veya sorularınız hakkında detaylar..."></textarea>
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
