"use client";
import Thumb1Img from "@/public/images/v1/member1.png";
import Thumb2Img from "@/public/images/v1/member2.png";
import Thumb3Img from "@/public/images/v1/member3.png";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
//

const testimonialOneData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"AgotaSoft ERP sistemi sayesinde tüm operasyonlarımızı tek platformda yönetiyoruz. Stok yönetiminden finansa kadar her şey çok daha kolay hale geldi. Kesinlikle tavsiye ederim!",
		author: "Ahmet Yılmaz",
		designation: "Genel Müdür, ABC Tekstil",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"CRM sistemi ile müşteri ilişkilerimizi çok daha etkili yönetiyoruz. Satış fırsatlarımız %40 arttı. AgotaSoft ekibinin desteği de mükemmel.",
		author: "Ayşe Kaya",
		designation: "Satış Müdürü, XYZ Otomotiv",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Ön muhasebe sistemini kullanmaya başladığımızdan beri e-fatura süreçlerimiz otomatikleşti. Zaman tasarrufu sağladık ve hata oranımız sıfıra indi.",
		author: "Mehmet Öz",
		designation: "Mali İşler Müdürü, DEF İnşaat",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"LMS platformu ile çalışan eğitimlerimizi dijitalleştirdik. Online sınavlar ve sertifika sistemi çok başarılı. Eğitim verimliliğimiz katlandı.",
		author: "Fatma Demir",
		designation: "İK Müdürü, GHI Teknoloji",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"15 yıldır farklı yazılımlar kullandık ama Sofax kadar entegre ve kullanıcı dostu bir sistem görmedik. Gerçekten işimizi kolaylaştırdı.",
		author: "Ali Veli",
		designation: "İşletme Sahibi, JKL Gıda",
		img: Thumb2Img,
	},
];

const testimonialTwoData = [
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"  It’s an all-in-one solution to that the has turbocharged the growth. The lead generation & capbilities. our partner & result spesk.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "Smith Align",
		designation: "Web Developer",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
	},
];

const swiperSettingsOne = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 4,
		},
	},
};
const swiperSettingsTwo = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 4,
		},
	},
};
function Testimonial() {
	return (
		<section className="sofax-section-padding2" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2 className="sofax-big-title">Müşterilerimizin AgotaSoft Deneyimi</h2>
					</div>
				</div>
			</div>
			<div className="sofax-testimonial-slider">
				<Swiper {...swiperSettingsOne}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="sofax-testimonial-slider-2">
				<Swiper {...swiperSettingsTwo}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Testimonial;
