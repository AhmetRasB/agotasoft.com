import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft LMS tizimi | AgotaSoft",
	description: "Kurs boshqaruvi, onlayn imtihon, samaradorlik hisoboti bilan korporativ ta'lim jarayonlaringizni raqamlashtiring.",
	author: "AgotaSoft",
	alternates: buildAlternates("/lms", "uz"),
	openGraph: {
		title: "AgotaSoft LMS: korporativ ta'lim va rivojlanish platformangiz",
		description: "Kurs boshqaruvi, onlayn imtihon, samaradorlik hisoboti bilan korporativ ta'lim jarayonlaringizni raqamlashtiring.",
		type: "website",
		url: "https://agotasoft.com/uz/lms",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft LMS tizimi | AgotaSoft",
		description: "Kurs boshqaruvi, onlayn imtihon, samaradorlik hisoboti bilan korporativ ta'lim jarayonlaringizni raqamlashtiring.",
	},
};

function LMSLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default LMSLayout;
