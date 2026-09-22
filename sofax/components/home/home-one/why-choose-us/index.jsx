"use client";
import Card from "@/public/images/v1/card.png";
import CheckCircle from "@/public/images/v1/check-circle.png";
import Contentimg2 from "@/public/images/about/DashboardTR.png";
import ContentThumb from "@/public/images/v1/contentthumb1.png";
import Icon4 from "@/public/images/v1/icon4.png";
import Icon9 from "@/public/images/v1/icon9.png";
import Shape3 from "@/public/images/v1/shape3.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
function WhyChooseUs() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const why = cms.why_choose || {};
	const items1 = why.section1_items || [];
	const items2 = why.section2_items || [];
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
								<h2 className="sofax-big-title">{why.section1_title}</h2>
							</div>
							<p>
								{why.section1_text}
							</p>
							<div className="extra-mt">
								{items1.map((item) => (
									<div className="sofax-iconbox-wrap2" key={item.title}>
										<div className="sofax-iconbox-icon2">
											<Image src={CheckCircle} alt="check" />
										</div>
										<div className="sofax-iconbox-data2">
											<h4>{item.title}</h4>
											<p>
												{item.text}
											</p>
										</div>
									</div>
								))}
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
								<h2 className="sofax-big-title">{why.section2_title}</h2>
							</div>
							<p>
								{why.section2_text}
							</p>
							<div className="extra-mt">
								{items2[0] && (
									<div className="sofax-iconbox-wrap2">
										<div className="sofax-iconbox-icon2">
											<Image src={Icon9} alt="icon" />
										</div>
										<div className="sofax-iconbox-data2">
											<h4>{items2[0].title}</h4>
											<p>
												{items2[0].text}
											</p>
										</div>
									</div>
								)}
								{items2[1] && (
									<div className="sofax-iconbox-wrap2">
										<div className="sofax-iconbox-icon2">
											<Image src={Icon4} alt="icon" />
										</div>
										<div className="sofax-iconbox-data2">
											<h4>{items2[1].title}</h4>
											<p>
												{items2[1].text}
											</p>
										</div>
									</div>
								)}
							</div>
							<FadeInUp className="extra-mt">
								<Link className="sofax-default-btn pill" data-text={why.button} href={withLocale(why.button_url || "/contact-us", prefix)}>
									<span className="button-wraper">{why.button}</span>
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
