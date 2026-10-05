"use client";
import CountUp from "react-countup";
function Counter() {
	return (
		<section className="section agota-section-padding2 dark-bg">
			<div id="agota-counter"></div>
			<div className="container">
				<div className="agota-counter-wrap position-ralatiove">
					<div className="agota-counter-data version-6 ">
						<h2>
							<CountUp className="agota-counter" end={80} duration={3} redraw={true} enableScrollSpy />%
						</h2>
						<p>Customer Satisfaction</p>
					</div>
					<div className="border-right"></div>
					<div className="agota-counter-data version-6">
						<h2>
							<CountUp className="agota-counter" end={160} duration={3} redraw={true} enableScrollSpy />+
						</h2>
						<p>Projects Completed</p>
					</div>
					<div className="border-right2"></div>
					<div className="agota-counter-data version-6">
						<h2>
							<CountUp className="agota-counter" end={99} duration={3} redraw={true} enableScrollSpy />%
						</h2>
						<p>Positive Feedback</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Counter;
