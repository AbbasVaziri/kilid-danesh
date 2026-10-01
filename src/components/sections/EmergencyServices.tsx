import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { label: "پشت در ماندن و جا ماندن کلید", href: "/services/door-lock-opening" },
  { label: "شکستن کلید داخل قفل", href: "/services/emergency-locksmith" },
  { label: "گم شدن یا سرقت کلید", href: "/services/anti-theft-lock" },
  { label: "گیر کردن و خرابی ناگهانی قفل", href: "/services/anti-theft-lock" },
];

export default function EmergencyServices() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative min-h-[320px] bg-graphite sm:min-h-[460px]">
        <Image src="/images/key-hand.jpg" alt="کلید در دست کلیدساز" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex items-center bg-white px-4 py-16 sm:px-12 lg:py-20">
        <div className="w-full max-w-lg">
          <SectionHeading eyebrow="خدمات اضطراری" title="کلیدسازی اضطراری شبانه‌روزی" highlight="اضطراری" />
          <ul className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {items.map((it) => (
              <li key={it.label}>
                <Link href={it.href} className="group flex items-center justify-between py-5 font-bold hover:text-brand-dark">
                  {it.label}
                  <ArrowLeft className="size-4 text-muted group-hover:text-brand-dark" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
