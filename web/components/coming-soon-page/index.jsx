import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
import NotifyForm from "./NotifyForm";

function CountDownRenderer({ days, hours, minutes, seconds }) {
	return (
		<section className="agota-section-padding4">
			<div className="container">
				<FadeInStaggerTwo className="agota-countdown-wrap">
					<FadeInStaggerTwoChildren className="agota-countdown-item">
						<div className="countdown-days">
							<div className="number">{days}</div>
						</div>
						<p>Days</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="agota-countdown-item">
						<div className="countdown-hours">
							<div className="number">{hours}</div>
						</div>
						<p>Hours</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="agota-countdown-item">
						<div className="countdown-minutes">
							<div className="number">{minutes}</div>
						</div>
						<p>Minutes</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="agota-countdown-item">
						<div className="countdown-seconds">
							<div className="number">{seconds}</div>
						</div>
						<p>Seconds</p>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
				<NotifyForm />
			</div>
		</section>
	);
}

export default CountDownRenderer;
