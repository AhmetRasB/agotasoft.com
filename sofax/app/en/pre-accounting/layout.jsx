import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Bookkeeping",
	description: "Bookkeeping software that tracks TRY, USD and EUR side by side and sells by barcode; iOS app and web panel.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pre-accounting", "en"),
	openGraph: {
		title: "AgotaSoft Bookkeeping",
		description: "Bookkeeping software that tracks TRY, USD and EUR side by side and sells by barcode; iOS app and web panel.",
		type: "website",
		url: "https://agotasoft.com/en/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Bookkeeping",
		description: "Bookkeeping software that tracks TRY, USD and EUR side by side and sells by barcode; iOS app and web panel.",
	},
};

function PreAccountingLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default PreAccountingLayout;
