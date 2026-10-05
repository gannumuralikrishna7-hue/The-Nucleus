import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Features } from "@/components/sections/Features";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { AISpotlight } from "@/components/sections/AISpotlight";
import { MobileApp } from "@/components/sections/MobileApp";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <LogoMarquee />
        <Features />
        <ProductDemo />
        <AISpotlight />
        <MobileApp />
        <Pricing />
        <Testimonials />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
