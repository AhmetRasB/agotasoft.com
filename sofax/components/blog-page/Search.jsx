import SearchIcon from "@/public/images/blog/search-icon.png";
import Image from "next/image";
import Link from "next/link";
function Search() {
	return (
		<div className="sofax-subscription-field-inner">
			<input type="email" placeholder="Ara..." />
			<div className="search-icon-img">
				<Link href="/blog">
					<Image src={SearchIcon} alt="search icon" />
				</Link>
			</div>
		</div>
	);
}

export default Search;
