export function FaqSection({ content }) {
  return (
    <section className="section-shell">
      <div className="px-8 py-24 max-sm:p-5">
        <div className="flex items-center justify-center mb-12">
          <h2 className="max-w-md text-center font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {content.label}
          </h2>
        </div>
        <div className="space-y-3">
          {content.items.map((item) => (
            <details key={item.question} className="group px-6 py-4 bg-white rounded-3xl shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold marker:content-none">
                <span>{item.question}</span>
                <span className="text-4xl font-light text-ember transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-3xl text-base leading-8 text-ink/60">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
