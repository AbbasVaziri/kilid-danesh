import Link from "next/link";
import CallButton from "@/components/ui/CallButton";

export default function NotFound() {
  return (
    <section className="bg-ink py-24 text-center text-white">
      <div className="mx-auto max-w-xl px-4">
        <p className="text-6xl font-black text-brand">۴۰۴</p>
        <h1 className="mt-4 text-3xl font-black">صفحه پیدا نشد</h1>
        <p className="mt-4 leading-8 text-white/70">
          صفحه‌ای که دنبالش بودید وجود ندارد. اگر پشت در مانده‌اید، همین الان تماس بگیرید.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <CallButton />
          <Link href="/" className="font-bold text-brand hover:underline">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </section>
  );
}
