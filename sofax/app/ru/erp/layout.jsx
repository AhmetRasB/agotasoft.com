import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Система AgotaSoft ERP | AgotaSoft",
	description: "Управляйте складом, финансами, планированием производства, закупками и кадрами в единой интегрированной системе. Повышайте эффективность, снижайте затраты и ускоряйте рост.",
	author: "AgotaSoft",
	alternates: buildAlternates("/erp", "ru"),
	openGraph: {
		title: "AgotaSoft ERP: все процессы от производства до финансов на одной платформе",
		description: "Управляйте складом, финансами, планированием производства, закупками и кадрами в единой интегрированной системе. Повышайте эффективность, снижайте затраты и ускоряйте рост.",
		type: "website",
		url: "https://agotasoft.com/ru/erp",
	},
	twitter: {
		card: "summary_large_image",
		title: "Система AgotaSoft ERP | AgotaSoft",
		description: "Управляйте складом, финансами, планированием производства, закупками и кадрами в единой интегрированной системе. Повышайте эффективность, снижайте затраты и ускоряйте рост.",
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
