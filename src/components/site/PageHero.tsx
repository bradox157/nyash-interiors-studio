export function PageHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="bg-primary px-6 py-20 text-center md:py-28">
      <p className="font-body text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h1 className="mt-4 font-display text-4xl text-primary-foreground md:text-5xl">{title}</h1>
      <span className="mx-auto mt-6 block h-px w-24 bg-accent" />
    </section>
  );
}
