import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft ERP tizimi | AgotaSoft",
	description: "Ombor, moliya, ishlab chiqarishni rejalashtirish, xarid va inson resurslari jarayonlarini yagona integratsiyalashgan tizim bilan boshqaring. Samaradorlikni oshiring, xarajatlarni kamaytiring va o'sishni tezlashtiring.",
	author: "AgotaSoft",
	alternates: buildAlternates("/erp", "uz"),
	openGraph: {
		title: "AgotaSoft ERP: ishlab chiqarishdan moliyagacha barcha jarayonlar bitta platformada",
		description: "Ombor, moliya, ishlab chiqarishni rejalashtirish, xarid va inson resurslari jarayonlarini yagona integratsiyalashgan tizim bilan boshqaring. Samaradorlikni oshiring, xarajatlarni kamaytiring va o'sishni tezlashtiring.",
		type: "website",
		url: "https://agotasoft.com/uz/erp",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft ERP tizimi | AgotaSoft",
		description: "Ombor, moliya, ishlab chiqarishni rejalashtirish, xarid va inson resurslari jarayonlarini yagona integratsiyalashgan tizim bilan boshqaring. Samaradorlikni oshiring, xarajatlarni kamaytiring va o'sishni tezlashtiring.",
	},
};

function ERPLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default ERPLayout;
