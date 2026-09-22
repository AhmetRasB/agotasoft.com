import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft ERP ulgamy | AgotaSoft",
	description: "Ammar, maliýe, öndüriş meýilnamalaşdyrmasy, satyn alma we adam resurslary proseslerini ýeke-täk integrirlenen ulgam bilen dolandyryň. Netijeligi ýokarlandyryň, çykdajylary azaldyň we ösüşi çaltlandyryň.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/erp"),
	openGraph: {
		title: "AgotaSoft ERP: öndürişden maliýä çenli ähli proseslerňiz bir platformada",
		description: "Ammar, maliýe, öndüriş meýilnamalaşdyrmasy, satyn alma we adam resurslary proseslerini ýeke-täk integrirlenen ulgam bilen dolandyryň. Netijeligi ýokarlandyryň, çykdajylary azaldyň we ösüşi çaltlandyryň.",
		type: "website",
		url: "https://agotasoft.com/erp",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft ERP ulgamy | AgotaSoft",
		description: "Ammar, maliýe, öndüriş meýilnamalaşdyrmasy, satyn alma we adam resurslary proseslerini ýeke-täk integrirlenen ulgam bilen dolandyryň. Netijeligi ýokarlandyryň, çykdajylary azaldyň we ösüşi çaltlandyryň.",
	},
};

function ERPLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default ERPLayout;
