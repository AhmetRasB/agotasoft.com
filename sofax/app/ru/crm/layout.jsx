import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Система AgotaSoft CRM | AgotaSoft",
	description: "Ускорьте рост бизнеса благодаря комплексной базе клиентов, отслеживанию сделок, автоматизации маркетинга и обслуживанию клиентов. Повышайте удовлетворённость, оптимизируйте продажи.",
	author: "AgotaSoft",
	alternates: buildAlternates("/crm"),
	openGraph: {
		title: "AgotaSoft CRM: укрепите отношения с клиентами, увеличьте продажи",
		description: "Ускорьте рост бизнеса благодаря комплексной базе клиентов, отслеживанию сделок, автоматизации маркетинга и обслуживанию клиентов. Повышайте удовлетворённость, оптимизируйте продажи.",
		type: "website",
		url: "https://agotasoft.com/crm",
	},
	twitter: {
		card: "summary_large_image",
		title: "Система AgotaSoft CRM | AgotaSoft",
		description: "Ускорьте рост бизнеса благодаря комплексной базе клиентов, отслеживанию сделок, автоматизации маркетинга и обслуживанию клиентов. Повышайте удовлетворённость, оптимизируйте продажи.",
	},
};

function CRMLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default CRMLayout;
