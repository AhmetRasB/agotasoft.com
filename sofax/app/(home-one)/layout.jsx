import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
export const metadata = {
	title: "AgotaSoft | ERP, CRM, Ön Muhasebe ve LMS Yazılım Çözümleri",
	description: "AgotaSoft, işletmeler için entegre ERP, CRM, ön muhasebe ve LMS yazılımları sunar. Operasyonel verimliliği artırın, maliyetleri düşürün ve rekabette öne geçin.",
	keywords: "ERP, CRM, ön muhasebe, LMS, yazılım çözümleri, işletme yönetimi, AgotaSoft",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft | İşletmenizi Geleceğe Taşıyan Akıllı Yazılım Çözümleri",
		description: "Entegre ERP, CRM, Ön Muhasebe ve LMS sistemlerimizle dijital dönüşümünüzü tamamlayın.",
		type: "website",
		url: "https://agotasoft.com",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft | ERP, CRM, Ön Muhasebe ve LMS Çözümleri",
		description: "İşletmenizi geleceğe taşıyan akıllı yazılım çözümleri",
	},
};
function LayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutOne;
