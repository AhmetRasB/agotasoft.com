import Image from "next/image";
import Link from "next/link";

function PricingCard({ pricing: { plan, price, img, features, highlighted, featureIcon }, frequency }) {
	return (
		<div className="agota-pricing-wrap">
			<div className="agota-pricing-header">
				<Image src={img} alt="icon" />
				<h4>{plan}</h4>
			</div>
			<div className="agota-pricing-price">
				<h2>
					$
					{price.map((item) => {
						if (item.id === frequency.id) {
							return item.value;
						}
					})}
				</h2>

				<p className="dynamic-value"> {frequency.label}</p>
			</div>
			<div className="agota-pricing-body">
				<h5>Key features:</h5>
				<ul>
					{features.map((feature) => (
						<li key={feature}>
							<Image src={featureIcon} alt="feature Icon" />
							{feature}
						</li>
					))}
				</ul>
			</div>
			<div className="agota-pricing-footer">
				<Link className={`agota-default-btn  d-block pill ${!highlighted && "outline-btn"}`} href="/contact-us">
					Purchase now
				</Link>
			</div>
		</div>
	);
}

export default PricingCard;
