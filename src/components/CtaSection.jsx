import ChromeIcon from './ChromeIcon';
import { STORE_URL } from '../content/siteContent';

export function CtaSection({ content }) {
  return (
    <section className="section-shell">
      <div className="p-8 max-sm:p-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/60 md:text-lg">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-ember"
            >
              <ChromeIcon />
              {content.primary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
