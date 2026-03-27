import { useEffect, useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { SiteFooter } from './components/SiteFooter';
import {
  defaultLanguage,
  getLocaleFromPath,
  getLocalePath,
  languages,
} from './content/siteContent';

const LANGUAGE_STORAGE_KEY = 'quicktube-site-language';

export default function App() {
  const [language, setLanguage] = useState<keyof typeof languages>(defaultLanguage);
  const content = languages[language];

  useEffect(() => {
    const localeFromPath = getLocaleFromPath(window.location.pathname);
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (localeFromPath) {
      setLanguage(localeFromPath as keyof typeof languages);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, localeFromPath);
      return;
    }

    if (savedLanguage && savedLanguage in languages) {
      setLanguage(savedLanguage as keyof typeof languages);
      const savedPath = getLocalePath(savedLanguage, window.location.pathname);
      if (window.location.pathname !== savedPath) {
        window.location.replace(savedPath);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [content.htmlLang, language]);

  function handleLanguageChange(nextLanguage: keyof typeof languages) {
    if (!(nextLanguage in languages)) {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    const nextPath = getLocalePath(nextLanguage, window.location.pathname);
    if (window.location.pathname !== nextPath) {
      window.location.assign(nextPath);
      return;
    }
    setLanguage(nextLanguage);
  }

  return (
    <div className="min-h-screen bg-glow text-ink">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_45%)]" />
      <SiteHeader language={language} onLanguageChange={handleLanguageChange} />
      <main className="space-y-24 pb-24 pt-14 md:space-y-32 md:pt-20">
        <HeroSection content={content.hero} />
        <FeaturesSection content={content.features} />
        <FaqSection content={content.faq} />
        <CtaSection content={content.cta} />
      </main>
      <SiteFooter language={language} onLanguageChange={handleLanguageChange} content={content.footer} />
    </div>
  );
}
