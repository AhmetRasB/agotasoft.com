"use client";
import Shape4 from "@/public/images/v1/shape4.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
function Cta() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const cta = cms.cta || {};
	return (
		<section className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="sofax-cta-content">
					<div className="tg-heading-subheading animation-style3">
						<h2 className="sofax-big-title">{cta.title}</h2>
					</div>
					<p>
						{cta.text}
					</p>
					<FadeInUp className="extra-mt">
						<Link className="sofax-default-btn pill" data-text={cta.button} href={withLocale(cta.button_url || "/contact-us", prefix)}>
							<span className="button-wraper">{cta.button}</span>
						</Link>
						<span className="cta-bottom">{cta.note}</span>
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
