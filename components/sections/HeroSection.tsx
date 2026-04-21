"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

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
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-linear-to-t from-background via-background/35 to-transparent" />
      </div>

      {/* Content wrapper — stacked on mobile, bottom-anchored on desktop */}
      <div className="relative z-10 flex flex-col pt-28 pb-12 md:pb-24 md:h-full md:justify-end max-w-7xl mx-auto w-full px-6 md:px-10 md:pt-0">

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
            className="font-heading font-bold leading-[1.05] tracking-tight text-foreground"
            style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
          >
            Strong Island
            <br />
            <span className="text-primary">Metal Works</span>
          </motion.h1>
        </div>

        {/* Descriptor + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.55 }}
          className="mt-6 flex flex-col gap-6"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
            Custom gates, railings, fencing, and ornamental ironwork. Precision fabricated on Long Island.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors duration-200"
            >
              Get a Free Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border/50 px-6 py-3 rounded-sm hover:border-border hover:text-foreground transition-colors duration-200"
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


      </div>
    </section>
  );
}
