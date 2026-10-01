import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import FaqList from "@/components/ui/FaqList";
import JsonLd from "@/components/ui/JsonLd";
import CallButton from "@/components/ui/CallButton";
import ServiceIcon from "@/components/ui/ServiceIcon";
import EmergencyCta from "@/components/sections/EmergencyCta";
import { locations } from "@/lib/locations";
import { buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";
import { getService, services } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
    keywords: s.keywords,
    image: s.image,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={[serviceSchema(s.name, s.metaDescription, path), faqSchema(s.faqs)]} />
      <PageHero
        title={s.h1}
        description={s.short}
        image={s.image}
        crumbs={[
          { name: "خدمات", path: "/services" },
          { name: s.name, path },
        ]}
        eyebrow="خدمات کلیدسازی دانش"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_340px]">
          <article className="min-w-0">
            <p className="text-lg leading-9 text-ink/85">{s.intro}</p>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl bg-graphite">
              <Image src={s.image} alt={s.name} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover" />
            </div>
            {s.sections.map((sec) => (
              <section key={sec.heading} className="mt-10">
                <h2 className="flex items-center gap-3 text-2xl font-black">
                  <span className="h-7 w-1.5 rounded-full bg-brand" aria-hidden />
                  {sec.heading}
                </h2>
                <p className="mt-4 leading-9 text-ink/80">{sec.body}</p>
              </section>
            ))}

            <section className="mt-12">
              <h2 className="text-2xl font-black">{s.name} در مناطق تحت پوشش</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {locations.map((l) => (
                  <li key={l.slug}>
                    {l.hasPage ? (
                      <Link
                        href={`/locations/${l.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-sm font-bold hover:border-brand hover:bg-brand/10"
                      >
                        <MapPin className="size-3.5 text-brand-dark" aria-hidden />
                        {s.name} {l.name}
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-sm font-bold">
                        <MapPin className="size-3.5 text-brand-dark" aria-hidden />
                        {s.name} {l.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="mb-6 text-2xl font-black">سوالات متداول {s.name}</h2>
              <FaqList faqs={s.faqs} />
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl bg-ink p-6 text-white">
              <span className="grid size-12 place-items-center rounded-lg bg-brand text-ink">
                <ServiceIcon name={s.icon} className="size-6" />
              </span>
              <h2 className="mt-4 text-xl font-black">چرا کلیدسازی دانش؟</h2>
              <ul className="mt-5 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-6 text-white/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={3} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <CallButton size="md" className="mt-6 w-full" />
            </div>
            <nav aria-label="سایر خدمات" className="rounded-xl border border-black/10 p-6">
              <h2 className="text-lg font-black">سایر خدمات</h2>
              <ul className="mt-4 divide-y divide-black/5">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/services/${o.slug}`} className="flex items-center gap-3 py-3 text-sm font-bold hover:text-brand-dark">
                      <ServiceIcon name={o.icon} className="size-4 text-brand-dark" />
                      {o.name}
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
