"use client";
import { useCms } from "@/hooks/useCms";
import { useLocalePrefix } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n/config";

const LABEL = { tr: "Diğer Ürünlerimiz", en: "Other Products", ru: "Другие продукты", uz: "Boshqa mahsulotlarimiz", tk: "Beýleki önümlerimiz" };
const SUB = {
	tr: "ERP dışında, işletmenizin farklı ihtiyaçları için geliştirdiğimiz diğer çözümler.",
	en: "Beyond ERP, other solutions we've built for different business needs.",
	ru: "Помимо ERP — другие решения для разных задач бизнеса.",
	uz: "ERP dan tashqari, biznesingizning turli ehtiyojlari uchun yaratgan boshqa yechimlarimiz.",
	tk: "ERP-den başga, işiňiziň dürli isleglerine görä döreden beýleki çözgütlerimiz.",
};

export default function OtherProducts() {
	const cms = useCms();
	const prefix = useLocalePrefix();
	const locale = prefix ? prefix.slice(1) : "tr";
	const items = (cms.services || []).filter((s) => s.id !== "erp-sistemi");

	if (!items.length) return null;

	return (
		<section className="agf-section--tight">
			<div className="agf-container">
				<div className="agf-platform-head" style={{ marginBottom: 32 }}>
					<h2 className="agf-headline agf-h3" style={{ fontSize: 22 }}>
						{LABEL[locale] || LABEL.tr}
					</h2>
					<p className="agf-small" style={{ margin: "8px auto 0", maxWidth: 480 }}>
						{SUB[locale] || SUB.tr}
					</p>
				</div>
				<div className="agf-grid agf-grid--4">
					{items.map((item) => {
						const isExternal = item.external || /^https?:/.test(item.link || "");
						const href = isExternal ? item.link : withLocale(item.link || "/service", prefix);
						return (
							<a
								className="agf-mini-card"
								key={item.id}
								href={href}
								{...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
							>
								<div className="agf-mini-icon">
									<i className={item.fa_icon || "fas fa-cube"}></i>
								</div>
								<div>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
