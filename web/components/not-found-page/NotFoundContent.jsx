"use client";

import Link from "next/link";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

const TEXT = {
	tr: {
		title: "Sayfa Bulunamadı",
		body: "Aradığınız sayfa mevcut değil. Ana sayfaya dönebilir veya çözümlerimizi inceleyebilirsiniz.",
		home: "Ana Sayfaya Dön",
		contact: "İletişime Geçin",
		quick: "Hızlı Linkler",
		links: [
			{ label: "ERP", href: "/erp" },
			{ label: "CRM", href: "/crm" },
			{ label: "Ön Muhasebe", href: "/pre-accounting" },
			{ label: "LMS", href: "/lms" },
			{ label: "Hakkımızda", href: "/about-us" },
		],
	},
	en: {
		title: "Page Not Found",
		body: "The page you're looking for doesn't exist. You can return home or explore our solutions.",
		home: "Back to Home",
		contact: "Contact Us",
		quick: "Quick Links",
		links: [
			{ label: "ERP", href: "/erp" },
			{ label: "CRM", href: "/crm" },
			{ label: "Pre-Accounting", href: "/pre-accounting" },
			{ label: "LMS", href: "/lms" },
			{ label: "About Us", href: "/about-us" },
		],
	},
	ru: {
		title: "Страница не найдена",
		body: "Запрашиваемая страница не существует. Вы можете вернуться на главную или изучить наши решения.",
		home: "На главную",
		contact: "Связаться с нами",
		quick: "Быстрые ссылки",
		links: [
			{ label: "ERP", href: "/erp" },
			{ label: "CRM", href: "/crm" },
			{ label: "Предбухгалтерия", href: "/pre-accounting" },
			{ label: "LMS", href: "/lms" },
			{ label: "О нас", href: "/about-us" },
		],
	},
	uz: {
		title: "Sahifa topilmadi",
		body: "Siz qidirayotgan sahifa mavjud emas. Bosh sahifaga qaytishingiz yoki yechimlarimizni ko'rib chiqishingiz mumkin.",
		home: "Bosh sahifaga qaytish",
		contact: "Biz bilan bog'laning",
		quick: "Tezkor havolalar",
		links: [
			{ label: "ERP", href: "/erp" },
			{ label: "CRM", href: "/crm" },
			{ label: "Ön Buxgalteriya", href: "/pre-accounting" },
			{ label: "LMS", href: "/lms" },
			{ label: "Biz haqimizda", href: "/about-us" },
		],
	},
	tk: {
		title: "Sahypa tapylmady",
		body: "Gözleýän sahypaňyz ýok. Baş sahypa dolanyp bilersiňiz ýa-da çözgütlerimizi gözden geçirip bilersiňiz.",
		home: "Baş sahypa dolan",
		contact: "Habarlaşyň",
		quick: "Çalt baglanyşyklar",
		links: [
			{ label: "ERP", href: "/erp" },
			{ label: "CRM", href: "/crm" },
			{ label: "Öň Buhgalteriýa", href: "/pre-accounting" },
			{ label: "LMS", href: "/lms" },
			{ label: "Biz barada", href: "/about-us" },
		],
	},
};

export default function NotFoundContent() {
	const prefix = useLocalePrefix();
	const locale = prefix ? prefix.slice(1) : "tr";
	const t = TEXT[locale] || TEXT.tr;

	return (
		<section className="agf-section" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
			<div className="agf-container agf-center" style={{ maxWidth: 640 }}>
				<div
					className="agf-headline"
					style={{ fontSize: "96px", lineHeight: 1, marginBottom: 16, color: "var(--accent)" }}
				>
					404
				</div>
				<h1 className="agf-headline agf-h2" style={{ marginBottom: 12 }}>
					{t.title}
				</h1>
				<p className="agf-lede" style={{ margin: "0 auto 32px" }}>
					{t.body}
				</p>

				<div className="agf-hero-actions" style={{ marginBottom: 40 }}>
					<Link className="agf-btn agf-btn--primary" href={withLocale("/", prefix)}>
						<i className="fas fa-home"></i> {t.home}
					</Link>
					<Link className="agf-btn agf-btn--ghost" href={withLocale("/contact-us", prefix)}>
						<i className="fas fa-envelope"></i> {t.contact}
					</Link>
				</div>

				<h6 style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-faint)", marginBottom: 14 }}>{t.quick}</h6>
				<div className="agf-tag-row" style={{ justifyContent: "center" }}>
					{t.links.map((link) => (
						<Link key={link.href} href={withLocale(link.href, prefix)} className="agf-badge">
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
