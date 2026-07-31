import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Home as HomeIcon, Layers, Building2, HandCoins, Phone, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectCard } from "@/components/site/ProjectCard";
import { business, pillars, projects, reviews, services, stats } from "@/lib/site-data";
import aboutImage from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nyashera Interiors — Interior Design in Nairobi" },
      {
        name: "description",
        content:
          "Interior design, bespoke cabinetry, wardrobes and full fit-out for homes and businesses. Kamiti Rd, Nairobi. Rated 4.7 on Google.",
      },
      { property: "og:title", content: "Nyashera Interiors — Interior Design in Nairobi" },
      {
        property: "og:description",
        content:
          "Transforming Nairobi homes and workspaces into timeless, functional interiors. Call 0723 624854.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </span>
  );
}

function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Welcome */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2">
          <div>
            <Compass className="h-9 w-9 text-accent" strokeWidth={1.2} />
            <SectionHeading
              align="left"
              eyebrow="Transforming spaces into masterpieces"
              title={<>Welcome to Nyashera Interiors</>}
              titleClassName="text-accent"
            >
              <p>
                <strong className="font-semibold text-primary">Nyashera Interiors</strong> is a{" "}
                <strong className="font-semibold text-primary">Nairobi-based</strong> interior
                design and fit-out practice working from{" "}
                <strong className="font-semibold text-primary">Kamiti Rd</strong>. We design and
                build residential and commercial interiors — from a single bedroom or bathroom
                through to complete homes, offices and showrooms.
              </p>
              <p className="mt-4">
                Our work covers space planning, bespoke cabinetry and wardrobes, appliance and
                finish specification, and the curated art and accessories that finish a room. One
                team, from the first sketch to the final handover.
              </p>
            </SectionHeading>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                Ready to get started? <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-3 border border-primary px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> {business.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = [HomeIcon, Layers, Building2, HandCoins][i] ?? HomeIcon;
              return (
                <div
                  key={p.number}
                  className="relative flex flex-col gap-4 bg-background p-8"
                >
                  <span className="absolute right-5 top-3 font-display text-5xl text-accent/15">
                    {p.number}
                  </span>
                  <Icon className="h-8 w-8 text-accent" strokeWidth={1.2} />
                  <h3 className="font-display text-xl leading-snug text-primary">{p.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary px-6 py-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl text-accent">{s.value}</p>
              <p className="mt-3 font-body text-xs uppercase tracking-[0.24em] text-primary-foreground/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & mission */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Transforming spaces into masterpieces"
            title="We are an award-winning interior design & construction team in Nairobi"
            titleClassName="font-semibold text-accent"
          />
          <div className="mt-14 grid items-start gap-14 lg:grid-cols-2">
            <img
              src={aboutImage}
              alt="Nyashera Interiors designer reviewing drawings and material samples"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <Accordion type="single" collapsible defaultValue="vision" className="w-full">
              <AccordionItem value="vision" className="border-none">
                <AccordionTrigger className="bg-accent px-6 py-5 font-display text-lg font-semibold text-accent-foreground hover:no-underline [&>svg]:text-accent-foreground">
                  Vision statement
                </AccordionTrigger>
                <AccordionContent className="border border-t-0 border-border bg-background px-6 pb-6 pt-4 font-body leading-relaxed text-muted-foreground">
                  Transforming everyday Kenyan spaces into timeless, comfortable and beautifully
                  made interiors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mission" className="mt-3 border-none">
                <AccordionTrigger className="bg-accent px-6 py-5 font-display text-lg font-semibold text-accent-foreground hover:no-underline [&>svg]:text-accent-foreground">
                  Mission statement
                </AccordionTrigger>
                <AccordionContent className="border border-t-0 border-border bg-background px-6 pb-6 pt-4 font-body leading-relaxed text-muted-foreground">
                  To design and deliver high-quality, honestly priced interiors — combining
                  thoughtful design, our own joinery workshop and careful project management so
                  that every client gets a space that works as well as it looks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-secondary px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Popular projects @Nyashera Interiors" title="Featured Projects" />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 border border-primary px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="What we do" title="Our Services" />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className="bg-background p-9">
                <span className="font-display text-3xl text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-primary">{s.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-primary px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading light eyebrow="Google review summary" title="What our clients say" />
          <div className="mt-14 grid gap-12 lg:grid-cols-[320px_1fr]">
            <div className="text-center lg:text-left">
              <p className="font-display text-6xl text-accent">{business.rating}</p>
              <div className="mt-3 flex justify-center lg:justify-start">
                <Stars count={5} />
              </div>
              <p className="mt-2 font-body text-sm text-primary-foreground/70">
                {business.reviewCount} Google reviews
              </p>
              <div className="mt-6 space-y-2">
                {[
                  { star: 5, pct: 67 },
                  { star: 4, pct: 33 },
                  { star: 3, pct: 0 },
                  { star: 2, pct: 0 },
                  { star: 1, pct: 0 },
                ].map((r) => (
                  <div key={r.star} className="flex items-center gap-3">
                    <span className="w-3 font-body text-xs text-primary-foreground/60">
                      {r.star}
                    </span>
                    <span className="h-1.5 flex-1 bg-primary-foreground/15">
                      <span className="block h-full bg-accent" style={{ width: `${r.pct}%` }} />
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={business.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-accent hover:opacity-80"
              >
                Rate &amp; review on Google <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {reviews.map((r) => (
                <blockquote
                  key={r.name}
                  className="border border-primary-foreground/15 p-7 text-primary-foreground"
                >
                  <Stars count={r.stars} />
                  <p className="mt-4 font-body text-sm leading-relaxed text-primary-foreground/75">
                    “{r.text}”
                  </p>
                  <footer className="mt-5 font-display text-lg text-accent">{r.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-8 border border-accent/40 bg-card p-12">
          <div>
            <h2 className="font-display text-3xl text-primary">Let’s design your space</h2>
            <p className="mt-3 font-body text-muted-foreground">
              Kamiti Rd, Nairobi · Open · Closes 5 pm
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
