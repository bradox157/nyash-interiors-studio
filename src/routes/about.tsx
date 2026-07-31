import { createFileRoute } from "@tanstack/react-router";
import {
  Calculator,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  FileText,
  LayoutGrid,
  Package,
  ShieldAlert,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { contractorRoles, specializations, stats } from "@/lib/site-data";
import aboutImage from "@/assets/about.jpg";

const roleIcons = [
  ClipboardList,
  LayoutGrid,
  FileText,
  Calculator,
  Package,
  ShieldCheck,
  Users,
  CalendarClock,
  ShieldAlert,
  ClipboardCheck,
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nyashera Interiors — Nairobi" },
      {
        name: "description",
        content:
          "Meet Nyashera Interiors, an interior design and joinery practice on Kamiti Rd, Nairobi, delivering residential and commercial interiors.",
      },
      { property: "og:title", content: "About Nyashera Interiors" },
      {
        property: "og:description",
        content: "Our story, vision and mission as a Nairobi interior design and fit-out team.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Design that fits the way you live",
    body: "We start with how a room is actually used — traffic, storage, light — then style it.",
  },
  {
    title: "Our own joinery workshop",
    body: "Cabinetry, wardrobes and vanities are built in-house, so quality and timing stay with us.",
  },
  {
    title: "Clear, itemised pricing",
    body: "You get a written quotation before work begins and updates as the project moves.",
  },
  {
    title: "One team through to handover",
    body: "Design, fabrication, installation and styling are coordinated by the same people.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="About Nyashera Interiors" />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2">
          <img
            src={aboutImage}
            alt="Director of Nyashera Interiors"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full object-cover object-top"
          />
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="A Nairobi practice built around craft"
          >
            <p>
              Nyashera Interiors works out of Kamiti Rd, Nairobi, designing and
              building interiors for homes, offices and commercial spaces. What started as a small
              joinery and design outfit now handles complete fit-outs — space planning, bespoke
              cabinetry, finishes, appliances and styling.
            </p>
            <p className="mt-4">
              We keep our teams small and hands-on. The designer who draws your kitchen is the same
              person who checks the installation, which is why our clients keep coming back and
              referring us.
            </p>
          </SectionHeading>
        </div>
      </section>

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

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Why choose us" title="How we work" />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="bg-background p-9">
                <span className="font-display text-3xl text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-primary">{v.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Scope of our work"
            title="Roles of an Interior Designer as a Contractor"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {contractorRoles.map((role, i) => {
              const Icon = roleIcons[i] ?? ClipboardList;
              return (
                <div
                  key={role}
                  className="group relative flex flex-col gap-4 border border-border bg-background p-6 transition-colors hover:border-accent"
                >
                  <span className="absolute right-4 top-3 font-display text-3xl text-accent/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="h-7 w-7 text-accent transition-transform group-hover:scale-110"
                    strokeWidth={1.3}
                  />
                  <p className="font-display text-base leading-snug text-primary">{role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Where we work" title="Areas of Specialization" />
          <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
            {specializations.map((s) => (
              <span
                key={s}
                className="rounded-full border border-accent/40 bg-accent/5 px-5 py-2.5 font-body text-sm text-primary transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
