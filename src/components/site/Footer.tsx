import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { business, navLinks, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="flex h-12 w-12 items-center justify-center border border-accent font-display text-lg tracking-widest text-accent">
            NI
          </span>
          <h3 className="mt-5 font-display text-xl">{business.name}</h3>
          <p className="mt-4 font-body text-sm leading-relaxed text-primary-foreground/70">
            Interior design, bespoke cabinetry and full fit-out for homes and businesses across
            Nairobi. Rated {business.rating} from {business.reviewCount} Google reviews.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Explore</h4>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-body text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Services</h4>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.title} className="font-body text-sm text-primary-foreground/70">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Get in touch</h4>
          <ul className="mt-5 space-y-4 font-body text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {business.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={business.phoneHref} className="hover:text-accent">
                {business.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${business.email}`} className="hover:text-accent">
                {business.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {business.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-6 py-6 font-body text-xs text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Kamiti Rd, Nairobi · Open · Closes 5 pm</p>
        </div>
      </div>
    </footer>
  );
}
