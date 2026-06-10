/**
 * Visual verification helper: screenshots a page with real wall-clock waits
 * so Motion/WebGL animations settle. Usage:
 *   node scripts/screenshot.mjs <url> <outfile> [waitMs] [width] [height] [scrollY]
 */
import puppeteer from "puppeteer-core";

const [url, out, waitMs = "6000", width = "1440", height = "900", scrollY = "0"] =
  process.argv.slice(2);

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: [
    "--no-sandbox",
    "--enable-unsafe-swiftshader",
    "--use-gl=angle",
    "--hide-scrollbars",
  ],
});

const page = await browser.newPage();
await page.setViewport({ width: Number(width), height: Number(height) });
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
if (Number(scrollY) > 0) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), Number(scrollY));
}
await new Promise((r) => setTimeout(r, Number(waitMs)));
await page.screenshot({ path: out });
await browser.close();
console.log(`saved ${out}`);
