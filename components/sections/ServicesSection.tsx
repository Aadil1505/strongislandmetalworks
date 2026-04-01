"use client";

import { motion } from "motion/react";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-end justify-between pb-10 border-b border-border mb-14"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">
              What We Do
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Services
            </h2>
          </div>
          <span className="hidden md:block text-[11px] tracking-[0.2em] uppercase text-muted-foreground/40 pb-1">
            {SERVICES.length} specialties
          </span>
        </motion.div>

        {/* List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="flex flex-col"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              className="group grid grid-cols-[2rem_1fr] md:grid-cols-[3.5rem_1fr_1fr] items-start gap-x-5 md:gap-x-8 py-7 border-b border-border/50 hover:bg-card/50 transition-colors duration-200 px-3 -mx-3 rounded-sm"
            >
              {/* Number */}
              <span className="font-heading text-[11px] tracking-widest text-muted-foreground/25 group-hover:text-primary/60 transition-colors duration-200 tabular-nums pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title + description (mobile: stacked, desktop: title only here) */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                {/* Description visible on mobile only */}
                <p className="md:hidden text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Description — desktop column */}
              <p className="hidden md:block text-base text-muted-foreground leading-relaxed pt-0.5">
                {service.description}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
