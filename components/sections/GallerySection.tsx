"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/social-icons";
import { GALLERY_IMAGES, COMPANY } from "@/lib/constants";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-lg">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Recent Projects
            </h2>
          </div>
          <Button variant="outline" asChild className="shrink-0 gap-2">
            <a
              href={COMPANY.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-4 w-4" />
              Follow on Instagram
            </a>
          </Button>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.97 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              className={`relative overflow-hidden rounded-md bg-muted group ${
                i === 0 ? "sm:col-span-2 lg:col-span-1 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-end p-4">
                <p className="text-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          See more of our work on{" "}
          <a
            href={COMPANY.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Instagram
          </a>
        </motion.p>
      </div>
    </section>
  );
}
