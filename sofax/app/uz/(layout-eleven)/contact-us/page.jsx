import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ContactContent from "@/components/contact-page/ContactContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Aloqa | AgotaSoft",
	description: "AgotaSoft dasturiy yechimlari haqida batafsil ma'lumot olish, demo so'rash yoki loyihalaringizni muhokama qilish uchun biz bilan bog'laning.",
	author: "AgotaSoft",
	alternates: buildAlternates("/contact-us"),
	openGraph: {
		title: "Aloqa | AgotaSoft",
		description: "AgotaSoft dasturiy yechimlari haqida batafsil ma'lumot olish, demo so'rash yoki loyihalaringizni muhokama qilish uchun biz bilan bog'laning.",
		type: "website",
		url: "https://agotasoft.com/contact-us",
	},
	twitter: {
		card: "summary_large_image",
		title: "Aloqa | AgotaSoft",
		description: "AgotaSoft dasturiy yechimlari haqida batafsil ma'lumot olish, demo so'rash yoki loyihalaringizni muhokama qilish uchun biz bilan bog'laning.",
	},
};

function ContactUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.contact.title" fallback="Aloqa" />} />
			<ContactContent />
		</>
	);
}

export default ContactUs;
