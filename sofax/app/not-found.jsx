import NotFoundContent from "@/components/not-found-page/NotFoundContent";

export const metadata = {
	title: "404 - Sayfa Bulunamadı | AgotaSoft",
	description: "Aradığınız sayfa bulunamadı. AgotaSoft ana sayfasına dönebilir veya çözümlerimizi inceleyebilirsiniz.",
};

export default function NotFound() {
	return <NotFoundContent />;
}
