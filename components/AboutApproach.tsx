const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description:
      "We dig into your business, users, and market to define a clear creative direction before a single pixel is placed.",
  },
  {
    num: "02",
    title: "High-Fidelity UI/UX",
    description:
      "We design pixel-perfect interfaces and prototypes, iterating quickly with you until every screen feels exactly right.",
  },
  {
    num: "03",
    title: "Refinement & Delivery",
    description:
      "We polish, stress-test, and hand off production-ready assets and systems your team can build on with confidence.",
  },
];

export default function AboutApproach() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl border-b border-line px-8 py-24">
        <h2 className="mb-12 max-w-xl font-head text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
          Two Minds. One Focused Creative Studio.
        </h2>
        <div className="grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          <p className="text-[15px] leading-loose text-muted">
            The JE Creative is a compact, senior-level design studio built on the belief that
            small teams produce sharper work. Without layers of account management or handoffs,
            every project gets our full, undivided attention — from the first strategy call to
            the final pixel.
          </p>
          <p className="text-[15px] leading-loose text-muted">
            We partner with startups and established brands to design digital products that feel
            effortless and look expensive. Our process is systematic, our typography is
            deliberate, and our results are measured — not guessed.
          </p>
        </div>
      </div>

      <div id="approach" className="mx-auto max-w-6xl px-8">
        <div className="border-b border-line py-7 text-xs uppercase tracking-[0.25em] text-muted">
          Our Approach
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`border-b border-line px-6 pb-16 pt-12 transition-colors hover:bg-[#141414] md:px-10 ${
                i > 0 ? "md:border-l md:border-line" : ""
              }`}
            >
              <p className="mb-20 font-head text-sm font-medium text-accent">{step.num}</p>
              <h3 className="mb-4 font-head text-xl font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
