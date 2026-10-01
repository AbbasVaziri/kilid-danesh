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
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="روند کار" title="چطور کار می‌کنیم؟" highlight="کار" align="center" dark />
        <div className="relative mt-14">
          <div
            className="absolute inset-x-[12%] top-10 hidden border-t-2 border-dashed border-brand/40 lg:block"
            aria-hidden
          />
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span className="relative mx-auto grid size-20 place-items-center rounded-full bg-brand text-ink ring-8 ring-charcoal">
                <s.icon className="size-8" aria-hidden />
                <span className="absolute -top-1 -end-1 grid size-7 place-items-center rounded-full bg-white text-xs font-black text-ink">
                  {["۱", "۲", "۳", "۴"][i]}
                </span>
              </span>
              <h3 className="mt-6 text-lg font-black text-white">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-7 text-white/65">{s.text}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
