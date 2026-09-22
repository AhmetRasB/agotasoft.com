import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Система AgotaSoft «Бухгалтерия» | AgotaSoft",
	description: "Комплексное бухгалтерское решение, упрощающее финансовые процессы малого и среднего бизнеса благодаря интеграции с турецкими электронными счетами, учёту контрагентов, расходов и финансовой отчётности.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pre-accounting"),
	openGraph: {
		title: "AgotaSoft «Бухгалтерия»: финансовый контроль полностью в ваших руках",
		description: "Комплексное бухгалтерское решение, упрощающее финансовые процессы малого и среднего бизнеса благодаря интеграции с турецкими электронными счетами, учёту контрагентов, расходов и финансовой отчётности.",
		type: "website",
		url: "https://agotasoft.com/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "Система AgotaSoft «Бухгалтерия» | AgotaSoft",
		description: "Комплексное бухгалтерское решение, упрощающее финансовые процессы малого и среднего бизнеса благодаря интеграции с турецкими электронными счетами, учёту контрагентов, расходов и финансовой отчётности.",
	},
};

function PreAccountingLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default PreAccountingLayout;
