import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import CallButton from "./CallButton";
import type { Crumb } from "@/lib/seo";

type Props = {
  title: string;
  description: string;
  image: string;
  crumbs: Crumb[];
  eyebrow?: string;
};

export default function PageHero({ title, description, image, crumbs, eyebrow }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-ink via-ink/85 to-ink/40" />
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-14 sm:pt-14 sm:pb-20">
        <Breadcrumbs items={crumbs} />
        {eyebrow && (
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-3xl leading-tight font-black text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl leading-8 text-white/75">{description}</p>
        <CallButton className="mt-8 w-full sm:w-auto" />
      </div>
    </section>
  );
}
