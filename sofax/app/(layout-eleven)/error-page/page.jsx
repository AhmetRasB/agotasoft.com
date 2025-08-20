import ErrorImg from "@/public/images/contact/404.png";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
	title: "404 - Sayfa Bulunamadı | AgotaSoft",
	description: "Aradığınız sayfa bulunamadı. AgotaSoft ana sayfasına dönebilir veya çözümlerimizi inceleyebilirsiniz.",
	keywords: "404, sayfa bulunamadı, AgotaSoft, hata sayfası",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "404 - Sayfa Bulunamadı | AgotaSoft",
		description: "Aradığınız sayfa bulunamadı. AgotaSoft ana sayfasına dönün.",
		type: "website",
		url: "https://agotasoft.com/error-page",
	},
};
export default function ErrorPage() {
	return (
		<div className="sofax-section-padding4">
			<div className="container">
				<div className="sofax-error-content text-center">
					<Image src={ErrorImg} alt="404 Sayfa Bulunamadı" className="mb-4" />
					<h1 className="mb-3">404 - Sayfa Bulunamadı</h1>
					<h2 className="mb-4">Aradığınız sayfa mevcut değil</h2>
					<p className="lead mb-5">
						Üzgünüz, aradığınız sayfa bulunamadı. Sayfa taşınmış, silinmiş veya 
						yanlış bir adres girmiş olabilirsiniz.
					</p>
					
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="d-flex flex-wrap justify-content-center gap-3">
								<Link className="sofax-default-btn pill" href="/">
									<span className="button-wraper">
										<i className="fas fa-home me-2"></i>Ana Sayfaya Dön
									</span>
								</Link>
								<Link className="sofax-default-btn pill sofax-btn-outline" href="/contact-us">
									<span className="button-wraper">
										<i className="fas fa-envelope me-2"></i>İletişime Geçin
									</span>
								</Link>
								<Link className="sofax-default-btn pill sofax-btn-outline" href="/service">
									<span className="button-wraper">
										<i className="fas fa-cogs me-2"></i>Çözümlerimiz
									</span>
								</Link>
							</div>
						</div>
					</div>
					
					<div className="mt-5">
						<h5 className="mb-3">Popüler Sayfalar</h5>
						<div className="row justify-content-center">
							<div className="col-md-6">
								<ul className="list-unstyled">
									<li className="mb-2">
										<Link href="/erp" className="text-decoration-none">
											<i className="fas fa-arrow-right text-primary me-2"></i>
											ERP Sistemi
										</Link>
									</li>
									<li className="mb-2">
										<Link href="/crm" className="text-decoration-none">
											<i className="fas fa-arrow-right text-primary me-2"></i>
											CRM Sistemi
										</Link>
									</li>
									<li className="mb-2">
										<Link href="/pre-accounting" className="text-decoration-none">
											<i className="fas fa-arrow-right text-primary me-2"></i>
											Ön Muhasebe
										</Link>
									</li>
									<li className="mb-2">
										<Link href="/lms" className="text-decoration-none">
											<i className="fas fa-arrow-right text-primary me-2"></i>
											LMS Eğitim Sistemi
										</Link>
									</li>
									<li className="mb-2">
										<Link href="/about-us" className="text-decoration-none">
											<i className="fas fa-arrow-right text-primary me-2"></i>
											Hakkımızda
										</Link>
									</li>
									<li className="mb-2">
										<Link href="/pricing" className="text-decoration-none">
											<i className="fas fa-arrow-right text-primary me-2"></i>
											Fiyatlandırma
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
