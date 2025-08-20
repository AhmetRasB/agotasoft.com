import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

export const metadata = {
	title: "AgotaSoft LMS | Kurumsal Eğitim ve Gelişim Platformunuz",
	description: "AgotaSoft LMS ile ders yönetimi, online sınav, performans raporlama ve kurumsal eğitim süreçlerinizi dijitalleştirin.",
	keywords: "LMS, öğrenme yönetim sistemi, kurumsal eğitim, online eğitim, ders yönetimi, sınav sistemi, AgotaSoft LMS",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft LMS | Kurumsal Öğrenme Yönetim Sistemi",
		description: "Çalışan gelişimi, online eğitimler ve performans takibi için kapsamlı LMS çözümü.",
		type: "website",
		url: "https://agotasoft.com/lms",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft LMS | Kurumsal Eğitim Platformu",
		description: "Çalışan gelişimi ve kurumsal eğitim için LMS çözümü",
	},
};

function LMSLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LMSLayout;
