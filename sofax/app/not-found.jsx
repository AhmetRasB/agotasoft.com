import ErrorImg from "@/public/images/contact/404.png";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "404 - Sayfa Bulunamadı | AgotaSoft",
	description: "Aradığınız sayfa bulunamadı. AgotaSoft ana sayfasına dönebilir veya çözümlerimizi inceleyebilirsiniz.",
};

export default function NotFound() {
	return (
		<div className="sofax-section-padding4 min-vh-100 d-flex align-items-center">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="sofax-error-content text-center">
							<Image src={ErrorImg} alt="404 Sayfa Bulunamadı" className="mb-4" width={300} height={200} />
							<h1 className="mb-3 display-4">404</h1>
							<h2 className="mb-4">Sayfa Bulunamadı</h2>
							<p className="lead mb-5 text-muted">
								Aradığınız sayfa mevcut değil. Ana sayfaya dönebilir veya 
								çözümlerimizi inceleyebilirsiniz.
							</p>
							
							<div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
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
							</div>
							
							<div className="row">
								<div className="col-md-6 mx-auto">
									<h6 className="mb-3">Hızlı Linkler</h6>
									<div className="d-flex flex-wrap justify-content-center gap-2">
										<Link href="/erp" className="btn btn-sm btn-outline-primary">ERP</Link>
										<Link href="/crm" className="btn btn-sm btn-outline-primary">CRM</Link>
										<Link href="/pre-accounting" className="btn btn-sm btn-outline-primary">Ön Muhasebe</Link>
										<Link href="/lms" className="btn btn-sm btn-outline-primary">LMS</Link>
										<Link href="/about-us" className="btn btn-sm btn-outline-primary">Hakkımızda</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
