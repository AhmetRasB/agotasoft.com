import Hero from "@/components/erp-landing/Hero";
import TrustStrip from "@/components/erp-landing/TrustStrip";
import PlatformSection from "@/components/erp-landing/PlatformSection";
import AiSection from "@/components/erp-landing/AiSection";
import StatsSection from "@/components/erp-landing/StatsSection";
import CaseStudies from "@/components/erp-landing/CaseStudies";
import OtherProducts from "@/components/erp-landing/OtherProducts";
import FinalCta from "@/components/erp-landing/FinalCta";

function HomeOne() {
	return (
		<>
			<Hero />
			<TrustStrip />
			<PlatformSection />
			<AiSection />
			<StatsSection />
			<CaseStudies />
			<OtherProducts />
			<FinalCta />
		</>
	);
}

export default HomeOne;
