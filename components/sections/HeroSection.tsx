"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SERVICES = [
  "Custom Gates",
  "Railings",
  "Iron Fencing",
  "Ornamental Ironwork",
  "Steel Fabrication",
  "Welding",
  "Custom Metalwork",
  "Driveway Gates",
];

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
            <div>
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
            <div>
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
            Steel fabricated to order. Every job starts with a site visit and ends with an install built to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-3"
          >
            <Button size="lg" asChild>
              <Link href="#contact">
                Get a Free Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#gallery">View Our Work</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right — Video container */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 p-8 xl:p-14">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full overflow-hidden rounded-lg border border-border"
          >
            <Marquee className="py-2.5 [--duration:30s] [--gap:2.5rem] animate-pulse" repeat={4}>
              {SERVICES.map((item) => (
                <span key={item} className="flex items-center gap-2.5 shrink-0">
                  <span className="text-primary text-[8px]">◆</span>
                  <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                    {item}
                  </span>
                </span>
              ))}
            </Marquee>
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
          Steel fabricated to order. Every job starts with a site visit and ends with an install built to last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <Button size="lg" asChild className="p-5">
            <Link href="#contact">
              Get a Free Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#gallery">View Our Work</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.65 }}
          className="relative aspect-video rounded-lg overflow-hidden border border-border/40 bg-muted"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="overflow-hidden rounded-sm border border-border/25 mt-3"
        >
          <Marquee className="py-2.5 [--duration:30s] [--gap:2.5rem] animate-pulse" repeat={4}>
            {SERVICES.map((item) => (
              <span key={item} className="flex items-center gap-2.5 shrink-0">
                <span className="text-primary text-[8px]">◆</span>
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                  {item}
                </span>
              </span>
            ))}
          </Marquee>
        </motion.div>
      </div>

    </section>
  );
}
