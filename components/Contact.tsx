"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", brief: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry:", form);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const inputClasses =
    "w-full border border-line bg-transparent px-4 py-3.5 font-body text-sm text-offwhite outline-none transition-colors placeholder:text-neutral-600 focus:border-accent";

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl border-b border-line px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-b border-line py-24 md:border-b-0 md:border-r md:pr-12">
            <h2 className="mb-6 font-head text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              Let&apos;s Build Something Premium Together.
            </h2>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              Tell us about your project. We respond to every inquiry within one business day.
            </p>
          </div>

          <div className="py-24 md:pl-12">
            {submitted ? (
              <div className="flex h-full items-center">
                <p className="font-head text-lg text-accent">
                  Thanks — we&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2.5 block text-[11px] uppercase tracking-[0.15em] text-muted">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Your name"
                    value={form.name} onChange={handleChange} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2.5 block text-[11px] uppercase tracking-[0.15em] text-muted">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com"
                    value={form.email} onChange={handleChange} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="brief" className="mb-2.5 block text-[11px] uppercase tracking-[0.15em] text-muted">
                    Project Brief
                  </label>
                  <textarea id="brief" name="brief" required rows={5}
                    placeholder="Tell us about your project, timeline, and budget..."
                    value={form.brief} onChange={handleChange}
                    className={`${inputClasses} resize-y`} />
                </div>
                <button type="submit"
                  className="w-full bg-accent py-4 font-head text-sm font-medium tracking-[0.05em] text-white transition-opacity hover:opacity-85">
                  Send Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
