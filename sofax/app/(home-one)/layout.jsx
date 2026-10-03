import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft ERP | İşletmenizi Yöneten Tek Platform",
	description: "AI destekli AgotaSoft ERP ile stok, üretim, finans ve satın alma süreçlerinizi tek platformda yönetin.",
	author: "AgotaSoft",
	alternates: buildAlternates("/"),
	openGraph: {
		title: "AgotaSoft ERP: İşletmenizi Yöneten Tek Platform",
		description: "Stok, üretim, finans ve satın almayı tek ekranda birleştirin. AI destekli, kolay kurulan bir ERP.",
		type: "website",
		url: "https://agotasoft.com/",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft ERP | İşletmenizi Yöneten Tek Platform",
		description: "AI destekli AgotaSoft ERP ile stok, üretim, finans ve satın alma süreçlerinizi tek platformda yönetin.",
	},
};
function LayoutOne({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default LayoutOne;
