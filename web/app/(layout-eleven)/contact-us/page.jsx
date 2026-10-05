import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ContactContent from "@/components/contact-page/ContactContent";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	alternates: buildAlternates("/contact-us"),
	title: "AgotaSoft İletişim | Bizimle İletişime Geçin - Demo Talep Edin",
	description: "AgotaSoft ERP, CRM, Ön Muhasebe ve LMS çözümleri hakkında bilgi almak, demo talep etmek için bizimle iletişime geçin.",
	keywords: "AgotaSoft iletişim, demo talep, yazılım danışmanlığı, ERP demo, CRM demo",
	author: "AgotaSoft",
	openGraph: {
		title: "AgotaSoft İletişim | Demo Talep Edin",
		description: "Yazılım çözümlerimiz hakkında bilgi almak için bizimle iletişime geçin.",
		type: "website",
		url: "https://agotasoft.com/contact-us",
	},
};

function ContactUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.contact.title" fallback="İletişim" />} />
			<ContactContent />
		</>
	);
}

export default ContactUs;
