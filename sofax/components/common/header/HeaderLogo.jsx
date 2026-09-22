"use client";
import Image from "next/image";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
function HeaderLogo() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const src = cms.settings?.logo || "/images/agotasoft-logo.png";
	const alt = `${cms.settings?.site_name || "AgotaSoft"} Logo`;
	return (
		<div className="brand-logo">
			<Link href={prefix || "/"}>
				<Image 
					src={src} 
					alt={alt} 
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
