import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/students-success.jpg";
import heroBg3 from "@/assets/about-bg.jpg";

const backgroundImages = [heroBg1, heroBg2, heroBg3];

const stats = [
  { icon: Users, value: "10,000+", label: "Students Trained" },
  { icon: Award, value: "99.9%", label: "Top Percentile" },
  { icon: BookOpen, value: "20+", label: "Years Experience" },
];

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 250]);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // 15px max translation
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.8 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Scroll & Mouse Parallax */}
      <motion.div 
        className="absolute inset-[-5%] z-0 bg-primary" 
        style={{ y }}
      >
        <motion.div 
          className="w-[110%] h-[110%] absolute"
          animate={{ x: -mousePos.x, y: -mousePos.y }}
          transition={{ type: "spring", stiffness: 45, damping: 20 }}
        >
          <AnimatePresence>
            <motion.img 
              key={currentImage}
              src={backgroundImages[currentImage]} 
              alt="Ravindra IAS" 
              className="absolute inset-0 w-full h-full object-cover scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply transition-colors duration-500 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent transition-colors duration-500 z-10 pointer-events-none" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Award size={16} />
                Founder of GS NCERT Course
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
            >
              <span className="text-gradient-accent drop-shadow-sm">Best IAS Coaching</span>{" "}
              in Gwalior
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed"
            >
              UPSC preparation with experienced faculty and structured courses.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-gradient text-white rounded-full font-bold text-lg hover-lift glow-on-hover transition-all duration-300 shadow-lg"
              >
                Explore Courses
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 hover-lift transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-dark rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <stat.icon className="mx-auto mb-3 text-accent drop-shadow-md" size={32} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/80 font-semibold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
