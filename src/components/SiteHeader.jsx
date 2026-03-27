import { defaultLanguage, getAssetPath, getLocalePath } from '../content/siteContent';
import { LanguageToggle } from './LanguageToggle';

export function SiteHeader({ language, onLanguageChange }) {
  return (
    <header className="section-shell relative z-10 p-8 max-sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <a
          href={getLocalePath(defaultLanguage, window.location.pathname)}
          className="flex min-w-0 items-center gap-3"
          aria-label="Go to homepage"
        >
          <img
            src={getAssetPath('/icon.svg', window.location.pathname)}
            alt="QuickTube Organizer logo"
            className="w-8 h-8"
          />
          <div className="min-w-0">
            <div className="font-display text-lg font-bold">QuickTube Organizer</div>
          </div>
        </a>
        <LanguageToggle language={language} onChange={onLanguageChange} />
      </div>
    </header>
  );
}
