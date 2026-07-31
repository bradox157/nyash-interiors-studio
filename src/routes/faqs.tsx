import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/site/PageHero";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Working With Nyashera Interiors" },
      {
        name: "description",
        content:
          "Common questions about our interior design process, timelines, pricing and areas served in Nairobi.",
      },
      { property: "og:title", content: "FAQs — Nyashera Interiors" },
      {
        property: "og:description",
        content: "How our design, joinery and fit-out process works from first call to handover.",
      },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Good to know" title="Frequently Asked Questions" />
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
