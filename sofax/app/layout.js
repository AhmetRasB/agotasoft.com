import { DMSans, clashGrotesk, inter } from "./fonts";

// React Toastify (real form feedback only)
import "react-toastify/dist/ReactToastify.css";

// ScrollToTop
import ScrollToTop from "@/hooks/ScrollToTop";
import CmsSeo from "@/components/cms/CmsSeo";
import LocaleAutoRedirect from "@/components/common/LocaleAutoRedirect";
// theme css
import "../public/css/agota-theme.css";

export const metadata = {
	title: "AgotaSoft | ERP Yazılımı",
	description: "İşletmenizi dijital dönüşümle güçlendirin. AgotaSoft ERP ile operasyonel verimliliğinizi artırın, maliyetlerinizi düşürün.",
	keywords: "ERP, yazılım çözümleri, dijital dönüşüm, işletme yönetimi, AgotaSoft",
	author: "AgotaSoft",
	robots: "index, follow",
	viewport: "width=device-width, initial-scale=1",
	canonical: "https://agotasoft.com",
	openGraph: {
		title: "AgotaSoft | ERP Yazılımı",
		description: "İşletmenizi dijital dönüşümle güçlendirin.",
		type: "website",
		url: "https://agotasoft.com",
		siteName: "AgotaSoft",
		locale: "tr_TR",
		images: [
			{
				url: "/images/agotasoft-logo.png",
				width: 1200,
				height: 630,
				alt: "AgotaSoft ERP"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft | ERP Yazılımı",
		description: "İşletmenizi dijital dönüşümle güçlendirin",
		images: ["/images/agotasoft-logo.png"]
	},
	icons: {
		icon: '/images/agotasoft-logo.png',
		shortcut: '/images/agotasoft-logo.png',
		apple: '/images/agotasoft-logo.png',
	},
};
export default function RootLayout({ children }) {
	return (
		<html lang="tr">
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
					integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</head>
			<body className={`${inter.variable} ${DMSans.variable} ${clashGrotesk.variable}`}>
				<CmsSeo />
				<LocaleAutoRedirect />
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
