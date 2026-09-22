"use client";

import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

function BlogTag({ post }) {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const settings = cms.settings || {};
	const tags = [post?.category].filter(Boolean);

	return (
		<div className="sofax-blog-tag-wrapper">
			{tags.length ? (
				<div className="sofax-blog-tag-wrap">
					<h4>Etiketler:</h4>
					<ul>
						{tags.map((tag) => (
							<li key={tag}>
								<Link
									className="sofax-subscription-field-group mb-0 sofax-default-btn pill outline-btn"
									href={withLocale("/blog", prefix)}
								>
									{tag}
								</Link>
							</li>
						))}
					</ul>
				</div>
			) : null}
			<div className="sofax-blog-tag-wrap social-site sofax-social-icon blog-social-site mt-30">
				<h4>Paylaş:</h4>
				<ul>
					{settings.social_instagram ? (
						<li>
							<a target="_blank" rel="noopener noreferrer" href={settings.social_instagram}>
								<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M12.0429 0H5.94738C3.14244 0 0.867798 2.26664 0.867798 5.06173V11.1358C0.867798 13.9309 3.14244 16.1975 5.94738 16.1975H12.0429C14.8478 16.1975 17.1225 13.9309 17.1225 11.1358V5.06173C17.1225 2.26664 14.8478 0 12.0429 0ZM15.5986 11.1358C15.5986 13.0896 14.0036 14.679 12.0429 14.679H5.94738C3.98666 14.679 2.39167 13.0896 2.39167 11.1358V5.06173C2.39167 3.1079 3.98666 1.51852 5.94738 1.51852H12.0429C14.0036 1.51852 15.5986 3.1079 15.5986 5.06173V11.1358Z"
										fill="white"
									/>
									<path
										d="M9.00312 4.05713C6.75896 4.05713 4.93945 5.87024 4.93945 8.10651C4.93945 10.3428 6.75896 12.1559 9.00312 12.1559C11.2473 12.1559 13.0668 10.3428 13.0668 8.10651C13.0668 5.87024 11.2473 4.05713 9.00312 4.05713ZM9.00312 10.6374C7.60319 10.6374 6.46333 9.50153 6.46333 8.10651C6.46333 6.71049 7.60319 5.57565 9.00312 5.57565C10.4031 5.57565 11.5429 6.71049 11.5429 8.10651C11.5429 9.50153 10.4031 10.6374 9.00312 10.6374Z"
										fill="white"
									/>
									<path
										d="M13.3526 4.29821C13.6528 4.29821 13.8962 4.05602 13.8962 3.75726C13.8962 3.4585 13.6528 3.21631 13.3526 3.21631C13.0524 3.21631 12.809 3.4585 12.809 3.75726C12.809 4.05602 13.0524 4.29821 13.3526 4.29821Z"
										fill="white"
									/>
								</svg>
							</a>
						</li>
					) : null}
					{settings.social_linkedin ? (
						<li>
							<a target="_blank" rel="noopener noreferrer" href={settings.social_linkedin}>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M15.8767 15.0112V15.0106H15.8805V9.49947C15.8805 6.8034 15.298 4.72656 12.135 4.72656C10.6145 4.72656 9.59409 5.55805 9.17751 6.34633H9.13353V4.97826H6.13452V15.0106H9.25731V10.0429C9.25731 8.73498 9.50612 7.47022 11.1316 7.47022C12.7332 7.47022 12.7571 8.96289 12.7571 10.1268V15.0112H15.8767Z"
										fill="white"
									/>
									<path d="M1.0498 4.99463H4.17636V15.0269H1.0498V4.99463Z" fill="white" />
									<path
										d="M2.62102 0C1.62135 0 0.810181 0.808321 0.810181 1.80448C0.810181 2.80063 1.62135 3.62586 2.62102 3.62586C3.62069 3.62586 4.43186 2.80063 4.43186 1.80448C4.43123 0.808321 3.62006 0 2.62102 0V0Z"
										fill="white"
									/>
								</svg>
							</a>
						</li>
					) : null}
					{settings.social_github ? (
						<li>
							<a target="_blank" rel="noopener noreferrer" href={settings.social_github}>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
										fill="white"
									/>
								</svg>
							</a>
						</li>
					) : null}
				</ul>
			</div>
		</div>
	);
}

export default BlogTag;
