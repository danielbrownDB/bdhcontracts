/**
 * Central site configuration.
 * Update contact details, hours, and social links here — every page reads from this file.
 */
export const site = {
  name: "BDH Contracts",
  tagline: "Groundworks, Excavation & Property Improvement",
  description:
    "BDH Contracts is a trusted contracting company specialising in excavation, site preparation, paving, fencing and tree removal for residential and commercial clients.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bdhcontracts.com",
  phone: "+447484332867",
  phoneDisplay: "07484 332867",
  email: "info@bdhcontracts.com", // TODO: replace with real email
  hours: [
    { days: "Monday – Friday", time: "8:00am – 6:00pm" },
    { days: "Saturday", time: "9:00am – 1:00pm" },
    { days: "Sunday", time: "Closed" },
  ],
  socials: [
    { label: "Facebook", href: "https://facebook.com/" }, // TODO: real profile URL
    { label: "Instagram", href: "https://instagram.com/" }, // TODO: real profile URL
  ],
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
};

export type ServiceInfo = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
};

export const services: ServiceInfo[] = [
  {
    slug: "excavation",
    title: "Excavation & Groundworks",
    summary:
      "Professional mini-digger and excavation services for residential and commercial projects of any size.",
    details: [
      "Garden and site excavation",
      "Trenching for drainage and utilities",
      "Levelling and regrading lawns",
      "Foundation and footing digs",
    ],
  },
  {
    slug: "site-preparation",
    title: "Site Preparation & Paving",
    summary:
      "Comprehensive site prep including grading, drainage, sub-bases and finished paving that lasts.",
    details: [
      "Grading and drainage solutions",
      "Paths, patios and driveways",
      "Gravel and hardstanding areas",
      "Concrete removal and replacement",
    ],
  },
  {
    slug: "fencing",
    title: "Fencing & Boundaries",
    summary:
      "Quality timber fencing supplied and installed, from garden boundaries to agricultural runs.",
    details: [
      "Timber picket and closeboard fencing",
      "Post-and-wire agricultural fencing",
      "Gravel boards and gates",
      "Full removal of old fencing",
    ],
  },
  {
    slug: "tree-removal",
    title: "Tree & Vegetation Removal",
    summary:
      "Safe removal of trees, hedges and overgrown vegetation, with all waste cleared from site.",
    details: [
      "Tree felling and dismantling",
      "Stump removal",
      "Hedge and shrub clearance",
      "Full green-waste removal",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  before: string;
  after: string;
};

export const projects: Project[] = [
  {
    title: "Pathway Renewal",
    category: "Paving",
    description:
      "A tired, cracked concrete side passage transformed with crisp new paving slabs — level, safe and built to drain properly.",
    before: "/images/paving-before.png",
    after: "/images/paving-after.png",
  },
  {
    title: "Garden Fence & Gravel Path",
    category: "Fencing",
    description:
      "New timber picket fence installed along the full boundary with a fresh gravel pathway laid alongside.",
    before: "/images/fence-before.png",
    after: "/images/fence-after.png",
  },
  {
    title: "Large Tree Removal",
    category: "Tree Removal",
    description:
      "A mature tree safely dismantled and removed close to the property, with every branch cleared away by trailer.",
    before: "/images/tree-removal-before.png",
    after: "/images/tree-removal-after.png",
  },
];

export const videos = [
  { src: "/videos/project-1.mp4", title: "Project video 1" },
  { src: "/videos/project-2.mp4", title: "Project video 2" },
  { src: "/videos/project-3.mp4", title: "Project video 3" },
];

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
};

// TODO: replace with real client testimonials
export const testimonials: Testimonial[] = [
  {
    quote:
      "BDH transformed our back garden. The digger work was neat, tidy and finished ahead of schedule — you'd never know they'd been, except everything looks better.",
    author: "Sarah M.",
    location: "Residential client",
  },
  {
    quote:
      "Straightforward to deal with from quote to completion. The new fence and path are exactly what we asked for, at the price we agreed.",
    author: "James T.",
    location: "Residential client",
  },
  {
    quote:
      "We've used BDH on several site prep jobs now. Reliable, properly insured and they turn up when they say they will. Recommended without hesitation.",
    author: "Colin R.",
    location: "Commercial client",
  },
];
