"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCms } from "@/hooks/useCms";

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
	const cms = useCms();
	const sliderData = cms.partners || [];
	return (
		<section className="sofax-slider-section">
			<div className="container">
				<div className="sofax-title-section sofax-partners">
					<h4>{cms.partners_heading}</h4>
				</div>
				<div className="sofax-brand-slider">
					{
						<Swiper {...swiperSettings}>
							{sliderData.map((item, index) => (
								<SwiperSlide key={`${item.name}-${index}`}>
									<div className="sofax-logo-icon-item sofax-partner-logo">
										<Image 
											src={item.img} 
											alt={item.alt}
											width={120}
											height={60}
											style={{objectFit: 'contain'}}
											className="sofax-partner-logo"
											onError={(e) => {
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
