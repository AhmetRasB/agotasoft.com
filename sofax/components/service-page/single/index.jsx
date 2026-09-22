"use client";

import Icon from "@/public/images/service/icon5.png";
import ServiceDetails from "@/public/images/service/service-details.png";
import Thumb2 from "@/public/images/service/service-thumb2.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
import CmsImg from "@/components/cms/CmsImg";
import { useCmsItem } from "@/hooks/useCmsItem";

function asList(value, fallback) {
	if (Array.isArray(value) && value.length) {
		return value;
	}
	if (typeof value === "string" && value.trim()) {
		return value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
	}
	return fallback;
}

function SingleServiceDetails({ itemSlug }) {
	const item = useCmsItem("services", itemSlug);
	const title = item.title || "UI/UX Design";
	const description =
		item.long_description ||
		item.description ||
		"UI/UX design involves a combination of research, planning, design, and testing activities to create digital products that meet the needs of users and provide them with a positive experience. It is an iterative process that involves continuous refinement and improvement based on user feedback and testing results. Good UI/UX design is essential for the success of digital products.";
	const howTitle = item.how_title || `How our agency provides ${title} services`;
	const howText =
		item.how_text ||
		"UI/UX design services typically encompass the creation and optimization of user interfaces (UI) and user experiences (UX) for the digital products such as websites, mobile apps, and software applications. Here are some key components of UI/UX design services.";
	const strategyTitle = item.strategy_title || `${title} strategies`;
	const strategyText =
		item.strategy_text ||
		"The broader context of a project aligning to design decisions with business goals & creating roadmap for achieving optimal user experiences.";
	const leftBullets = asList(item.strategy_left, [
		"Measurement & analytics",
		"User-centered approach",
		"Persona development",
	]);
	const rightBullets = asList(item.strategy_right, [
		"Wireframing & prototyping",
		"Stakeholder alignment",
		"Iterative improvement",
	]);
	const approach =
		item.approach_text ||
		'The approach of a digital agency typically encompasses its methodologies, philosophies, and strategies for delivering value to clients. Here\'s a general outline of what "Our Approach" might entail for a digital agency:';
	const steps = [
		{ title: "1. Understanding Client Needs", text: item.step1 || "We are beginning by thoroughly understanding the target industries & unique challenges of our clients' target audiences. This includes active listening." },
		{ title: "2. Collaborative Planning", text: item.step2 || "We beging collaboration and teamwork. We work closely with our clients to co-create a tailored strategy that aligns with their objectives & budget." },
		{ title: "3. Understanding Client Needs", text: item.step3 || "We conduct in-depth research & analysis to inform strategies. This includes market research, competitor analysis, audience segmentation & analysis." },
	];

	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="sofax-default-content inner-service1">
					<h2>{title}</h2>
					<p>{description}</p>
					<FadeInUp className="sofax-service-content-thumb extra-mt">
						{item.image ? <CmsImg src={item.image} alt={title} width={1200} height={700} /> : <Image src={ServiceDetails} alt="ServiceDetails" />}
					</FadeInUp>
				</div>
				<div className="sofax-default-content sofax-inner-service-details position-ralatiove">
					<h2>{howTitle}</h2>
					<p>{howText}</p>
					<div className="sofax-service-inner-details-shape">
						<Image src={Shape2} alt="Shape2" />
					</div>
				</div>

				<div className="sofax-section-title">
					<div className="row">
						<div className="col-lg-5">
							<div className="sofax-default-content inner-service2 dark-bg">
								<h3 className="light-color">{strategyTitle}</h3>
								<p>{strategyText}</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="sofax-default-content">
								<div className="sofax-list-icon-wrap">
									<div className="sofax-list-icon-icon">
										<ul>
											{leftBullets.map((line) => (
												<li key={line}>
													<Image src={Icon} alt="Icon" />
													{line}
												</li>
											))}
										</ul>
									</div>
									<div className="sofax-list-icon-icon">
										<ul>
											{rightBullets.map((line) => (
												<li key={line}>
													<Image src={Icon} alt="Icon" />
													{line}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50">
							<h2>Our Approach</h2>
							<p>{approach}</p>
							<div className="extra-mt">
								{steps.map((step) => (
									<div className="sofax-inner-service-content-data" key={step.title}>
										<h4>{step.title}</h4>
										<p>{step.text}</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-inner-content-thumb">
							{item.side_image ? <CmsImg src={item.side_image} alt={title} width={600} height={700} /> : <Image src={Thumb2} alt="THumbs" />}
						</FadeInRight>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SingleServiceDetails;
