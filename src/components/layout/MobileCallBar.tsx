import { PhoneCall } from "lucide-react";
import { phoneFa, site } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-ink/95 p-3 backdrop-blur lg:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="flex h-12 items-center justify-center gap-3 rounded-md bg-brand text-lg font-black text-ink"
        aria-label={`تماس فوری با ${site.phone}`}
      >
        <PhoneCall className="size-5" aria-hidden />
        تماس فوری
        <span className="ltr">{phoneFa}</span>
      </a>
    </div>
  );
}
