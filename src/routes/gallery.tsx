import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { galleryImages } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Nyashera Interiors" },
      {
        name: "description",
        content:
          "Photo gallery of interiors, cabinetry and fit-out work completed by Nyashera Interiors in Nairobi.",
      },
      { property: "og:title", content: "Gallery — Nyashera Interiors" },
      {
        property: "og:description",
        content: "Interiors, joinery and styling completed by our Nairobi team.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Our work in pictures" title="Gallery" />
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] columns-1 gap-6 sm:columns-2 lg:columns-3">
          {galleryImages.map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="mb-6 w-full break-inside-avoid object-cover"
            />
          ))}
        </div>
      </section>
    </>
  );
}
