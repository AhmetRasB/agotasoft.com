import LogoSlider from "@/components/career-page/logo-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import dynamic from "next/dynamic";

const Career = dynamic(() => import("@/components/career-page"), {
	ssr: false,
});
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Карьера | AgotaSoft",
	description: "Присоединяйтесь к нашим открытым вакансиям и участвуйте в проектах по разработке ПО и цифровой трансформации в AgotaSoft.",
	author: "AgotaSoft",
	alternates: buildAlternates("/career"),
	openGraph: {
		title: "Карьера | AgotaSoft",
		description: "Присоединяйтесь к нашим открытым вакансиям и участвуйте в проектах по разработке ПО и цифровой трансформации в AgotaSoft.",
		type: "website",
		url: "https://agotasoft.com/career",
	},
	twitter: {
		card: "summary_large_image",
		title: "Карьера | AgotaSoft",
		description: "Присоединяйтесь к нашим открытым вакансиям и участвуйте в проектах по разработке ПО и цифровой трансформации в AgotaSoft.",
	},
};
function CareerPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.career.title" fallback="Карьера" />} />
			<Career />
			<LogoSlider />
		</>
	);
}

export default CareerPage;
