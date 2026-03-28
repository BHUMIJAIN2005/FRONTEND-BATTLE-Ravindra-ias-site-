import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import Results from "@/pages/Results";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import ComingSoon from "@/pages/ComingSoon";
import Selections from "@/pages/Selections";

const pageVariants = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  in: { opacity: 1, y: 0, scale: 1 },
  out: { opacity: 0, y: -40, scale: 0.98 }
};

const pageTransition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1], // Apple-like smooth cubic-bezier
  duration: 0.6
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="w-full min-h-screen"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/about-us" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
        <Route path="/results" element={<PageWrapper><Results /></PageWrapper>} />
        <Route path="/selections" element={<PageWrapper><Selections /></PageWrapper>} />
        <Route path="/test-series" element={<PageWrapper><ComingSoon /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><ComingSoon /></PageWrapper>} />
        <Route path="/app" element={<PageWrapper><ComingSoon /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
