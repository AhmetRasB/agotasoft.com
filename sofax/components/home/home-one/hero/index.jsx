import Rattingful from "@/public/images/v1/rattingful.svg";
import Rattinghalf from "@/public/images/v1/rattinghalf.svg";
import Image from "next/image";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
function HeroSection() {
	return (
		<div className="sofax-hero-section overflow-hidden" id="hero">
			<div className="container">
				<HeroContent />
				<div className="sofax-hero-buttons d-flex justify-content-center gap-4 mb-5">
					<a href="/contact-us" className="sofax-btn-primary">
						Demo Talep Edin
					</a>
					<a href="#solutions" className="sofax-btn-secondary">
						Çözümlerimizi Keşfedin
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
						<li>4.8/5 müşteri memnuniyeti - Binlerce işletmenin tercihi</li>
					</ul>
				</div>
				<HeroThumbs />
			</div>
		</div>
	);
}

export default HeroSection;
