import Breadcrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import DetailedProductContent from "@/components/product-pages/DetailedProductContent";

function KarlilikPage() {
	return (
		<>
			<Breadcrumb title={<CmsText path="pages.karlilik.title" fallback="Kârlılık.NET" />} />
			<DetailedProductContent pageKey="karlilik" fallbackIcon="fas fa-chart-pie" />
		</>
	);
}

export default KarlilikPage;
