import Breadcrumb from "@/components/common/Breadcrumb";
import DetailedProductContent from "@/components/product-pages/DetailedProductContent";

function AdisyonQrPage() {
	return (
		<>
			<Breadcrumb title="AgotaSoft Adisyon QR" />
			<DetailedProductContent pageKey="adisyon-qr" fallbackIcon="fas fa-qrcode" />
		</>
	);
}

export default AdisyonQrPage;
