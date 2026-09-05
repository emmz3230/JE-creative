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
    slug: "hardy-drone-media",
    name: "HardyDrone Media",
    tag: "Web Development",
    image: "/hardydron.PNG",
    year: "2024",
    client: "Hardydrone Media",
    summary:
    "Cinematic aerial photography and video services by an FAA Part 107 certified studio for real estate, construction, events, and brands.",
    overview: [
      "Hardy Drone Media needed a compelling digital presence to showcase their high-end, end-to-end aerial photography and video services to prospective commercial clients.",
      "We structured their platform to highlight their FAA Part 107 certification and 4K/6K drone capabilities",
      "presenting a streamlined three-step workflow from flight planning to color-graded delivery across real estate",
      "construction, and media projects."],
    liveUrl: "https://hardydrone.vercel.app/",
    services: ["Front-End Engineering", "Responsive Web Design", "UI/UX Design", "Content Strategy", "Performance Optimization"],
    stats: [
    { label: "Missions Flown", value: "500+" },
    { label: "Capture Resolution", value: "6K" },
    { label: "Turnaround Time", value: "48h" },
    { label: "Licensed & Insured", value: "100%" }
]
  },
  {
    slug: "stampdocs",
    name: "Stamp Docs Notary Services",
    tag: "Web Development",
    image: "/stampydocs.PNG",
    year: "2024",
    client: "Stamp Docs Notary Services",
    summary:
  "Mobile and online notary service platform offering remote, same-day, and on-site document notarization.",
 liveUrl: "https://stampdocs.vercel.app/",
  overview: [
"Stamp Docs required a modern, dependable web presence to showcase their licensed notary public offerings. We positioned their brand around trust and accessibility, highlighting flexible service models across mobile, on-site, and 24/7 Remote Online Notarization (RON).",
"The result is a streamlined booking interface that simplifies document notarization—from real estate signings to powers of attorney—delivering transparent pricing, fast scheduling, and a clear step-by-step walkthrough for clients."
],
services: ["Brand Strategy & Positioning", "Web Design & UI/UX", "Frontend Development", "Booking System Integration", "SEO & Digital Presence"],
    stats: [
{ label: "Documents notarized", value: "1,500+" },
{ label: "Client rating", value: "4.9/5" },
{ label: "Mobile arrival", value: "< 45m" },
{ label: "Availability", value: "24/7" },
]
  },
  {
    slug: "skai-producer",
    name: "Skai Producer",
    tag: "Web Development",
    image: "/stra.PNG",
    year: "2024",
    client: "Skai Producer",
    summary:
"Sleek storefront and instant audio licensing platform for Skai's beat catalogue.",
 liveUrl: "https://straproducer.netlify.app/",
    overview: [
"Skai needed a direct to fan platform that matched the minimalist aesthetic of his production without the friction of traditional beat stores. We designed and built a custom beat marketplace featuring instant 30-second audio demos and automated licensing workflows.",
"The result is a stripped-back audio store with three-second asset delivery, automated license PDF generation, and an effortless checkout experience built for modern music creators."
],
services: ["Brand Identity", "UI/UX Design", "Custom Web Development", "Audio Player Integration", "E-Commerce & Licensing Workflows"],    
    stats: [
{ label: "Asset delivery time", value: "00:03s" },
{ label: "Audio demo length", value: "0:30s" },
{ label: "Active genres", value: "05" },
{ label: "Beats in catalogue", value: "008" },
]
  },
  {
    slug: "bobdunabar-producer",
    name: "Bob Dunbar Producer",
    tag: "Web Development",
    image: "/boblunar.PNG",
    year: "2024",
    client: "Bob Dunbar Producer",
    summary:
      "Portfolio website for heavy metal songwriter, producer, and engineer Bob Dunbar.",
    liveUrl: "https://bobdunbar.vercel.app/",
    "overview": [
"Heavy metal veteran Bob Dunbar needed a web presence that reflected four decades in the studio rather than the local bar circuit. We designed and built a sleek portfolio site highlighting his discography, Hall of Fame credit, and audio engineering background.",
"The result is a dark, high-impact digital showcase featuring an interactive release player, custom lead intake forms for client inquiries, and a distinct brand identity built for enterprise music clients."
],
  services: ["Brand Identity", "UI/UX Web Design", "Web Development", "Discography Showcase", "Lead Generation Setup"],   
   stats: [
{ label: "Studio albums", value: "4" },
{ label: "Hall of Fame records", value: "1" },
{ label: "Legendary studios", value: "4" },
{ label: "Label & publishing", value: "2" },
]
  },
  {
    slug: "roof-extension",
    name: "Roof Extension configurator",
    tag: "Web Development",
    image: "/roorextension.PNG",
    year: "2024",
    client: "Roof Extension Inc.",
    summary:
    "End-to-end dormer configuration and real-time cost estimation for a custom home extension.",
    liveUrl: "https://roofextension.netlify.app/",
    overview: [
    "The existing dormer planning process was slow, complex, and opaque,",
    "leaving homeowners uncertain about custom dimensions and real-time costs.",
    "We developed an interactive, step-by-step 3D configurator that lets users",
    "customize their roof extension and instantly visualize structural changes alongside precise pricing.",

"The result is a seamless digital experience with dynamic 3D rendering",
 "flexible section breakdown, and instant quote generation—streamlining",
  "customer decision-making and driving qualified leads.",
],
services: ["3D Web Configurator", "Interactive UI/UX Design", "Real-Time Pricing Engine", "Web Application Development", "E-Commerce Integration"],
    stats: [
{ label: "Quote generation", value: "<1s" },
{ label: "Lead conversion", value: "+45%" },
{ label: "Visual rendering", value: "60fps" },
],
  },
  {
    slug: "AI-Powered-Travel-Planner-(WanderSmart)",
    name: "AI-Powered Travel Planner (WanderSmart)",
    tag: "Web Development",
    image: "/wandermart'.PNG",
    year: "2024",
    client: "AI-Powered Travel Planner (WanderSmart).",
    summary:
      "The AI-Powered Travel Planner is a mobile application designed to help users plan personalized trips efficiently. The app uses artificial intelligence to generate travel itineraries based on user inputs such as destination, budget, travel dates, and interests.",
    liveUrl: "https://www.figma.com/design/wksyuo9luRPXINHedNdZUm/wander-smart?node-id=0-1&t=bJajN9K9vMwb59mC-1",
    overview: [
      "The AI-Powered Travel Planner is a mobile application designed to help users plan personalized trips efficiently. The app uses artificial intelligence to generate travel itineraries based on user inputs such as destination, budget, travel dates, and interests."
    ],
    services: ["Product Strategy", "UX/UI Design", "Design Systems", "Prototyping & Testing"],
    stats: [
  { label: "Trips planned", value: "50k+" },
  { label: "Itinerary creation", value: "2 mins" },
  { label: "User rating", value: "4.9/5" },
]
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
