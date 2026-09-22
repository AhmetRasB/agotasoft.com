"use client";
import Thumb from "@/public/images/career/thumb1.png";
import mixitup from "mixitup";
import Image from "next/image";
import { useEffect } from "react";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { itemPath } from "@/lib/cms/itemSlug";

const EMPTY = [];

function ArrowIcon() {
	return (
		<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
				fill="white"
			/>
		</svg>
	);
}

function LocationIcon() {
	return (
		<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.05991 2.86033C6.34032 -0.420076 11.6589 -0.420077 14.9393 2.86033C18.2197 6.14073 18.2197 11.4593 14.9393 14.7397L8.99961 20.6794L3.05991 14.7397C-0.220492 11.4593 -0.220492 6.14073 3.05991 2.86033ZM8.99961 11.2C10.3251 11.2 11.3996 10.1255 11.3996 8.80002C11.3996 7.47454 10.3251 6.40002 8.99961 6.40002C7.67413 6.40002 6.59961 7.47454 6.59961 8.80002C6.59961 10.1255 7.67413 11.2 8.99961 11.2Z"
				fill="#111827"
			/>
		</svg>
	);
}

function CashIcon() {
	return (
		<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.79844 0.800049C1.47295 0.800049 0.398438 1.87457 0.398438 3.20005V8.00005C0.398438 9.32553 1.47295 10.4 2.79844 10.4L2.79844 3.20005H14.7984C14.7984 1.87457 13.7239 0.800049 12.3984 0.800049H2.79844Z"
				fill="#111827"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.19844 8.00005C5.19844 6.67457 6.27295 5.60005 7.59844 5.60005H17.1984C18.5239 5.60005 19.5984 6.67457 19.5984 8.00005V12.8C19.5984 14.1255 18.5239 15.2 17.1984 15.2H7.59844C6.27295 15.2 5.19844 14.1255 5.19844 12.8V8.00005ZM12.3984 12.8C13.7239 12.8 14.7984 11.7255 14.7984 10.4C14.7984 9.07457 13.7239 8.00005 12.3984 8.00005C11.073 8.00005 9.99844 9.07457 9.99844 10.4C9.99844 11.7255 11.073 12.8 12.3984 12.8Z"
				fill="#111827"
			/>
		</svg>
	);
}

function CareerCard({ job }) {
	const prefix = useLocalePrefix();
	return (
		<div className={`collection-grid-item mix col-md-6 ${job.mix_class || ""}`}>
			<div className="sofax-career-content-wrapper ">
				<div className="sofax-career-content-autohre-wrap">
					<div className="sofax-career-content-data">
						<h4>{job.title}</h4>
						<p>{job.type}</p>
					</div>
					<div className="sofax-career-content-icon">
						<a href={`${prefix}${itemPath("career", job)}`}>
							<ArrowIcon />
						</a>
					</div>
				</div>
				<div className="sofax-career-content-text">
					<p>{job.description}</p>
				</div>
				<div className="sofax-career-content-icon-text-wrapper2">
					<div className="sofax-career-content-icon-text-wrap">
						<div className="sofax-career-content-icon2">
							<LocationIcon />
						</div>
						<div className="sofax-career-content-text2">
							<h6>{job.location}</h6>
						</div>
					</div>
					<div className="sofax-career-content-icon-text-wrap">
						<div className="sofax-career-content-icon2">
							<CashIcon />
						</div>
						<div className="sofax-career-content-text2">
							<h6>{job.salary}</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Career() {
	const cms = useCms();
	const page = cms.pages?.career || {};
	const jobs = cms.careers || EMPTY;

	useEffect(() => {
		const container = document.querySelector(".sofax-portfolio-column");
		if (!container || !jobs.length) {
			return undefined;
		}
		const mixer = mixitup(container, {
			selectors: {
				target: ".mix",
			},
			animation: {
				duration: 500,
			},
		});
		return () => {
			mixer.destroy();
		};
	}, [jobs]);

	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-6 col-lg-8">
							<h2>{page.hero_title || "Kariyerinizi bizimle büyütün"}</h2>
						</div>
						<div className="col-xl-6 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-aboutus-content-text ">
								<p>
									{page.hero_subtitle ||
										"Açık pozisyonlarımıza katılın, AgotaSoft ekibinde yazılım ve dijital dönüşüm projelerinde yer alın."}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sofax-career-thumb ">
					<Image src={Thumb} alt="Thumb" />
				</div>
				<div className="sofax-section-title center max-width-large">
					<h2>{page.open_title || "Açık pozisyonlar"}</h2>
				</div>
				{jobs.length ? (
					<div className="sofax-portfolio-column row">
						{jobs.map((job, index) => (
							<CareerCard key={job.title + index} job={job} />
						))}
					</div>
				) : (
					<div className="text-center">
						<p>
							Şu anda açık pozisyonumuz bulunmuyor. Yine de özgeçmişinizi{" "}
							<a href="mailto:info@agotasoft.com">info@agotasoft.com</a> adresine gönderebilirsiniz.
						</p>
					</div>
				)}
			</div>
		</section>
	);
}

export default Career;
