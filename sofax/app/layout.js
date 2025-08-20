import { DMSans, clashGrotesk, inter } from "./fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// React Toastify
import "react-toastify/dist/ReactToastify.css";

// Bootstrap js
import ImportBsJS from "@/components/BootstrapClient";

// ScrollToTop
import ScrollToTop from "@/hooks/ScrollToTop";
// main css
import "../public/css/app.css";
import "../public/css/main.css";
import "../public/css/mobile-nav.css";
import "../public/css/agotasoft-icons.css";

export const metadata = {
	title: "AgotaSoft | ERP, CRM, Ön Muhasebe ve LMS Yazılım Çözümleri",
	description: "İşletmenizi dijital dönüşümle güçlendirin. AgotaSoft ERP, CRM, Ön Muhasebe ve LMS yazılım çözümleriyle operasyonel verimliliğinizi artırın, maliyetlerinizi düşürün.",
	keywords: "ERP, CRM, ön muhasebe, LMS, yazılım çözümleri, dijital dönüşüm, işletme yönetimi, müşteri ilişkileri, öğrenme yönetimi, AgotaSoft",
	author: "AgotaSoft Yazılım",
	robots: "index, follow",
	viewport: "width=device-width, initial-scale=1",
	canonical: "https://agotasoft.com",
	openGraph: {
		title: "AgotaSoft | ERP, CRM, Ön Muhasebe ve LMS Yazılım Çözümleri",
		description: "İşletmenizi dijital dönüşümle güçlendirin. AgotaSoft yazılım çözümleriyle operasyonel verimliliğinizi artırın.",
		type: "website",
		url: "https://agotasoft.com",
		siteName: "AgotaSoft",
		locale: "tr_TR",
		images: [
			{
				url: "/images/agotasoft-logo.png",
				width: 1200,
				height: 630,
				alt: "AgotaSoft Yazılım Çözümleri"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft | Yazılım Çözümleri",
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
				<ImportBsJS />
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
