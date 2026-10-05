import Arrow from "@/public/images/v8/icon-right-arrow.png";
import Image from "next/image";
import Link from "next/link";
function ProjectCard({ project: { title, category, image } }) {
	return (
		<Link href="/single-portfolio">
			<div className="agota-testimonial-itemv8">
				<div className="agota-testimonial-thumbv8">
					<Image src={image} alt="Thumb" />
					<div className="agota-testimonial-btnv8 light-color">
						<h4>{title}</h4>
						<p>{category}</p>
						<div className="right-icon-btn">
							<Image src={Arrow} alt="Arrow icon" />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProjectCard;
