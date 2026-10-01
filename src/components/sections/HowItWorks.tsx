import Image from "next/image";
import { Car, MapPin, PhoneCall, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { toFa } from "@/lib/site";

const steps = [
  { icon: PhoneCall, title: "تماس با کلیدسازی دانش", text: "مشکل را توضیح دهید؛ زمان رسیدن و تخمین هزینه را همان لحظه اعلام می‌کنیم." },
  { icon: MapPin, title: "ارسال آدرس", text: "آدرس یا لوکیشن را بفرستید تا نزدیک‌ترین متخصص مسیر را شروع کند." },
  { icon: Car, title: "اعزام متخصص", text: "کلیدساز با ابزار کامل و قطعات یدکی در کوتاه‌ترین زمان به محل می‌رسد." },
  { icon: Wrench, title: "حل مشکل", text: "قفل با کمترین آسیب باز، تعمیر یا تعویض می‌شود و هزینه شفاف پرداخت می‌شود." },
];

export default function HowItWorks() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-20 sm:py-28">
      <Image src="/images/process-bg.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-ink/80" aria-hidden />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="روند کار" title="چطور کار می‌کنیم؟" highlight="کار" align="center" dark />
        <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="text-center">
              <span className="mx-auto grid size-20 place-items-center rounded-full bg-brand text-ink">
                <s.icon className="size-8" aria-hidden />
              </span>
              <h3 className="mt-6 text-lg font-black text-white">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-7 text-white/65">{s.text}</p>
              <p className="mt-5 text-xs font-bold text-white/50">مرحله {toFa(`0${i + 1}`)}</p>
              <span className="mx-auto mt-3 block size-3 rounded-full bg-brand ring-4 ring-brand/25" aria-hidden />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
