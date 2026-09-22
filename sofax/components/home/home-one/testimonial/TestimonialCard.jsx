import RatingFull from "@/public/images/v1/rattingful.svg";
import Image from "next/image";
function TestimonialCard({ testimonial: { rating, description, author, designation, img } }) {
	const imgProps = typeof img === "string" ? { src: img, width: 60, height: 60 } : { src: img };
	return (
		<div className="sofax-testimonial-content">
			<div className="sofax-testimonial-rating">
				<ul>
					{[...Array(Number(rating) || 0)].map((_, index) => (
						<li key={index}>
							<Image src={RatingFull} alt="Rating" />
						</li>
					))}
				</ul>
			</div>
			<div className="sofax-testimonial-data">
				<p>{description}</p>
			</div>
			<div className="sofax-testimonial-author">
				<div className="sofax-testimonial-author-thumb">
					<Image {...imgProps} alt="author" />
				</div>
				<div className="sofax-testimonial-author-data">
					<h5>{author}</h5>
					<p>{designation}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
