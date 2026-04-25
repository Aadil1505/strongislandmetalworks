import type { Metadata, Viewport } from "next";
import { Quantico, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const quantico = Quantico({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quantico",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://strongislandmetalworks.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Strong Island Metal Works | Custom Metal Fabrication - NYC & Surrounding Area",
    template: "%s | Strong Island Metal Works",
  },
  description:
    "Custom gates, railings, fencing, welding, and ornamental ironwork. Strong Island Metal Works serves NYC and the surrounding area.",
  keywords: [
    "metal fabrication New York",
    "custom metal gates NYC",
    "custom railings New York",
    "welding contractor NYC",
    "ornamental ironwork New York",
    "fencing fabrication Long Island",
    "metal fabrication Long Island",
    "custom gates Baldwin NY",
    "railings Nassau County",
    "steel fabrication Brooklyn",
    "wrought iron gates Queens",
    "commercial metal fabrication NY",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Strong Island Metal Works | Custom Metal Fabrication - NYC & Surrounding Area",
    description:
      "Custom metal fabrication: gates, railings, fencing, and ornamental ironwork. Serving NYC and the surrounding area.",
    url: siteUrl,
    siteName: "Strong Island Metal Works",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Strong Island Metal Works — Custom Metal Fabrication in NYC & Surrounding Area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strong Island Metal Works | Custom Metal Fabrication - NYC & Surrounding Area",
    description:
      "Custom metal fabrication: gates, railings, fencing, and ornamental ironwork. Serving NYC and the surrounding area.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full antialiased",
        quantico.variable,
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
