import Link from "next/link";
import { PhoneCall } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import CallButton from "@/components/ui/CallButton";
import { nav, phoneFa, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="relative mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-4">
        <Logo />
        <nav aria-label="منوی اصلی" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-bold text-white/85 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <CallButton size="md" label="تماس" />
          </div>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-brand px-3 text-sm font-extrabold text-ink lg:hidden"
            aria-label={`تماس با ${site.phone}`}
          >
            <PhoneCall className="size-4" aria-hidden />
            <span className="ltr">{phoneFa}</span>
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
