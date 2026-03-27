import { localeLabels } from '../content/siteContent';

export function LanguageToggle({ language, onChange }) {
  return (
    <div className="inline-flex rounded-full border border-ember/10 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
      <select
        value={language}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer bg-transparent text-sm font-semibold text-ink outline-none"
      >
        {Object.entries(localeLabels).map(([locale, label]) => (
          <option key={locale} value={locale}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
