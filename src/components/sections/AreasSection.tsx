import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { locations } from "@/lib/locations";

export default function AreasSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[0.8fr_1.4fr_0.7fr]">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-graphite">
          <Image src="/images/portrait.jpg" alt="کلیدساز کلیدسازی دانش" fill sizes="(min-width: 1024px) 300px, 90vw" className="object-cover" />
        </div>
        <div>
          <SectionHeading eyebrow="کلیدساز محلی" title="منزل، مغازه، دفتر کار؛ هر جا باشید، می‌رسیم" highlight="هر جا باشید" />
          <div className="mt-6 grid gap-6 text-sm leading-7 text-muted sm:grid-cols-2">
            <p>
              کلیدسازی دانش در محله‌های غرب و مرکز تهران مستقر است. همین نزدیکی باعث می‌شود
              وقتی پشت در مانده‌اید، کلیدساز در کوتاه‌ترین زمان به شما برسد.
            </p>
            <p>
              از باز کردن درب آپارتمان و حیاط تا قفل کرکره مغازه و درب ورودی مجتمع‌ها؛
              برای هر نوع قفل، ابزار و تجربه لازم را همراه داریم.
            </p>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-lg font-black">مناطق تحت پوشش کلیدسازی دانش</h2>
          <ul className="space-y-2.5">
            {locations.map((l) => {
              const cls = "block bg-brand px-4 py-2.5 text-center text-sm font-extrabold text-ink";
              return (
                <li key={l.slug}>
                  {l.hasPage ? (
                    <Link href={`/locations/${l.slug}`} className={`${cls} transition-colors hover:bg-ink hover:text-brand`}>
                      کلیدسازی {l.name}
                    </Link>
                  ) : (
                    <span className={cls}>کلیدسازی {l.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
