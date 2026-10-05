import Icon from "@/public/images/v1/icon8.png";
import Image from "next/image";
import Link from "next/link";
function PricingCard({ item: { plan, price, features, active } }) {
	return (
		<div className="agota-pricing-wrap">
			<div className="agota-pricing-header">
				<h4>{plan}</h4>
			</div>
			<div className="agota-pricing-price mb-40">
				<h2>${price}</h2>
				<p>/Per Month</p>
			</div>
			<div className="agota-pricing-footer mb-40">
				<Link
					className={`agota-default-btn d-block pill  pricing-btn-v4 ${!active && "dark-btn"}`}
					href="/pricing"
				>
					Choose Plan
				</Link>
			</div>
			<div className="agota-pricing-body agota-pricing-bodyv4">
				<ul>
					{features.map((feature) => (
						<li key={feature}>
							<Image src={Icon} alt="Icon" />
							{feature}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default PricingCard;
