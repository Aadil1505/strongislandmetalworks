"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function HeroSection() {
  // Desktop full-bleed video
  const desktopRef = useRef<HTMLVideoElement>(null);
  const desktopInView = useInView(desktopRef, { amount: 0.5 });

  // Mobile card video
  const mobileRef = useRef<HTMLVideoElement>(null);
  const mobileInView = useInView(mobileRef, { amount: 0.3 });

  useEffect(() => {
    if (desktopInView) desktopRef.current?.play();
    else desktopRef.current?.pause();
  }, [desktopInView]);

  useEffect(() => {
    if (mobileInView) mobileRef.current?.play();
    else mobileRef.current?.pause();
  }, [mobileInView]);

  return (
    <section className="relative overflow-hidden md:h-dvh">

      {/* Desktop: full-bleed video background */}
      <div className="hidden md:block absolute inset-0">
        <video
          ref={desktopRef}
          src="/videos/hero.mp4"
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-linear-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content wrapper — stacked on mobile, bottom-anchored on desktop */}
      <div className="relative z-10 flex flex-col pt-28 pb-12 md:pb-0 md:h-full md:justify-end max-w-7xl mx-auto w-full px-6 md:px-10 md:pt-0">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex items-center gap-2.5 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground">
            Baldwin, New York &nbsp;·&nbsp; Est. 2020
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="font-heading font-bold leading-[0.88] tracking-tight text-foreground"
            style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
          >
            Strong Island
            <br />
            <span className="text-primary">Metal Works</span>
          </motion.h1>
        </div>

        {/* Rule + descriptor + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.55 }}
          className="mt-9 pt-7 border-t border-border/40 flex flex-col sm:flex-row sm:items-end justify-between gap-7"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm">
            Custom gates, railings, fencing, and ornamental ironwork —
            precision fabricated on Long Island.
          </p>
          <div className="flex items-center gap-5 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-primary/90 transition-colors duration-200"
            >
              Get a Free Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Mobile: video card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.7 }}
          className="md:hidden mt-8 relative aspect-video rounded-sm overflow-hidden bg-muted"
        >
          <video
            ref={mobileRef}
            src="/videos/hero.mp4"
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-9 pt-5 border-t border-border/20 flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 md:mb-0 mb-0"
        >
          <span>Nassau County</span>
          <span className="w-px h-3 bg-border/40 shrink-0" />
          <span>500+ Projects</span>
          <span className="w-px h-3 bg-border/40 shrink-0" />
          <span>Licensed &amp; Insured</span>
          <div className="ml-auto hidden md:flex items-center gap-2">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              <ArrowDown className="h-3 w-3" />
            </motion.div>
            <span>Scroll</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
