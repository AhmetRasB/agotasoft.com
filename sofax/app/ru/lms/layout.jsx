import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Система AgotaSoft LMS | AgotaSoft",
	description: "Переведите процессы корпоративного обучения в цифровой формат с управлением курсами, онлайн-экзаменами и отчётностью по эффективности.",
	author: "AgotaSoft",
	alternates: buildAlternates("/lms"),
	openGraph: {
		title: "AgotaSoft LMS: ваша платформа корпоративного обучения и развития",
		description: "Переведите процессы корпоративного обучения в цифровой формат с управлением курсами, онлайн-экзаменами и отчётностью по эффективности.",
		type: "website",
		url: "https://agotasoft.com/lms",
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
			{children}
			<Footer />
		</>
	);
}

export default LMSLayout;
