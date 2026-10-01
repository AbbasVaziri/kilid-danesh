import Image from "next/image";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CallButton from "@/components/ui/CallButton";

const points = [
  { title: "متخصص مناطق تهران", text: "شناخت کامل محله‌ها و قفل‌های رایج غرب و مرکز تهران." },
  { title: "تجهیزات حرفه‌ای", text: "ابزار تخصصی باز کردن قفل و قطعات یدکی همراه متخصص." },
  { title: "باز کردن قفل با کمترین آسیب", text: "روش‌های غیرتخریبی؛ بدون شکستن قفل و چهارچوب." },
  { title: "قیمت شفاف", text: "هزینه پیش از شروع کار اعلام می‌شود؛ بدون هزینه پنهان." },
  { title: "پاسخگویی سریع", text: "پاسخ تلفنی فوری و اعزام در کوتاه‌ترین زمان، شبانه‌روزی." },
];

const stats = [
  { value: "۲۴/۷", label: "پاسخگویی شبانه‌روزی" },
  { value: "۷", label: "منطقه تحت پوشش" },
  { value: "۵", label: "خدمت تخصصی" },
];

export default function Trust() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="اعتماد شما، اولویت ما"
            title="چرا کلیدسازی دانش؟"
            highlight="کلیدسازی دانش"
          />
          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-brand text-ink">
                  <Check className="size-4" strokeWidth={3} aria-hidden />
                </span>
                <div>
                  <h3 className="font-black">{p.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <CallButton className="mt-10 w-full sm:w-auto" />
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-graphite">
            <Image
              src="/images/trust.jpg"
              alt="کلیدساز حرفه‌ای در حال تعویض مغزی قفل"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <dl className="absolute inset-x-4 -bottom-8 grid grid-cols-3 rounded-xl bg-brand p-5 text-center text-ink shadow-xl sm:inset-x-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-black sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs font-bold sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
