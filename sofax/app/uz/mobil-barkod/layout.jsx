import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Mobil shtrix-kod tizimi | AgotaSoft",
	description: "Ombor va do'konlaringizda inventarizatsiya, kirim-chiqim va zaxira kuzatuvini mobil shtrix-kod skanerlari bilan tezlashtiring.",
	author: "AgotaSoft",
	alternates: buildAlternates("/mobil-barkod", "uz"),
	openGraph: {
		title: "AgotaSoft Mobil shtrix-kod tizimi",
		description: "Ombor va do'konlaringizda inventarizatsiya, kirim-chiqim va zaxira kuzatuvini mobil shtrix-kod skanerlari bilan tezlashtiring.",
		type: "website",
		url: "https://agotasoft.com/uz/mobil-barkod",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Mobil shtrix-kod tizimi",
		description: "Ombor va do'konlaringizda inventarizatsiya, kirim-chiqim va zaxira kuzatuvini mobil shtrix-kod skanerlari bilan tezlashtiring.",
	},
};

function MobilBarkodLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default MobilBarkodLayout;
