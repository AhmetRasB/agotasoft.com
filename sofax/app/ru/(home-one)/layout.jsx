import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft | ПО для ERP, CRM, бухгалтерии и LMS",
	description: "Ускорьте цифровую трансформацию бизнеса. Повышайте эффективность и снижайте затраты с помощью ERP, CRM, бухгалтерии и LMS от AgotaSoft.",
	author: "AgotaSoft",
	alternates: buildAlternates("/"),
	openGraph: {
		title: "AgotaSoft: умные программные решения, которые ведут ваш бизнес в будущее",
		description: "Повышайте операционную эффективность, снижайте затраты и опережайте конкурентов с интегрированными системами ERP, CRM, бухгалтерии и LMS. Завершите цифровую трансформацию вместе с AgotaSoft.",
		type: "website",
		url: "https://agotasoft.com/",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft | ПО для ERP, CRM, бухгалтерии и LMS",
		description: "Ускорьте цифровую трансформацию бизнеса. Повышайте эффективность и снижайте затраты с помощью ERP, CRM, бухгалтерии и LMS от AgotaSoft.",
	},
};
function LayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutOne;
