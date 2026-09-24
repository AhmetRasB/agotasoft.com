import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import dynamic from "next/dynamic";

const Career = dynamic(() => import("@/components/career-page"), {
	ssr: false,
});
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Careers | AgotaSoft",
	description: "Join our open positions and take part in software and digital-transformation projects at AgotaSoft.",
	author: "AgotaSoft",
	alternates: buildAlternates("/career"),
	openGraph: {
		title: "Careers | AgotaSoft",
		description: "Join our open positions and take part in software and digital-transformation projects at AgotaSoft.",
		type: "website",
		url: "https://agotasoft.com/career",
	},
	twitter: {
		card: "summary_large_image",
		title: "Careers | AgotaSoft",
		description: "Join our open positions and take part in software and digital-transformation projects at AgotaSoft.",
	},
};
function CareerPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.career.title" fallback="Careers" />} />
			<Career />
		</>
	);
}

export default CareerPage;
