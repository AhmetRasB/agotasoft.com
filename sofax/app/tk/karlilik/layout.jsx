import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "Karlılık.NET | AgotaSoft",
	description: "Trendyol we Hepsiburada satyjylary üçin komissiýa, eltip bermek we salgytlar hasaba alnyp hakyky arassa girdejini görkezýän emeli intellektli seljeriş platformasy.",
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik"),
	openGraph: {
		title: "Karlılık.NET | AgotaSoft",
		description: "Trendyol we Hepsiburada satyjylary üçin komissiýa, eltip bermek we salgytlar hasaba alnyp hakyky arassa girdejini görkezýän emeli intellektli seljeriş platformasy.",
		type: "website",
		url: "https://agotasoft.com/karlilik",
	},
	twitter: {
		card: "summary_large_image",
		title: "Karlılık.NET | AgotaSoft",
		description: "Trendyol we Hepsiburada satyjylary üçin komissiýa, eltip bermek we salgytlar hasaba alnyp hakyky arassa girdejini görkezýän emeli intellektli seljeriş platformasy.",
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
