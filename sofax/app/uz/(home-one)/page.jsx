import Cta from "@/components/home/home-one/cta";
import HeroSection from "@/components/home/home-one/hero";
import LogoSlider from "@/components/home/home-one/logo-slider";
import Services from "@/components/home/home-one/services";
import Testimonial from "@/components/home/home-one/testimonial";
import WhyChooseUs from "@/components/home/home-one/why-choose-us";

function HomeOne() {
	return (
		<>
			<HeroSection />
			<LogoSlider />
			<Services />
			<WhyChooseUs />
			<Testimonial />
			<Cta />
		</>
	);
}

export default HomeOne;
