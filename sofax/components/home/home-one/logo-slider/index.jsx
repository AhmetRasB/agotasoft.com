"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Partner logoları için placeholder data - gerçek logolar eklenecek
const sliderData = [
	{
		id: crypto.randomUUID(),
		name: "Microsoft for Startups",
		img: "/images/partners/microsoft-startups.svg",
		alt: "Microsoft for Startups Logo"
	},
	{
		id: crypto.randomUUID(),
		name: "Azure",
		img: "/images/partners/azure.svg",
		alt: "Microsoft Azure Logo"
	},
	{
		id: crypto.randomUUID(),
		name: "Cloudflare",
		img: "/images/partners/cloudflare.svg",
		alt: "Cloudflare Logo"
	},
	{
		id: crypto.randomUUID(),
		name: "JetBrains",
		img: "/images/partners/jetbrains.svg",
		alt: "JetBrains Logo"
	},
	{
		id: crypto.randomUUID(),
		name: "Syncfusion",
		img: "/images/partners/syncfusion.svg",
		alt: "Syncfusion Logo"
	},
	{
		id: crypto.randomUUID(),
		name: "Microsoft for Startups",
		img: "/images/partners/microsoft-startups.svg",
		alt: "Microsoft for Startups Logo"
	},
	{
		id: crypto.randomUUID(),
		name: "Azure",
		img: "/images/partners/azure.svg",
		alt: "Microsoft Azure Logo"
	},
	{
		id: crypto.randomUUID(),
		name: "Cloudflare",
		img: "/images/partners/cloudflare.svg",
		alt: "Cloudflare Logo"
	},
	{
		id: crypto.randomUUID(),
		name: "JetBrains",
		img: "/images/partners/jetbrains.svg",
		alt: "JetBrains Logo"
	},
	{
		id: crypto.randomUUID(),
		name: "Syncfusion",
		img: "/images/partners/syncfusion.svg",
		alt: "Syncfusion Logo"
	},
];

const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
};

function LogoSlider() {
	return (
		<section className="sofax-slider-section">
			<div className="container">
				<div className="sofax-title-section sofax-partners">
					<h4>Teknoloji Partnerlerimiz ve Sponsorlarımız</h4>
				</div>
				<div className="sofax-brand-slider">
					{
						<Swiper {...swiperSettings}>
							{sliderData.map((item) => (
								<SwiperSlide key={item.id}>
									<div className="sofax-logo-icon-item sofax-partner-logo">
										<Image 
											src={item.img} 
											alt={item.alt}
											width={120}
											height={60}
											style={{objectFit: 'contain'}}
											className="sofax-partner-logo"
											onError={(e) => {
												// Fallback için placeholder görsel
												e.target.src = "/images/v1/logoipsum.png";
											}}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					}
				</div>
			</div>
		</section>
	);
}

export default LogoSlider;
