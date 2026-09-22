import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft LMS System | AgotaSoft",
	description: "Digitize your corporate training processes with course management, online exams and performance reporting.",
	author: "AgotaSoft",
	alternates: buildAlternates("/lms"),
	openGraph: {
		title: "AgotaSoft LMS: Your Corporate Training and Development Platform",
		description: "Digitize your corporate training processes with course management, online exams and performance reporting.",
		type: "website",
		url: "https://agotasoft.com/lms",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft LMS System | AgotaSoft",
		description: "Digitize your corporate training processes with course management, online exams and performance reporting.",
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
