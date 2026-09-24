import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "Karlılık.NET | AgotaSoft",
	description: "AI-powered profit analytics for Trendyol and Hepsiburada sellers, showing true net profit after commissions, shipping and taxes.",
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik"),
	openGraph: {
		title: "Karlılık.NET | AgotaSoft",
		description: "AI-powered profit analytics for Trendyol and Hepsiburada sellers, showing true net profit after commissions, shipping and taxes.",
		type: "website",
		url: "https://agotasoft.com/karlilik",
	},
	twitter: {
		card: "summary_large_image",
		title: "Karlılık.NET | AgotaSoft",
		description: "AI-powered profit analytics for Trendyol and Hepsiburada sellers, showing true net profit after commissions, shipping and taxes.",
	},
};

function KarlilikLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default KarlilikLayout;
