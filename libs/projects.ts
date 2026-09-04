export type Project = {
  slug: string;
  name: string;
  tag: string;
  year: string;
  image: string;      
  client: string;
  summary: string;
  liveUrl: string;  
  overview: string[];
  services: string[];
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "hardydron-fintech",
    name: "Hardydron Fintech Platform",
    tag: "UI/UX Design",
    image: "/hardydron.PNG",
    year: "2024",
    client: "Hardydrone Inc.",
    summary:
    "A complete product redesign for a fintech platform serving 50,000+ users.",
    overview: [
      "Hardydrone came to us with a powerful but visually overwhelming dashboard that users struggled to navigate. Task completion rates were falling and support tickets were climbing.",
      "Over 12 weeks, we rebuilt the information architecture from the ground up, designed a new modular component system, delivered a high-fidelity prototype that their engineering team shipped without a single design deviation.",
    ],
    liveUrl: "https://hardydrone.vercel.app/",
    services: ["User Research", "Information Architecture", "UI/UX Design", "Design System", "Prototyping"],
    stats: [
      { label: "Task completion", value:"42%" },
      { label: "Support tickets", value: "−31%" },
      { label: "Time to ship", value: "12 weeks" },
    ],
  },
  {
    slug: "stampdocs",
    name: "Stampdocs",
    tag: "Web Development",
    image: "/stampydocs.PNG",
    year: "2024",
    client: "Stampdocs",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    liveUrl: "https://stampdocs.vercel.app/",
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
    slug: "stra producer",
    name: "Stra Producer",
    tag: "Web Development",
    image: "/stra.PNG",
    year: "2024",
    client: "Stra Producer",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    liveUrl: "https://straproducer.netlify.app/",
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
    slug: "bobdunabar producer",
    name: "Bob Dunbar Producer",
    tag: "Web Development",
    image: "/boblunar.PNG",
    year: "2024",
    client: "Bob Dunbar Producer",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    liveUrl: "https://bobdunbar.vercel.app/",
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
    slug: "roof-extension",
    name: "Roof Extension Rebrand",
    tag: "Web Development",
    image: "/roorextension.PNG",
    year: "2024",
    client: "Roof Extension Inc.",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    liveUrl: "https://roofextension.netlify.app/",
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
    slug: "roof-extension",
    name: "Roof Extension Rebrand",
    tag: "Web Development",
    image: "/roorextension.PNG",
    year: "2024",
    client: "Roof Extension Inc.",
    summary:
      "Full rebrand and headless commerce buildout for an enterprise retailer.",
    liveUrl: "https://www.figma.com/design/wksyuo9luRPXINHedNdZUm/wander-smart?node-id=0-1&t=bJajN9K9vMwb59mC-1",
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
