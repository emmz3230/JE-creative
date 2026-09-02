export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-8 py-32 md:py-40">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-accent">
          Digital Design Studio
        </p>
        <h1 className="max-w-3xl font-head text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          We craft premium digital experiences for ambitious brands
          <span className="text-muted">.</span>
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
          A two-person creative studio obsessed with precision, clarity, and design that performs.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block bg-accent px-9 py-4 font-head text-sm font-medium tracking-[0.05em] text-white transition-opacity hover:opacity-85"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}
