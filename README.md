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
| Name, phone, address, Neshan map links, domain, social links, hours | `src/lib/site.ts` |
| Services and service pages | `src/lib/services.ts` |
| Service areas and location pages | `src/lib/locations.ts` |
| Blog articles | `src/lib/blog.ts` |
| Homepage FAQ | `src/lib/faqs.ts` |
| SEO metadata and JSON-LD | `src/lib/seo.ts` |

## Photos

Source photos live in `assets/photos/`. `node scripts/optimize-images.mjs` crops, resizes and compresses them into `public/images/` and regenerates the blur previews in `src/lib/image-blur.ts`. At runtime, `next/image` serves AVIF/WebP at the right width for each screen.

To add or replace a photo: put the file in `assets/photos/`, add or edit its line in `scripts/optimize-images.mjs`, then run the script.

Every slot in `public/images/` now has a real photo:

- Photos supplied by the owner: `locksmith-door.jpg`, `key-cutting.jpg`, `keys-wood.jpg`, `key-wall.webp`, `keys-yellow.jpg`
- Unsplash License photos (free for commercial use), from images.unsplash.com:
  - `us-smart-lock-phone.jpg`: `photo-1558002038-1055907df827`
  - `us-vault-door.jpg`: `photo-1582139329536-e7284fece509`
  - `us-house-dusk.jpg`: `photo-1494526585095-c41746248156`
  - `us-craftsman.jpg`: `photo-1558618666-fcd25c85cd64`

Which source feeds which slot, and how it is cropped, is listed in `scripts/optimize-images.mjs`.

If you replace a photo and the old one still shows, delete `.next/cache/images` and restart the server.

Placeholders come from `node scripts/placeholders.mjs`, which never overwrites existing files unless you pass `--force`.
