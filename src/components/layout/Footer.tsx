import Link from "next/link";
import { Clock, MapPin, MessageCircle, PhoneCall, Send, Camera } from "lucide-react";
import Logo from "./Logo";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { nav, phoneFa, site } from "@/lib/site";

const socialIcons = [Camera, Send, MessageCircle];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-7">{site.description}</p>
          <ul className="mt-5 flex gap-2">
            {site.social.map((s, i) => {
              const Icon = socialIcons[i];
              return (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid size-10 place-items-center rounded-md border border-white/15 transition-colors hover:border-brand hover:text-brand"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-bold text-white">خدمات</h2>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brand">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-bold text-white">مناطق تحت پوشش</h2>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {locations.map((l) => (
              <li key={l.slug}>
                {l.hasPage ? (
                  <Link href={`/locations/${l.slug}`} className="hover:text-brand">
                    کلیدسازی {l.name}
                  </Link>
                ) : (
                  <span>کلیدسازی {l.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-bold text-white">دسترسی سریع</h2>
          <ul className="space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-brand">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <PhoneCall className="size-4 text-brand" aria-hidden />
              <a href={`tel:${site.phoneTel}`} className="ltr font-bold text-white hover:text-brand">
                {phoneFa}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-brand" aria-hidden />
              {site.hours}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
              <a href={site.map.url} target="_blank" rel="noopener noreferrer" className="leading-6 hover:text-brand">
                {site.address}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs">
          © {new Date().getFullYear()} {site.name}. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
