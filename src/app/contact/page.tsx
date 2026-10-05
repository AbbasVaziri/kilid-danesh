import { Clock, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CallButton from "@/components/ui/CallButton";
import NeshanMap from "@/components/ui/NeshanMap";
import LocationCards from "@/components/sections/LocationCards";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";
import { phoneFa, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "تماس با کلیدسازی دانش | کلیدساز فوری تهران",
  description:
    "تماس با کلیدسازی دانش برای اعزام فوری کلیدساز در غرب و مرکز تهران. پاسخگویی شبانه‌روزی با شماره ۰۹۱۹۵۰۰۱۸۳۱.",
  path: "/contact",
  keywords: ["تماس با کلیدساز", "شماره کلیدساز تهران", "کلیدساز شبانه روزی"],
});

const cards = [
  { icon: PhoneCall, title: "تلفن تماس", value: phoneFa, href: `tel:${site.phoneTel}`, ltr: true },
  { icon: MessageCircle, title: "واتساپ", value: "ارسال پیام و لوکیشن", href: site.social[2].href },
  { icon: Clock, title: "ساعات کاری", value: site.hours },
  { icon: MapPin, title: "آدرس مغازه", value: "هاشمی، نرسیده به جیحون، پلاک ۶۲۱", href: site.map.url },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="تماس با کلیدسازی دانش"
        description="سریع‌ترین راه، تماس تلفنی است. مشکل را بگویید و آدرس را اعلام کنید؛ بقیه کار با ماست."
        image="/images/hero.jpg"
        crumbs={[{ name: "تماس با ما", path: "/contact" }]}
        eyebrow="پاسخگویی ۲۴ ساعته"
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="grid size-12 place-items-center rounded-lg bg-brand text-ink">
                    <c.icon className="size-6" aria-hidden />
                  </span>
                  <h2 className="mt-4 text-sm font-bold text-muted">{c.title}</h2>
                  <p className={`mt-1 text-lg font-black ${c.ltr ? "ltr" : ""}`}>{c.value}</p>
                </>
              );
              return (
                <li key={c.title} className="rounded-xl border border-black/10 p-6">
                  {c.href ? (
                    <a href={c.href} className="block hover:text-brand-dark">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>

          <h2 className="mt-16 mb-8 text-2xl font-black">آدرس روی نقشه</h2>
          <NeshanMap />

          <div className="mt-12 rounded-xl bg-ink p-8 text-center text-white sm:p-12">
            <h2 className="text-3xl font-black">همین الان تماس بگیرید</h2>
            <p className="mx-auto mt-3 max-w-xl leading-8 text-white/70">
              هنگام تماس، آدرس دقیق، نوع در و مشکل را بگویید تا زمان رسیدن و هزینه را دقیق اعلام کنیم.
            </p>
            <CallButton size="xl" className="mt-8 w-full sm:w-auto" />
          </div>

          <h2 className="mt-16 mb-8 text-2xl font-black">مناطق تحت پوشش</h2>
          <LocationCards items={locations} />
        </div>
      </section>
    </>
  );
}
