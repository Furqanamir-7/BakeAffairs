import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { getDocument, OPS } from "pdfjs-dist/legacy/build/pdf.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pdfPath = "C:\\Users\\Dell\\Desktop\\bakeaffairs logo 2 inch.pdf";
const outDir = path.join(root, "public");
const outPng = path.join(outDir, "logo.png");

fs.mkdirSync(outDir, { recursive: true });

async function trySharp() {
  try {
    await sharp(pdfPath, { density: 300, page: 0 })
      .trim()
      .png()
      .toFile(outPng);
    console.log("sharp:ok", outPng);
    return true;
  } catch (err) {
    console.log("sharp:fail", err.message);
    return false;
  }
}

async function extractImages() {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await getDocument({ data, useSystemFonts: true }).promise;
  const page = await doc.getPage(1);
  const ops = await page.getOperatorList();
  const images = [];

  for (let i = 0; i < ops.fnArray.length; i++) {
    if (ops.fnArray[i] === OPS.paintImageXObject) {
      const name = ops.argsArray[i][0];
      const img = await page.objs.get(name);
      if (img?.data) {
        images.push({
          width: img.width,
          height: img.height,
          kind: img.kind,
          dataLen: img.data.length,
        });
        const raw = Buffer.from(img.data);
        if (img.kind === 1) {
          // grayscale
          await sharp(raw, {
            raw: { width: img.width, height: img.height, channels: 1 },
          })
            .png()
            .toFile(path.join(outDir, `logo-gray-${images.length}.png`));
        } else if (img.kind === 2) {
          // rgb
          await sharp(raw, {
            raw: { width: img.width, height: img.height, channels: 3 },
          })
            .png()
            .toFile(path.join(outDir, `logo-rgb-${images.length}.png`));
        } else if (img.kind === 3) {
          // rgba
          await sharp(raw, {
            raw: { width: img.width, height: img.height, channels: 4 },
          })
            .png()
            .toFile(path.join(outDir, `logo-rgba-${images.length}.png`));
        }
      }
    }
  }

  console.log("images", images);
  return images.length > 0;
}

async function extractColors() {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await getDocument({ data, useSystemFonts: true }).promise;
  const page = await doc.getPage(1);
  const ops = await page.getOperatorList();
  const colors = new Set();

  for (let i = 0; i < ops.fnArray.length; i++) {
    const fn = ops.fnArray[i];
    const args = ops.argsArray[i];
    if (
      fn === OPS.setFillRGBColor ||
      fn === OPS.setStrokeRGBColor ||
      fn === OPS.setFillColorN ||
      fn === OPS.setStrokeColorN
    ) {
      colors.add(JSON.stringify(args));
    }
  }

  console.log("pdf-colors", [...colors]);
}

const sharpOk = await trySharp();
if (!sharpOk) {
  await extractImages();
}
await extractColors();

if (fs.existsSync(outPng)) {
  const { dominant } = await sharp(outPng).stats();
  console.log(
    "dominant",
    dominant.map((c) => ({
      r: Math.round(c.r),
      g: Math.round(c.g),
      b: Math.round(c.b),
      hex: `#${[c.r, c.g, c.b]
        .map((v) => Math.round(v).toString(16).padStart(2, "0"))
        .join("")}`,
    }))
  );
}
