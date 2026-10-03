import { clashGrotesk, inter, interCyrillic } from "./fonts";

import ScrollToTop from "@/hooks/ScrollToTop";
import CmsSeo from "@/components/cms/CmsSeo";
import IconFallback from "@/components/common/IconFallback";
import LocaleAutoRedirect from "@/components/common/LocaleAutoRedirect";
import { SITE_URL } from "@/lib/i18n/config";
import cms from "@/lib/cms/defaults.json";
import iconSubset from "@/lib/icons/fa-subset.json";
// Font Awesome subset (scripts/build-icon-subset.py) is bundled with the theme CSS: no extra
// render-blocking request to a third-party CDN.
import "./fa-subset.css";
import "../public/css/agota-theme.css";

const settings = cms.settings || {};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#ffffff",
};

export const metadata = {
	metadataBase: new URL(SITE_URL),
	title: "AgotaSoft | ERP Yazılımı",
	description: "İşletmenizi dijital dönüşümle güçlendirin. AgotaSoft ERP ile operasyonel verimliliğinizi artırın, maliyetlerinizi düşürün.",
	keywords: "ERP, yazılım çözümleri, dijital dönüşüm, işletme yönetimi, AgotaSoft",
	authors: [{ name: "AgotaSoft" }],
	robots: { index: true, follow: true },
	openGraph: {
		title: "AgotaSoft | ERP Yazılımı",
		description: "İşletmenizi dijital dönüşümle güçlendirin.",
		type: "website",
		url: SITE_URL,
		siteName: "AgotaSoft",
		locale: "tr_TR",
		images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "AgotaSoft" }],
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft | ERP Yazılımı",
		description: "İşletmenizi dijital dönüşümle güçlendirin",
		images: ["/images/og-default.png"],
	},
	icons: {
		icon: [{ url: "/favicon.ico" }, { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" }],
		apple: "/images/apple-touch-icon.png",
	},
};

const sameAs = [settings.social_instagram, settings.social_linkedin, settings.social_github].filter(Boolean);
const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": `${SITE_URL}/#organization`,
			name: settings.site_name || "AgotaSoft",
			url: `${SITE_URL}/`,
			logo: `${SITE_URL}/images/agotasoft-logo.png`,
			...(settings.email ? { email: settings.email } : {}),
			...(settings.phone ? { telephone: settings.phone } : {}),
			address: { "@type": "PostalAddress", addressLocality: "Üsküdar", addressRegion: "İstanbul", addressCountry: "TR" },
			...(sameAs.length ? { sameAs } : {}),
		},
		{
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			url: `${SITE_URL}/`,
			name: settings.site_name || "AgotaSoft",
			publisher: { "@id": `${SITE_URL}/#organization` },
			inLanguage: ["tr", "en", "ru", "uz", "tk"],
		},
	],
};

export default function RootLayout({ children }) {
	return (
		// Locale pages get their real lang attribute from scripts/postbuild.mjs after the static export.
		<html lang="tr">
			<head>
				<link rel="preload" href={iconSubset.solidFont} as="font" type="font/woff2" crossOrigin="anonymous" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
			<body className={`${inter.variable} ${interCyrillic.variable} ${clashGrotesk.variable}`}>
				<CmsSeo />
				<LocaleAutoRedirect />
				<IconFallback />
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
