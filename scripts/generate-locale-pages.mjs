import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const localesDir = path.join(rootDir, 'src', 'locales');
const defaultLocale = 'en-US';

const localeFiles = ['de-DE', 'en-US', 'fr-FR', 'ja-JP', 'ko-KR', 'zh-CN'];
const baseHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');

for (const locale of localeFiles) {
  const slug = locale.toLowerCase();
  const localeJson = JSON.parse(
    await readFile(path.join(localesDir, `${locale}.json`), 'utf8'),
  );

  const localizedHtml = baseHtml
    .replace('<html lang="en">', `<html lang="${localeJson.htmlLang}">`)
    .replaceAll('./assets/', '../assets/');

  const targetDir = path.join(distDir, slug);
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, 'index.html'), localizedHtml, 'utf8');
}

await cp(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
