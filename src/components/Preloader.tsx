import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <img src="/Ravindraiaslogo.png" alt="Ravindra IAS" className="w-24 h-24 rounded-full object-cover shadow-2xl relative z-10" />
        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse-glow" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 text-white font-display text-xl tracking-widest font-bold"
      >
        RAVINDRA IAS
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
