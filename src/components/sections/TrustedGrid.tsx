import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CallButton from "@/components/ui/CallButton";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { getService } from "@/lib/services";

const points = [
  "متخصص مناطق تهران",
  "تجهیزات حرفه‌ای",
  "باز کردن قفل با کمترین آسیب",
  "قیمت شفاف",
  "پاسخگویی سریع",
];

const boxes = [
  { slug: "door-lock-opening", tag: "خدمات منزل" },
  { slug: "anti-theft-lock", tag: "امنیت درب" },
  { slug: "smart-lock", tag: "قفل هوشمند" },
  { slug: "key-copy", tag: "کلید و مغزی" },
];

export default function TrustedGrid() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="چرا ما؟" title="چرا کلیدسازی دانش؟" highlight="کلیدسازی دانش" />
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-bold">
                <Check className="size-5 text-brand-dark" strokeWidth={3} aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <CallButton size="md" className="mt-10" />
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {boxes.map(({ slug, tag }) => {
            const s = getService(slug)!;
            return (
              <li key={slug} className="flex flex-col bg-white p-7 text-center shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]">
                <p className="text-[11px] font-bold text-muted">{tag}</p>
                <h3 className="mt-3 flex items-center justify-center gap-2 text-lg font-black">
                  <ServiceIcon name={s.icon} className="size-5 text-brand-dark" />
                  {s.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">{s.short}</p>
                <Link
                  href={`/services/${slug}`}
                  className="mx-auto mt-6 inline-flex h-10 items-center bg-brand px-5 text-xs font-extrabold text-ink transition-colors hover:bg-ink hover:text-brand"
                >
                  بیشتر بخوانید
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
