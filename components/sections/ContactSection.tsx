"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/social-icons";
import { COMPANY } from "@/lib/constants";

const SERVICES = [
  "Custom Gates",
  "Railings & Handrails",
  "Fencing",
  "Welding & Fabrication",
  "Repairs & Installation",
  "Ornamental Ironwork",
  "Other",
];

const STEPS = [
  { num: "01", title: "Submit your request", body: "Tell us about your project — service type, dimensions, and any details you have." },
  { num: "02", title: "We review and follow up", body: "We'll reach out within 24 hours to confirm details and schedule a site visit if needed." },
  { num: "03", title: "Receive your estimate", body: "You get a clear, itemized quote with no hidden fees before any work begins." },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request: ${form.service || "General"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:info@strongislandmetalworks.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">Contact</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Get a Free Quote
          </h2>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours with a detailed estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: info + steps */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-10 lg:sticky lg:top-28"
          >
            {/* How it works */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
                How it works
              </p>
              <div className="flex flex-col gap-7">
                {STEPS.map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <span className="font-heading text-xs font-bold text-primary tabular-nums pt-0.5 w-6 shrink-0">
                      {step.num}
                    </span>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Find us
              </p>
              <p className="text-sm text-muted-foreground">{COMPANY.serviceArea}</p>
              <div className="flex items-center gap-5">
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-5 text-center py-20 rounded-xl border border-border bg-card">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">Request Sent</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                    Thanks for reaching out. We'll review your request and follow up within 24 hours.
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Phone
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="(555) 555-5555"
                      className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Service
                  </label>
                  <select
                    id="service" name="service"
                    value={form.service} onChange={handleChange}
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Project Details <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message" name="message" required
                    value={form.message} onChange={handleChange}
                    placeholder="Describe your project: dimensions, materials, location, timeline..."
                    className="min-h-32 rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow"
                  />
                </div>

                <Button type="submit" className="gap-2 w-full mt-1">
                  <Send className="h-4 w-4" />
                  Send Request
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
