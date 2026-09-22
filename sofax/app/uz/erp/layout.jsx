import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft ERP tizimi | AgotaSoft",
	description: "Ombor, moliya, ishlab chiqarishni rejalashtirish, xarid va inson resurslari jarayonlarini yagona integratsiyalashgan tizim bilan boshqaring. Samaradorlikni oshiring, xarajatlarni kamaytiring va o'sishni tezlashtiring.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/erp"),
	openGraph: {
		title: "AgotaSoft ERP: ishlab chiqarishdan moliyagacha barcha jarayonlar bitta platformada",
		description: "Ombor, moliya, ishlab chiqarishni rejalashtirish, xarid va inson resurslari jarayonlarini yagona integratsiyalashgan tizim bilan boshqaring. Samaradorlikni oshiring, xarajatlarni kamaytiring va o'sishni tezlashtiring.",
		type: "website",
		url: "https://agotasoft.com/erp",
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
			{children}
			<Footer />
		</>
	);
}

export default ERPLayout;
