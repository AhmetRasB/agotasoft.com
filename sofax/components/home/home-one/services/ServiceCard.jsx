"use client";

import ArrowRightImg from "@/public/images/v1/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

const DETAILS_LABEL = {
	tr: "Detaylar",
	en: "Details",
	ru: "Подробнее",
	uz: "Batafsil",
	tk: "Giňişleýin",
};

function ServiceCard({ service: { title, description, icon, link } }) {
	const iconProps = typeof icon === "string" ? { src: icon, width: 64, height: 64 } : { src: icon };
	const prefix = useLocalePrefix();
	const locale = prefix ? prefix.slice(1) : "tr";
	const isExternal = link && /^https?:/.test(link);
	const href = isExternal ? link : withLocale(link || "/service", prefix);
	return (
		<div className="sofax-iconbox-wrap">
			<div className="sofax-iconbox-icon">
				<Image {...iconProps} alt="icon" />
			</div>
			<div className="sofax-iconbox-data">
				<h4>{title}</h4>
				<p>{description}</p>
				<Link className="sofax-icon-btn" href={href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
					{DETAILS_LABEL[locale] || DETAILS_LABEL.tr} <Image src={ArrowRightImg} alt="arrow" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
