import TermsContent from "@/components/terms-page/TermsContent";

export const metadata = {
	title: "Gizlilik Politikası | AgotaSoft",
	description: "AgotaSoft gizlilik politikası ve kişisel verilerin korunmasına ilişkin bilgilendirme.",
};

function PrivacyPolicyPage() {
	return <TermsContent pageKey="privacy" />;
}

export default PrivacyPolicyPage;
