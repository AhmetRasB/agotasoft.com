
import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import Faq from "@/components/faq-page";
import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Ýygy-ýygydan soralýan soraglar | AgotaSoft",
	description: "Ýygy-ýygydan soralýan soraglar",
	author: "AgotaSoft",
	alternates: buildAlternates("/faq"),
	openGraph: {
		title: "Ýygy-ýygydan soralýan soraglar | AgotaSoft",
		description: "Ýygy-ýygydan soralýan soraglar",
		type: "website",
		url: "https://agotasoft.com/faq",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ýygy-ýygydan soralýan soraglar | AgotaSoft",
		description: "Ýygy-ýygydan soralýan soraglar",
	},
};
function FaqPage() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.faq.title" fallback="Ýygy-ýygydan soralýan soraglar" />} />
			<Faq />
		</>
	);
}

export default FaqPage;
