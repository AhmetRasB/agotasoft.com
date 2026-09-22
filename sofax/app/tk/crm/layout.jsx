import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "AgotaSoft CRM ulgamy | AgotaSoft",
	description: "Giň gerimli müşderi maglumat bazasy, satuw mümkinçiligi yzarlamasy, marketing awtomatlaşdyrmasy we müşderi hyzmaty bilen biznesiňiziň ösüşini çaltlandyryň.",
	author: "AgotaSoft Software",
	alternates: buildAlternates("/crm"),
	openGraph: {
		title: "AgotaSoft CRM: müşderi gatnaşyklaryňyzy güýçlendiriň, satuwlaryňyzy artdyryň",
		description: "Giň gerimli müşderi maglumat bazasy, satuw mümkinçiligi yzarlamasy, marketing awtomatlaşdyrmasy we müşderi hyzmaty bilen biznesiňiziň ösüşini çaltlandyryň.",
		type: "website",
		url: "https://agotasoft.com/crm",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft CRM ulgamy | AgotaSoft",
		description: "Giň gerimli müşderi maglumat bazasy, satuw mümkinçiligi yzarlamasy, marketing awtomatlaşdyrmasy we müşderi hyzmaty bilen biznesiňiziň ösüşini çaltlandyryň.",
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
