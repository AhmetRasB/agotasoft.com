"use client";
import { useCms } from "@/hooks/useCms";
import ProductModules from "@/components/product-pages/ProductModules";

export default function PlatformSection() {
	const cms = useCms();
	const page = cms.pages?.erp || {};

	return (
		<div id="platform">
			<ProductModules
				title={page.modules_title}
				subtitle={page.modules_subtitle}
				modules={page.modules}
				numberLabel="01"
				sectionLabel="PLATFORM"
			/>
		</div>
	);
}
