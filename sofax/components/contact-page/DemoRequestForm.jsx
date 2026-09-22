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
		<div className="sofax-contact-form">
			<h3 className="mb-4">{page.form_title || "Demo Talep Formu"}</h3>
			<p className="mb-4">
				{page.form_intro ||
					"Aşağıdaki formu doldurarak ücretsiz demo talebinde bulunabilir, uzman ekibimizle görüşme ayarlayabilirsiniz."}
			</p>

			<form className="sofax-form" onSubmit={onSubmit}>
				<input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
				<div className="row">
					<div className="col-md-6">
						<div className="sofax-form-group">
							<label className="sofax-form-label">Ad Soyad *</label>
							<input
								type="text"
								name="name"
								className="sofax-form-control"
								placeholder="Adınız ve soyadınız"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="sofax-form-group">
							<label className="sofax-form-label">Şirket Adı *</label>
							<input
								type="text"
								name="company"
								className="sofax-form-control"
								placeholder="Şirket adınız"
								required
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="sofax-form-group">
							<label className="sofax-form-label">E-posta *</label>
							<input
								type="email"
								name="email"
								className="sofax-form-control"
								placeholder="ornek@sirket.com"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="sofax-form-group">
							<label className="sofax-form-label">Telefon *</label>
							<input
								type="tel"
								name="phone"
								className="sofax-form-control"
								placeholder="+90 (5xx) xxx xx xx"
								required
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="sofax-form-group">
							<label className="sofax-form-label">İlgilendiğiniz Çözüm *</label>
							<select name="subject" className="sofax-form-control" required>
								<option value="">Seçiniz</option>
								<option value="erp">ERP Sistemi</option>
								<option value="crm">CRM Sistemi</option>
								<option value="accounting">Ön Muhasebe</option>
								<option value="lms">LMS Sistemi</option>
								<option value="all">Tüm Çözümler</option>
								<option value="other">Diğer</option>
							</select>
						</div>
					</div>
					<div className="col-md-6">
						<div className="sofax-form-group">
							<label className="sofax-form-label">Çalışan Sayısı</label>
							<select name="employees" className="sofax-form-control">
								<option value="">Seçiniz</option>
								<option value="1-10">1-10 kişi</option>
								<option value="11-50">11-50 kişi</option>
								<option value="51-200">51-200 kişi</option>
								<option value="201-500">201-500 kişi</option>
								<option value="500+">500+ kişi</option>
							</select>
						</div>
					</div>
				</div>

				<div className="sofax-form-group">
					<label className="sofax-form-label">Mesajınız</label>
					<textarea
						name="message"
						className="sofax-form-control"
						rows="5"
						placeholder="Projeniz, ihtiyaçlarınız veya sorularınız hakkında detaylar..."
					></textarea>
				</div>

				<div className="sofax-form-group">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="privacy" required />
						<label className="form-check-label" htmlFor="privacy">
							<a href="/privacy-policy" target="_blank">
								Gizlilik Politikası
							</a>
							'nı okudum ve kabul ediyorum. *
						</label>
					</div>
				</div>

				<div className="sofax-form-group">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="newsletter" name="newsletter" />
						<label className="form-check-label" htmlFor="newsletter">
							AgotaSoft'tan güncellemeler ve özel teklifler almak istiyorum.
						</label>
					</div>
				</div>

				<button type="submit" className="sofax-btn-primary" disabled={submitting}>
					<i className="fas fa-paper-plane me-2"></i>
					{submitting ? "Gönderiliyor..." : "Demo Talep Et"}
				</button>
				{status ? <p className="mt-3">{status}</p> : null}
			</form>
		</div>
	);
}
