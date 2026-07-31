import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nyashera Interiors — Kamiti Rd, Nairobi" },
      {
        name: "description",
        content:
          "Call 0723 624854 or send us a message. Nyashera Interiors, Kamiti Rd, Nairobi. Open Mon–Sat, closes 5 pm.",
      },
      { property: "og:title", content: "Contact Nyashera Interiors" },
      {
        property: "og:description",
        content: "Book a consultation for your home or commercial interior in Nairobi.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero eyebrow="Let’s talk" title="Contact Us" />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Visit or call" title="Nyashera Interiors">
              <p>
                Tell us about your space — a room, a whole home or a commercial fit-out — and we’ll
                come back with next steps.
              </p>
            </SectionHeading>

            <ul className="mt-8 space-y-5 font-body text-base text-muted-foreground">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                {business.address}
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <a href={business.phoneHref} className="hover:text-accent">
                  {business.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <a href={`mailto:${business.email}`} className="hover:text-accent">
                  {business.email}
                </a>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
                {business.hours} · Open · Closes 5 pm
              </li>
            </ul>

            <div className="mt-10 overflow-hidden border border-border">
              <iframe
                title="Map showing Nyashera Interiors on Kamiti Rd, Nairobi"
                src="https://www.google.com/maps?q=Kamiti%20Road%2C%20Nairobi%2C%20Kenya&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            className="border border-border bg-card p-9"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Thanks — we’ll be in touch shortly.");
            }}
          >
            <h2 className="font-display text-2xl text-primary">Send a message</h2>
            <span className="mt-3 block h-px w-14 bg-accent" />

            <div className="mt-7 space-y-5">
              <div>
                <label className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="mt-2 w-full border border-input bg-background px-4 py-3 font-body text-sm outline-none focus:border-accent"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Phone
                  </label>
                  <input
                    required
                    name="phone"
                    className="mt-2 w-full border border-input bg-background px-4 py-3 font-body text-sm outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full border border-input bg-background px-4 py-3 font-body text-sm outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Service
                </label>
                <select
                  name="service"
                  className="mt-2 w-full border border-input bg-background px-4 py-3 font-body text-sm outline-none focus:border-accent"
                >
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full border border-input bg-background px-4 py-3 font-body text-sm outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                {sent ? "Message sent" : "Send message"}
              </button>
              <p className="font-body text-xs text-muted-foreground">
                Prefer to talk? Call{" "}
                <a href={business.phoneHref} className="text-accent">
                  {business.phone}
                </a>{" "}
                or message us on{" "}
                <a href={business.whatsapp} target="_blank" rel="noreferrer" className="text-accent">
                  WhatsApp
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
