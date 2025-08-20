import Card from "@/public/images/v1/card.png";
import CheckCircle from "@/public/images/v1/check-circle.png";
import Contentimg2 from "@/public/images/v1/contentimg2.png";
import ContentThumb from "@/public/images/v1/contentthumb1.png";
import Icon4 from "@/public/images/v1/icon4.png";
import Icon9 from "@/public/images/v1/icon9.png";
import Shape3 from "@/public/images/v1/shape3.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function WhyChooseUs() {
	return (
		<div className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="sofax-content-img box-shadow mb-130">
							<Image src={ContentThumb} alt="ContentThumb" />
							<div className="sofax-card-shape">
								<Image src={Card} alt="Card" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac ml-50 mb-130 animation-title animation-style3">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="sofax-big-title">İşletmenizi Dijital Dönüşümle Güçlendirin</h2>
							</div>
							<p>
								AgotaSoft yazılım çözümleri ile operasyonel verimliliğinizi artırın, maliyetlerinizi 
								düşürün ve rekabette öne geçin. Entegre sistemlerimizle iş süreçlerinizi optimize edin.
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Süreçleri Otomatikleştirin</h4>
										<p>
											Manuel işlemleri minimize edin, iş akışlarınızı otomatikleştirin ve 
											çalışanlarınızın daha stratejik işlere odaklanmasını sağlayın.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Veri Odaklı Kararlar Alın</h4>
										<p>
											Gerçek zamanlı raporlar ve analizlerle işletmenizin performansını 
											takip edin, doğru kararlar alın ve büyümenizi hızlandırın.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Müşteri Memnuniyetini Artırın</h4>
										<p>
											CRM sistemimizle müşteri ilişkilerinizi güçlendirin, hizmet kalitesini 
											yükseltin ve müşteri sadakatini artırın.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-content-img2 position-ralatiove ml-31">
							<Image src={Contentimg2} alt="Thumbs" />
							<div className="sofax-content-shape-v1">
								<Image src={Shape3} alt="shape" />
							</div>
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-80 tac fs-19">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="sofax-big-title">Teknoloji ile İş Süreçlerinizi Dönüştürün</h2>
							</div>
							<p>
								AgotaSoft'ın entegre yazılım çözümleri ile işletmenizin tüm departmanlarını 
								birbirine bağlayın, verimliliği artırın ve maliyetleri optimize edin.
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon9} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>%60 Daha Hızlı İş Süreçleri</h4>
										<p>
											Otomatik iş akışları ve entegre sistemlerle süreç sürelerinizi 
											kısaltın, çalışan verimliliğini artırın.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon4} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Anlık Veri Erişimi ve Raporlama</h4>
										<p>
											Tüm verilerinize tek noktadan erişin, gerçek zamanlı raporlarla 
											hızlı ve doğru kararlar alın.
										</p>
									</div>
								</div>
							</div>
							<FadeInUp className="extra-mt">
								<Link className="sofax-default-btn pill" data-text="Demo Talep Edin" href="/contact-us">
									<span className="button-wraper">Demo Talep Edin</span>
								</Link>
							</FadeInUp>
							<div className="sofax-content-shape-v1">
								<Image src={Shape3} alt="shape" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
