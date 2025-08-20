"use client";
import Image from "next/image";
import Link from "next/link";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link href="/">
				<Image 
					src="/images/agotasoft-logo.png" 
					alt="AgotaSoft Logo" 
					width={400} 
					height={200}
					priority
					style={{ objectFit: 'contain' }}
				/>
			</Link>
		</div>
	);
}

export default HeaderLogo;
