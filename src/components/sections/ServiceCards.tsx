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
            className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm bg-graphite"
          >
            <Image
              src={c.image}
              alt={c.title}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent"
              aria-hidden
            />
            <div className="relative p-6">
              <span className="mb-4 grid size-11 place-items-center rounded-sm bg-brand text-ink">
                <ServiceIcon name={c.icon} className="size-5" />
              </span>
              <h3 className="text-2xl font-black text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/75">{c.description}</p>
              <span className="mt-5 inline-grid size-10 place-items-center bg-brand text-ink transition-colors group-hover:bg-white">
                <ArrowLeft className="size-5" aria-hidden />
                <span className="sr-only">اطلاعات بیشتر</span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
