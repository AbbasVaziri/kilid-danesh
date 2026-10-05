// Generates the favicon and app icons from the key mark in src/components/ui/KeyMark.tsx.
// Run: node scripts/make-icons.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.join(import.meta.dirname, "..");
const app = path.join(root, "src", "app");
const pub = path.join(root, "public", "icons");
fs.mkdirSync(pub, { recursive: true });

const brand = "#f5c400";
const ink = "#0e0f11";

const key = `
  <g transform="rotate(-45 32 32) translate(0.5 0)" fill="${ink}">
    <path fill-rule="evenodd" d="M6 32a12 12 0 1 0 24 0a12 12 0 1 0 -24 0Z M12.5 32a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0Z"/>
    <path d="M28 28.5H58.5V35.5H55.5V42.5H50.5V35.5H47.5V40H43V35.5H28Z"/>
  </g>`;

// radius: corner radius of the yellow tile; scale: key size inside the tile.
const svg = ({ radius = 14, scale = 1 } = {}) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${radius}" fill="${brand}"/>
  <g transform="translate(32 32) scale(${scale}) translate(-32 -32)">${key}</g>
</svg>`;

const png = (source, size) =>
  sharp(Buffer.from(source), { density: 1200 }).resize(size, size).png().toBuffer();

// Browser tab icon (SVG, scales to any size).
fs.writeFileSync(path.join(app, "icon.svg"), svg().trim() + "\n");

// favicon.ico with 16, 32 and 48 px PNG frames, for older browsers and crawlers.
const frames = await Promise.all([16, 32, 48].map((s) => png(svg(), s)));
const header = Buffer.alloc(6 + 16 * frames.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
frames.forEach((buf, i) => {
  const size = [16, 32, 48][i];
  const e = 6 + i * 16;
  header.writeUInt8(size, e);
  header.writeUInt8(size, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(buf.length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += buf.length;
});
fs.writeFileSync(path.join(app, "favicon.ico"), Buffer.concat([header, ...frames]));

// iOS home screen (iOS rounds the corners itself).
fs.writeFileSync(path.join(app, "apple-icon.png"), await png(svg({ radius: 0, scale: 0.85 }), 180));

// Android / installable web app icons, referenced from src/app/manifest.ts.
fs.writeFileSync(path.join(pub, "icon-192.png"), await png(svg(), 192));
fs.writeFileSync(path.join(pub, "icon-512.png"), await png(svg(), 512));
fs.writeFileSync(path.join(pub, "icon-maskable-512.png"), await png(svg({ radius: 0, scale: 0.7 }), 512));

console.log("icons written");
