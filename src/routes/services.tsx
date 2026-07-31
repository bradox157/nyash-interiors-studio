import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Do — Interior Design Services in Nairobi | Nyash Interiors" },
      {
        name: "description",
        content:
          "Bedroom, bathroom and wardrobe design, cabinetry and hardware, appliance selection, commercial interiors and custom art selection in Nairobi.",
      },
      { property: "og:title", content: "Interior Design Services — Nyash Interiors" },
      {
        property: "og:description",
        content: "Full-service interior design, joinery and fit-out from our Kamiti Rd workshop.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What we do?" title="Our Services" />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Design, build, finish"
            title="Everything your interior needs, under one roof"
          >
            <p>
              We take on single rooms and complete properties. Each service below can be delivered
              on its own or as part of a full fit-out.
            </p>
          </SectionHeading>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.title} className="border border-border bg-card p-9">
                <span className="font-display text-3xl text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-2xl text-primary">{s.title}</h2>
                <span className="mt-3 block h-px w-14 bg-accent" />
                <p className="mt-4 font-body leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Discuss your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
