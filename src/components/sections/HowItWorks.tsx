import Image from "next/image";
import { Car, MapPin, PhoneCall, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

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
        <ol className="mx-auto mt-16 max-w-3xl">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brand text-ink">
                  <s.icon className="size-6" aria-hidden />
                </span>
                {i < steps.length - 1 && <span className="mt-3 w-px flex-1 bg-white/25" aria-hidden />}
              </div>
              <div className="pb-2">
                <h3 className="text-lg font-black text-white">{s.title}</h3>
                <p className="mt-2 leading-7 text-white/65">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
