type Project = { tag: string; name: string };

const projects: Project[] = [
  { tag: "UI/UX Design", name: "Meridian Fintech Platform" },
  { tag: "Web Development", name: "Atlas Commerce Rebrand" },
];

export default function Portfolio() {
  return (
    <section id="works">
      <div className="mx-auto max-w-6xl px-8">
        <div className="border-b border-line py-7 text-xs uppercase tracking-[0.25em] text-muted">
          Selected Works — 01 / 02
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`group border-b border-line px-6 pb-16 pt-12 md:px-10 ${
                i === 0 ? "md:border-r md:border-line" : ""
              }`}
            >
              <div className="mb-8 flex aspect-[4/3] items-center justify-center border border-line bg-gradient-to-br from-[#1a1a1a] to-[#161616] transition-colors group-hover:border-[#3a3a3a]">
                <span className="font-head text-[13px] tracking-[0.2em] text-neutral-600">
                  16:9 — PROJECT IMAGE
                </span>
              </div>
              <span className="mb-5 inline-block border border-line px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] text-muted">
                {project.tag}
              </span>
              <h3 className="mb-6 font-head text-2xl font-bold tracking-tight md:text-[28px]">
                {project.name}
              </h3>
              <a href="#" className="inline-flex items-center gap-2 font-head text-sm font-medium text-accent hover:underline">
                View Case Study <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
