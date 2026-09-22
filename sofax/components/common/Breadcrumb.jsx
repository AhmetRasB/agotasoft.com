"use client";

import Arrow from "@/public/images/about/arrow.png";
import Image from "next/image";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";

function BreadCrumb({ title }) {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const homeLabel = cms.nav?.[0]?.title || "Anasayfa";
	return (
		<div className="sofax-breadcrumb">
			<div className="container">
				<h1 className="post__title">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link href={prefix || "/"}>{homeLabel}</Link>
						</li>
						<li>
							<Image src={Arrow} alt="arrow" />
						</li>
						<li aria-current="page"> {title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
