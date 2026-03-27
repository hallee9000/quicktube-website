import SidebarComparison from './SidebarComparison';
import ChromeIcon from './ChromeIcon';
import { STORE_URL } from '../content/siteContent';

export function HeroSection({ content }) {
  return (
    <section className="section-shell">
      <div className="p-8 max-sm:p-5">
        <div className="mx-auto max-w-4xl py-12 text-center">
          <h1 className="font-display text-4xl mb-2 font-extrabold leading-[1.02] tracking-tight text-ink md:text-5xl">
            {content.title}
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-base font-medium leading-8 text-ink/60 md:text-lg">
            {content.description}
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-ember"
          >
            <ChromeIcon />
            {content.primary}
          </a>
        </div>
        <div className="flex justify-center">
          <SidebarComparison content={content} />
        </div>
      </div>
    </section>
  );
}
