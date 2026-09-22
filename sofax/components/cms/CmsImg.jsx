"use client";

import Image from "next/image";

export default function CmsImg({ src, alt = "", width = 800, height = 600, className, style, ...rest }) {
	if (!src) {
		return null;
	}
	if (typeof src === "string") {
		return (
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={className}
				style={style}
				{...rest}
			/>
		);
	}
	return <Image src={src} alt={alt} className={className} style={style} {...rest} />;
}
