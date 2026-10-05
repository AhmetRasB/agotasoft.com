import Image from "next/image";
import Link from "next/link";

function FeatureCard({ feature: { title, description, image } }) {
	return (
		<>
			<Link href="/contact-us">
				<div className="agota-features-boxv6">
					<div className="agota-features-imgv6">
						<Image src={image} alt="Thumb" />
					</div>
					<div className="agota-features-author-data">
						<h4>{title}</h4>
						<p>{description}</p>
					</div>
				</div>
			</Link>
		</>
	);
}

export default FeatureCard;
