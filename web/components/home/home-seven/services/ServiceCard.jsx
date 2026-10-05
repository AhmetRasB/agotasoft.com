import Link from "next/link";
function ServiceCard({ service: { id, title, description } }) {
	return (
		<div className="agota-service-table-item">
			<div className="agota-service-table-title">
				<h3>{`${id}. ${title}`}</h3>
			</div>
			<div className="agota-service-table-body">
				<p>{description}</p>
			</div>
			<div className="agota-service-table-btn">
				<Link className="agota-default-btn pill outline-btn" data-text="Deatails" href="/single-service">
					<span className="button-wraper">Deatails</span>
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
