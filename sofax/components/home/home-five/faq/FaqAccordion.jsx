"use client";

import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
import { useCms } from "@/hooks/useCms";

function FaqColumn({ items, accordionId, extraClass = "", openFirst = false }) {
	return (
		<div className={`accordion sofax-accordion-section-v2 ${extraClass}`.trim()} id={accordionId}>
			{items.map((item, index) => {
				const target = `${accordionId}-item-${index}`;
				const isOpen = openFirst && index === 0;
				return (
					<div className="accordion-item sofax-accordion-item " key={item.question + index}>
						<h3 className="accordion-header sofax-accordion-header">
							<button
								className={`accordion-button${isOpen ? "" : " collapsed"}`}
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#${target}`}
							>
								{item.question}
							</button>
							<div className="accordion-icon">
								<Image src={Icon} alt="Icon" />
							</div>
						</h3>
						<div
							id={target}
							className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
							data-bs-parent={`#${accordionId}`}
						>
							<div className="accordion-body sofax-accordion-body">{item.answer}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

function FaqAccordion() {
	const cms = useCms();
	const col1 = cms.faq_columns?.["1"]?.length ? cms.faq_columns["1"] : cms.faq_columns?.[1] || [];
	const col2 = cms.faq_columns?.["2"]?.length ? cms.faq_columns["2"] : cms.faq_columns?.[2] || [];

	return (
		<div className="sofax-accordion-section-wrapper">
			<FaqColumn items={col1} accordionId="sofax-accordion2" openFirst />
			<FaqColumn items={col2} accordionId="sofax-accordion3" extraClass="mt-24" openFirst />
		</div>
	);
}

export default FaqAccordion;
