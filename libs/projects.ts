export type Project = {
  slug: string;
  name: string;
  tag: string;
  year: string;
  client: string;
  summary: string;
  overview: string[];
  services: string[];
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "meridian-fintech",
    name: "Meridian Fintech Platform",
    tag: "UI/UX Design",
    year: "2024",
    client: "Meridian Financial Inc.",
    summary:
      "A complete product redesign for a fintech platform serving 50,000+ users.",
 overview: [
      "Meridian came to us with a powerful but visually overwhelming dashboard that users struggled to navigate. Task completion rates were falling and support tickets were climbing.",
      "Over 12 weeks, we rebuilt the information architecture from the ground up, designed a new modular component system, delivered a high-fidelity prototype that their engineering team shipped without a single design deviation.",
    ],
    services: ["User Research", "Information Architecture", "UI/UX Design", "Design System", "Prototyping"],
    stats: [
      { label: "Task completion", value:"42%" },
      { label: "Support tickets", value: "−31%" },
      { label: "Time to ship", value: "12 weeks" },
    ],
  },
  {
    slug: "atlas-commerce",
    name: "Atlas Commerce Rebrand",
    tag: "Web Development",
    year: "2024",
    client: "Atlas Commerce Group",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    overview: [
      "Atlas needed more than a new logo — their storefront was slow,, and leaking conversions on mobile. We rebuilt their brand identity and translated it into a lightning-fast headless storefront.",
      "The result is a design-led commerce experience with sub-second page loads, a fully modular CMS, and a conversion rate that doubled within the first quarter of launch.",
 ],
    services: ["Brand Identity", "Web Design", "Next.js Development", "Headless CMS", "Performance Optimization"],
    stats: [
      { label: "Conversion rate", value: "2.1×" },
      { label: "Load time", value: "0.8s" },
      { label: "Mobile bounce", value: "−27%" },
    ],
  },
  {
    slug: "atlas-commerce",
    name: "Atlas Commerce Rebrand",
    tag: "Web Development",
    year: "2024",
    client: "Atlas Commerce Group",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    overview: [
      "Atlas needed more than a new logo — their storefront was slow,, and leaking conversions on mobile. We rebuilt their brand identity and translated it into a lightning-fast headless storefront.",
      "The result is a design-led commerce experience with sub-second page loads, a fully modular CMS, and a conversion rate that doubled within the first quarter of launch.",
 ],
    services: ["Brand Identity", "Web Design", "Next.js Development", "Headless CMS", "Performance Optimization"],
    stats: [
      { label: "Conversion rate", value: "2.1×" },
      { label: "Load time", value: "0.8s" },
      { label: "Mobile bounce", value: "−27%" },
    ],
  },
  {
    slug: "atlas-commerce",
    name: "Atlas Commerce Rebrand",
    tag: "Web Development",
    year: "2024",
    client: "Atlas Commerce Group",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    overview: [
      "Atlas needed more than a new logo — their storefront was slow,, and leaking conversions on mobile. We rebuilt their brand identity and translated it into a lightning-fast headless storefront.",
      "The result is a design-led commerce experience with sub-second page loads, a fully modular CMS, and a conversion rate that doubled within the first quarter of launch.",
 ],
    services: ["Brand Identity", "Web Design", "Next.js Development", "Headless CMS", "Performance Optimization"],
    stats: [
      { label: "Conversion rate", value: "2.1×" },
      { label: "Load time", value: "0.8s" },
      { label: "Mobile bounce", value: "−27%" },
    ],
  },
  {
    slug: "atlas-commerce",
    name: "Atlas Commerce Rebrand",
    tag: "Web Development",
    year: "2024",
    client: "Atlas Commerce Group",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    overview: [
      "Atlas needed more than a new logo — their storefront was slow,, and leaking conversions on mobile. We rebuilt their brand identity and translated it into a lightning-fast headless storefront.",
      "The result is a design-led commerce experience with sub-second page loads, a fully modular CMS, and a conversion rate that doubled within the first quarter of launch.",
 ],
    services: ["Brand Identity", "Web Design", "Next.js Development", "Headless CMS", "Performance Optimization"],
    stats: [
      { label: "Conversion rate", value: "2.1×" },
      { label: "Load time", value: "0.8s" },
      { label: "Mobile bounce", value: "−27%" },
    ],
  },{
    slug: "atlas-commerce",
    name: "Atlas Commerce Rebrand",
    tag: "Web Development",
    year: "2024",
    client: "Atlas Commerce Group",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    overview: [
      "Atlas needed more than a new logo — their storefront was slow,, and leaking conversions on mobile. We rebuilt their brand identity and translated it into a lightning-fast headless storefront.",
      "The result is a design-led commerce experience with sub-second page loads, a fully modular CMS, and a conversion rate that doubled within the first quarter of launch.",
 ],
    services: ["Brand Identity", "Web Design", "Next.js Development", "Headless CMS", "Performance Optimization"],
    stats: [
      { label: "Conversion rate", value: "2.1×" },
      { label: "Load time", value: "0.8s" },
      { label: "Mobile bounce", value: "−27%" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
