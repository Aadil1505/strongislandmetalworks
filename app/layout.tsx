import type { Metadata } from "next";
import { Quantico, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const quantico = Quantico({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quantico",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Strong Island Metal Works | Custom Metal Fabrication - Baldwin, NY",
  description:
    "Custom gates, railings, fencing, welding, and ornamental ironwork on Long Island. Strong Island Metal Works serves Nassau County and beyond.",
  keywords: [
    "metal fabrication Long Island",
    "custom gates Baldwin NY",
    "railings Nassau County",
    "welding Long Island",
    "ornamental ironwork NY",
    "fencing fabrication Long Island",
  ],
  openGraph: {
    title: "Strong Island Metal Works",
    description:
      "Custom metal fabrication: gates, railings, fencing, and ornamental ironwork on Long Island, NY.",
    siteName: "Strong Island Metal Works",
    locale: "en_US",
    type: "website",
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
