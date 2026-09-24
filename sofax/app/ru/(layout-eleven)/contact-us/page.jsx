import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ContactContent from "@/components/contact-page/ContactContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Контакты | AgotaSoft",
	description: "Свяжитесь с нами, чтобы узнать подробности о программных решениях AgotaSoft, запросить демо или обсудить ваши проекты.",
	author: "AgotaSoft",
	alternates: buildAlternates("/contact-us"),
	openGraph: {
		title: "Контакты | AgotaSoft",
		description: "Свяжитесь с нами, чтобы узнать подробности о программных решениях AgotaSoft, запросить демо или обсудить ваши проекты.",
		type: "website",
		url: "https://agotasoft.com/contact-us",
	},
	twitter: {
		card: "summary_large_image",
		title: "Контакты | AgotaSoft",
		description: "Свяжитесь с нами, чтобы узнать подробности о программных решениях AgotaSoft, запросить демо или обсудить ваши проекты.",
	},
};

function ContactUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.contact.title" fallback="Контакты" />} />
			<ContactContent />
		</>
	);
}

export default ContactUs;
