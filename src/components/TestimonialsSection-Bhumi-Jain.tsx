import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  { name: "Priya Sharma", exam: "UPSC CSE Air 45", text: "Ravindra IAS transformed my preparation. Sir's NCERT-based approach made even the toughest concepts easy to grasp." },
  { name: "Rahul Verma", exam: "IAS Officer", text: "The personalized guidance and rigorous mock tests at Ravindra's Institute were instrumental in my selection." },
  { name: "Ankit Jain", exam: "MPPSC Top 50", text: "From zero knowledge of state civil services to a top 50 rank — all thanks to the dedicated faculty." },
  { name: "Sneha Patel", exam: "UPSC CSE Mains", text: "The structured approach and consistent support from mentors helped me clear Prelims and Mains in my first attempt." },
  { name: "Vikram Singh", exam: "UPSC CSE Air 112", text: "The unique teaching methodology and the competitive batch environment pushed me to achieve my best." },
  { name: "Meera Gupta", exam: "State PCS Rank 14", text: "Ravindra IAS provided the perfect balance of foundation building and advanced preparation." },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="results" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Student Stories</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our <span className="text-accent">Students</span> Say
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollPaddingLeft: "1rem" }}
      >
        <div className="shrink-0 w-4 md:w-[calc((100vw-1400px)/2)]" />
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="shrink-0 w-80 sm:w-96 snap-start glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-grab active:cursor-grabbing group border border-white/40 hover:border-accent/30"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={18} className="fill-accent text-accent group-hover:scale-110 transition-transform" style={{ transitionDelay: `${j * 50}ms` }} />
              ))}
            </div>
            <Quote className="text-accent/30 mb-4 group-hover:animate-pulse" size={36} />
            <p className="text-muted-foreground text-base leading-relaxed mb-6 font-medium">{t.text}</p>
            <div className="pt-4 border-t border-border/50">
              <p className="font-bold text-foreground text-lg">{t.name}</p>
              <p className="text-accent text-sm font-bold uppercase tracking-wider mt-1">{t.exam}</p>
            </div>
          </motion.div>
        ))}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
