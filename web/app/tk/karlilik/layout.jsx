import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "Kârlılık.NET | Trendyol we Hepsiburada üçin arassa girdeji seljermesi";
const description = "Komissiýa, eltip bermek, hyzmat tölegi, saklanýan salgyt, GBS we mahabat aýrylandan soňky hakyky arassa girdeji: sargyt, önüm we dükan boýunça. 14 gün mugt, karlilik.net";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik", "tk"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/tk/karlilik",
		locale: "tk_TM",
		images: [{ url: "/images/products/karlilik/dashboard.webp", width: 1600, height: 900 }],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/images/products/karlilik/dashboard.webp"],
	},
};

function KarlilikLayout({ children }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}

export default KarlilikLayout;
