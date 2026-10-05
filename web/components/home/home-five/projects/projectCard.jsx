import Icon from "@/public/images/v5/icon5.png";
import Image from "next/image";
import Link from "next/link";
function ProjectCard({ project: { title, img, category } }) {
	return (
		<div className="agota-portfolio-content-wrap">
			<div className="agota-portfolio-thumb">
				<Link href="/single-portfolio">
					<Image src={img} alt="project image" />
				</Link>
			</div>
			<Link href="/single-portfolio">
				<div className="agota-portfolio-author-wrap">
					<div className="agota-portfolio-author-data">
						<h4>{title}</h4>
						<p>{category}</p>
					</div>
					<div className="agota-portfolio-author-icon">
						<Image src={Icon} alt="Icon" />
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProjectCard;
