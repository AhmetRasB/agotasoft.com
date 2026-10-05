import Image from "next/image";

function FeatureCard({ feature: { icon, title, description } }) {
	return (
		<div className="agota-features-boxv7">
			<div className="agota-features-iconv7">
				<Image src={icon} alt="icon" />
			</div>
			<div className="agota-features-contentv7">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
