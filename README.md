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

Source photos live in `assets/photos/`. `node scripts/optimize-images.mjs` crops, resizes and compresses them into `public/images/` and regenerates the blur previews in `src/lib/image-blur.ts`. At runtime, `next/image` serves AVIF/WebP at the right width for each screen.

To add or replace a photo: put the file in `assets/photos/`, add or edit its line in `scripts/optimize-images.mjs`, then run the script.

| File | Content | Now |
| --- | --- | --- |
| hero.jpg | Locksmith at a door (mirrored so he is on the left) | photo |
| door-opening.jpg | Service card | photo |
| key-copy.jpg | Service card | photo |
| process-bg.jpg | Background of "how we work" | photo |
| trust.jpg | 24/7 section | photo |
| cta-bg.jpg, location.jpg | Bottom call section, location page header | photo |
| key-hand.jpg | Emergency services section | photo |
| blog-keys-inside.jpg, blog-anti-theft.jpg, blog-price.jpg | Blog articles | photo |
| anti-theft.jpg, smart-lock.jpg, cylinder.jpg, emergency.jpg | Service cards | placeholder |
| portrait.jpg | Smiling locksmith, tall 3:4 | placeholder |
| blog-smart-lock.jpg | Blog article | placeholder |

Placeholders come from `node scripts/placeholders.mjs`, which never overwrites existing files unless you pass `--force`.
