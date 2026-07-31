# Nyash Interiors & Designer Ltd — Website

A multi-page marketing site for Nyash Interiors & Designer Ltd, styled closely on finelivinginteriorske.com (deep navy + gold luxury interior-design look), with Nyash's own details.

## Visual direction (matched to the reference)

- Palette: deep navy (#0b2545-ish) headers/footers, gold/brass accent (#c9a24d), warm off-white body sections.
- Typography: elegant serif headings + clean sans body.
- Header pattern copied from the reference: navy top bar with centered nav, logo left, "Call Us 0723 624854" right with gold circular social icons; below it a white info strip with Location / Email / Call Us.
- Gold circular buttons, thin gold dividers, subtle uppercase eyebrow labels above section headings, understated fade/slide motion.

## Pages

1. **Home** (`/`, replaces the placeholder)
   - Full-bleed hero slider (3 rotating slides) with eyebrow, large serif headline, and a gold "Get Started" CTA.
   - Welcome / intro section: "Welcome to Nyash Interiors & Designer Ltd" with copy, Kamiti Rd Nairobi presence, and a WhatsApp/call CTA.
   - Numbered pillar list (4 items, 01–04) as in the reference.
   - Stats band on navy: years, completed projects, happy clients, team.
   - Vision & Mission split with image.
   - Featured projects grid (6 cards with rating badge, title, meta tags).
   - Services grid built from the real service list: appliance selection, bathroom design, bedroom design, cabinetry & hardware design, wardrobe design, commercial interior design, custom art selection.
   - Reviews section: 4.7 rating, 3 reviews, star bar breakdown, review cards, "Rate & Review on Google" link.
   - Contact/CTA band + footer with hours ("Open · Closes 5 pm"), address, phone.
2. **About** — story, vision/mission, why choose us, stats.
3. **What We Do** — full service detail cards.
4. **Projects** — project grid.
5. **Gallery** — masonry image grid.
6. **FAQs** — accordion.
7. **Contact** — details, hours, phone/WhatsApp links, map embed placeholder, contact form (front-end only; submissions not stored unless you want a backend later).

## Imagery

Interior photography is generated (AI) to match the luxury interior aesthetic — hero slides, project cards, gallery, about. If you have real Nyash photos, send them and I'll swap them in.

## Technical notes

- TanStack Start routes under `src/routes/`; shared Header/Footer in `__root.tsx`.
- Navy/gold design tokens defined in `src/styles.css` (`@theme inline`, oklch); no hardcoded colors in components.
- Reusable components: HeroSlider, SectionHeading, StatCounter, ProjectCard, ServiceCard, ReviewCard, FAQAccordion.
- Per-route SEO `head()` with unique titles/descriptions, plus LocalBusiness JSON-LD (name, address Kamiti Rd Nairobi, phone 0723 624854, rating 4.7/3 reviews, hours).
- Static content only; no database. Contact form can be wired to email/Cloud storage later if you want.

## Assumptions to confirm (I'll proceed with these unless you say otherwise)

- Email address unknown — I'll omit the email item or use a placeholder `info@nyashinteriors.co.ke`.
- Stats numbers will be plausible placeholders you can edit.
