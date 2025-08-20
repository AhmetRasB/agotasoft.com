import ArrowRightImg from "@/public/images/v1/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
function ServiceCard({ service: { title, description, icon, link } }) {
	return (
		<div className="sofax-iconbox-wrap">
			<div className="sofax-iconbox-icon">
				<Image src={icon} alt="icon" />
			</div>
			<div className="sofax-iconbox-data">
				<h4>{title}</h4>
				<p>{description}</p>
				<Link className="sofax-icon-btn" href="/service">
					Detaylar <Image src={ArrowRightImg} alt="arrow" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
