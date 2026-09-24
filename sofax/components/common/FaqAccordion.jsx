"use client";

import { useState } from "react";
import { useCms } from "@/hooks/useCms";

function AccordionItem({ item, isOpen, onToggle }) {
	return (
		<div className="agf-accordion-item">
			<button className="agf-accordion-btn" type="button" aria-expanded={isOpen} onClick={onToggle}>
				<span>{item.question}</span>
				<i className="fas fa-plus agf-accordion-icon"></i>
			</button>
			{isOpen ? <div className="agf-accordion-body">{item.answer}</div> : null}
		</div>
	);
}

function AccordionColumn({ items, openIndex, onToggle }) {
	return (
		<div>
			{items.map((item, index) => (
				<AccordionItem key={item.question + index} item={item} isOpen={openIndex === index} onToggle={() => onToggle(index)} />
			))}
		</div>
	);
}

function FaqAccordion() {
	const cms = useCms();
	const col1 = cms.faq_columns?.["1"]?.length ? cms.faq_columns["1"] : cms.faq_columns?.[1] || [];
	const col2 = cms.faq_columns?.["2"]?.length ? cms.faq_columns["2"] : cms.faq_columns?.[2] || [];
	const [openCol1, setOpenCol1] = useState(0);
	const [openCol2, setOpenCol2] = useState(0);

	return (
		<div className="agf-accordion-cols">
			<AccordionColumn items={col1} openIndex={openCol1} onToggle={(i) => setOpenCol1(openCol1 === i ? -1 : i)} />
			<AccordionColumn items={col2} openIndex={openCol2} onToggle={(i) => setOpenCol2(openCol2 === i ? -1 : i)} />
		</div>
	);
}

export default FaqAccordion;
