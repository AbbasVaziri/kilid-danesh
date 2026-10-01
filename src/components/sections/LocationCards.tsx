import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import type { Location } from "@/lib/locations";

export default function LocationCards({ items }: { items: Location[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((l) => {
        const body = (
          <>
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-ink text-brand transition-colors group-hover:bg-brand group-hover:text-ink">
              <MapPin className="size-5" aria-hidden />
            </span>
            <span className="flex-1">
              <span className="block font-black">کلیدسازی {l.name}</span>
              <span className="mt-1 block text-xs leading-6 text-muted">{l.short}</span>
            </span>
            {l.hasPage && <ArrowLeft className="size-4 shrink-0 text-muted group-hover:text-ink" aria-hidden />}
          </>
        );
        const cls =
          "group flex h-full items-center gap-4 rounded-xl border border-black/10 bg-white p-5 transition-colors";
        return (
          <li key={l.slug}>
            {l.hasPage ? (
              <Link href={`/locations/${l.slug}`} className={`${cls} hover:border-brand`}>
                {body}
              </Link>
            ) : (
              <div className={cls}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
