import { Star } from "lucide-react";

export function ProjectCard({
  image,
  title,
  meta,
  rating,
}: {
  image: string;
  title: string;
  meta: string[];
  rating: string;
}) {
  return (
    <article className="group overflow-hidden border border-border bg-card">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1200}
          height={900}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-5 top-5 bg-primary/90 px-4 py-2 text-center">
          <p className="font-display text-base text-accent">{rating}</p>
          <p className="font-body text-[0.6rem] uppercase tracking-[0.18em] text-primary-foreground/70">
            Rating
          </p>
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-xl leading-snug text-primary">{title}</h3>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {meta.map((m) => (
            <li
              key={m}
              className="flex items-center gap-2 font-body text-sm text-muted-foreground"
            >
              <Star className="h-3 w-3 text-accent" />
              {m}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
