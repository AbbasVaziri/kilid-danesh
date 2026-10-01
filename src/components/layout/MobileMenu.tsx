"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 place-items-center rounded-md border border-white/15 text-white lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "بستن منو" : "باز کردن منو"}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-ink lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-4 text-base font-bold text-white last:border-0 hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
