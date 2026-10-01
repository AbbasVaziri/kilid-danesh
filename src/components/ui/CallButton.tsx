import { PhoneCall } from "lucide-react";
import { phoneFa, site } from "@/lib/site";

type Props = {
  label?: string;
  size?: "md" | "lg" | "xl";
  variant?: "brand" | "dark";
  className?: string;
};

const sizes = {
  md: "h-12 px-5 text-base gap-2",
  lg: "h-14 px-7 text-lg gap-3",
  xl: "h-16 px-8 text-xl gap-3 sm:h-20 sm:px-10 sm:text-2xl",
};

const variants = {
  brand: "bg-brand text-ink hover:bg-brand-dark shadow-[0_10px_30px_-10px_rgba(245,196,0,0.6)]",
  dark: "bg-ink text-white hover:bg-graphite",
};

export default function CallButton({
  label = "تماس فوری",
  size = "lg",
  variant = "brand",
  className = "",
}: Props) {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className={`inline-flex items-center justify-center rounded-md font-extrabold transition-colors ${sizes[size]} ${variants[variant]} ${className}`}
      aria-label={`${label} ${site.phone}`}
    >
      <PhoneCall className="size-[1.2em] shrink-0" aria-hidden />
      <span>{label}</span>
      <span className="ltr font-black tracking-wide">{phoneFa}</span>
    </a>
  );
}
