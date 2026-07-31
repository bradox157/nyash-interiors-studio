import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

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
    image: hero1,
    eyebrow: "Nyashera Interiors",
    title: "Transforming",
    highlight: "Spaces into timeless\nmasterpieces.",
  },
  {
    image: hero2,
    eyebrow: "Perfectly balanced luxury, functionality, & personal expression.",
    title: "Tailored solutions that",
    highlight: "Honour unique\nlifestyles & preferences",
  },
  {
    image: hero3,
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
    image: project1,
    title: "Master bedroom refurbishment in Runda",
    meta: ["1,800 – 2,500 sq ft.", "Bedroom Design"],
    rating: "10.0",
  },
  {
    image: project2,
    title: "Marble en-suite bathroom, Kileleshwa apartment",
    meta: ["Bathroom Design", "Full Fit-Out"],
    rating: "10.0",
  },
  {
    image: project3,
    title: "Open-plan dining & living, Thika Road residence",
    meta: ["2,500 – 4,000+ sq ft.", "Interior Decor"],
    rating: "10.0",
  },
  {
    image: project4,
    title: "Corporate reception fit-out along Kamiti Rd",
    meta: ["Commercial", "Joinery & Branding"],
    rating: "9.8",
  },
  {
    image: project5,
    title: "Fitted wardrobes for a family home in Ruiru",
    meta: ["Wardrobe Design", "Custom Cabinetry"],
    rating: "10.0",
  },
  {
    image: project6,
    title: "Art curation & styling, Nairobi townhouse",
    meta: ["Custom Art Selection", "Styling"],
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

export const galleryImages = [
  { src: hero1, alt: "Navy and gold living room designed by Nyashera Interiors" },
  { src: project2, alt: "Marble bathroom with brass fittings" },
  { src: hero2, alt: "Walk-in wardrobe with warm timber veneer" },
  { src: project1, alt: "Upholstered headboard master bedroom" },
  { src: hero3, alt: "Dark navy kitchen with marble island" },
  { src: project3, alt: "Open plan dining area with chandelier" },
  { src: project5, alt: "Fitted wardrobe in a family bedroom" },
  { src: project6, alt: "Living room with curated gallery wall" },
  { src: project4, alt: "Commercial reception interior" },
];
