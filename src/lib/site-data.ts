// All real project photography lives in /public/gallery — referenced by plain
// path, not import, so adding new photos later is just: drop the file in
// public/gallery/ and add one line below. No code changes needed elsewhere.
const g = (file: string) => `/gallery/${file}`;

export const business = {
  name: "Nyashera Interiors",
  shortName: "Nyashera Interiors",
  tagline: "Interior Design & Bespoke Fit-Out",
  phone: "0723 624854",
  phoneHref: "tel:+254723624854",
  whatsapp: "https://wa.me/254723624854",
  email: "info@nyashinteriors.co.ke",
  address: "Kamiti Rd, Nairobi, Kenya",
  hours: "Mon – Sat · 8:00 am – 5:00 pm",
  rating: 4.7,
  reviewCount: 3,
  googleReviewUrl: "https://www.google.com/search?q=Nyashera+Interiors+%26+Designer+Ltd",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Nyashera Interiors", to: "/about" },
  { label: "What We Do?", to: "/services" },
  { label: "Our Projects", to: "/projects" },
  { label: "FAQs", to: "/faqs" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const heroSlides = [
  {
    image: g("01-home-bar.jpg"),
    eyebrow: "Nyashera Interiors",
    title: "Transforming",
    highlight: "Spaces into timeless\nmasterpieces.",
  },
  {
    image: g("10-herringbone-living-room.jpg"),
    eyebrow: "Perfectly balanced luxury, functionality, & personal expression.",
    title: "Tailored solutions that",
    highlight: "Honour unique\nlifestyles & preferences",
  },
  {
    image: g("03-living-room-chandelier.jpg"),
    eyebrow: "Hi There! 👋",
    title: "Welcome to",
    highlight: "Nyashera Interiors &\nDesigner Ltd",
  },
];

export const pillars = [
  { number: "01", title: "Homes Styled Around Real Living" },
  { number: "02", title: "Bespoke Cabinetry & Joinery" },
  { number: "03", title: "Commercial Spaces With Character" },
  { number: "04", title: "Honest Budgets, On-Time Delivery" },
];

export const stats = [
  { value: "12", label: "Years in Industry" },
  { value: "480", label: "Completed Projects" },
  { value: "470", label: "Happy Clients" },
  { value: "25", label: "Our Team" },
];

export const services = [
  {
    title: "Bedroom Design",
    description:
      "Restful, well-proportioned bedrooms with layered lighting, soft finishes and storage that disappears into the architecture.",
  },
  {
    title: "Bathroom Design",
    description:
      "Spa-calm bathrooms — tiling layouts, vanities, sanitaryware and brassware specified and installed to a fine tolerance.",
  },
  {
    title: "Wardrobe Design",
    description:
      "Walk-ins and fitted wardrobes planned around your wardrobe itself, with internal lighting and considered hardware.",
  },
  {
    title: "Cabinetry & Hardware Design",
    description:
      "Kitchens, media walls, vanities and joinery built in our workshop with the ironmongery detailed to match.",
  },
  {
    title: "Appliance Selection",
    description:
      "We specify appliances that suit how you actually cook and live, then coordinate the services and openings for them.",
  },
  {
    title: "Commercial Interior Design",
    description:
      "Offices, showrooms and hospitality interiors that carry your brand and stand up to daily use.",
  },
  {
    title: "Custom Art Selection",
    description:
      "Art, mirrors and accessories sourced and curated so the final layer of the room feels personal, not generic.",
  },
];

export const projects = [
  {
    image: g("01-home-bar.jpg"),
    title: "Home bar & entertaining nook",
    meta: ["Custom Joinery", "Lighting Design"],
    rating: "10.0",
  },
  {
    image: g("15-marble-bathroom.jpg"),
    title: "Marble bathroom with backlit ceiling",
    meta: ["Bathroom Design", "Full Fit-Out"],
    rating: "10.0",
  },
  {
    image: g("06-walnut-kitchen.jpg"),
    title: "Walnut kitchen with black stone counters",
    meta: ["Kitchen Design", "Cabinetry & Hardware"],
    rating: "10.0",
  },
  {
    image: g("08-fluted-tv-wall.jpg"),
    title: "Fluted media wall with backlit shelving",
    meta: ["Living Room", "Custom Joinery"],
    rating: "9.8",
  },
  {
    image: g("07-kitchen-island.jpg"),
    title: "Kitchen island in walnut & marble",
    meta: ["Kitchen Design", "Appliance Selection"],
    rating: "10.0",
  },
  {
    image: g("11-herringbone-hallway.jpg"),
    title: "Herringbone hallway & statement lighting",
    meta: ["Interior Decor", "Lighting Design"],
    rating: "10.0",
  },
];

export const reviews = [
  {
    name: "Wanjiru M.",
    stars: 5,
    text: "They handled our kitchen cabinetry and wardrobes from drawings to installation. Clean work, honest pricing and they kept to the timeline.",
  },
  {
    name: "Peter K.",
    stars: 5,
    text: "Nyashera redesigned our office reception. The joinery finish is excellent and clients keep commenting on the space.",
  },
  {
    name: "Aisha N.",
    stars: 4,
    text: "Great eye for detail on the bedroom and bathroom. Small delay on delivery but the final result was worth it.",
  },
];

export const faqs = [
  {
    q: "Where are you based and which areas do you serve?",
    a: "Our workshop and office are on Kamiti Rd, Nairobi. We work across Nairobi and the surrounding counties, and we travel further afield for larger projects.",
  },
  {
    q: "How does a project start?",
    a: "It starts with a call or a site visit. We take measurements, talk through how you use the space and your budget, then come back with a concept, a layout and a costed proposal.",
  },
  {
    q: "Do you handle both design and installation?",
    a: "Yes. We design, fabricate cabinetry in our own workshop, and manage the installation and site finishes so you deal with one team throughout.",
  },
  {
    q: "Can you work with an existing contractor or architect?",
    a: "Absolutely. We regularly come in as the interiors and joinery partner on a project that already has a main contractor.",
  },
  {
    q: "How long does a typical project take?",
    a: "A single room refresh can be two to four weeks. A full home or commercial fit-out usually runs eight to sixteen weeks depending on scope and lead times.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on scope, materials and finishes. We give a written itemised quotation before any work starts, so there are no surprises later.",
  },
];

export const contractorRoles = [
  "Project planning and design",
  "Space planning and functionality",
  "Preparation of drawings and specifications",
  "Cost estimation and budgeting",
  "Material selection and procurement",
  "Site supervision and quality control",
  "Coordination of contractors and suppliers",
  "Project scheduling and management",
  "Compliance with safety and building regulations",
  "Final inspection and project handover",
];

export const specializations = [
  "Residential interiors",
  "Commercial and office interiors",
  "Hospitality (hotels, restaurants, bars)",
  "Retail and showroom design",
  "Healthcare facilities",
  "Educational institutions",
  "Corporate offices",
  "Kitchen and wardrobe design",
  "Custom furniture and cabinetry",
  "Gypsum ceilings and decorative finishes",
  "Lighting design",
  "Flooring and wall finishes",
  "Renovation and remodeling",
  "Landscaping and outdoor living spaces",
  "Turnkey interior fit-out projects",
];

// Add future photos here — drop the file in public/gallery/ then add one
// line below. Currently 15; target is 30+, more to come.
export const galleryImages = [
  { src: g("01-home-bar.jpg"), alt: "Home bar with backlit glass display and burgundy cabinetry" },
  { src: g("02-marble-hallway.jpg"), alt: "Marble-tiled hallway with high-gloss black wardrobe" },
  { src: g("03-living-room-chandelier.jpg"), alt: "Living room with crystal chandelier and glass display cabinetry" },
  { src: g("04-kitchen-breakfast-bar.jpg"), alt: "Open kitchen with breakfast bar and backlit glass display" },
  { src: g("05-kitchen-slat-bench.jpg"), alt: "Kitchen nook with slatted wood bench seating" },
  { src: g("06-walnut-kitchen.jpg"), alt: "Kitchen with walnut cabinetry and black stone countertops" },
  { src: g("07-kitchen-island.jpg"), alt: "Kitchen island with slatted wood base and marble flooring" },
  { src: g("08-fluted-tv-wall.jpg"), alt: "Fluted TV feature wall with backlit glass shelving" },
  { src: g("09-dark-tv-wall.jpg"), alt: "Dark panelled TV wall with warm backlighting" },
  { src: g("10-herringbone-living-room.jpg"), alt: "Living room with herringbone wood ceiling and garden view" },
  { src: g("11-herringbone-hallway.jpg"), alt: "Hallway with herringbone flooring and statement pendant light" },
  { src: g("12-curved-tv-wall.jpg"), alt: "Curved ceiling TV wall with ribbed panelling" },
  { src: g("13-amber-kitchen-display.jpg"), alt: "Kitchen with amber backlit display cabinetry" },
  { src: g("14-cream-kitchen.jpg"), alt: "Kitchen with cream shaker cabinetry and linear ceiling lighting" },
  { src: g("15-marble-bathroom.jpg"), alt: "Bathroom with marble walls and backlit lattice ceiling" },
];
