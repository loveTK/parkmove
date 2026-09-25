// Usage: node scripts/shoot.mjs <baseUrl> <outDir>  — screenshots + OG image via headless Chromium
import { chromium } from "/opt/node22/lib/node_modules/playwright/index.mjs";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const [base = "http://localhost:4173", outDir = "shots"] = process.argv.slice(2);
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();

// OG image
const og = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await og.goto("file://" + fileURLToPath(new URL("./og.html", import.meta.url)));
await og.evaluate(() => document.fonts.ready);
await og.screenshot({ path: fileURLToPath(new URL("../public/og.png", import.meta.url)), type: "png" });
await og.close();

for (const [name, vp] of Object.entries({
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
})) {
  const page = await browser.newPage({ viewport: vp, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto(base, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${outDir}/${name}-hero.png` });
  // scroll through so whileInView animations fire, then full-page shot
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto";
    for (let y = 0; y < document.body.scrollHeight; y += 300) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${outDir}/${name}-full.png`, fullPage: true });
  const links = await page.$$eval("a[href^='tel:'],a[href^='sms:'],a[href='#quote']", (as) =>
    as.map((a) => a.getAttribute("href")),
  );
  const title = await page.title();
  const ld = await page.$$eval("script[type='application/ld+json']", (s) => s.length);
  console.log(name, { title, ldBlocks: ld, ctaLinks: [...new Set(links)], errors });
  await page.close();
}
await browser.close();
