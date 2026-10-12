import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Features } from "@/components/sections/Features";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { AISpotlight } from "@/components/sections/AISpotlight";
import { MobileApp } from "@/components/sections/MobileApp";
import { Onboarding } from "@/components/sections/Onboarding";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { EnquiryModalProvider } from "@/components/ui/EnquiryModal";

export default function Home() {
  return (
    <EnquiryModalProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <LogoMarquee />
        <Features />
        <ProductDemo />
        <AISpotlight />
        <MobileApp />
        <Onboarding />
        <FinalCTA />
      </main>
      <Footer />
    </EnquiryModalProvider>
  );
}
