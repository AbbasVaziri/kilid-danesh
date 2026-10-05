import Link from "next/link";
import KeyMark from "@/components/ui/KeyMark";
import { site } from "@/lib/site";

export default function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} - صفحه اصلی`}>
      <span className="grid size-10 place-items-center rounded-md bg-brand text-ink">
        <KeyMark className="size-7" />
      </span>
      <span className={`whitespace-nowrap text-base leading-none font-black sm:text-lg ${light ? "text-white" : "text-ink"}`}>
        کلیدسازی <span className="text-brand">دانش</span>
      </span>
    </Link>
  );
}
