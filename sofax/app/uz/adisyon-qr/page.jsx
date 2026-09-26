import Breadcrumb from "@/components/common/Breadcrumb";
import CmsText from "@/components/cms/CmsText";
import DetailedProductContent from "@/components/product-pages/DetailedProductContent";

function AdisyonQrPage() {
	return (
		<>
			<Breadcrumb title={<CmsText path="pages.adisyon-qr.title" fallback="AgotaSoft QR Menü" />} />
			<DetailedProductContent pageKey="adisyon-qr" fallbackIcon="fas fa-qrcode" />
		</>
	);
}

export default AdisyonQrPage;
