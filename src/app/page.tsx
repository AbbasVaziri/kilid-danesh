import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ServiceCards from "@/components/sections/ServiceCards";
import HowItWorks from "@/components/sections/HowItWorks";
import TrustedGrid from "@/components/sections/TrustedGrid";
import EmergencyServices from "@/components/sections/EmergencyServices";
import AlwaysAvailable from "@/components/sections/AlwaysAvailable";
import AreasSection from "@/components/sections/AreasSection";
import StatsBand from "@/components/sections/StatsBand";
import CtaPhoto from "@/components/sections/CtaPhoto";
import BlogCards from "@/components/sections/BlogCards";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqList from "@/components/ui/FaqList";
import JsonLd from "@/components/ui/JsonLd";
import { posts } from "@/lib/blog";
import { homeFaqs } from "@/lib/faqs";
import { locations } from "@/lib/locations";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { serviceCards } from "@/lib/services";

export const metadata = buildMetadata({
  title: "کلیدسازی فوری تهران | کلیدسازی دانش",
  description:
    "کلیدسازی فوری و شبانه‌روزی در غرب و مرکز تهران؛ باز کردن قفل بدون آسیب، تعمیر قفل ضد سرقت، تعویض مغزی و ساخت کلید. جیحون، هاشمی، سلسبیل، رودکی، شادمان. تماس: ۰۹۱۹۵۰۰۱۸۳۱",
  path: "/",
  keywords: [
    "کلیدسازی فوری تهران",
    "کلیدساز شبانه روزی تهران",
    "باز کردن قفل",
    ...locations.map((l) => `کلیدسازی ${l.name}`),
  ],
});

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-12 items-center rounded-md border-2 border-ink px-6 text-sm font-extrabold transition-colors hover:bg-ink hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />

      <section className="py-20 sm:py-24" id="services">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="خدمات ما"
              title="خدمات تخصصی کلیدسازی دانش"
              highlight="کلیدسازی دانش"
              description="از باز کردن قفل در مواقع اضطراری تا تعویض قفل و ساخت کلید؛ هر کاری که برای امنیت درب خانه شما لازم است."
            />
            <MoreLink href="/services">همه خدمات</MoreLink>
          </div>
          <div className="mt-12">
            <ServiceCards cards={serviceCards} />
          </div>
        </div>
      </section>

      <HowItWorks />
      <TrustedGrid />
      <EmergencyServices />
      <AlwaysAvailable />
      <AreasSection />
      <StatsBand />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="مجله کلیدسازی" title="مقالات و راهنماها" highlight="راهنماها" />
            <MoreLink href="/blog">همه مقالات</MoreLink>
          </div>
          <div className="mt-12">
            <BlogCards posts={posts.slice(0, 3)} />
          </div>
        </div>
      </section>
      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="پرسش‌های متداول"
            title="سوالات رایج درباره کلیدسازی"
            highlight="کلیدسازی"
            description="پاسخ سوالاتی که بیشتر مشتریان پیش از تماس می‌پرسند. سوال دیگری دارید؟ تماس بگیرید."
          />
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <CtaPhoto />
    </>
  );
}
