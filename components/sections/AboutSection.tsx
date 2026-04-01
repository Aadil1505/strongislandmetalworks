"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

const FACTS = [
  { label: "Founded", value: "2020" },
  { label: "Based in", value: "Baldwin, NY" },
  { label: "Coverage", value: "Nassau & Suffolk County" },
  { label: "Entity", value: "NY State Licensed LLC" },
  { label: "Clients", value: "Residential & Commercial" },
];

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) videoRef.current?.play();
    else videoRef.current?.pause();
  }, [isInView]);

  return (
    <section id="about" className="py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-end justify-between pb-10 border-b border-border mb-14"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Built on Long Island.
              <br />
              Built to Last.
            </h2>
          </div>
          <span className="hidden md:block text-[11px] tracking-[0.2em] uppercase text-muted-foreground/40 pb-1">
            Est. 2020
          </span>
        </motion.div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-stretch">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative aspect-4/3 lg:aspect-auto overflow-hidden rounded-sm bg-muted min-h-64"
          >
            <video
              ref={videoRef}
              src="/videos/built.mp4"
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/30 to-transparent" />
          </motion.div>

          {/* Right — text + facts + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
            className="flex flex-col gap-10"
          >
            <p className="text-muted-foreground leading-relaxed text-base">
              Strong Island Metal Works is a Baldwin, NY based fabrication
              company specializing in custom metalwork for residential and
              commercial clients across Long Island — from ornamental gates
              and railings to structural steel and welding repairs.
              <br /><br />
              Every project starts with a site visit. We measure, fabricate,
              and install from scratch. No off-the-shelf parts — everything
              is built to fit your space and stand up to the elements.
            </p>

            {/* Facts list */}
            <div className="flex flex-col border-t border-border">
              {FACTS.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  className="flex items-baseline justify-between py-3.5 border-b border-border/50 gap-4"
                >
                  <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground/50 shrink-0">
                    {fact.label}
                  </span>
                  <span className="text-sm font-medium text-foreground text-right">
                    {fact.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group w-fit"
            >
              Get in Touch
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
