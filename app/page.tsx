import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import GallerySection from "@/components/sections/GallerySection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
