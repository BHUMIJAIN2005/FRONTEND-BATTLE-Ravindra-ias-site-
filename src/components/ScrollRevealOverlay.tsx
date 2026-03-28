import { motion } from "framer-motion";

export const ScrollRevealOverlay = ({ 
  children, 
  color = "bg-accent/80 backdrop-blur-md" 
}: { 
  children: React.ReactNode, 
  color?: string 
}) => {
  return (
    <div className="relative overflow-hidden w-full h-full rounded-2xl group">
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute inset-0 z-20 origin-top flex items-center justify-center ${color} border border-white/20`}
      />
    </div>
  );
};
