import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStack from "@/components/TechStack";
import VisionSection from "@/components/VisionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Background3D />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechStack />
      <VisionSection />
      <CTASection />
      <Footer />
    </main>
  );
}

