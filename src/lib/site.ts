export const site = {
  name: "کلیدسازی دانش",
  shortName: "کلید دانش",
  url: "https://kilid-danesh.ir",
  phone: "09025663672",
  phoneTel: "+989025663672",
  city: "تهران",
  region: "استان تهران",
  country: "IR",
  description:
    "کلیدسازی دانش ارائه‌دهنده خدمات فوری باز کردن قفل، تعمیر قفل، نصب قفل دیجیتال و خدمات امنیتی در مناطق غرب و مرکز تهران.",
  hours: "شبانه‌روزی، ۷ روز هفته",
  geo: { latitude: 35.6892, longitude: 51.3657 },
  social: [
    { name: "اینستاگرام", href: "https://instagram.com/kilid.danesh" },
    { name: "تلگرام", href: "https://t.me/kilid_danesh" },
    { name: "واتساپ", href: "https://wa.me/989025663672" },
  ],
} as const;

export const nav = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/locations", label: "مناطق تحت پوشش" },
  { href: "/blog", label: "مقالات" },
  { href: "/contact", label: "تماس با ما" },
] as const;

const faDigits = "۰۱۲۳۴۵۶۷۸۹";
export function toFa(value: string | number) {
  return String(value).replace(/\d/g, (d) => faDigits[Number(d)]);
}

export const phoneFa = toFa(site.phone);
