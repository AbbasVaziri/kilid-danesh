import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import FaqList from "@/components/ui/FaqList";
import JsonLd from "@/components/ui/JsonLd";
import CallButton from "@/components/ui/CallButton";
import ServiceIcon from "@/components/ui/ServiceIcon";
import EmergencyCta from "@/components/sections/EmergencyCta";
import { getLocation, locationPages } from "@/lib/locations";
import { buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";
import { getService, services } from "@/lib/services";
import { phoneFa } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return buildMetadata({
    title: `کلیدسازی ${l.name} | اعزام فوری کلیدساز`,
    description: l.metaDescription!,
    path: `/locations/${l.slug}`,
    keywords: l.keywords,
    image: "/images/location.jpg",
  });
}

export default async function LocationPage({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();
  const path = `/locations/${l.slug}`;
  const top = (l.topServices ?? []).map(getService).filter((s) => s !== undefined);
  const rest = services.filter((s) => !top.includes(s));
  const neighbours = (l.neighbours ?? []).map(getLocation).filter((n) => n !== undefined);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(`کلیدسازی ${l.name}`, l.metaDescription!, path),
          faqSchema(l.faqs ?? []),
        ]}
      />
      <PageHero
        title={`کلیدسازی ${l.name}`}
        description={l.intro!}
        image="/images/location.jpg"
        crumbs={[
          { name: "مناطق تحت پوشش", path: "/locations" },
          { name: `کلیدسازی ${l.name}`, path },
        ]}
        eyebrow={`اعزام فوری کلیدساز به ${l.name}`}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_340px]">
          <article className="min-w-0">
            {l.local?.map((sec) => (
              <section key={sec.heading} className="mb-10">
                <h2 className="flex items-center gap-3 text-2xl font-black">
                  <span className="h-7 w-1.5 rounded-full bg-brand" aria-hidden />
                  {sec.heading}
                </h2>
                <p className="mt-4 leading-9 text-ink/80">{sec.body}</p>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-black">خدمات کلیدسازی در {l.name}</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {[...top, ...rest].map((s, i) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`group flex h-full gap-4 rounded-xl border p-5 transition-colors hover:border-brand ${
                        i < top.length ? "border-brand/50 bg-brand/5" : "border-black/10"
                      }`}
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-ink text-brand">
                        <ServiceIcon name={s.icon} className="size-5" />
                      </span>
                      <span>
                        <span className="block font-black">
                          {s.name} در {l.name}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-muted">{s.short}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="mb-6 text-2xl font-black">سوالات متداول کلیدسازی {l.name}</h2>
              <FaqList faqs={l.faqs ?? []} />
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl bg-ink p-6 text-white">
              <h2 className="text-xl font-black">کلیدساز فوری در {l.name}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">
                پشت در مانده‌اید؟ با شماره <span className="ltr font-bold text-white">{phoneFa}</span>{" "}
                تماس بگیرید تا نزدیک‌ترین متخصص اعزام شود.
              </p>
              <CallButton size="md" className="mt-6 w-full" />
            </div>
            <div className="rounded-xl border border-black/10 p-6">
              <h2 className="text-lg font-black">محدوده‌های نزدیک</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {l.nearby?.map((n) => (
                  <li key={n} className="inline-flex items-center gap-1 rounded-full bg-paper px-3 py-1.5 text-xs font-bold">
                    <MapPin className="size-3 text-brand-dark" aria-hidden />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <nav aria-label="مناطق مجاور" className="rounded-xl border border-black/10 p-6">
              <h2 className="text-lg font-black">کلیدسازی در مناطق مجاور</h2>
              <ul className="mt-4 divide-y divide-black/5">
                {neighbours.map((n) => (
                  <li key={n.slug}>
                    <Link href={`/locations/${n.slug}`} className="flex items-center justify-between py-3 text-sm font-bold hover:text-brand-dark">
                      کلیدسازی {n.name}
                      <ArrowLeft className="size-4" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>
      <EmergencyCta />
    </>
  );
}
