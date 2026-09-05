import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — The JE Creative",
  description: "Design and development services for ambitious digital brands.",
};

const services = [
  {
    num: "01",
    title: "UI/UX Design",
    description:
      "Research-driven interface design for web and mobile products — from user flows and wireframes to pixel-perfect, developer-ready high-fidelity screens.",
    items: ["User Research & Flows", "Wireframing", "High-Fidelity UI", "Prototyping"],
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Fast, scalable builds with modern tooling. We translate design systems into production-grade code with performance as a first-class requirement.",
    items: ["Next.js / React", "Headless CMS", "Performance Optimization", "SEO Foundations"],
  },
  {
    num: "03",
    title: "Brand & Identity",
    description:
      "Minimal, confident visual identities built to scale — typography systems, color, and voice that look expensive at every touchpoint.",
    items: ["Logo & Identity", "Typography Systems", "Brand Guidelines", "Art Direction"],
  },
  {
    num: "04",
    title: "Design Systems",
    description:
      "Component libraries and documentation that keep your product consistent as your team and feature set grow.",
    items: ["Component Libraries", "Tokens & Theming", "Documentation", "Figma → Code Handoff"],
  },
  {
    num: "05",
    title: "3D for the Web",
    description:
      "Interactive 3D experiences that run directly in the browser — product visualizations, animated scenes, and immersive landing pages that make visitors stop scrolling.",
    items: ["Three.js / React Three Fiber", "Product Configurators", "3D Landing Pages", "WebGL Animation"],
  },
  {
    num: "06",
    title: "Technical Writing",
    description:
      "Clear, precise documentation that turns complex systems into content users actually read — from API docs to developer guides and product tutorials.",
    items: ["API Documentation", "User Guides", "Developer Tutorials", "Release Notes"],
  },
];


const process = [
  { num: "01", title: "Discovery & Strategy", desc: "We define goals, users, and direction before any pixels." },
  { num: "02", title: "Design & Build", desc: "Iterative sprints with weekly reviews and working prototypes." },
  { num: "03", title: "Refine & Launch", desc: "Polish, testing, and a clean handoff — or full launch support." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-8 py-28">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-accent">Services</p>
          <h1 className="max-w-2xl font-head text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            What we do, done precisely<span className="text-muted">.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
            Four disciplines, one team, zero handoff friction. Every engagement is senior-led from start to finish.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section>
        <div className="mx-auto max-w-6xl px-8">
          {services.map((s) => (
            <div key={s.num} className="grid grid-cols-1 border-b border-line py-16 md:grid-cols-12">
              <p className="mb-4 font-head text-sm font-medium text-accent md:col-span-1 md:mb-0">
                {s.num}
              </p>
              <h2 className="mb-4 font-head text-2xl font-bold tracking-tight md:col-span-4 md:text-3xl">
                {s.title}
              </h2>
              <div className="md:col-span-7">
                <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-muted">
                  {s.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Process strip */}
      <section className="mx-auto max-w-6xl px-8 py-24">
        <p className="mb-12 text-xs uppercase tracking-[0.25em] text-muted">How we work</p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {process.map((p, i) => (
            <div
              key={p.num}
              className={`border border-line p-8 ${i > 0 ? "md:border-l-0" : ""}`}
            >
              <p className="mb-16 font-head text-sm font-medium text-accent">{p.num}</p>
              <h3 className="mb-3 font-head text-lg font-bold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="mb-8 font-head text-3xl font-bold tracking-tight md:text-4xl">
            Have a project in mind?
          </h2>
          <Link
            href="/#contact"
            className="inline-block bg-accent px-9 py-4 font-head text-sm font-medium tracking-[0.05em] text-white transition-opacity hover:opacity-85"
          >
            Start a Project →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
