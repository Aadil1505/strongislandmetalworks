"use client";

import { motion } from "motion/react";
import { BadgeCheck, Settings2, MapPin, Award } from "lucide-react";
import { WHY_US } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  BadgeCheck,
  Settings2,
  MapPin,
  Award,
};

export default function WhyUsSection() {
  return (
    <section className="py-28 border-y border-border">
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
              Why Choose Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              The Strong Island
              <br />
              Standard
            </h2>
          </div>
          <span className="hidden md:block text-[11px] tracking-[0.2em] uppercase text-muted-foreground/40 pb-1">
            {WHY_US.length} pillars
          </span>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border"
        >
          {WHY_US.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
                className="bg-background group flex flex-col gap-5 p-8 md:p-10 hover:bg-card transition-colors duration-200"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                  {Icon && <Icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.5} />}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
