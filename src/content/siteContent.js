import enUS from '../locales/en-US.json';
import zhCN from '../locales/zh-CN.json';
import jaJP from '../locales/ja-JP.json';
import koKR from '../locales/ko-KR.json';
import frFR from '../locales/fr-FR.json';
import deDE from '../locales/de-DE.json';

export const STORE_URL =
  'https://chromewebstore.google.com/detail/quicktube-organizer-youtu/bnoplbckpkgeadmkpkhgabkllifibmcb?authuser=0&hl=zh-CN';

export const SUPPORT_LINK =
  'mailto:your-email@example.com?subject=QuickTube%20Organizer%20Feedback';

export const languages = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'ja-JP': jaJP,
  'ko-KR': koKR,
  'fr-FR': frFR,
  'de-DE': deDE,
};

export const defaultLanguage = 'en-US';

export const localeLabels = {
  'en-US': 'English',
  'zh-CN': '中文',
  'ja-JP': '日本語',
  'ko-KR': '한국어',
  'fr-FR': 'Français',
  'de-DE': 'Deutsch',
};

export const localeSlugs = Object.fromEntries(
  Object.keys(languages).map((locale) => [locale, locale.toLowerCase()]),
);

export const localesBySlug = Object.fromEntries(
  Object.entries(localeSlugs).map(([locale, slug]) => [slug, locale]),
);

function getBaseSegments(pathname = '/') {
  const segments = pathname.split('/').filter(Boolean);
  const lastSegment = segments.at(-1);
  return localesBySlug[lastSegment?.toLowerCase()] ? segments.slice(0, -1) : segments;
}

function getBasePrefix(pathname = '/') {
  const baseSegments = getBaseSegments(pathname);
  return baseSegments.length ? `/${baseSegments.join('/')}` : '';
}

export function getLocalePath(locale, pathname = '/') {
  const slug = localeSlugs[locale];
  const prefix = getBasePrefix(pathname);
  return locale === defaultLanguage ? `${prefix || ''}/` : `${prefix}/${slug}/`;
}

export function getLocaleFromPath(pathname) {
  const segments = pathname.toLowerCase().split('/').filter(Boolean);
  const slug = segments.at(-1);
  return localesBySlug[slug] ?? null;
}

export function getAssetPath(assetPath, pathname = '/') {
  const prefix = getBasePrefix(pathname);
  const normalizedAssetPath = assetPath.replace(/^\/+/, '');
  return `${prefix}/${normalizedAssetPath}`;
}
