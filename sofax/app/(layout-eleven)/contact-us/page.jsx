import BreadCrumb from "@/components/common/Breadcrumb";
import FadeInUp from "@/components/animation/FadeInUp";
import CmsText from "@/components/cms/CmsText";
import ContactInfo from "@/components/contact-page/ContactInfo";
import DemoRequestForm from "@/components/contact-page/DemoRequestForm";
import ContactExtras from "@/components/contact-page/ContactExtras";

export const metadata = {
	title: "AgotaSoft İletişim | Bizimle İletişime Geçin - Demo Talep Edin",
	description: "AgotaSoft ERP, CRM, Ön Muhasebe ve LMS çözümleri hakkında bilgi almak, demo talep etmek için bizimle iletişime geçin.",
	keywords: "AgotaSoft iletişim, demo talep, yazılım danışmanlığı, ERP demo, CRM demo",
	author: "AgotaSoft Yazılım",
	openGraph: {
		title: "AgotaSoft İletişim | Demo Talep Edin",
		description: "Yazılım çözümlerimiz hakkında bilgi almak için bizimle iletişime geçin.",
		type: "website",
		url: "https://agotasoft.com/contact-us",
	},
};

function ContactUs() {
	return (
		<>
			<BreadCrumb title={<CmsText path="pages.contact.title" fallback="İletişim" />} />

			<div className="section sofax-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<FadeInUp>
								<div className="text-center mb-5">
									<h1>
										<CmsText path="pages.contact.hero_title" fallback="Bizimle İletişime Geçin" />
									</h1>
									<p className="lead">
										<CmsText
											path="pages.contact.hero_subtitle"
											fallback="AgotaSoft yazılım çözümleri hakkında detaylı bilgi almak, demo talep etmek veya projelerinizi görüşmek için bizimle iletişime geçin."
										/>
									</p>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<div className="section sofax-section-padding bg-light">
				<div className="container">
					<div className="row g-5">
						<div className="col-lg-4">
							<FadeInUp>
								<ContactInfo />
							</FadeInUp>
						</div>
						<div className="col-lg-8">
							<FadeInUp>
								<DemoRequestForm />
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>

			<ContactExtras />
		</>
	);
}

export default ContactUs;
