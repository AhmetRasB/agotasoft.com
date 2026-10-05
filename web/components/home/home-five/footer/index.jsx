"use client";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import LanguageSwitcher from "@/components/common/header/LanguageSwitcher";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { ConsentLink } from "@/components/common/Analytics";

function Footer() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const settings = cms.settings || {};
	const footer = cms.footer || {};
	const year = new Date().getFullYear();
	const copyright = (settings.copyright || `© ${year} AgotaSoft. Tüm hakları saklıdır.`).replace(/©\s*\d{4}/, `© ${year}`);

	const socials = [
		{ href: settings.social_instagram, icon: "fa-instagram", label: "Instagram" },
		{ href: settings.social_linkedin, icon: "fa-linkedin-in", label: "LinkedIn" },
		{ href: settings.social_github, icon: "fa-github", label: "GitHub" },
	].filter((s) => s.href);

	return (
		<footer className="agf-footer">
			<div className="agf-container">
				<div className="agf-footer-top">
					<div className="agf-footer-about">
						<Link href={prefix || "/"} className="agf-logo">
							<ResponsiveImage src={settings.logo || "/images/agotasoft-logo.png"} alt={settings.site_name || "AgotaSoft"} sizes="56px" />
						</Link>
						<p>{footer.about_alt || footer.about}</p>
						{socials.length ? (
							<div className="agf-social-row">
								{socials.map((s) => (
									<a
										key={s.icon}
										href={s.href}
										target="_blank"
										rel="noopener noreferrer"
										className="agf-social-icon"
										aria-label={`AgotaSoft ${s.label}`}
									>
										<i className={`fab ${s.icon}`} aria-hidden="true"></i>
									</a>
								))}
							</div>
						) : null}
					</div>
					<div className="agf-footer-col">
						<h2 className="agf-footer-title">{footer.col1_title || "Kurumsal"}</h2>
						<ul>
							{(footer.col1_links || []).map((link) => (
								<li key={link.url}>
									<Link href={withLocale(link.url, prefix)}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="agf-footer-col">
						<h2 className="agf-footer-title">{footer.col2_title || "Çözümlerimiz"}</h2>
						<ul>
							{(footer.col2_links || []).map((link) => (
								<li key={link.url}>
									<Link href={withLocale(link.url, prefix)}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="agf-footer-col">
						<h2 className="agf-footer-title">{footer.col3_title || "İletişim"}</h2>
						<ul>
							{settings.address ? (
								<li>
									<span className="agf-small" style={{ color: "var(--ink-soft)" }}>
										{settings.address}
									</span>
								</li>
							) : null}
							{settings.phone ? (
								<li>
									<a href={`tel:${settings.phone.replace(/[^\d+]/g, "")}`}>{settings.phone}</a>
								</li>
							) : null}
							{settings.email ? (
								<li>
									<a href={`mailto:${settings.email}`}>{settings.email}</a>
								</li>
							) : null}
						</ul>
					</div>
				</div>
				<div className="agf-footer-bottom">
					<p>{copyright}</p>
					<div className="agf-footer-legal">
						<a href={withLocale(footer.privacy_url || "/privacy-policy", prefix)}>{footer.privacy_label || "Gizlilik Politikası"}</a>
						<a href={withLocale(footer.terms_url || "/terms-and-condition", prefix)}>{footer.terms_label || "Kullanım Şartları"}</a>
						<a href={withLocale(footer.cookies_url || "/cookies-policy", prefix)}>{footer.cookies_label || "Çerez Politikası"}</a>
						<ConsentLink />
					</div>
					<LanguageSwitcher />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
