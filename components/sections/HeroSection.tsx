"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { StripedPattern } from "@/components/magicui/striped-pattern";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative overflow-hidden bg-card">

      <StripedPattern direction="right" className=" text-primary-foreground/10" width={14} height={14} />

      {/* ── Desktop ── */}
      <div className="hidden md:grid md:grid-cols-2 h-dvh">

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />

        {/* Left — Text */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20 py-24">

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2.5 mb-10"
          >
            <span className="w-5 h-px bg-primary" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">
              Baldwin, New York · Est. 2020
            </span>
          </motion.div>

          <div className="mb-8">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="font-heading font-bold leading-none tracking-tight text-foreground"
                style={{ fontSize: "clamp(3.5rem, 5.5vw, 6.5rem)" }}
              >
                Strong
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
                className="font-heading font-bold leading-none tracking-tight text-foreground"
                style={{ fontSize: "clamp(3.5rem, 5.5vw, 6.5rem)" }}
              >
                Island
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.46 }}
                className="font-heading font-bold leading-none tracking-tight text-primary"
                style={{ fontSize: "clamp(3.5rem, 5.5vw, 6.5rem)" }}
              >
                Metal Works
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-10"
          >
            Custom gates, railings, fencing, and ornamental ironwork. Precision fabricated on Long Island.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 rounded-sm hover:bg-primary/85 transition-colors duration-200"
            >
              Get a Free Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border/60 px-6 py-3 rounded-sm hover:text-foreground hover:border-border transition-colors duration-200"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        {/* Right — Video container */}
        <div className="relative z-10 flex items-center justify-center p-8 xl:p-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/30 shadow-2xl"
          >
            <motion.video
              ref={videoRef}
              src="/videos/hero.mp4"
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onViewportEnter={() => videoRef.current?.play()}
              onViewportLeave={() => videoRef.current?.pause()}
              viewport={{ amount: 0.3 }}
            />
            <div className="absolute inset-0 bg-background/10" />
          </motion.div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col pt-28 pb-12 px-6 min-h-dvh">

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2.5 mb-7"
        >
          <span className="w-px h-3.5 bg-primary" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">
            Baldwin, New York · Est. 2020
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="font-heading font-bold leading-none tracking-tight text-foreground mb-2"
          style={{ fontSize: "clamp(3rem, 13vw, 4.5rem)" }}
        >
          Strong Island
          <br />
          <span className="text-primary">Metal Works</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-7"
        >
          Custom gates, railings, fencing, and ornamental ironwork. Precision fabricated on Long Island.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 rounded-sm hover:bg-primary/85 transition-colors duration-200"
          >
            Get a Free Quote
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border px-5 py-3 rounded-sm hover:text-foreground transition-colors duration-200"
          >
            Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.65 }}
          className="relative aspect-video rounded-sm overflow-hidden border border-border/40 bg-muted"
        >
          <motion.video
            ref={mobileRef}
            src="/videos/hero.mp4"
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onViewportEnter={() => mobileRef.current?.play()}
            onViewportLeave={() => mobileRef.current?.pause()}
            viewport={{ amount: 0.3 }}
          />
        </motion.div>
      </div>

    </section>
  );
}
