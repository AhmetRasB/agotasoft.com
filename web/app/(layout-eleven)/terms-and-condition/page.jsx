import TermsContent from "@/components/terms-page/TermsContent";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	alternates: buildAlternates("/terms-and-condition", "tr", { onlyLocale: "tr" }),
	title: "Kullanım Koşulları | AgotaSoft",
	description: "AgotaSoft hizmet kullanım koşulları.",
};
function TermsAndConditionPage() {
	return <TermsContent />;
}

export default TermsAndConditionPage;
