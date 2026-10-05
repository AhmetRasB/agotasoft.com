import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "Kârlılık.NET | Trendyol ve Hepsiburada için net kâr analizi";
const description = "Komisyon, kargo, hizmet bedeli, stopaj, KDV ve reklam düşüldükten sonra sipariş, ürün ve mağaza bazında gerçek net kâr. 14 gün ücretsiz, karlilik.net";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/karlilik",
		locale: "tr_TR",
		images: [{ url: "/images/products/karlilik/dashboard.webp", width: 1600, height: 900 }],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/images/products/karlilik/dashboard.webp"],
	},
};

function KarlilikLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default KarlilikLayout;
