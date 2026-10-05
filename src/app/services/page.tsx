import PageHero from "@/components/ui/PageHero";
import ServiceCards from "@/components/sections/ServiceCards";
import HowItWorks from "@/components/sections/HowItWorks";
import EmergencyCta from "@/components/sections/EmergencyCta";
import { buildMetadata } from "@/lib/seo";
import { serviceCards } from "@/lib/services";

export const metadata = buildMetadata({
  title: "خدمات کلیدسازی در تهران | کلیدسازی دانش",
  description:
    "همه خدمات کلیدسازی دانش: کلیدسازی فوری، باز کردن قفل درب، تعمیر و تعویض قفل ضد سرقت و ساخت کلید یدک در غرب و مرکز تهران.",
  path: "/services",
  keywords: ["خدمات کلیدسازی", "کلیدساز تهران", "تعویض قفل", "ساخت کلید یدک"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="خدمات تخصصی کلیدسازی دانش"
        description="هر آنچه برای باز کردن، تعمیر، تعویض و ارتقای قفل درب خانه یا محل کار خود نیاز دارید؛ با اعزام سریع و قیمت شفاف."
        image="/images/door-opening.jpg"
        crumbs={[{ name: "خدمات", path: "/services" }]}
        eyebrow="خدمات"
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ServiceCards cards={serviceCards} />
        </div>
      </section>
      <HowItWorks />
      <EmergencyCta />
    </>
  );
}
