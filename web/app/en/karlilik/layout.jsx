import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "Kârlılık.NET | Net profit analytics for Trendyol and Hepsiburada";
const description = "True net profit by order, product and store after commission, shipping, service fees, withholding tax, VAT and ads. 14-day free trial, karlilik.net";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik", "en"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/en/karlilik",
		locale: "en_US",
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
