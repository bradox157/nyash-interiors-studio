import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Mail, MapPin, Menu, Phone, Smartphone, Youtube } from "lucide-react";
import { business, navLinks } from "@/lib/site-data";

function Logo() {
  return (
    <Link to="/" className="inline-flex flex-col items-start leading-none">
      <span className="flex h-11 w-11 items-center justify-center border border-accent font-display text-lg tracking-widest text-accent">
        NI
      </span>
      <span className="mt-2 font-display text-[0.65rem] uppercase tracking-[0.32em] text-primary-foreground">
        Nyash Interiors
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="bg-primary">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-5">
          <Logo />

          <nav className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-display text-[0.95rem] text-primary-foreground/85 transition-colors hover:text-accent"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 lg:flex">
              <Smartphone className="h-7 w-7 text-accent" strokeWidth={1.2} />
              <div className="leading-tight">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                  Call Us
                </p>
                <a
                  href={business.phoneHref}
                  className="font-display text-lg text-primary-foreground hover:text-accent"
                >
                  {business.phone}
                </a>
              </div>
            </div>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-accent xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1600px] justify-end gap-3 px-6 pb-6">
          {[Facebook, Instagram, Youtube].map((Icon, i) => (
            <a
              key={i}
              href={business.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-85"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {open ? (
          <div className="border-t border-accent/20 px-6 pb-6 xl:hidden">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="py-2 font-display text-base text-primary-foreground/85 hover:text-accent"
                  activeProps={{ className: "text-accent" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-x-12 gap-y-3 px-6 py-4">
          <span className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <strong className="font-semibold text-primary">Location:</strong> {business.address}
          </span>
          <span className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-accent" />
            <strong className="font-semibold text-primary">Email:</strong> {business.email}
          </span>
          <span className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-accent" />
            <strong className="font-semibold text-primary">Call Us:</strong>{" "}
            <a href={business.phoneHref} className="hover:text-accent">
              {business.phone}
            </a>
          </span>
          <span className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <strong className="font-semibold text-primary">Open</strong> · Closes 5 pm
          </span>
        </div>
      </div>
    </header>
  );
}
