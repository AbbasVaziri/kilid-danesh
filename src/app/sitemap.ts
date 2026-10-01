import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { locationPages } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, lastModified?: string) => ({
    url: new URL(path, site.url).toString(),
    lastModified: lastModified ?? new Date(),
    priority,
  });
  return [
    entry("/", 1),
    entry("/services", 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9)),
    entry("/locations", 0.9),
    ...locationPages.map((l) => entry(`/locations/${l.slug}`, 0.9)),
    entry("/blog", 0.6),
    ...posts.map((p) => entry(`/blog/${p.slug}`, 0.6, p.date)),
    entry("/contact", 0.8),
  ];
}
