import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

export const metadata = {
	title: "AgotaSoft ERP | Üretimden Finansa Tüm Süreçleriniz Tek Platformda",
	description: "AgotaSoft ERP sistemi ile stok yönetimi, finans, üretim, satın alma ve daha fazlasını tek platformda yönetin. İşletmenizin verimliliğini artırın.",
	keywords: "ERP, işletme kaynak planlaması, stok yönetimi, finans yönetimi, üretim planlaması, satın alma yönetimi, AgotaSoft ERP",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft ERP | Entegre İşletme Yönetim Sistemi",
		description: "Üretimden finansa, stoktan satın almaya kadar tüm işletme süreçlerinizi tek platformda yönetin.",
		type: "website",
		url: "https://agotasoft.com/erp",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft ERP | İşletme Yönetim Sistemi",
		description: "Tüm işletme süreçlerinizi tek platformda yönetin",
	},
};

function ERPLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default ERPLayout;
