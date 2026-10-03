import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft CRM tizimi | AgotaSoft",
	description: "Keng qamrovli mijozlar ma'lumotlar bazasi, sotuv imkoniyatlarini kuzatish, marketing avtomatlashtirish va mijozlarga xizmat bilan biznesingiz o'sishini tezlashtiring.",
	author: "AgotaSoft",
	alternates: buildAlternates("/crm", "uz"),
	openGraph: {
		title: "AgotaSoft CRM: mijozlar bilan munosabatlaringizni mustahkamlang, sotuvlaringizni oshiring",
		description: "Keng qamrovli mijozlar ma'lumotlar bazasi, sotuv imkoniyatlarini kuzatish, marketing avtomatlashtirish va mijozlarga xizmat bilan biznesingiz o'sishini tezlashtiring.",
		type: "website",
		url: "https://agotasoft.com/uz/crm",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft CRM tizimi | AgotaSoft",
		description: "Keng qamrovli mijozlar ma'lumotlar bazasi, sotuv imkoniyatlarini kuzatish, marketing avtomatlashtirish va mijozlarga xizmat bilan biznesingiz o'sishini tezlashtiring.",
	},
};

function CRMLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default CRMLayout;
