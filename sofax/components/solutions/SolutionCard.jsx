import Link from "next/link";
import { productHref } from "@/lib/solutions";

export default function SolutionCard({ product, prefix, ui }) {
	return (
		<Link href={productHref(product, prefix)} className="agf-card agf-sol-card">
			<div className="agf-sol-card-top">
				<span className="agf-card-icon">
					<i className={product.icon}></i>
				</span>
				{product.status === "soon" ? <span className="agf-soon">{ui.soon}</span> : null}
			</div>
			{product.sector ? <div className="agf-sol-card-sector">{product.sector}</div> : null}
			<h3>{product.name}</h3>
			<p>{product.tagline}</p>
			<span className="agf-sol-card-link">
				{ui.view} <i className="fas fa-arrow-right"></i>
			</span>
		</Link>
	);
}
