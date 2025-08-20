"use client";
import Icon1 from "@/public/images/service/icon1.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "ERP Çözümleri",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "CRM Sistemleri",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Ön Muhasebe",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "LMS Eğitim Platformu",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Dijital Dönüşüm",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "İş Süreç Yönetimi",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Yazılım Danışmanlığı",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Kurumsal Çözümler",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Veri Analizi",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Sistem Entegrasyonu",
	},
];

const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: "auto",
};

function AutoSlider() {
	return (
		<section className="sofax-service-slider">
			<div className="sofax-slider-service-section">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="sofax-service-slider-wrap">
									<div className="sofax-service-slider-icon">
										<Image src={item.img} alt="Icon" />
									</div>
									<div className="sofax-service-slider-data light-color">
										<h2>{item.txt}</h2>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</section>
	);
}

export default AutoSlider;
