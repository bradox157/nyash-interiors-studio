import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ExhibitCard } from "@/components/site/ExhibitCard";
import { MarqueeStrip } from "@/components/site/MarqueeStrip";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Nyashera Interiors" },
      {
        name: "description",
        content:
          "Recent interior design and fit-out projects by Nyashera Interiors across Nairobi — bedrooms, bathrooms, wardrobes, kitchens and commercial spaces.",
      },
      { property: "og:title", content: "Our Projects — Nyashera Interiors" },
      {
        property: "og:description",
        content: "A look at homes and workspaces we have designed and built in Nairobi.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Selected work" title="Our Projects" />

      <MarqueeStrip images={projects.map((p) => ({ src: p.image, alt: p.title }))} />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          {projects.map((p, i) => (
            <ExhibitCard key={p.title} {...p} index={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
    </>
  );
}
