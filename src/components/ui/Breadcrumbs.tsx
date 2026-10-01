import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/seo";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs = [{ name: "خانه", path: "/" }, ...items];
  return (
    <nav aria-label="مسیر صفحه" className="text-sm text-white/60">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i < crumbs.length - 1 ? (
              <Link href={c.path} className="hover:text-brand">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-white">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
