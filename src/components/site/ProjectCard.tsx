import { Star } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export function ProjectCard({
  image,
  title,
  meta,
  rating,
  index = 0,
}: {
  image: string;
  title: string;
  meta: string[];
  rating: string;
  index?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`group overflow-hidden border border-border bg-card transition-all duration-700 ease-out hover:border-accent hover:shadow-[0_0_0_1px_var(--color-accent)] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: inView ? `${(index % 3) * 120}ms` : "0ms" }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1200}
          height={900}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.12]"
        />
        <div className="absolute left-5 top-5 bg-primary/90 px-4 py-2 text-center">
          <p className="font-display text-base text-accent">{rating}</p>
          <p className="font-body text-[0.6rem] uppercase tracking-[0.18em] text-primary-foreground/70">
            Rating
          </p>
        </div>
        <span className="absolute bottom-5 right-5 font-display text-2xl text-primary-foreground opacity-0 drop-shadow transition-opacity duration-500 group-hover:opacity-100">
          {String(index + 1).padStart(2, "0")}
        </span>
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
