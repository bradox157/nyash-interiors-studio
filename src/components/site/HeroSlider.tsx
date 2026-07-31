import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { heroSlides } from "@/lib/site-data";

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-primary">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt=""
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1600px] px-6">
              <div className="max-w-2xl">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent">
                  {slide.eyebrow}
                </p>
                <h1 className="mt-6 font-display text-4xl leading-[1.1] text-primary-foreground sm:text-5xl md:text-6xl">
                  {slide.title}
                  <span className="mt-2 block whitespace-pre-line text-accent">
                    {slide.highlight}
                  </span>
                </h1>
                <Link
                  to="/contact"
                  className="mt-9 inline-flex items-center gap-3 bg-accent px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-5 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-5 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-8 transition-colors ${
              i === index ? "bg-accent" : "bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
