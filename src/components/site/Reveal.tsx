import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms, useful when revealing items in a grid. */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Quiet scroll-triggered fade + rise, used on grid items across the site
 * (services, projects). Deliberately restrained — the hero's liquid backdrop
 * is the one bold motion moment; this just gives content a settled entrance.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
