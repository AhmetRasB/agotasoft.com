import Image from "next/image";

function FeatureCard({ feature: { icon, title, description } }) {
	return (
		<div className="agota-features-box features-v5">
			<div className="agota-features-icon">
				<Image src={icon} alt="Icon" />
			</div>
			<div className="agota-features-content">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
