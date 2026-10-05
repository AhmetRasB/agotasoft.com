import Star from "@/public/images/v3/starticon.svg";
import Image from "next/image";

function TestimonialCard({
	testimonial: {
		rating,
		review,
		author: { name, title, image },
	},
}) {
	return (
		<div className="agota-testimonial-content-wrap">
			<div className="agota-testimonial-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<Image src={Star} alt="Rating" />
						</li>
					))}
				</ul>
			</div>
			<div className="agota-testimonial-data">
				<p>{review}</p>
			</div>
			<div className="agota-testimonial-author">
				<div className="agota-testimonial-author-thumb">
					<Image src={image} alt="author thumb" />
				</div>
				<div className="agota-testimonial-author-data">
					<h5>{name}</h5>
					<p>{title}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
