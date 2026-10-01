import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CallButton from "@/components/ui/CallButton";
import JsonLd from "@/components/ui/JsonLd";
import BlogCards from "@/components/sections/BlogCards";
import { getPost, posts } from "@/lib/blog";
import { articleSchema, buildMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";
import { toFa } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.metaTitle,
    description: p.description,
    path: `/blog/${p.slug}`,
    keywords: p.keywords,
    image: p.image,
    type: "article",
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const path = `/blog/${p.slug}`;
  const service = getService(p.relatedService);

  return (
    <>
      <JsonLd
        data={articleSchema({ title: p.title, description: p.description, path, image: p.image, date: p.date })}
      />
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-4 pt-10 pb-12">
          <Breadcrumbs
            items={[
              { name: "مقالات", path: "/blog" },
              { name: p.title, path },
            ]}
          />
          <h1 className="mt-8 text-3xl leading-tight font-black text-white sm:text-4xl">{p.title}</h1>
          <p className="mt-4 text-sm text-white/60">
            <time dateTime={p.date}>{p.dateFa}</time> · {toFa(p.readMinutes)} دقیقه مطالعه
          </p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="relative -mt-4 aspect-[16/9] overflow-hidden rounded-xl bg-graphite">
          <Image src={p.image} alt={p.title} fill priority sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
        </div>
        <div className="mt-10 space-y-5 text-lg leading-9 text-ink/85">
          {p.content.map((b, i) => {
            if (b.type === "h2")
              return (
                <h2 key={i} className="pt-4 text-2xl font-black text-ink">
                  {b.text}
                </h2>
              );
            if (b.type === "ul")
              return (
                <ul key={i} className="list-disc space-y-2 ps-6 marker:text-brand-dark">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>
        <aside className="mt-12 rounded-xl bg-brand p-6 sm:p-8">
          <h2 className="text-2xl font-black">به کمک کلیدساز نیاز دارید؟</h2>
          <p className="mt-2 leading-8 font-bold text-ink/80">
            متخصصان کلیدسازی دانش شبانه‌روزی در غرب و مرکز تهران آماده اعزام هستند.
            {service && (
              <>
                {" "}
                بیشتر بخوانید:{" "}
                <Link href={`/services/${service.slug}`} className="underline underline-offset-4">
                  {service.name}
                </Link>
              </>
            )}
          </p>
          <CallButton variant="dark" className="mt-6 w-full sm:w-auto" />
        </aside>
      </article>
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-black">مقالات دیگر</h2>
          <BlogCards posts={posts.filter((o) => o.slug !== p.slug).slice(0, 3)} />
        </div>
      </section>
    </>
  );
}
