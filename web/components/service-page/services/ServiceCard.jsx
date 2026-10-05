import Image from "next/image";

function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="agota-service-iconbox-wrap">
			<div className="agota-service-iconbox-data">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<div className="agota-service-iconbox-icon">
				<Image src={icon} alt="icon" />
			</div>
		</div>
	);
}

export default ServiceCard;
