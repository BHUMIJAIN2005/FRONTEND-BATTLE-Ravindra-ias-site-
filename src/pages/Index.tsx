import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ScrollStory } from "@/components/ScrollStory";
import DirectorSection from "@/components/DirectorSection";
import CoursesPreview from "@/components/CoursesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import { PlatformShowcase } from "@/components/PlatformShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative"
    >
      {/* Global Animated Background Orbs inside an overflow-hidden wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="bg-orb-1" />
        <div className="bg-orb-2" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ScrollStory />
        <DirectorSection />
        <CoursesPreview />
        <WhyChooseUs />
        <PlatformShowcase />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
