"use client";
import { useCms } from "@/hooks/useCms";

function HeroContent() {
	const cms = useCms();
	const hero = cms.hero || {};
	return (
		<div className="sofax-hero-content center">
			<h1 className="sofax-hero-title slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
				{hero.title}
			</h1>
			<p className="sofax-hero-subtitle">
				{hero.subtitle}
			</p>
		</div>
	);
}

export default HeroContent;
