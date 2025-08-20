import Image from "next/image";
import Link from "next/link";
import CopyRight from "./CopyRight";

function Footer() {
	return (
		<footer className="sofax-footer-section sofax-footer">
			<div className="container">
				<div className="sofax-footer-top">
					<div className="row">
						<div className="col-xl-4 col-md-12">
							<div className="sofax-footer-wrap mr-15">
								<Link href="/" className="sofax-logo sofax-logo-white">
									<Image 
										src="/images/agotasoft-logo.png" 
										alt="AgotaSoft Logo" 
										width={320} 
										height={110}
										style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
									/>
								</Link>
								<p>
									İşletmenizi geleceğe taşıyan akıllı yazılım çözümleri. 
									ERP, CRM, Ön Muhasebe ve LMS alanlarında 15 yıllık deneyimimizle 
									dijital dönüşümünüze öncülük ediyoruz.
								</p>
								<div className="sofax-social-icon">
									<ul>
										<li>
											<a target="_blank" href="https://www.twitter.com/">
												<svg
													width="17"
													height="18"
													viewBox="0 0 17 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M9.96447 7.24539L16.1975 0H14.7205L9.30833 6.29107L4.98567 0H0L6.5367 9.51321L0 17.1111H1.47711L7.19246 10.4675L11.7575 17.1111H16.7432L9.9641 7.24539H9.96447ZM7.94136 9.59702L7.27906 8.64972L2.00933 1.11194H4.27809L8.53082 7.19517L9.19312 8.14247L14.7212 16.0497H12.4524L7.94136 9.59739V9.59702Z"
														fill="#0E0E0E"
													/>
												</svg>
											</a>
										</li>
										<li>
											<a href="https://www.facebook.com/" target="_blank">
												<svg
													width="11"
													height="18"
													viewBox="0 0 11 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M9.88663 0.00357362L7.65153 0C5.14046 0 3.5177 1.65905 3.5177 4.22688V6.17575H1.27039C1.0762 6.17575 0.918945 6.33263 0.918945 6.52614V9.34984C0.918945 9.54335 1.07638 9.70005 1.27039 9.70005H3.5177V16.8251C3.5177 17.0187 3.67495 17.1754 3.86914 17.1754H6.80123C6.99543 17.1754 7.15268 17.0185 7.15268 16.8251V9.70005H9.7803C9.9745 9.70005 10.1318 9.54335 10.1318 9.34984L10.1328 6.52614C10.1328 6.43323 10.0957 6.34425 10.0299 6.27849C9.9641 6.21274 9.87444 6.17575 9.7812 6.17575H7.15268V4.52367C7.15268 3.72961 7.34257 3.3265 8.3806 3.3265L9.88627 3.32597C10.0803 3.32597 10.2375 3.16909 10.2375 2.97575V0.353788C10.2375 0.160634 10.0805 0.00393098 9.88663 0.00357362Z"
														fill="#0E0E0E"
													/>
												</svg>
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/agotasoft_tr/" target="_blank">
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
										<li>
											<a href="https://www.linkedin.com/company/agotasoft" target="_blank">
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
										<li>
											<a href="https://github.com/AgotaSoft" target="_blank">
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
														fill="#0E0E0E"
													/>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<div className="sofax-footer-menu ml-50">
								<h5>Kurumsal</h5>
								<ul>
									<li>
										<Link href="/about-us">Hakkımızda</Link>
									</li>
									<li>
										<Link href="/contact-us">İletişim</Link>
									</li>
									<li>
										<Link href="/service">Çözümlerimiz</Link>
									</li>
									<li>
										<Link href="/pricing">Fiyatlandırma</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="sofax-footer-menu">
								<h5>Çözümlerimiz</h5>
								<ul>
									<li>
										<Link href="/erp">ERP Sistemi</Link>
									</li>
									<li>
										<Link href="/crm">CRM Sistemi</Link>
									</li>
									<li>
										<Link href="/pre-accounting">Ön Muhasebe</Link>
									</li>
									<li>
										<Link href="/lms">LMS Sistemi</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="sofax-footer-menu">
								<h5>İletişim Bilgileri</h5>
								<div className="sofax-footer-contact">
									<div className="sofax-footer-contact-item mb-3">
										<i className="fas fa-map-marker-alt me-2"></i>
										<span>İstanbul, Üsküdar</span>
									</div>
									<div className="sofax-footer-contact-item mb-3">
										<i className="fas fa-phone me-2"></i>
										<a href="tel:+902165551234">+90 (216) 555 12 34</a>
									</div>
									<div className="sofax-footer-contact-item mb-3">
										<i className="fas fa-envelope me-2"></i>
										<a href="mailto:info@agotasoft.com">info@agotasoft.com</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<CopyRight />
			</div>
		</footer>
	);
}

export default Footer;
