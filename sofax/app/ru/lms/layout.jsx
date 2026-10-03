import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Система AgotaSoft LMS | AgotaSoft",
	description: "Переведите процессы корпоративного обучения в цифровой формат с управлением курсами, онлайн-экзаменами и отчётностью по эффективности.",
	author: "AgotaSoft",
	alternates: buildAlternates("/lms", "ru"),
	openGraph: {
		title: "AgotaSoft LMS: ваша платформа корпоративного обучения и развития",
		description: "Переведите процессы корпоративного обучения в цифровой формат с управлением курсами, онлайн-экзаменами и отчётностью по эффективности.",
		type: "website",
		url: "https://agotasoft.com/ru/lms",
	},
	twitter: {
		card: "summary_large_image",
		title: "Система AgotaSoft LMS | AgotaSoft",
		description: "Переведите процессы корпоративного обучения в цифровой формат с управлением курсами, онлайн-экзаменами и отчётностью по эффективности.",
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
