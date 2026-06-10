import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "src/assets";
const OUT = "public/images";
const WIDTHS = [1920, 960];

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const name = path.parse(file).name;
  const input = sharp(path.join(SRC, file));
  const meta = await input.metadata();

  for (const width of WIDTHS) {
    if (meta.width && meta.width < width && width !== Math.min(...WIDTHS)) continue;
    const suffix = width === WIDTHS[0] ? "" : `-${width}`;
    const resized = input.clone().resize({ width: Math.min(width, meta.width ?? width) });
    const avif = await resized
      .clone()
      .avif({ quality: 55 })
      .toFile(path.join(OUT, `${name}${suffix}.avif`));
    const webp = await resized
      .clone()
      .webp({ quality: 72 })
      .toFile(path.join(OUT, `${name}${suffix}.webp`));
    console.log(`${name}${suffix}: avif ${(avif.size / 1024).toFixed(0)}KB, webp ${(webp.size / 1024).toFixed(0)}KB`);
  }
}
