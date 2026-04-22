"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const FenceSVG = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 496"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M488,320V136c4.418,0,8-3.582,8-8s-3.582-8-8-8h-64c-4.418,0-8,3.582-8,8s3.582,8,8,8v40h-16v-16c0-4.418-3.582-8-8-8 s-8,3.582-8,8v16h-16v-16c0-4.418-3.582-8-8-8s-8,3.582-8,8v16h-16v-16c0-4.418-3.582-8-8-8s-8,3.582-8,8v16h-16v-16 c0-4.418-3.582-8-8-8s-8,3.582-8,8v16h-16v-40c4.418,0,8-3.582,8-8s-3.582-8-8-8h-64c-4.418,0-8,3.582-8,8s3.582,8,8,8v40h-16v-16 c0-4.418-3.582-8-8-8s-8,3.582-8,8v16h-16v-16c0-4.418-3.582-8-8-8s-8,3.582-8,8v16h-16v-16c0-4.418-3.582-8-8-8s-8,3.582-8,8v16 h-16v-16c0-4.418-3.582-8-8-8s-8,3.582-8,8v16H72v-40c4.418,0,8-3.582,8-8s-3.582-8-8-8H8c-4.418,0-8,3.582-8,8s3.582,8,8,8v184 c-4.418,0-8,3.582-8,8v40c0,4.418,3.582,8,8,8h64c4.418,0,8-3.582,8-8v-16h128v16c0,4.418,3.582,8,8,8h64c4.418,0,8-3.582,8-8v-16 h128v16c0,4.418,3.582,8,8,8h64c4.418,0,8-3.582,8-8v-40C496,323.582,492.418,320,488,320z M440,320V168h32v152H440z M472,136v16 h-32v-16H472z M392,192v144h-16V192H392z M360,192v144h-16V192H360z M328,192v144h-16V192H328z M232,320V168h32v152H232z M264,136 v16h-32v-16H264z M184,192v144h-16V192H184z M152,192v144h-16V192H152z M120,192v144h-16V192H120z M56,136v16H24v-16H56z M24,168h32 v152H24V168z M64,360H16v-24h48V360z M72,320V192h16v144h-8v-8C80,323.582,76.418,320,72,320z M200,336V192h16v128 c-4.418,0-8,3.582-8,8v8H200z M272,360h-48v-24h48V360z M280,320V192h16v144h-8v-8C288,323.582,284.418,320,280,320z M408,336V192 h16v128c-4.418,0-8,3.582-8,8v8H408z M480,360h-48v-24h48V360z" />
  </svg>
);

type IllustrationProps = { className?: string };

const MaterialIllustration = ({ className }: IllustrationProps) => (
  <div className={cn("mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]", className)}>
    <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
      {["Steel", "Iron", "Aluminum", "Stainless", "Bronze"].map((item, index) => (
        <li
          key={index}
          className={cn(
            index === 2 &&
              "text-foreground before:absolute before:-translate-x-[110%] before:text-primary before:content-['Forged']"
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function WhyUsSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">Our Standard</p>
            <h2 className="font-heading text-foreground text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              The Strong Island Standard
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Every project we take on is held to the same bar, whether it is a single handrail or a full custom gate system. Licensed, insured, and accountable to every job.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="space-y-6 sm:space-y-0 sm:divide-y"
          >
            {/* Row 1 */}
            <div className="grid sm:grid-cols-5 sm:divide-x">
              <MaterialIllustration className="sm:col-span-2" />
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                <h3 className="text-foreground text-xl font-semibold">Licensed &amp; Built to Spec</h3>
                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  We operate as a registered LLC in New York State, fully licensed and insured on every job. Every piece is measured, fabricated, and finished to your exact spec.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-5 sm:divide-x">
              <div className="pt-12 sm:col-span-3 sm:border-r sm:pr-12">
                <h3 className="text-foreground text-xl font-semibold">Craftsmanship You Can See</h3>
                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  We take pride in every weld, every cut, every finish. If it leaves our shop, it meets our standard. No exceptions.
                </p>
              </div>
              <div className="row-start-1 flex items-center justify-center pt-12 sm:col-span-2 sm:row-start-auto">
                <div className="mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]">
                  <FenceSVG className="w-48 h-48 text-muted-foreground/30" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
