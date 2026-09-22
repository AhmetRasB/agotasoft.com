import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft LMS tizimi | AgotaSoft",
	description: "Kurs boshqaruvi, onlayn imtihon, samaradorlik hisoboti bilan korporativ ta'lim jarayonlaringizni raqamlashtiring.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/lms"),
	openGraph: {
		title: "AgotaSoft LMS: korporativ ta'lim va rivojlanish platformangiz",
		description: "Kurs boshqaruvi, onlayn imtihon, samaradorlik hisoboti bilan korporativ ta'lim jarayonlaringizni raqamlashtiring.",
		type: "website",
		url: "https://agotasoft.com/lms",
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
			{children}
			<Footer />
		</>
	);
}

export default LMSLayout;
