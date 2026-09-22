"use client";
import Rattingful from "@/public/images/v1/rattingful.svg";
import Rattinghalf from "@/public/images/v1/rattinghalf.svg";
import Image from "next/image";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
function HeroSection() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const hero = cms.hero || {};
	return (
		<div className="sofax-hero-section overflow-hidden" id="hero">
			<div className="container">
				<HeroContent />
				<div className="sofax-hero-buttons d-flex justify-content-center gap-4 mb-5">
					<a href={withLocale(hero.cta_primary_url || "/contact-us", prefix)} className="sofax-btn-primary">
						{hero.cta_primary || "Demo Talep Edin"}
					</a>
					<a href={withLocale(hero.cta_secondary_url || "#solutions", prefix)} className="sofax-btn-secondary">
						{hero.cta_secondary || "Çözümlerimizi Keşfedin"}
					</a>
				</div>
				<div className="sofax-rating-icon">
					<ul>
						<li>
							<Image src={Rattingful} alt="Rating" />
						</li>
						<li>
							<Image src={Rattingful} alt="Rating" />
						</li>
						<li>
							<Image src={Rattingful} alt="Rating" />
						</li>
						<li>
							<Image src={Rattingful} alt="Rating" />
						</li>
						<li>
							<Image src={Rattinghalf} alt="Rating" />
						</li>
						<li>{hero.rating_text}</li>
					</ul>
				</div>
				<HeroThumbs />
			</div>
		</div>
	);
}

export default HeroSection;
