import { Star } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export function ExhibitCard({
  image,
  title,
  meta,
  rating,
  index,
  reverse = false,
}: {
  image: string;
  title: string;
  meta: string[];
  rating: string;
  index: number;
  reverse?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`grid gap-10 border-b border-border py-16 transition-all duration-700 ease-out first:pt-0 md:grid-cols-2 md:items-center md:gap-16 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"
      }`}
    >
      <div
        className={`group relative overflow-hidden ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
        />
        <span className="absolute left-0 top-0 bg-primary/90 px-5 py-2 font-display text-sm tracking-wide text-accent">
          Exhibit No. {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className={reverse ? "md:order-1" : "md:order-2"}>
        <p className="font-body text-xs uppercase tracking-[0.28em] text-accent">
          {rating} — Client Rating
        </p>
        <h3 className="mt-4 font-display text-3xl leading-tight text-primary md:text-4xl">
          {title}
        </h3>
        <span className="mt-5 block h-px w-16 bg-accent" />
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {meta.map((m) => (
            <li
              key={m}
              className="flex items-center gap-2 font-body text-sm text-muted-foreground"
            >
              <Star className="h-3.5 w-3.5 text-accent" />
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
