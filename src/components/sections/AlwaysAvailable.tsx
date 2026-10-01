import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const lines = ["اعزام سریع به آدرس شما", "اعلام قیمت پیش از شروع کار", "باز کردن قفل بدون آسیب"];

export default function AlwaysAvailable() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="order-2 flex items-center bg-white px-4 py-16 sm:px-12 lg:order-1 lg:py-20">
        <div className="w-full max-w-lg lg:ms-auto">
          <SectionHeading
            eyebrow="پاسخگویی تضمینی"
            title="در دسترس، شبانه‌روزی ۲۴/۷"
            highlight="شبانه‌روزی"
            description="ساعت ۳ بامداد باشد یا روز تعطیل، تلفن ما پاسخ می‌دهد. کلیدسازی دانش برای همان لحظه‌ای ساخته شده که بیشتر از همیشه به کمک نیاز دارید."
          />
          <ul className="mt-8 space-y-5">
            {lines.map((l) => (
              <li key={l} className="border-b border-black/15 pb-3 text-sm font-bold">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative order-1 min-h-[360px] bg-graphite lg:order-2 lg:min-h-[520px]">
        <Image src="/images/trust.jpg" alt="کلیدساز حرفه‌ای در حال تعمیر قفل" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <figure className="absolute start-4 -bottom-10 max-w-[18rem] bg-brand p-6 text-ink shadow-xl sm:start-10 lg:bottom-12 lg:-start-16">
          <blockquote className="text-base leading-8 font-bold">
            «قول ما ساده است: سریع می‌رسیم، قیمت را پیش از کار می‌گوییم و قفل شما را با کمترین آسیب باز می‌کنیم.»
          </blockquote>
          <figcaption className="mt-4 text-xs font-extrabold">تیم کلیدسازی دانش</figcaption>
        </figure>
      </div>
    </section>
  );
}
