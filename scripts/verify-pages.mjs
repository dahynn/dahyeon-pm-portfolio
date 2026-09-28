import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist/client');
const html = await readFile(resolve(outputDirectory, 'index.html'), 'utf8');

assert.match(html, /<title>유다현 [|] 현대엘리베이터 디지털 서비스 PM 포트폴리오<[/]title>/, 'The exported page must have its company-specific portfolio title.');
assert.ok(html.includes('/assets/hyundai-elevator-wordmark.svg'), 'Hyundai Elevator logo must be present.');
assert.ok(html.includes('/assets/hyundai-elevator-favicon.png'), 'Hyundai Elevator favicon must be present.');
assert.doesNotMatch(html, /hanwha-(?:symbol|life)/i, 'Former brand assets must not be referenced.');
for (const section of ['introduction', 'journey', 'projects', 'capsure', 'capsure-detail', 'roundy', 'roundy-detail', 'san', 'san-detail']) {
  assert.ok(html.includes(`id="${section}"`), `Missing exported section: ${section}`);
}

const assetPaths = new Set();
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const url = match[1];
  if (!url.startsWith('/') || url.startsWith('//')) continue;
  const path = decodeURIComponent(url.split(/[?#]/)[0]);
  if (path === '/') continue;
  assetPaths.add(path);
}

for (const path of assetPaths) {
  await access(resolve(outputDirectory, `.${path}`));
}

await access(resolve(outputDirectory, '404.html'));
assert.match(await readFile(resolve(outputDirectory, '404.html'), 'utf8'), /hyundai-elevator-favicon[.]png/, 'The 404 page must use the company favicon.');
console.log(`Static portfolio verified: 9 sections, ${assetPaths.size} local assets, 404 page.`);
