export const site = {
  name: "کلیدسازی دانش",
  shortName: "کلید دانش",
  url: "https://kilid-danesh.ir",
  phone: "09195001831",
  phoneTel: "+989195001831",
  city: "تهران",
  region: "استان تهران",
  country: "IR",
  description:
    "کلیدسازی دانش ارائه‌دهنده خدمات فوری باز کردن قفل، تعمیر و تعویض قفل، ساخت کلید و خدمات امنیتی در مناطق غرب و مرکز تهران.",
  hours: "شبانه‌روزی، ۷ روز هفته",
  address: "تهران، خیابان هاشمی، نرسیده به جیحون، بین سلیمی، خطیبی و عباسی، پلاک ۶۲۱",
  streetAddress: "خیابان هاشمی، نرسیده به جیحون، بین سلیمی، خطیبی و عباسی، پلاک ۶۲۱",
  geo: { latitude: 35.689357, longitude: 51.362071 },
  map: {
    url: "https://nshn.ir/99_bvEyNQx47RJ",
    embed:
      "https://neshan.org/maps/iframe/places/9950c0db5f2d6fd3cfca8eb54aa1b412#c35.689-51.363-18z-0p/35.689357353745706/51.36207076802799",
  },
  social: [
    { name: "اینستاگرام", href: "https://instagram.com/kilid.danesh" },
    { name: "تلگرام", href: "https://t.me/kilid_danesh" },
    { name: "واتساپ", href: "https://wa.me/989195001831" },
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
