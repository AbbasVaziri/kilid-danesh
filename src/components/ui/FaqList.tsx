import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/services";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
      {faqs.map((f, i) => (
        <details key={f.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-base font-bold sm:text-lg">
            <h3>{f.q}</h3>
            <ChevronDown
              className="size-5 shrink-0 text-brand-dark transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="px-5 pb-5 leading-8 text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
