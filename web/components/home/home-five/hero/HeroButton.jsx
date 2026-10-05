import Link from "next/link";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";

function HeroButton() {
	return (
		<FadeInStaggerTwo className="agota-hero-btn-wrap agota-hero5-btn extra-mt">
			<FadeInStaggerTwoChildren>
				<Link className="agota-default-btn pill" data-text="Let's Talk" href="/contact-us">
					<span className="button-wraper">Let's Talk</span>
				</Link>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<Link className="agota-default-btn pill outline-btn" data-text="Explore Our Services" href="/service">
					<span className="button-wraper">Explore Our Services</span>
				</Link>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroButton;
