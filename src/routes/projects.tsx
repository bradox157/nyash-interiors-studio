import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
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
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </>
  );
}
