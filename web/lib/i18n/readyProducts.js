// "Ready products" on the pricing page: self-service products with public prices.
// Names, icons, taglines and links come from the solutions catalog; only prices and wording live here.
export const READY_PRODUCTS = [
	{ slug: "karlilik", price: { from: 499, to: 3499, cur: "₺", per: "month" } },
	{ slug: "cepte-ne-var", price: { from: 1490, to: 2990, cur: "TL", per: "year" } },
	{ slug: "gorevim-ne", price: { from: 199, cur: "TL", per: "userMonth" } },
	{ slug: "agota-randevu", price: { from: 399, to: 899, cur: "TL", per: "month" } },
	// +VAT, "from" price; the platform products below are not on sale yet -> waiting list
	{ slug: "on-muhasebe", price: { from: 590, cur: "₺", per: "month", fromLabel: true, vat: true } },
	{ slug: "erp", waitlist: true },
	{ slug: "crm", waitlist: true },
	{ slug: "lms", waitlist: true },
];

export const READY_COPY = {
	tr: { from: "Başlangıç", vat: "+ KDV", waitlist: "Yakında · bekleme listesi", join: "Bekleme listesine katıl", title: "Hazır Ürünler", subtitle: "Hemen kullanmaya başlayabileceğiniz, fiyatı açık ürünlerimiz.", cta: "Ürünü incele", units: { month: "ay", year: "yıl", userMonth: "kullanıcı / ay" } },
	en: { from: "From", vat: "+ VAT", waitlist: "Coming soon · waiting list", join: "Join the waiting list", title: "Ready-to-use Products", subtitle: "Products you can start using right away, with public prices.", cta: "View product", units: { month: "month", year: "year", userMonth: "user / month" } },
	ru: { from: "От", vat: "+ НДС", waitlist: "Скоро · список ожидания", join: "Встать в список ожидания", title: "Готовые продукты", subtitle: "Продукты с открытыми ценами, которыми можно пользоваться сразу.", cta: "Подробнее", units: { month: "мес.", year: "год", userMonth: "польз. / мес." } },
	uz: { from: "Dan", vat: "+ QQS", waitlist: "Tez orada · kutish ro'yxati", join: "Kutish ro'yxatiga yozilish", title: "Tayyor mahsulotlar", subtitle: "Narxi ochiq, darhol foydalanishni boshlash mumkin bo'lgan mahsulotlar.", cta: "Mahsulotni ko'rish", units: { month: "oy", year: "yil", userMonth: "foydalanuvchi / oy" } },
	tk: { from: "Başlap", vat: "+ KDS", waitlist: "Ýakynda · garaşma sanawy", join: "Garaşma sanawyna goşulmak", title: "Taýýar önümler", subtitle: "Bahasy açyk, derrew ulanyp boljak önümler.", cta: "Önümi görmek", units: { month: "aý", year: "ýyl", userMonth: "ulanyjy / aý" } },
};

function number(n, locale) {
	return new Intl.NumberFormat(locale === "tr" ? "tr-TR" : "en-US").format(n).replace(/,/g, locale === "tr" || locale === "ru" ? "." : ",");
}

export function formatPrice(price, unit, locale) {
	const copy = READY_COPY[locale] || READY_COPY.tr;
	const range = price.to ? `${number(price.from, locale)} – ${number(price.to, locale)}` : number(price.from, locale);
	const text = price.cur === "₺" ? `₺${range} / ${unit}` : `${range} ${price.cur} / ${unit}`;
	return `${price.fromLabel ? `${copy.from} ` : ""}${text}${price.vat ? ` ${copy.vat}` : ""}`;
}
