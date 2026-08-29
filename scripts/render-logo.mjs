import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 512];
const svg = readFileSync("public/logo.svg", "utf8");
mkdirSync("public/brand", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

for (const size of sizes) {
  await page.setViewportSize({ width: size, height: size });
  const markup = svg.replace("<svg", `<svg width="${size}" height="${size}"`);
  await page.setContent(
    `<!DOCTYPE html><html><head><style>html,body{margin:0;padding:0;background:#080c14}</style></head><body>${markup}</body></html>`,
    { waitUntil: "load" },
  );
  const buf = await page.screenshot({ type: "png", omitBackground: false });
  writeFileSync(path.join("public/brand", `logo-${size}.png`), buf);
  console.log("wrote", size);
}

await browser.close();
