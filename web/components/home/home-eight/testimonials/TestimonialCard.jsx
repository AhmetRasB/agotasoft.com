import Rating from "@/public/images/v8/yellow-ratting.png";
import Image from "next/image";

function TestimonialCard({
	testimonial: {
		image,
		review,
		rating,
		author: { name, title },
	},
}) {
	return (
		<div className="agota-iconbox-wrap">
			<div className="agota-iconbox-icon">
				<Image src={image} alt="icons" />
			</div>
			<div className="agota-iconbox-data testimonial-vr8">
				<p>{review}</p>
			</div>
			<div className="agota-testimonial-authore-wrapv8">
				<div className="agota-testimonial-authore-data">
					<h5>{name}</h5>
					<p>{title}</p>
				</div>
				<div className="agota-testimonial-authore-icon">
					<ul>
						{[...Array(rating)].map(() => (
							<li key={crypto.randomUUID()}>
								<Image src={Rating} alt="Rating" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
