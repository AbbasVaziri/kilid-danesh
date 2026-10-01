import { Siren } from "lucide-react";
import CallButton from "@/components/ui/CallButton";

export default function EmergencyCta() {
  return (
    <section className="relative overflow-hidden bg-brand py-16 sm:py-20" aria-labelledby="emergency-title">
      <Siren
        className="pointer-events-none absolute -start-10 -top-10 size-64 text-ink/[0.06]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center lg:flex-row lg:justify-between lg:text-start">
        <div>
          <h2 id="emergency-title" className="text-4xl font-black text-ink sm:text-5xl">
            پشت در مانده‌اید؟
          </h2>
          <p className="mt-3 text-xl font-bold text-ink/80 sm:text-2xl">همین الان تماس بگیرید</p>
        </div>
        <CallButton size="xl" variant="dark" label="تماس" className="w-full sm:w-auto" />
      </div>
    </section>
  );
}
