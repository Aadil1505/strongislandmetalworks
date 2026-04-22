"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";

type ServiceKey = "item-1" | "item-2" | "item-3" | "item-4" | "item-5" | "item-6";

const SERVICE_META: Record<ServiceKey, { image: string; alt: string }> = {
  "item-1": { image: "/pictures/three.jpg",   alt: "Custom gate fabrication" },
  "item-2": { image: "/pictures/four.jpg",   alt: "Railings and handrails" },
  "item-3": { image: "/pictures/two.jpg", alt: "Ornamental fencing" },
  "item-4": { image: "/pictures/weld.jpg",  alt: "Welding and fabrication" },
  "item-5": { image: "/pictures/one.jpg",  alt: "Repairs and installation" },
  "item-6": { image: "/pictures/five.jpg",   alt: "Ornamental ironwork" },
};

export default function ServicesSection() {
  const [activeItem, setActiveItem] = useState<ServiceKey>("item-1");

  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12 md:space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary mb-3">
            Fabricated in Baldwin
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
            Services
          </h2>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            Six services, one shop. Everything is built to fit your exact space, not pulled from a catalog.
          </p>
        </motion.div>

        {/* Accordion + Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="grid gap-10 md:grid-cols-2 md:gap-16 items-start mt-0"
        >
          {/* Accordion */}
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(v) => setActiveItem(v as ServiceKey)}
            className="w-full"
          >
            {SERVICES.map((service, i) => {
              const key = `item-${i + 1}` as ServiceKey;
              return (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger className="text-left">
                    <span className="text-base font-heading font-semibold">{service.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Image panel */}
          <div className="order-first md:order-last relative flex overflow-hidden rounded-2xl border border-border bg-background p-2 md:sticky md:top-28">
            {/* Hatched side strip */}
            <div className="absolute inset-0 right-0 ml-auto w-14 border-l border-border bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]" />

            <div className="relative w-[calc(3/4*100%+3rem)] rounded-xl overflow-hidden aspect-76/59 bg-muted">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.22 }}
                  className="size-full rounded-xl overflow-hidden border border-border shadow-sm"
                >
                  <Image
                    src={SERVICE_META[activeItem].image}
                    alt={SERVICE_META[activeItem].alt}
                    width={1207}
                    height={929}
                    className="size-full object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-primary/60 to-transparent"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
