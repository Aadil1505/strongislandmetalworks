"use client";

import { motion } from "motion/react";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col items-center gap-1 px-6 py-2 text-center"
            >
              <span className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
