// Generates the portfolio card covers in public/portfolio/ from YouTube frames.
//
// Most of the work is vertical (Shorts). YouTube's automatic thumbnail for those
// is a 16:9 image with blurred side bars, often frozen mid-caption. Instead we take
// the original-ratio frame (oar2.jpg, 1080x1920) of a hand-picked clip and cut a
// 16:10 band at `top` (fraction of the height) that avoids the burned-in captions.
// Horizontal clips use maxresdefault.jpg (1280x720), optionally cropped.
//
// Usage:  node tools/make_portfolio_posters.mjs            (all)
//         node tools/make_portfolio_posters.mjs zada jadent (only these)
// Then reference the file in src/lib/data.ts with `poster: '<name>.jpg'`.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OUT = path.join(__dirname, '..', 'public', 'portfolio');
const CACHE = path.join(__dirname, '..', '.tmp', 'yt-frames');
const W = 1280;
const H = 800; // 16:10, same ratio as the cards

/**
 * name: output file (without .jpg)
 * id:   YouTube video ID of the chosen clip
 * src:  'oar' (vertical original) or 'max' (horizontal maxres)
 * top:  for 'oar', where the 16:10 band starts (0 = top of the frame)
 * box:  for 'max', optional crop {left, top, width, height} in source pixels
 */
const POSTERS = [
  { name: 'zada', id: 'PVnhIJ2rRMY', src: 'oar', top: 0.32 },
  { name: 'rk-med', id: 'BjNiM8vFm7U', src: 'oar', top: 0.18 },
  { name: 'jadent', id: 'R9DB37DXxxg', src: 'oar', top: 0.22 },
  { name: 'casa-meseriasilor', id: 'eS3bSBPvprg', src: 'oar', top: 0.18 },
  { name: 'fereastra-adf', id: 'iWudmyXWmb8', src: 'oar', top: 0.18 },
  { name: 'zone47', id: 'W7z6kSn5rIM', src: 'oar', top: 0.18 },
  { name: 'hanul-bucovinei', id: 'spvpbEa536A', src: 'oar', top: 0.44 },
  { name: 'expert-music', id: 'VGEnpmKRWsM', src: 'max', box: { left: 176, top: 60, width: 928, height: 580 } },
  { name: 'peak-gaming', id: 'vsulGYjX-vQ', src: 'oar', top: 0.1 },
  { name: 'blues-festival', id: '9FpXBBDzI4c', src: 'oar', top: 0.22 },
  { name: '8imo', id: 'jsYAUST34N4', src: 'oar', top: 0.18 },
  { name: 'zenman', id: 'X_aTIkxN7JU', src: 'max' },
  { name: 'busyman', id: 'luIpEvM3-Qk', src: 'max' },
  { name: 'dar-daune', id: '9TPXHM4UPSI', src: 'oar', top: 0.14 },
  { name: 'hotel-continental', id: 'vcOPNYaNENg', src: 'oar', top: 0.34 },
];

async function fetchFrame(id, src) {
  const file = path.join(CACHE, `${src}_${id}.jpg`);
  if (fs.existsSync(file)) return file;
  const url = `https://i.ytimg.com/vi/${id}/${src === 'oar' ? 'oar2' : 'maxresdefault'}.jpg`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  return file;
}

async function make(p) {
  const file = await fetchFrame(p.id, p.src);
  const { width, height } = await sharp(file).metadata();
  let box;
  if (p.src === 'oar') {
    const h = Math.round((width * H) / W);
    box = { left: 0, top: Math.min(height - h, Math.round(p.top * height)), width, height: h };
  } else {
    box = p.box ?? { left: 0, top: 0, width, height };
  }
  const out = path.join(OUT, `${p.name}.jpg`);
  await sharp(file)
    .extract(box)
    .resize(W, H, { fit: 'cover' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out);
  return out;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  fs.mkdirSync(CACHE, { recursive: true });
  const only = process.argv.slice(2);
  for (const p of POSTERS) {
    if (only.length && !only.includes(p.name)) continue;
    const out = await make(p);
    console.log(`${p.name.padEnd(20)} ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
  }
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
