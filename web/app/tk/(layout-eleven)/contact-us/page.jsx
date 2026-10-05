import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ContactContent from "@/components/contact-page/ContactContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Habarlaşmak | AgotaSoft",
	description: "AgotaSoft programma çözgütleri barada jikme-jik maglumat almak, demo sorap ýa-da taslamalaryňyzy maslahatlaşmak üçin biz bilen habarlaşyň.",
	author: "AgotaSoft",
	alternates: buildAlternates("/contact-us", "tk"),
	openGraph: {
		title: "Habarlaşmak | AgotaSoft",
		description: "AgotaSoft programma çözgütleri barada jikme-jik maglumat almak, demo sorap ýa-da taslamalaryňyzy maslahatlaşmak üçin biz bilen habarlaşyň.",
		type: "website",
		url: "https://agotasoft.com/tk/contact-us",
	},
	twitter: {
		card: "summary_large_image",
		title: "Habarlaşmak | AgotaSoft",
		description: "AgotaSoft programma çözgütleri barada jikme-jik maglumat almak, demo sorap ýa-da taslamalaryňyzy maslahatlaşmak üçin biz bilen habarlaşyň.",
	},
};

function ContactUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.contact.title" fallback="Habarlaşmak" />} />
			<ContactContent />
		</>
	);
}

export default ContactUs;
