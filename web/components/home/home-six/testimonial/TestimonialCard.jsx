import RatingFull from "@/public/images/v1/rattingful.svg";
import Image from "next/image";
function TestimonialCard({ testimonial: { rating, title, description, author, designation, img } }) {
	return (
		<div className="agota-testimonial-content">
			<div className="agota-testimonial-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<Image src={RatingFull} alt="Rating" />
						</li>
					))}
				</ul>
			</div>
			<div className="agota-testimonial-data">
				<p>{description}</p>
			</div>
			<div className="agota-testimonial-author">
				<div className="agota-testimonial-author-thumb">
					<Image src={img} alt="author" />
				</div>
				<div className="agota-testimonial-author-data">
					<h5>{author}</h5>
					<p>{designation}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
