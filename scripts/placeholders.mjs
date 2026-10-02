// Generates dark/yellow placeholder photos in public/images.
// Existing files are kept (real photos are never overwritten); pass --force to
// regenerate every placeholder.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as L from "lucide-react";

const out = path.join(import.meta.dirname, "..", "public", "images");
fs.mkdirSync(out, { recursive: true });

const images = [
  ["hero", L.DoorOpen, 1920, 1080, 0.28],
  ["door-opening", L.DoorOpen, 1200, 900],
  ["anti-theft", L.ShieldCheck, 1200, 900],
  ["smart-lock", L.Fingerprint, 1200, 900],
  ["key-copy", L.KeyRound, 1200, 900],
  ["cylinder", L.LockKeyhole, 1200, 900],
  ["emergency", L.Siren, 1200, 900],
  ["trust", L.Wrench, 1200, 900],
  ["process-bg", L.LockKeyhole, 1920, 900],
  ["key-hand", L.KeyRound, 1000, 1100],
  ["portrait", L.UserRound, 900, 1200],
  ["cta-bg", L.DoorOpen, 1920, 1000, 0.28],
  ["location", L.MapPin, 1920, 1080, 0.28],
  ["blog-keys-inside", L.KeyRound, 1200, 900],
  ["blog-anti-theft", L.ShieldCheck, 1200, 900],
  ["blog-smart-lock", L.Fingerprint, 1200, 900],
  ["blog-price", L.Receipt, 1200, 900],
];

const force = process.argv.includes("--force");

for (const [name, Icon, w, h, cx = 0.5] of images) {
  if (!force && fs.existsSync(path.join(out, `${name}.jpg`))) continue;
  const s = Math.round(Math.min(w, h) * 0.5);
  const icon = renderToStaticMarkup(
    React.createElement(Icon, { size: s, color: "#f5c400", strokeWidth: 0.9 })
  ).replace("<svg", `<svg x="${w * cx - s / 2}" y="${(h - s) / 2}"`);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs>
      <radialGradient id="g" cx="${cx}" cy="0.45" r="0.75">
        <stop offset="0" stop-color="#3a3528"/><stop offset="0.55" stop-color="#1b1b1d"/><stop offset="1" stop-color="#0e0f11"/>
      </radialGradient>
      <pattern id="p" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#ffffff" fill-opacity="0.05"/></pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#p)"/>
    <circle cx="${w * cx}" cy="${h / 2}" r="${s * 0.78}" fill="none" stroke="#f5c400" stroke-opacity="0.12" stroke-width="2"/>
    <g opacity="0.85">${icon}</g>
  </svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(out, `${name}.jpg`));
  console.log("wrote", name);
}
