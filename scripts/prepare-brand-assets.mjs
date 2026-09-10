// One-off, offline asset-prep script. Run via `npm run prepare-assets`.
//
// What it does (per LANDING_PAGE_SPEC + Assets/readme.md rules):
//   1. Copies the official brand PNGs (untouched, pixel-for-pixel) into
//      src/assets/brand/** for the Astro image pipeline to consume.
//   2. Produces recolored DERIVATIVE copies of the symbol (ink / rose-deep)
//      by remapping RGB while preserving the original alpha channel exactly -
//      this is an offline, one-time raster recolor (not a live CSS filter),
//      and the originals in Assets/Brand are never modified or overwritten.
//      Derivatives are written to Assets/Brand/Derived/ (canonical, per the
//      asset README) and copied into src/assets/brand-derived/ for import.
//   3. Generates favicon sizes + a placeholder-quality OG image from the
//      derived symbol, since no dedicated favicon/OG asset exists yet.
//
// Geometry is never altered - every output here is either an unmodified copy
// or a flat recolor of the exact same alpha silhouette.

import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const ASSETS_BRAND = path.join(ROOT, 'Assets', 'Brand');
const ASSETS_DERIVED = path.join(ASSETS_BRAND, 'Derived');
const SRC_BRAND = path.join(ROOT, 'src', 'assets', 'brand');
const SRC_DERIVED = path.join(ROOT, 'src', 'assets', 'brand-derived');
const PUBLIC = path.join(ROOT, 'public');

const LOGO_VERTICAL = path.join(ASSETS_BRAND, 'Logo', 'Verde_VerticalPNG_RGB.png');
const SYMBOL_SOURCE = path.join(
  ASSETS_BRAND,
  'Symbol',
  'Verde_Rosa_Horizontal_1Símbolo_PNG_RGB.png'
);

const COLOR_INK = { r: 0x34, g: 0x30, b: 0x2f }; // --color-ink
const COLOR_ROSE_DEEP = { r: 0xa6, g: 0x5f, b: 0x70 }; // --color-rose-deep

async function ensureDirs() {
  await mkdir(path.join(SRC_BRAND, 'logo'), { recursive: true });
  await mkdir(path.join(SRC_BRAND, 'symbol'), { recursive: true });
  await mkdir(SRC_DERIVED, { recursive: true });
  await mkdir(ASSETS_DERIVED, { recursive: true });
  await mkdir(PUBLIC, { recursive: true });
}

async function copyOfficialPngs() {
  await copyFile(LOGO_VERTICAL, path.join(SRC_BRAND, 'logo', 'Verde_VerticalPNG_RGB.png'));
  await copyFile(
    path.join(ASSETS_BRAND, 'Symbol', 'Verde_Rosa_HorizontalSímbolo_PNG_RGB.png'),
    path.join(SRC_BRAND, 'symbol', 'Verde_Rosa_HorizontalSímbolo_PNG_RGB.png')
  );
  await copyFile(
    SYMBOL_SOURCE,
    path.join(SRC_BRAND, 'symbol', 'Verde_Rosa_Horizontal_1Símbolo_PNG_RGB.png')
  );
  console.log('Copied official PNGs into src/assets/brand/ (originals untouched).');
}

/** Flat recolor: preserves alpha exactly, replaces RGB with a solid color. */
async function recolor(inputPath, color) {
  const image = sharp(inputPath).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    data[i] = color.r;
    data[i + 1] = color.g;
    data[i + 2] = color.b;
    // data[i + 3] (alpha) left untouched
  }

  return sharp(data, { raw: { width, height, channels } }).png();
}

async function generateDerivedSymbols() {
  const inkBuffer = await (await recolor(SYMBOL_SOURCE, COLOR_INK)).toBuffer();
  const roseDeepBuffer = await (await recolor(SYMBOL_SOURCE, COLOR_ROSE_DEEP)).toBuffer();

  await sharp(inkBuffer).toFile(path.join(ASSETS_DERIVED, 'symbol-ink.png'));
  await sharp(roseDeepBuffer).toFile(path.join(ASSETS_DERIVED, 'symbol-rose-deep.png'));

  await sharp(inkBuffer).toFile(path.join(SRC_DERIVED, 'symbol-ink.png'));
  await sharp(roseDeepBuffer).toFile(path.join(SRC_DERIVED, 'symbol-rose-deep.png'));

  console.log('Generated derived recolors (ink, rose-deep) in Assets/Brand/Derived/.');
  return { inkBuffer, roseDeepBuffer };
}

async function generateFavicons(inkBuffer) {
  const trimmed = await sharp(inkBuffer).trim().toBuffer();

  const sizes = [16, 32, 48, 180, 512];
  for (const size of sizes) {
    const suffix = size === 180 ? 'apple-touch-icon' : `favicon-${size}`;
    await sharp(trimmed)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(PUBLIC, `${suffix}.png`));
  }

  console.log('Generated favicon PNGs (16/32/48/apple-touch/512) in public/.');
}

async function generateOgImage(inkBuffer) {
  const WIDTH = 1200;
  const HEIGHT = 630;

  const background = sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: { r: 0xfc, g: 0xf9, b: 0xf7, alpha: 1 }, // --color-canvas
    },
  });

  const symbolResized = await sharp(inkBuffer)
    .trim()
    .resize({ height: 260 })
    .toBuffer();
  const symbolMeta = await sharp(symbolResized).metadata();
  const symbolLeft = Math.round((WIDTH - (symbolMeta.width ?? 260)) / 2);

  const textSvg = Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="480" text-anchor="middle" font-family="Georgia, serif" font-size="52" fill="#34302F">Gabrielle Favere</text>
      <text x="50%" y="530" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#716766">Psicóloga Online para Mulheres</text>
    </svg>
  `);

  await background
    .composite([
      { input: symbolResized, left: symbolLeft, top: 120 },
      { input: textSvg, left: 0, top: 0 },
    ])
    .png()
    .toFile(path.join(PUBLIC, 'og-image.png'));

  console.log('Generated placeholder-quality og-image.png in public/ (mark as TODO for final art).');
}

async function main() {
  await ensureDirs();
  await copyOfficialPngs();
  const { inkBuffer } = await generateDerivedSymbols();
  await generateFavicons(inkBuffer);
  await generateOgImage(inkBuffer);
  console.log('\nBrand asset prep complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
