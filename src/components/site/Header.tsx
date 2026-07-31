import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  light = false,
  titleClassName,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  titleClassName?: string;
  children?: ReactNode;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`font-body text-xs uppercase tracking-[0.28em] ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem] ${
          titleClassName ?? (light ? "text-primary-foreground" : "text-primary")
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-5 block h-px w-20 bg-accent ${align === "center" ? "mx-auto" : ""}`}
      />
      {children ? (
        <div
          className={`mt-6 font-body text-base leading-relaxed ${
            light ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
