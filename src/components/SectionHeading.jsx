export function SectionHeading({ label, title, description, align = 'left' }) {
  const alignment =
    align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';

  return (
    <div className={alignment}>
      <span className="section-label">{label}</span>
      <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
