"use client";
import BreadCrumb from "@/components/common/Breadcrumb";
import PricingContent from "@/components/pricing-page/PricingContent";
import { useCms } from "@/hooks/useCms";

function Pricing() {
	const cms = useCms();
	const page = cms.pages?.pricing || {};
	return (
		<>
			<BreadCrumb title={page.title || "Fiyatlandırma"} />
			<PricingContent />
		</>
	);
}

export default Pricing;
