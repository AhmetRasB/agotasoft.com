import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
import { buildAlternates } from "@/lib/i18n/config";

export const metadata = {
	title: "AgotaSoft Buxgalteriya",
	description: "TRY, USD va EUR'ni bir vaqtda yurituvchi, shtrix-kod bilan sotuv qiladigan buxgalteriya dasturi; iOS ilovasi va veb-panel.",
	author: "AgotaSoft",
	alternates: buildAlternates("/pre-accounting"),
	openGraph: {
		title: "AgotaSoft Buxgalteriya",
		description: "TRY, USD va EUR'ni bir vaqtda yurituvchi, shtrix-kod bilan sotuv qiladigan buxgalteriya dasturi; iOS ilovasi va veb-panel.",
		type: "website",
		url: "https://agotasoft.com/pre-accounting",
	},
	twitter: {
		card: "summary_large_image",
		title: "AgotaSoft Buxgalteriya",
		description: "TRY, USD va EUR'ni bir vaqtda yurituvchi, shtrix-kod bilan sotuv qiladigan buxgalteriya dasturi; iOS ilovasi va veb-panel.",
	},
};

function PreAccountingLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default PreAccountingLayout;
