import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Mobil Barkod Sistemi | AgotaSoft",
	description: "Depo ve mağazalarınızda stok sayımı, giriş-çıkış ve envanter takibini mobil barkod okuyucularla hızlandırın.",
	author: "AgotaSoft",
	alternates: buildAlternates("/mobil-barkod"),
	openGraph: {
		title: "AgotaSoft Mobil Barkod Sistemi",
		description: "Depo ve mağazalarınızda stok sayımı, giriş-çıkış ve envanter takibini mobil barkod okuyucularla hızlandırın.",
		type: "website",
		url: "https://agotasoft.com/mobil-barkod",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Mobil Barkod Sistemi",
		description: "Depo ve mağazalarınızda stok sayımı, giriş-çıkış ve envanter takibini mobil barkod okuyucularla hızlandırın.",
	},
};

function MobilBarkodLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default MobilBarkodLayout;
