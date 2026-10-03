import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft ERP | Единая платформа для вашего бизнеса",
	description: "Управляйте складом, производством, финансами и закупками на одной платформе с ИИ — AgotaSoft ERP.",
	author: "AgotaSoft",
	alternates: buildAlternates("/", "ru"),
	openGraph: {
		title: "AgotaSoft ERP: единая платформа для управления бизнесом",
		description: "Объедините склад, производство, финансы и закупки на одном экране. С поддержкой ИИ, быстрая настройка.",
		type: "website",
		url: "https://agotasoft.com/ru/",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft ERP | Единая платформа для вашего бизнеса",
		description: "Управляйте складом, производством, финансами и закупками на одной платформе с ИИ — AgotaSoft ERP.",
	},
};
function LayoutOne({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default LayoutOne;
