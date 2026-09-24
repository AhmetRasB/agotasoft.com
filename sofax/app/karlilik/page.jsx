import Breadcrumb from "@/components/common/Breadcrumb";
import DetailedProductContent from "@/components/product-pages/DetailedProductContent";

function KarlilikPage() {
	return (
		<>
			<Breadcrumb title="Karlılık.NET" />
			<DetailedProductContent pageKey="karlilik" fallbackIcon="fas fa-chart-pie" />
		</>
	);
}

export default KarlilikPage;
