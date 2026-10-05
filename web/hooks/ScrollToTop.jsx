"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		const onScroll = () => setShowTopBtn(window.scrollY > 700);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!showTopBtn) return null;

	return (
		<div className="agf-scrolltop" onClick={goToTop} role="button" aria-label="Yukarı çık">
			<i className="fas fa-arrow-up"></i>
		</div>
	);
}
