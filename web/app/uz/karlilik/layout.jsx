import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

const title = "Kârlılık.NET | Trendyol va Hepsiburada uchun sof foyda tahlili";
const description = "Komissiya, yetkazib berish, xizmat haqi, ushlab qolinadigan soliq, QQS va reklama ayirilgandan so'ng buyurtma, mahsulot va do'kon bo'yicha haqiqiy sof foyda. 14 kun bepul, karlilik.net";

export const metadata = {
	title,
	description,
	author: "AgotaSoft",
	alternates: buildAlternates("/karlilik", "uz"),
	openGraph: {
		title,
		description,
		type: "website",
		url: "https://agotasoft.com/uz/karlilik",
		locale: "uz_UZ",
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
