import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

export const metadata = {
	title: "AgotaSoft Fiyatlandırma | ERP, CRM, Ön Muhasebe ve LMS Paketleri",
	description: "AgotaSoft yazılım çözümleri için uygun fiyat paketlerini keşfedin. ERP, CRM, Ön Muhasebe ve LMS sistemleri için özel fiyatlandırma seçenekleri.",
	keywords: "AgotaSoft fiyat, ERP fiyat, CRM fiyat, ön muhasebe fiyat, LMS fiyat, yazılım paketleri",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft Fiyatlandırma | Yazılım Çözümleri Paketleri",
		description: "İşletmenizin ihtiyaçlarına uygun AgotaSoft yazılım paketlerini keşfedin.",
		type: "website",
		url: "https://agotasoft.com/pricing",
	},
};

function PricingLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default PricingLayout;
