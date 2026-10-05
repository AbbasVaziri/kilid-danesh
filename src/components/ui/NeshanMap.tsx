import { MapPin, Navigation } from "lucide-react";
import { site } from "@/lib/site";

export default function NeshanMap() {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10">
      <iframe
        title={`موقعیت ${site.name} روی نقشه نشان`}
        src={site.map.embed}
        className="block aspect-[4/3] w-full sm:aspect-[16/9]"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 leading-7">
          <MapPin className="mt-1 size-5 shrink-0 text-brand-dark" aria-hidden />
          {site.address}
        </p>
        <a
          href={site.map.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 font-bold text-white hover:bg-ink/90"
        >
          <Navigation className="size-4" aria-hidden />
          مسیریابی با نشان
        </a>
      </div>
    </div>
  );
}
