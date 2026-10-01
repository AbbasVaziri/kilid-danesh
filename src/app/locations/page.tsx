import PageHero from "@/components/ui/PageHero";
import LocationCards from "@/components/sections/LocationCards";
import EmergencyCta from "@/components/sections/EmergencyCta";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "مناطق تحت پوشش کلیدسازی دانش | کلیدساز غرب و مرکز تهران",
  description:
    "کلیدسازی دانش در جیحون، هاشمی، سلسبیل، رودکی، امام خمینی، شادمان و یادگار امام با اعزام فوری و شبانه‌روزی کلیدساز.",
  path: "/locations",
  keywords: locations.map((l) => `کلیدسازی ${l.name}`),
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="مناطق تحت پوشش کلیدسازی دانش"
        description="کلیدساز محلی یعنی رسیدن سریع‌تر. تیم ما در محله‌های غرب و مرکز تهران مستقر است تا در مواقع اضطراری منتظر نمانید."
        image="/images/location.jpg"
        crumbs={[{ name: "مناطق تحت پوشش", path: "/locations" }]}
        eyebrow="کلیدساز محلی"
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <LocationCards items={locations} />
          <p className="mt-10 max-w-3xl leading-8 text-muted">
            اگر محله شما در این فهرست نیست، باز هم تماس بگیرید. در بیشتر محله‌های مجاور
            این مناطق نیز خدمات کلیدسازی فوری، تعویض قفل و نصب قفل دیجیتال ارائه می‌دهیم.
          </p>
        </div>
      </section>
      <EmergencyCta />
    </>
  );
}
