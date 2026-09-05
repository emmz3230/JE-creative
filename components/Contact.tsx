"use client";

import { useState } from "react";

type FormState = { name: string; email: string; brief: string };

export default function Contact() {
  const formspreeId = process.env.FORMSPREE_ID;
  const endpoint = `https://formspree.io/f/${formspreeId}`;

  const [form, setForm] = useState<FormState>({ name: "", email: "", brief: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.brief,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", brief: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full border border-line bg-transparent px-4 py-3.5 font-body text-sm text-offwhite outline-none transition-colors placeholder:text-neutral-600 focus:border-accent";

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl border-b border-line px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — heading */}
          <div className="border-b border-line py-24 md:border-b-0 md:border-r md:pr-12">
            <h2 className="mb-6 font-head text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              Let&apos;s Build Something Premium Together.
            </h2>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              Tell us about your project. We respond to every inquiry within one
              business day.
            </p>
          </div>

          {/* Right — form */}
          <div className="py-24 md:pl-12">
            {status === "success" ? (
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
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2.5 block text-[11px] uppercase tracking-[0.15em] text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="brief" className="mb-2.5 block text-[11px] uppercase tracking-[0.15em] text-muted">
                    Project Brief
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    required
                    rows={5}
                    placeholder="Tell us about your project, timeline, and budget..."
                    value={form.brief}
                    onChange={handleChange}
                    className={`${inputClasses} resize-y`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong — please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-accent py-4 font-head text-sm font-medium tracking-[0.05em] text-white transition-opacity hover:opacity-85 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Inquiry →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
