"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ArrowRight, BadgeCheck, Ruler, Wrench, Ellipsis } from "lucide-react";
import { motion } from "motion/react";

export default function WhyUsSection() {
  return (
    <section className="border-y border-border">
      <div className=" py-24">
        <div className="mx-auto w-full max-w-5xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">Why Choose Us</p>
            <h2 className="font-heading text-foreground text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              The Strong Island Standard
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Every project we take on is held to the same standard, whether it&apos;s a single handrail or a full custom gate system. Licensed, insured, and built to last.
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
                  We operate as a registered LLC in New York State, fully licensed and insured on every job. No off-the-shelf solutions. Every piece is measured, fabricated, and finished for your exact project.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-5 sm:divide-x">
              <div className="pt-12 sm:col-span-3 sm:border-r sm:pr-12">
                <h3 className="text-foreground text-xl font-semibold">Craftsmanship You Can See</h3>
                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  We take pride in every weld, every cut, every finish. Based in Baldwin, NY, serving Nassau, Suffolk, and the surrounding NYC boroughs since 2020.
                </p>
              </div>
              <div className="row-start-1 flex items-center justify-center pt-12 sm:col-span-2 sm:row-start-auto">
                <QuoteIllustration className="pt-8" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

type IllustrationProps = { className?: string };

const QuoteIllustration = ({ className }: IllustrationProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="bg-background border-foreground/10 absolute -translate-x-1/8 -translate-y-[110%] flex items-center gap-2 rounded-lg border p-1 shadow-md shadow-black/5">
        <Button size="sm" className="rounded-sm">
          <BadgeCheck className="size-3" />
          <span className="text-sm font-medium">Licensed</span>
        </Button>
        <span className="bg-border block h-4 w-px" />
        <ToggleGroup type="multiple" size="sm" className="gap-0.5 *:rounded-md">
          <ToggleGroupItem value="measure" aria-label="Measured">
            <Ruler className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="fabricate" aria-label="Fabricated">
            <Wrench className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="finish" aria-label="Finished">
            <ArrowRight className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="bg-border block h-4 w-px" />
        <Button size="icon" className="size-8" variant="ghost">
          <Ellipsis className="size-3" />
        </Button>
      </div>
      <span>
        <span className="bg-secondary text-secondary-foreground py-1">Free estimates</span> on every project.
      </span>
    </div>
  );
};

const MaterialIllustration = ({ className }: IllustrationProps) => {
  return (
    <div className={cn("[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]", className)}>
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
};
