import { LanguageToggle } from './LanguageToggle';
import { STORE_URL, SUPPORT_LINK } from '../content/siteContent';

export function SiteFooter({ language, onLanguageChange, content }) {
  return (
    <footer className="section-shell">
      <div className="flex flex-col gap-5 p-8 max-sm:p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-lg font-extrabold">QuickTube Organizer</div>
          <div className="mt-1 text-sm text-ink/50">{content.copyright}</div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-ink/65">
          <a href={STORE_URL} target="_blank" rel="noreferrer" className="hover:text-ink">
            {content.store}
          </a>
          <a href={SUPPORT_LINK} className="hover:text-ink">
            {content.support}
          </a>
          <LanguageToggle language={language} onChange={onLanguageChange} />
        </div>
      </div>
    </footer>
  );
}
