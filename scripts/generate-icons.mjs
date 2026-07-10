import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logo = path.join(root, "public", "logo.png");
const publicDir = path.join(root, "public");

await sharp(logo).resize(64, 64, { fit: "contain", background: "#F7EBE6" }).png().toFile(path.join(publicDir, "favicon.png"));
await sharp(logo).resize(180, 180, { fit: "contain", background: "#F7EBE6" }).png().toFile(path.join(publicDir, "apple-icon.png"));
await sharp(logo)
  .resize(1200, 630, { fit: "contain", background: { r: 247, g: 235, b: 230 } })
  .png()
  .toFile(path.join(publicDir, "og-image.png"));

console.log("icons generated");
