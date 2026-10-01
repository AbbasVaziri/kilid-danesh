import Link from "next/link";
import { KeyRound } from "lucide-react";
import { site } from "@/lib/site";

export default function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} - صفحه اصلی`}>
      <span className="grid size-10 place-items-center rounded-md bg-brand text-ink">
        <KeyRound className="size-5" aria-hidden />
      </span>
      <span className={`whitespace-nowrap text-base leading-none font-black sm:text-lg ${light ? "text-white" : "text-ink"}`}>
        کلیدسازی <span className="text-brand">دانش</span>
      </span>
    </Link>
  );
}
