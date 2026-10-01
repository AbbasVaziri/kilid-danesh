import Image from "next/image";
import CallButton from "@/components/ui/CallButton";

export default function CtaPhoto() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-36" aria-labelledby="cta-title">
      <Image src="/images/cta-bg.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-ink via-ink/80 to-ink/30" aria-hidden />
      <div className="mx-auto max-w-6xl px-4">
        <p className="inline-flex items-center gap-2 text-sm font-bold text-brand">
          <span className="size-2.5 rounded-full bg-brand ring-4 ring-brand/25" aria-hidden />
          تماس فوری
        </p>
        <h2 id="cta-title" className="mt-4 text-4xl font-black text-white sm:text-6xl">
          پشت در مانده‌اید؟
        </h2>
        <p className="mt-3 text-2xl font-black text-brand sm:text-4xl">همین الان تماس بگیرید</p>
        <CallButton size="xl" className="mt-10 w-full sm:w-auto" />
      </div>
    </section>
  );
}
