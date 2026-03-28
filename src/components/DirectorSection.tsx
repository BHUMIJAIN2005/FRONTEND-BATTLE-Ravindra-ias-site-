import { motion } from "framer-motion";
import { Quote } from "lucide-react";


import { ScrollRevealOverlay } from "@/components/ScrollRevealOverlay";

const DirectorSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative shadow-2xl border border-white/40 rounded-2xl">
              <ScrollRevealOverlay color="bg-accent">
                <div className="relative group w-full h-full object-cover rounded-2xl overflow-hidden bg-background">
                  <img src="/RAVINDERSIRIMAGE.PNG" alt="Ravindra IAS Director" className="w-full max-w-md mx-auto group-hover:scale-105 transition-transform duration-700" loading="lazy" width={512} height={640} />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-display text-2xl font-bold drop-shadow-md">Ravindra Sir</p>
                    <p className="text-accent text-sm font-bold uppercase tracking-widest mt-1">Founder & Director</p>
                  </div>
                </div>
              </ScrollRevealOverlay>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gradient rounded-full blur-2xl opacity-60 -z-10 hidden lg:block animate-pulse-glow" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-accent/40 rounded-full blur-sm -z-10 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Ravindra IAS</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6">
              Excellence in{" "}
              <span className="text-accent">UPSC Preparation</span>
            </h2>
            <div className="relative mb-6">
              <Quote className="text-accent/30 absolute -top-2 -left-2" size={40} />
              <p className="text-muted-foreground leading-relaxed pl-8">
                Focus on NCERT-based learning, conceptual clarity, and personalized mentoring. At Ravindra’s Institute, we believe in building a strong foundation for every aspirant.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Recognized for our structured courses and experienced faculty, we provide comprehensive guidance for UPSC and other competitive exams to help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["NCERT Focus", "Personalized Mentoring", "Conceptual Clarity"].map((badge) => (
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  key={badge} 
                  className="glass px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-primary border border-white/50 hover:border-accent hover:text-accent transition-colors shadow-sm cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
