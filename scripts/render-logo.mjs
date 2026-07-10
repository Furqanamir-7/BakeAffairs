import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas } from "@napi-rs/canvas";
import sharp from "sharp";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pdfPath = "C:\\Users\\Dell\\Desktop\\bakeaffairs logo 2 inch.pdf";
const outDir = path.join(root, "public");
const outPng = path.join(outDir, "logo.png");
const outWebp = path.join(outDir, "logo.webp");

fs.mkdirSync(outDir, { recursive: true });

const data = new Uint8Array(fs.readFileSync(pdfPath));
const doc = await getDocument({ data, useSystemFonts: true }).promise;
const page = await doc.getPage(1);

const viewport = page.getViewport({ scale: 4 });
const canvas = createCanvas(viewport.width, viewport.height);
const context = canvas.getContext("2d");

await page.render({
  canvasContext: context,
  viewport,
}).promise;

const pngBuffer = canvas.toBuffer("image/png");
await sharp(pngBuffer).trim({ threshold: 10 }).png().toFile(outPng);
await sharp(outPng).webp({ quality: 92 }).toFile(outWebp);

const meta = await sharp(outPng).metadata();
const stats = await sharp(outPng).stats();
console.log("rendered", { width: meta.width, height: meta.height, outPng });
console.log(
  "palette",
  stats.dominant.map((c) => ({
    hex: `#${[c.r, c.g, c.b]
      .map((v) => Math.round(v).toString(16).padStart(2, "0"))
      .join("")}`,
  }))
);
