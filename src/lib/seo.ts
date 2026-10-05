import type { Metadata } from "next";
import { locations } from "./locations";
import type { Faq } from "./services";
import { site } from "./site";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/images/hero.jpg",
  type = "website",
}: MetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: [...keywords, "کلیدسازی تهران", site.name],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "fa_IR",
      type,
      images: [{ url: image, width: 1600, height: 1067, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

const abs = (path: string) => new URL(path, site.url).toString();
const businessId = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": businessId,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneTel,
    image: abs("/images/hero.jpg"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: { "@type": "GeoCoordinates", ...site.geo },
    hasMap: site.map.url,
    areaServed: [
      { "@type": "City", name: "تهران" },
      ...locations.map((l) => ({ "@type": "Place", name: l.name })),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: site.social.map((s) => s.href),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: abs(path),
    provider: { "@id": businessId },
    areaServed: locations.map((l) => ({ "@type": "Place", name: l.name })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function articleSchema(p: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    image: abs(p.image),
    datePublished: p.date,
    mainEntityOfPage: abs(p.path),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": businessId },
    inLanguage: "fa-IR",
  };
}
