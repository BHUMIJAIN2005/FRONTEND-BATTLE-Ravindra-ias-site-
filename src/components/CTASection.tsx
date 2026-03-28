import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-hero-gradient rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Start Your <span className="text-accent">Journey</span>?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Visit our Gwalior centre or enquire online. Take the first step towards your dream career today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-gradient text-accent-foreground rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                Enquire Now
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+917042027486"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Phone size={20} />
                Call Us
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
              <MapPin size={16} />
              1st Floor, Krishna Tower, Phoolbagh Chauraha, Gwalior
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
