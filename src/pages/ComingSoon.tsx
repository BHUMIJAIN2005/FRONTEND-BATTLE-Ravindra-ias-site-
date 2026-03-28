import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";

const labels: Record<string, string> = {
  "/test-series": "Test Series",
  "/blog": "Blog",
  "/app": "Download App",
  "/selections": "Our Selections",
};

const ComingSoon = () => {
  const { pathname } = useLocation();
  const pageName = labels[pathname] ?? "This Page";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl relative z-10"
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="text-8xl mb-8 inline-block"
        >
          🚀
        </motion.div>

        <span className="text-accent font-bold text-sm uppercase tracking-[0.25em] mb-4 inline-flex items-center gap-2">
          <Clock size={14} />
          Coming Soon
        </span>

        <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6 leading-tight">
          {pageName} is <span className="text-accent">on its way!</span>
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed mb-10">
          We're working hard to bring you something awesome. Stay tuned — this section will be live very soon!
        </p>

        {/* Progress bar animation */}
        <div className="w-full bg-border h-2 rounded-full overflow-hidden mb-10">
          <motion.div
            className="h-full bg-accent-gradient rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "70%" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          />
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-gradient text-accent-foreground rounded-xl font-semibold text-base hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
