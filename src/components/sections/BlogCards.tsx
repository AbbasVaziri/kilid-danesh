import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { Post } from "@/lib/blog";
import { toFa } from "@/lib/site";

export default function BlogCards({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {posts.map((p) => (
        <li key={p.slug}>
          <Link href={`/blog/${p.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-graphite">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted">
              <CalendarDays className="size-3.5" aria-hidden />
              {p.dateFa} · {toFa(p.readMinutes)} دقیقه مطالعه
            </p>
            <h3 className="mt-2 text-lg leading-8 font-black group-hover:text-brand-dark">{p.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{p.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
