# Local SEO checklist

Target searches: **کلیدسازی فوری**, **کلیدسازی جیحون**, **کلیدسازی هاشمی**.

The site side (schema, location pages, sitemap, metadata) is done in code. What decides
the map-pack ranking for these searches is mostly off-site, below. Do these in order.

## 1. Google Business Profile (most important)

1. Go to https://business.google.com and create/claim the profile for the shop.
2. Use **exactly** the same details as the site (`src/lib/site.ts`):
   - Name: `کلیدسازی دانش` (don't add keywords to the name; Google suspends for that)
   - Address: تهران، خیابان هاشمی، نرسیده به جیحون، بین سلیمی، خطیبی و عباسی، پلاک ۶۲۱
   - Phone: 09195001831
   - Website: https://kilid-danesh.ir
   - Hours: open 24 hours, 7 days
3. Primary category: **Locksmith** (کلیدساز). Add services: باز کردن قفل، تعویض قفل، ساخت کلید.
4. Service areas: جیحون، هاشمی، سلسبیل، رودکی، شادمان، یادگار امام.
5. Complete verification (postcard / phone / video).
6. Upload real photos: shop front with sign, inside the shop, work on doors.
7. Copy the profile's public link (`https://maps.app.goo.gl/...` or `g.page/...`) and add it to
   `site.social` in `src/lib/site.ts` so it appears in the schema's `sameAs`.

## 2. Reviews

- After each job, send customers the review link from the Business Profile ("Ask for reviews").
- Reply to every review. Reviews that mention the area ("کلیدساز جیحون خیلی سریع اومد") help.
- Never add review stars to the site's own schema; Google ignores self-served reviews for local businesses.

## 3. Search Console and Bing

1. Add `https://kilid-danesh.ir` in https://search.google.com/search-console using the
   **HTML tag** method. Put the `content` value in the build environment:
   `GOOGLE_SITE_VERIFICATION=xxxxxxxx` (read in `src/app/layout.tsx`), then deploy and verify.
2. Submit `https://kilid-danesh.ir/sitemap.xml`.
3. Optional: Bing Webmaster Tools, env var `BING_SITE_VERIFICATION`.
4. Run the home page and `/locations/jehoon` through https://search.google.com/test/rich-results.

## 4. Iranian maps and directories

Same name, address and phone everywhere:

- **Neshan** (already linked on the site). Make sure the listing's phone is the new number.
- **Balad** (balad.ir). Register the shop, then add the listing link to `site.social`.
- Directories: Divar business page, Esam, local business directories.

## 5. Social links

`site.social` lists Instagram `kilid.danesh` and Telegram `kilid_danesh`. If these accounts
don't exist yet, create them or remove the entries; dead links in `sameAs` hurt trust.

## 6. Ongoing

- When you change page content, bump `site.updated` in `src/lib/site.ts` (sitemap date).
- Keep adding blog posts about real local jobs (e.g. "باز کردن درب ضد سرقت در جیحون").
