import Link from "next/link";
import { projects } from "@/libs/projects";
import Image from "next/image";


export default function Portfolio() {
  return (
    <section id="works">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="border-b border-line py-7 text-xs uppercase tracking-[0.25em] text-muted">
          Selected Works — 01 / 0{projects.length}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="group overflow-hidden border border-line"
            >
              <div className="relative aspect-[2.4/1] overflow-hidden border-b border-line">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-8">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3 className="font-head text-2xl font-bold tracking-tight md:text-[28px]">
                    {project.name}
                  </h3>
                  <span className="shrink-0 border border-line px-2 py-1 text-[11px] uppercase tracking-[0.15em] text-muted">
                    {project.year}
                  </span>
                </div>
                <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 bg-accent px-4 py-3 font-head text-sm font-medium text-charcoal hover:brightness-110"
                  >
                    View Case Study <span aria-hidden>→</span>
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-offwhite"
                    >
                      Live Site <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
