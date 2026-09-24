"use client";

import CmsImg from "@/components/cms/CmsImg";
import { useCmsItem } from "@/hooks/useCmsItem";

const LABELS = {
	position: { tr: "Görev", en: "Position", ru: "Должность", uz: "Lavozim", tk: "Wezipe" },
	phone: { tr: "Telefon", en: "Phone", ru: "Телефон", uz: "Telefon", tk: "Telefon" },
};

function SingleTeamDetails({ itemSlug, locale = "tr" }) {
	const member = useCmsItem("team", itemSlug);
	const name = member.name || "";
	const title = member.title || "";
	const bio = member.bio || "";
	const phone = member.phone?.trim();
	const socials = [
		{ href: member.social_linkedin, icon: "fab fa-linkedin-in" },
		{ href: member.social_twitter, icon: "fab fa-x-twitter" },
		{ href: member.social_facebook, icon: "fab fa-facebook-f" },
		{ href: member.social_instagram, icon: "fab fa-instagram" },
	].filter((s) => s.href);
	const posLabel = LABELS.position[locale] || LABELS.position.tr;
	const phoneLabel = LABELS.phone[locale] || LABELS.phone.tr;

	return (
		<section className="agf-section--tight">
			<div className="agf-container">
				<div className="agf-split">
					<div className="agf-team-card-img" style={{ borderRadius: "var(--radius-lg)" }}>
						<CmsImg src={member.image} alt={name} width={800} height={900} />
					</div>
					<div>
						<h2 className="agf-headline agf-h2" style={{ marginBottom: 4 }}>
							{name}
						</h2>
						<p className="agf-lede" style={{ margin: "0 0 20px" }}>
							{title}
						</p>
						{bio ? <p>{bio}</p> : null}

						{phone ? (
							<div className="agf-team-detail-meta">
								<div className="agf-team-detail-meta-row">
									<span>{posLabel}</span>
									<span>{title}</span>
								</div>
								<div className="agf-team-detail-meta-row">
									<span>{phoneLabel}</span>
									<span>{phone}</span>
								</div>
							</div>
						) : null}

						{socials.length ? (
							<div className="agf-social-row">
								{socials.map((s) => (
									<a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer">
										<i className={s.icon}></i>
									</a>
								))}
							</div>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
}

export default SingleTeamDetails;
