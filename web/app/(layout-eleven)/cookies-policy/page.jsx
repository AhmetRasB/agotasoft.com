import TermsContent from "@/components/terms-page/TermsContent";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	alternates: buildAlternates("/cookies-policy", "tr", { onlyLocale: "tr" }),
	title: "Çerez Politikası | AgotaSoft",
	description: "AgotaSoft çerez (cookie) kullanım politikası.",
};

function CookiesPolicyPage() {
	return <TermsContent pageKey="cookies" />;
}

export default CookiesPolicyPage;
