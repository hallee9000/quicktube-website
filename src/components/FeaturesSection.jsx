export function FeaturesSection({ content }) {
  return (
    <section className="section-shell">
      <div className="px-8 py-24 max-sm:p-5">
        <div className="flex items-center justify-center mb-12">
          <h2 className="max-w-md text-center font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {content.label}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item.title}
              className={`bg-white rounded-3xl shadow-sm p-6 md:p-5`}
            >
              <img src={item.image} alt={item.title} className="w-full h-auto mb-4 rounded-xl border border-ink/5" />
              <div>
                <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
                <p className="leading-snug text-ink/60">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
