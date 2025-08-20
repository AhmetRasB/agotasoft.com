import Shape4 from "@/public/images/v1/shape4.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";
function Cta() {
	return (
		<section className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="sofax-cta-content">
					<div className="tg-heading-subheading animation-style3">
						<h2 className="sofax-big-title">AgotaSoft ile Dijital Dönüşümünüzü Başlatın</h2>
					</div>
					<p>
						ERP, CRM, Ön Muhasebe ve LMS çözümlerimizle işletmenizin verimliliğini artırın. 
						Uzman ekibimizle ücretsiz demo alın ve farkı görün.
					</p>
					<FadeInUp className="extra-mt">
						<Link className="sofax-default-btn pill" data-text="Ücretsiz Demo Talep Edin" href="/contact-us">
							<span className="button-wraper">Ücretsiz Demo Talep Edin</span>
						</Link>
						<span className="cta-bottom">30 günlük deneme süresi. Kredi kartı gerekmez.</span>
					</FadeInUp>
					<div className="sofax-cta-shape">
						<Image src={Shape4} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cta;
