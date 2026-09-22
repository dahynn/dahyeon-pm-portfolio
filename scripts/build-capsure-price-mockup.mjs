import sharp from 'sharp';
import path from 'node:path';

const root = process.cwd();
const asset = (...parts) => path.join(root, ...parts);

const framePath = asset('public', 'assets', 'iphone-pair-transparent.png');
const frontPath = asset('docs', 'portfolio-redesign', 'mockup-sources', 'capsure', '10-price-input-default.png');
const backPath = asset('docs', 'portfolio-redesign', 'mockup-sources', 'capsure', '12-price-input-complete.png');
const outputPath = asset('public', 'assets', 'capsure-price-input-silver-mockup.png');

const screenLayer = async (source, width, height, radius) => {
  const screenshot = await sharp(source)
    .resize(width, height, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();

  const mask = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" rx="${radius}" fill="white"/></svg>`,
  );

  return sharp(screenshot)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
};

const back = await screenLayer(backPath, 424, 963, 60);
const front = await screenLayer(frontPath, 447, 1005, 64);

await sharp({
  create: {
    width: 1227,
    height: 1282,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([
    { input: back, left: 606, top: 95 },
    { input: front, left: 222, top: 172 },
    { input: framePath, left: 0, top: 0, blend: 'multiply' },
  ])
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(outputPath);
