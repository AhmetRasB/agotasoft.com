import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "Karlılık.NET | AgotaSoft",
	description: "Trendyol ve Hepsiburada satıcıları için komisyon, kargo ve vergiler dahil gerçek net kârı gösteren, AI destekli kâr analizi platformu.",
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik"),
	openGraph: {
		title: "Karlılık.NET | AgotaSoft",
		description: "Trendyol ve Hepsiburada satıcıları için komisyon, kargo ve vergiler dahil gerçek net kârı gösteren, AI destekli kâr analizi platformu.",
		type: "website",
		url: "https://agotasoft.com/karlilik",
	},
	twitter: {
		card: "summary_large_image",
		title: "Karlılık.NET | AgotaSoft",
		description: "Trendyol ve Hepsiburada satıcıları için komisyon, kargo ve vergiler dahil gerçek net kârı gösteren, AI destekli kâr analizi platformu.",
	},
};

function KarlilikLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default KarlilikLayout;
