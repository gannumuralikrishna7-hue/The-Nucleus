import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Features } from "@/components/sections/Features";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { AISpotlight } from "@/components/sections/AISpotlight";
import { MobileApp } from "@/components/sections/MobileApp";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
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
