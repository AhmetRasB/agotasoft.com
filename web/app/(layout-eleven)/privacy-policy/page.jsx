import TermsContent from "@/components/terms-page/TermsContent";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	alternates: buildAlternates("/privacy-policy", "tr", { onlyLocale: "tr" }),
	title: "Gizlilik Politikası | AgotaSoft",
	description: "AgotaSoft gizlilik politikası ve kişisel verilerin korunmasına ilişkin bilgilendirme.",
};

function PrivacyPolicyPage() {
	return <TermsContent pageKey="privacy" />;
}

export default PrivacyPolicyPage;
