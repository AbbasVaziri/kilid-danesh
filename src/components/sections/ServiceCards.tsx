import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import type { ServiceCard } from "@/lib/services";

export default function ServiceCards({ cards }: { cards: ServiceCard[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <li key={c.title}>
          <Link
            href={c.href}
            className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_40px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute start-5 -bottom-6 grid size-14 place-items-center rounded-lg bg-brand text-ink shadow-lg">
                <ServiceIcon name={c.icon} className="size-7" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 pt-10">
              <h3 className="text-xl font-black">{c.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{c.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-ink group-hover:text-brand-dark">
                اطلاعات بیشتر
                <ArrowLeft className="size-4" aria-hidden />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
