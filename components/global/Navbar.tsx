"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/web-app-manifest-192x192.png"
            alt={COMPANY.name}
            width={32}
            height={32}
            className="rounded-full size-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-heading text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile — Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"          
            className="bg-card border-l border-border flex flex-col p-0 w-full sm:max-w-xs"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            {/* Header */}
            <div className="flex items-center gap-3 px-6 h-16 border-b border-border shrink-0">
              <Image
                src="/web-app-manifest-192x192.png"
                alt={COMPANY.name}
                width={28}
                height={28}
                className="rounded-full size-8"
              />
              <span className="font-heading text-sm font-semibold text-foreground tracking-tight">
                Strong Island{" "}
                <span className="text-primary">Metal Works</span>
              </span>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="font-heading text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors duration-200 py-3 border-b border-border/30 last:border-0"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-6 pb-8 pt-6 border-t border-border shrink-0">
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href="#contact">
                    Get a Free Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </SheetClose>
              <p className="text-[10px] text-muted-foreground/50 tracking-[0.25em] uppercase text-center mt-5">
                Baldwin, New York · Est. 2020
              </p>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}
