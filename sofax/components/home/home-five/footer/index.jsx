"use client";
import Image from "next/image";
import Link from "next/link";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";
import FooterCopyright from "./FooterCopyright";
import Subscription from "./Subscription";
function Footer() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const settings = cms.settings || {};
	const footer = cms.footer || {};
	return (
		<footer className="sofax-footer-section">
			<div className="container">
				<div className="sofax-footer-top">
					<div className="row">
						<div className="col-xl-4 col-md-12">
							<div className="sofax-footer-wrap mr-25">
								<Link href="/">
									<Image 
										src={settings.logo || "/images/agotasoft-logo.png"} 
										alt={`${settings.site_name || "AgotaSoft"} Logo`} 
										width={180} 
										height={60}
										style={{ objectFit: 'contain' }}
									/>
								</Link>
								<p>
									{footer.about_alt || footer.about}
								</p>
								<div className="sofax-social-icon">
									<ul>
										{settings.social_instagram ? (
											<li>
												<a target="_blank" rel="noopener noreferrer" href={settings.social_instagram}>
													<svg
														width="18"
														height="17"
														viewBox="0 0 18 17"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M12.043 0H5.9475C3.14256 0 0.86792 2.26664 0.86792 5.06173V11.1358C0.86792 13.9309 3.14256 16.1975 5.9475 16.1975H12.043C14.8479 16.1975 17.1226 13.9309 17.1226 11.1358V5.06173C17.1226 2.26664 14.8479 0 12.043 0ZM15.5987 11.1358C15.5987 13.0896 14.0037 14.679 12.043 14.679H5.9475C3.98678 14.679 2.39179 13.0896 2.39179 11.1358V5.06173C2.39179 3.1079 3.98678 1.51852 5.9475 1.51852H12.043C14.0037 1.51852 15.5987 3.1079 15.5987 5.06173V11.1358Z"
															fill="#0E0E0E"
														/>
														<path
															d="M9.00312 4.05713C6.75896 4.05713 4.93945 5.87024 4.93945 8.10651C4.93945 10.3428 6.75896 12.1559 9.00312 12.1559C11.2473 12.1559 13.0668 10.3428 13.0668 8.10651C13.0668 5.87024 11.2473 4.05713 9.00312 4.05713ZM9.00312 10.6374C7.60319 10.6374 6.46333 9.50153 6.46333 8.10651C6.46333 6.71049 7.60319 5.57565 9.00312 5.57565C10.4031 5.57565 11.5429 6.71049 11.5429 8.10651C11.5429 9.50153 10.4031 10.6374 9.00312 10.6374Z"
															fill="#0E0E0E"
														/>
														<path
															d="M13.3527 4.29821C13.653 4.29821 13.8964 4.05602 13.8964 3.75726C13.8964 3.4585 13.653 3.21631 13.3527 3.21631C13.0525 3.21631 12.8091 3.4585 12.8091 3.75726C12.8091 4.05602 13.0525 4.29821 13.3527 4.29821Z"
															fill="#0E0E0E"
														/>
													</svg>
												</a>
											</li>
										) : null}
										{settings.social_linkedin ? (
											<li>
												<a target="_blank" rel="noopener noreferrer" href={settings.social_linkedin}>
													<svg
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M15.877 15.0112V15.0106H15.8807V9.49947C15.8807 6.8034 15.2983 4.72656 12.1353 4.72656C10.6147 4.72656 9.59433 5.55805 9.17775 6.34633H9.13377V4.97826H6.13477V15.0106H9.25755V10.0429C9.25755 8.73498 9.50637 7.47022 11.1318 7.47022C12.7335 7.47022 12.7573 8.96289 12.7573 10.1268V15.0112H15.877Z"
															fill="#0E0E0E"
														/>
														<path
															d="M1.0498 4.99463H4.17636V15.0269H1.0498V4.99463Z"
															fill="#0E0E0E"
														/>
														<path
															d="M2.62114 0C1.62147 0 0.810303 0.808321 0.810303 1.80448C0.810303 2.80063 1.62147 3.62586 2.62114 3.62586C3.62081 3.62586 4.43198 2.80063 4.43198 1.80448C4.43135 0.808321 3.62018 0 2.62114 0V0Z"
															fill="#0E0E0E"
														/>
													</svg>
												</a>
											</li>
										) : null}
										{settings.social_github ? (
											<li>
												<a target="_blank" rel="noopener noreferrer" href={settings.social_github}>
													<svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M12 0C5.37 0 0 5.5 0 12.3C0 17.74 3.44 22.34 8.21 23.96C8.81 24.07 9.03 23.69 9.03 23.36C9.03 23.07 9.02 22.19 9.01 21.15C5.67 21.9 4.97 19.51 4.97 19.51C4.42 18.09 3.63 17.71 3.63 17.71C2.55 16.95 3.71 16.97 3.71 16.97C4.91 17.06 5.54 18.24 5.54 18.24C6.6 20.1 8.32 19.56 9 19.25C9.11 18.46 9.42 17.92 9.75 17.62C7.07 17.31 4.26 16.24 4.26 11.53C4.26 10.2 4.72 9.11 5.56 8.26C5.43 7.96 5.01 6.7 5.68 5.03C5.68 5.03 6.75 4.68 8.99 6.24C9.93 5.97 10.94 5.84 11.95 5.83C12.96 5.84 13.97 5.97 14.91 6.24C17.14 4.68 18.21 5.03 18.21 5.03C18.88 6.7 18.46 7.96 18.34 8.26C19.18 9.11 19.64 10.2 19.64 11.53C19.64 16.25 16.82 17.3 14.13 17.61C14.55 17.98 14.93 18.71 14.93 19.83C14.93 21.43 14.91 22.96 14.91 23.36C14.91 23.69 15.13 24.08 15.74 23.96C20.51 22.33 23.95 17.74 23.95 12.3C24 5.5 18.63 0 12 0Z"
															fill="#0E0E0E"
														/>
													</svg>
												</a>
											</li>
										) : null}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<div className="sofax-footer-menu ml-50">
								<h5>{footer.col1_title || "Kurumsal"}</h5>
								<ul>
									{(footer.col1_links || []).map((link) => (
										<li key={link.url}>
											<Link href={withLocale(link.url, prefix)}>{link.label}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="sofax-footer-menu">
								<h5>{footer.col2_title || "Çözümlerimiz"}</h5>
								<ul>
									{(footer.col2_links || []).map((link) => (
										<li key={link.url}>
											<Link href={withLocale(link.url, prefix)}>{link.label}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="sofax-footer-menu">
								<h5>{footer.col3_title || "İletişim Bilgileri"}</h5>
								<div className="sofax-footer-contact">
									<div className="sofax-footer-contact-item mb-3">
										<i className="fas fa-map-marker-alt me-2"></i>
										<span>{settings.address}</span>
									</div>
									<div className="sofax-footer-contact-item mb-3">
										<i className="fas fa-phone me-2"></i>
										<a href={`tel:${(settings.phone || "").replace(/[^\d+]/g, "")}`}>{settings.phone}</a>
									</div>
									<div className="sofax-footer-contact-item mb-3">
										<i className="fas fa-envelope me-2"></i>
										<a href={`mailto:${settings.email}`}>{settings.email}</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<FooterCopyright />
			</div>
		</footer>
	);
}

export default Footer;
