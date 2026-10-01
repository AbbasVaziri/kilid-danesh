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

`public/images/*.jpg` are generated placeholders (`node scripts/placeholders.mjs`; running it again overwrites real photos). Replace each with a real photo of the same name:

| File | Content | Shape |
| --- | --- | --- |
| hero.jpg | Locksmith at a house door, person on the left | wide |
| door-opening.jpg, anti-theft.jpg, smart-lock.jpg, key-copy.jpg, cylinder.jpg, emergency.jpg | Service cards | any (cropped 4:5) |
| process-bg.jpg | Dark texture / padlock (background of "how we work") | wide |
| key-hand.jpg | Hand holding a key | any |
| trust.jpg | Hands working on a lock (24/7 section) | landscape |
| portrait.jpg | Smiling locksmith | tall 3:4 |
| cta-bg.jpg | Locksmith at work (bottom call section) | wide |
| location.jpg | Location page header | wide |
| blog-keys-inside.jpg, blog-anti-theft.jpg, blog-smart-lock.jpg, blog-price.jpg | Blog articles | 4:3 |
