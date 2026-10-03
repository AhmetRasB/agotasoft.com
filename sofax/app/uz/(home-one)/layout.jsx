import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft ERP | Biznesingizni boshqaradigan yagona platforma",
	description: "AI yordamidagi AgotaSoft ERP bilan ombor, ishlab chiqarish, moliya va xarid jarayonlarini bitta platformada boshqaring.",
	author: "AgotaSoft",
	alternates: buildAlternates("/", "uz"),
	openGraph: {
		title: "AgotaSoft ERP: biznesingizni boshqaradigan yagona platforma",
		description: "Ombor, ishlab chiqarish, moliya va xaridni bitta ekranda birlashtiring. AI yordamida, tez o'rnatiladi.",
		type: "website",
		url: "https://agotasoft.com/uz/",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft ERP | Biznesingizni boshqaradigan yagona platforma",
		description: "AI yordamidagi AgotaSoft ERP bilan ombor, ishlab chiqarish, moliya va xarid jarayonlarini bitta platformada boshqaring.",
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
