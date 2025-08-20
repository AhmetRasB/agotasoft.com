import Image from "next/image";
import Link from "next/link";

function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link href="/" className="sofax-logo">
				<Image 
					src="/images/agotasoft-logo.png" 
					alt="AgotaSoft Logo" 
					width={300} 
					height={100}
					priority
					style={{ objectFit: 'contain' }}
				/>
			</Link>
		</div>
	);
}

export default HeaderLogo;
