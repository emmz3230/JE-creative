import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject }from "@/libs/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  return {
    title: project ? `${project.name} Case Study` : "Case Study",
    description: project?.summary,
    alternates: { canonical: `/work/${params.slug}` },
    openGraph: project
      ? {
          type: "article",
          title: `${project.name} Case Study`,
          description: project.summary,
          url: `/work/${params.slug}`,
          images: [{ url: project.image, alt: project.name }],
        }
      : undefined,
  };
}

export default function CaseStudyPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-8 py-28">
          <Link href="/#works" className="text-xs uppercase tracking-[0.2em] text-muted hover:text-accent">
            ← All Works
          </Link>
          <p className="mt-10 text-xs uppercase tracking-[0.25em] text-accent">{project.tag}</p>
          <h1 className="mt-4 max-w-3xl font-head text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {project.name}
          </h1>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border border-accent px-6 py-3 font-head text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
            >
              Visit Live Site ↗
            </a>
          )}


          {/* Meta row */}
          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4">
            {[
              { label: "Client", value: project.client },
              { label: "Year", value: project.year },
              { label: "Category", value: project.tag },
              { label: "Duration", value: `${project.overview.length * 6} weeks` },
            ].map((m) => (
              <div key={m.label}>
                <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-muted">{m.label}</p>
                <p className="font-head text-sm font-medium">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image placeholder */}
      <section className="mx-auto max-w-6xl px-8 py-16">
        <div className="relative aspect-[16/9] overflow-hidden border border-line">
  <Image
    src={project.image}
    alt={project.name}
    fill
    className="object-cover"
    priority
  />
</div>

      </section>

      {/* Overview + stats */}
      <section className="mx-auto max-w-6xl border-b border-line px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">Overview</p>
            {project.overview.map((para) => (
              <p key={para.slice(0, 20)} className="mb-6 max-w-xl text-[15px] leading-loose text-muted">
                {para}
              </p>
            ))}

            <p className="mb-4 mt-12 text-xs uppercase tracking-[0.25em] text-muted">Services</p>
            <ul className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <li
                  key={s}
                  className="border border-line px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats sidebar */}
          <div className="mt-16 md:col-span-4 md:col-start-9 md:mt-0">
            <div className="border border-line">
              {project.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 ${i < project.stats.length - 1 ? "border-b border-line" : ""}`}
                >
                  <p className="font-head text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      {otherProjects.length > 0 && (
        <section className="mx-auto max-w-6xl px-8 py-24">
          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-muted">Next Project</p>
          <Link
            href={`/work/${otherProjects[0].slug}`}
            className="group flex items-center justify-between border border-line p-10 transition-colors hover:border-[#3a3a3a]"
          >
            <div>
              <h2 className="font-head text-2xl font-bold tracking-tight md:text-3xl">
                {otherProjects[0].name}
              </h2>
              <p className="mt-2 text-sm text-muted">{otherProjects[0].tag}</p>
            </div>
            <span className="font-head text-accent" aria-hidden>→</span>
          </Link>
        </section>
      )}

      <Footer />
    </>
  );
}
