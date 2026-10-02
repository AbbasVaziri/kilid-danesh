import Image from "next/image";
import Link from "next/link";
import { blurProps } from "@/lib/image-blur";
import { BadgeCheck } from "lucide-react";
import CallButton from "@/components/ui/CallButton";

const badges = ["اعزام سریع", "متخصص محلی تهران", "خدمات شبانه‌روزی"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src="/images/hero.jpg"
        alt="کلیدساز متخصص در حال باز کردن قفل درب منزل"
        fill
        preload
        {...blurProps("/images/hero.jpg")}
        sizes="100vw"
        className="-z-10 object-cover object-[60%_30%] lg:object-[0%_22%]"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-l from-ink via-ink/85 to-ink/25"
        aria-hidden
      />
      <div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-6xl flex-col justify-center px-4 py-16 sm:min-h-[640px] lg:py-24">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-extrabold text-ink">
          <span className="size-1.5 rounded-full bg-ink" aria-hidden />
          پاسخگویی ۲۴ ساعته
        </p>
        <h1 className="mt-6 max-w-2xl text-4xl leading-[1.25] font-black text-white sm:text-6xl">
          کلیدسازی فوری <span className="text-brand">تهران</span>
          <span className="mt-2 block text-2xl font-extrabold text-white/90 sm:text-4xl">
            باز کردن قفل بدون آسیب
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
          کلیدسازی دانش ارائه‌دهنده خدمات فوری باز کردن قفل، تعمیر قفل، نصب قفل
          دیجیتال و خدمات امنیتی در مناطق غرب و مرکز تهران.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CallButton size="lg" />
          <Link
            href="/services"
            className="inline-flex h-14 items-center justify-center rounded-md border border-white/30 px-7 text-base font-bold text-white transition-colors hover:border-brand hover:text-brand"
          >
            مشاهده خدمات
          </Link>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {badges.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm font-bold text-white">
              <BadgeCheck className="size-5 text-brand" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
