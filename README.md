# کلیدسازی دانش

Persian (RTL) website for کلیدسازی دانش, an emergency locksmith in west and central Tehran. Built with Next.js (App Router), TypeScript and Tailwind CSS. Every page is statically generated.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Where to edit

| What | File |
| --- | --- |
| Name, phone, domain, social links, hours | `src/lib/site.ts` |
| Services and service pages | `src/lib/services.ts` |
| Service areas and location pages | `src/lib/locations.ts` |
| Blog articles | `src/lib/blog.ts` |
| Homepage FAQ | `src/lib/faqs.ts` |
| SEO metadata and JSON-LD | `src/lib/seo.ts` |

## Photos

`public/images/*.jpg` are generated placeholders (`node scripts/placeholders.mjs`). To use real photos, replace each one with a photo of the same file name. Landscape works best for all of them except `trust.jpg`, which is portrait (4:5).

hero, door-opening, anti-theft, smart-lock, key-copy, cylinder, emergency, trust, location, blog-keys-inside, blog-anti-theft, blog-smart-lock, blog-price
