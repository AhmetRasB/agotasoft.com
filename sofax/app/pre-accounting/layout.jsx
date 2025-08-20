import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

export const metadata = {
	title: "AgotaSoft Ön Muhasebe | Finansal Kontrol Tamamen Sizin Elinizde",
	description: "AgotaSoft Ön Muhasebe sistemi ile E-Fatura, cari hesap yönetimi, gider takibi ve finansal raporlama işlemlerinizi kolaylaştırın.",
	keywords: "ön muhasebe, e-fatura, cari hesap, gider takibi, finansal raporlama, muhasebe yazılımı, AgotaSoft",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft Ön Muhasebe | KOBİ'ler için Finansal Yönetim",
		description: "E-Fatura entegrasyonu, cari hesap yönetimi ve gider takibi ile finansal süreçlerinizi optimize edin.",
		type: "website",
		url: "https://agotasoft.com/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Ön Muhasebe | Finansal Kontrol",
		description: "KOBİ'ler için özel tasarlanmış ön muhasebe çözümü",
	},
};

function PreAccountingLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default PreAccountingLayout;
