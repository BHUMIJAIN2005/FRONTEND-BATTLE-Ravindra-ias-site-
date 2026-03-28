import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import targetImg from "@/assets/hero-bg.jpg";

const journeySteps = [
  {
    phase: "Phase 1",
    title: "The Aspiration",
    desc: "Every great journey begins with a target. At Ravindra IAS, we help you identify your true potential and map the right path to success.",
    icon: "🎯",
  },
  {
    phase: "Phase 2",
    title: "The Preparation",
    desc: "Rigorous training, expert mentorship, and comprehensive study materials designed for top ranks. Our faculty ensures no concept is left unclear.",
    icon: "📚",
  },
  {
    phase: "Phase 3",
    title: "The Execution",
    desc: "Master time management and accuracy through our intensive mock test series and competitive environment crafted to simulate the real UPSC experience.",
    icon: "🏆",
  },
];

export const ScrollStory = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto cycle through steps every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Calculate progress width for the bar
  const progressWidth = `${((activeStep + 1) / journeySteps.length) * 100}%`;

  return (
    <section className="relative hidden lg:block py-28 bg-background border-y border-border overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-8 grid grid-cols-2 gap-16 items-center">

        {/* LEFT: Phase text with fade transition */}
        <div className="flex flex-col justify-center min-h-[400px] relative">

          {/* Step Indicator Dots */}
          <div className="flex items-center gap-3 mb-10">
            {journeySteps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`transition-all duration-500 rounded-full cursor-pointer hover:bg-accent/80 ${
                  i === activeStep
                    ? "w-8 h-3 bg-accent"
                    : "w-3 h-3 bg-border"
                }`}
                aria-label={`Go to phase ${i + 1}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 inline-block">
                {journeySteps[activeStep].phase}
              </span>

              <div className="text-7xl mb-6">{journeySteps[activeStep].icon}</div>

              <h3 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {journeySteps[activeStep].title}
              </h3>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {journeySteps[activeStep].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Fixed image with progress overlay */}
        <div className="relative h-[65vh] rounded-[2rem] overflow-hidden shadow-2xl border border-border/30">
          <motion.img
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
            src={targetImg}
            alt="Student Journey"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent" />

          {/* Progress Card */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="glass-dark p-6 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-display text-xl font-bold">The Architecture of Success</p>
                <span className="text-accent font-bold text-sm bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  {activeStep + 1}/{journeySteps.length}
                </span>
              </div>

              <div className="flex justify-between text-xs text-white/60 font-bold uppercase tracking-widest mb-2">
                <span>Phase 1</span>
                <span>Final Phase</span>
              </div>
              <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-accent-gradient"
                  animate={{ width: progressWidth }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>

              {/* Phase label below bar */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white/70 text-xs mt-3 font-semibold"
                >
                  Currently: {journeySteps[activeStep].phase} — {journeySteps[activeStep].title}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
