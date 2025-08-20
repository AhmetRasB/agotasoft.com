import Icon1 from "@/public/images/v1/icon1.png";
import Icon2 from "@/public/images/v1/icon2.png";
import Icon3 from "@/public/images/v1/icon3.png";
import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "ERP Sistemi",
		description:
			"Üretimden finansa, stok yönetiminden satın almaya kadar tüm işletme süreçlerinizi tek platformda yönetin.",
		link: "/erp",
		category: "sofax-solution-erp"
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "CRM Sistemi",
		description:
			"Müşteri ilişkilerinizi güçlendirin, satış fırsatlarını takip edin ve pazarlama otomasyonu ile büyüyün.",
		link: "/crm",
		category: "sofax-solution-crm"
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Ön Muhasebe",
		description:
			"E-Fatura, cari hesap yönetimi ve gider takibi ile finansal kontrolünüzü elinizde tutun.",
		link: "/pre-accounting",
		category: "sofax-solution-accounting"
	},
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "LMS Sistemi",
		description:
			"Kurumsal eğitim ve gelişim platformunuzla çalışan performansınızı artırın, online eğitimler düzenleyin.",
		link: "/lms",
		category: "sofax-solution-lms"
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "QrMenu Sistemi",
		description:
			"Restoran ve kafelerde temassız menü deneyimi. QR kod ile dijital menü, sipariş takibi ve ödeme entegrasyonu.",
		link: "/service",
		category: "sofax-solution-qrmenu"
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Kurumsal Website",
		description:
			"Profesyonel kurumsal web sitesi tasarımı ve geliştirme. Responsive, SEO uyumlu ve yönetim panelli çözümler.",
		link: "/service",
		category: "sofax-solution-website"
	},
];
function Services() {
	return (
		<div className="section sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title max-width-770 ">
					<div className="row">
						<div className="col-xl-8 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="sofax-big-title">İşletmenizi Güçlendiren Yazılım Çözümleri</h2>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 d-flex justify-content-end align-items-center">
							<FadeInUp className="sofax-title-btn">
								<Link className="sofax-default-btn pill" data-text="Tüm Çözümler" href="/service">
									<span className="button-wraper">Tüm Çözümler</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>

				<div className="row">
					{servicesData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-xl-4 col-md-6">
							<ServiceCard service={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
