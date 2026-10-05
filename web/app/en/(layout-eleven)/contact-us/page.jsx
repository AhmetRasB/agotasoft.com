import BreadCrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import ContactContent from "@/components/contact-page/ContactContent";

import { buildAlternates } from "@/lib/i18n/config";
export const metadata = {
	title: "Contact | AgotaSoft",
	description: "Contact us for detailed information about AgotaSoft software solutions, to request a demo, or to discuss your projects.",
	author: "AgotaSoft",
	alternates: buildAlternates("/contact-us", "en"),
	openGraph: {
		title: "Contact | AgotaSoft",
		description: "Contact us for detailed information about AgotaSoft software solutions, to request a demo, or to discuss your projects.",
		type: "website",
		url: "https://agotasoft.com/en/contact-us",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact | AgotaSoft",
		description: "Contact us for detailed information about AgotaSoft software solutions, to request a demo, or to discuss your projects.",
	},
};

function ContactUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.contact.title" fallback="Contact" />} />
			<ContactContent />
		</>
	);
}

export default ContactUs;
