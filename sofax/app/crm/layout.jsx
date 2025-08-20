import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

export const metadata = {
	title: "AgotaSoft CRM | Müşteri İlişkilerinizi Güçlendirin, Satışlarınızı Artırın",
	description: "AgotaSoft CRM sistemi ile müşteri veritabanı yönetimi, satış fırsatı takibi, pazarlama otomasyonu ve müşteri hizmetlerini optimize edin.",
	keywords: "CRM, müşteri ilişkileri yönetimi, satış yönetimi, pazarlama otomasyonu, müşteri hizmetleri, AgotaSoft CRM",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft CRM | Müşteri İlişkileri Yönetim Sistemi",
		description: "Müşteri ilişkilerinizi güçlendirin, satış süreçlerinizi optimize edin ve büyümenizi hızlandırın.",
		type: "website",
		url: "https://agotasoft.com/crm",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft CRM | Müşteri İlişkileri Yönetimi",
		description: "Satışlarınızı artırın, müşteri memnuniyetini yükseltin",
	},
};

function CRMLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default CRMLayout;
