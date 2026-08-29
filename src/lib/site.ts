export const SITE = {
  name: "Waypoint Aerial",
  city: "Indianapolis, Indiana",
  region: "Central Indiana",
  email: "hello@waypointaerial.com",
  tagline: "Precision from above.",
  description:
    "FAA Part 107 aerial cinematography, inspection, and mapping for Indianapolis and Central Indiana.",
} as const;

export const NAV = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
] as const;

export type ServiceId =
  | "events"
  | "property"
  | "inspection"
  | "mapping"
  | "cinema";

export type WorkCategory = "events" | "property" | "inspection" | "mapping" | "cinema";

export const SERVICES: {
  id: ServiceId;
  kicker: string;
  title: string;
  summary: string;
  body: string;
  image: string;
  alt: string;
  from: number;
  range: string;
}[] = [
  {
    id: "events",
    kicker: "01",
    title: "Events & production",
    summary:
      "Overhead and hero aerials for conferences, outdoor receptions, and live shows — planned around call times and airspace.",
    body: "We fly as part of the production, not around it. Site survey, TFR check, a quiet flight path, and a producer-ready set of stills and 4K clips. Hotels, venues, and outdoor programs across Central Indiana.",
    image: "/media/events.jpg",
    alt: "Aerial view of an evening outdoor reception with string lights",
    from: 650,
    range: "$650–$2,400",
  },
  {
    id: "property",
    kicker: "02",
    title: "Property & architecture",
    summary:
      "Listing sets, construction progress, and finished-building portraits with a clean nadir of the lot.",
    body: "Straight stills, slow orbits, and twilight plates for brokers, developers, and architects. Color-graded to sit next to interior photography, not fight it.",
    image: "/media/property.jpg",
    alt: "Golden-hour aerial of a brick suburban home with a pool",
    from: 325,
    range: "$325–$750",
  },
  {
    id: "inspection",
    kicker: "03",
    title: "Inspection",
    summary:
      "Roofs, facades, and site conditions without a lift. High-resolution stills mapped to the elevation you care about.",
    body: "Close, repeatable passes over membrane, flashing, HVAC, and envelope. Delivered as labeled stills — useful for facilities, insurers, and contractors.",
    image: "/media/inspect.jpg",
    alt: "Low-altitude aerial of a commercial rooftop and HVAC equipment",
    from: 450,
    range: "$450–$1,800",
  },
  {
    id: "mapping",
    kicker: "04",
    title: "Mapping & orthos",
    summary:
      "Site maps, volumes, and progress overlays for civil, land, and construction teams.",
    body: "Nadir grids processed into orthomosaics and progress comparisons. Same site, same altitude, next month — so the overlay actually means something.",
    image: "/media/mapping.jpg",
    alt: "Straight-down aerial of Midwestern farmland and a river bend",
    from: 800,
    range: "$800–$3,500",
  },
  {
    id: "cinema",
    kicker: "05",
    title: "Cinematic & tilt-shift",
    summary:
      "Specialty stills and motion — miniature tilt-shift, dusk plates, and editorial frames.",
    body: "When the brief is a look, not a survey. Tilt-shift city plates, blue-hour skylines, and slow cinematic moves for brand and editorial work.",
    image: "/media/work-tilt.jpg",
    alt: "Tilt-shift aerial of a downtown intersection",
    from: 900,
    range: "Custom",
  },
];

export const WORK: {
  id: string;
  title: string;
  location: string;
  category: WorkCategory;
  src: string;
  alt: string;
  featured?: boolean;
}[] = [
  {
    id: "skyline",
    title: "River at blue hour",
    location: "Downtown Indianapolis",
    category: "cinema",
    src: "/media/hero.jpg",
    alt: "Downtown skyline at blue hour over a river",
    featured: true,
  },
  {
    id: "circle",
    title: "Memorial circle",
    location: "Mile Square",
    category: "cinema",
    src: "/media/work-circle.jpg",
    alt: "Twilight aerial looking toward a limestone monument circle",
  },
  {
    id: "reception",
    title: "Lawn reception",
    location: "Central Indiana",
    category: "events",
    src: "/media/events.jpg",
    alt: "Overhead of an evening outdoor reception",
  },
  {
    id: "residence",
    title: "Brick residence",
    location: "Southside Indianapolis",
    category: "property",
    src: "/media/property.jpg",
    alt: "Aerial of a brick home with pool at golden hour",
  },
  {
    id: "roof",
    title: "Commercial roof",
    location: "Marion County",
    category: "inspection",
    src: "/media/inspect.jpg",
    alt: "Close aerial of rooftop mechanicals",
  },
  {
    id: "fields",
    title: "County grid",
    location: "Central Indiana",
    category: "mapping",
    src: "/media/mapping.jpg",
    alt: "Nadir aerial of farmland and hedgerows",
  },
  {
    id: "river",
    title: "Park bend",
    location: "White River",
    category: "cinema",
    src: "/media/work-river.jpg",
    alt: "Sunrise aerial of a river curving through a park",
  },
  {
    id: "stadium",
    title: "Venue campus",
    location: "Indianapolis",
    category: "events",
    src: "/media/work-stadium.jpg",
    alt: "Dusk aerial of a stadium and convention halls",
  },
  {
    id: "neighborhood",
    title: "Tree streets",
    location: "Perry Township",
    category: "property",
    src: "/media/work-neighborhood.jpg",
    alt: "Golden-hour aerial of a tree-lined neighborhood",
  },
  {
    id: "tilt",
    title: "Miniature city",
    location: "Downtown",
    category: "cinema",
    src: "/media/work-tilt.jpg",
    alt: "Tilt-shift aerial of a downtown intersection",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Brief",
    body: "Site, airspace, deliverables, and the hour of light that actually matters.",
  },
  {
    n: "02",
    title: "Plan",
    body: "LAANC / TFR check, insurance, site access, and a flight path that stays out of the show.",
  },
  {
    n: "03",
    title: "Fly",
    body: "A Part 107 PIC on site. One airframe, a backup, and a call sheet that holds.",
  },
  {
    n: "04",
    title: "Deliver",
    body: "Color-graded stills, 4K clips, or maps — labeled, in a folder you can hand off.",
  },
] as const;

export const CREDENTIALS = [
  { label: "FAA Part 107", detail: "Remote Pilot in Command" },
  { label: "Insured", detail: "Commercial sUAS liability" },
  { label: "Based in Indianapolis", detail: "Central Indiana service area" },
  { label: "Turnaround", detail: "Stills often next day" },
] as const;

export const FILTERS: { id: "all" | WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "property", label: "Property" },
  { id: "inspection", label: "Inspection" },
  { id: "mapping", label: "Mapping" },
  { id: "cinema", label: "Cinema" },
];
