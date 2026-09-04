import Link from "next/link";
import { projects } from "@/libs/projects";
import Image from "next/image";


export default function Portfolio() {
  return (
    <section id="works">
      <div className="mx-auto max-w-6xl px-8">
        <div className="border-b border-line py-7 text-xs uppercase tracking-[0.25em] text-muted">
          Selected Works — 01 / 0{projects.length}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className={`group border-b border-line px-6 pb-16 pt-12 md:px-10 ${
                i === 0 ? "md:border-r md:border-line" : ""
              }`}
            >
              <div className="relative mb-8 aspect-[4/3] overflow-hidden border border-line width  ">
                  <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                </div>  
              <span className="mb-5 inline-block border border-line px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] text-muted">
                {project.tag}
              </span>
              <h3 className="mb-3 font-head text-2xl font-bold tracking-tight md:text-[28px]">
                {project.name}
              </h3>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
                            {/* Links row */}
              <div className="flex items-center gap-6">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 font-head text-sm font-medium text-accent hover:underline"
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

              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
