import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  { name: "Priya Sharma", exam: "UPSC CSE AIR 45", text: "Ravindra IAS transformed my preparation. The structured approach and detailed mains answer writing sessions made all the difference." },
  { name: "Rahul Verma", exam: "MPPSC Rank 12", text: "The personalized guidance and rigorous mock test series here were instrumental in my MPPSC selection. Highly recommended!" },
  { name: "Ankit Jain", exam: "UPSC CSE AIR 108", text: "From zero knowledge of the syllabus to a top rank — all thanks to the dedicated faculty and mentorship at Ravindra's Institute." },
  { name: "Sneha Patel", exam: "MPPSC Deputy Collector", text: "The NCERT focus and consistent support from teachers helped me crack MPPSC in my very first attempt." },
  { name: "Vikram Singh", exam: "UPSC CSE AIR 234", text: "The unique teaching methodology and competitive batch environment pushed me to achieve my best in the Civil Services Exam." },
  { name: "Meera Gupta", exam: "MPPSC Rank 28", text: "Ravindra IAS provided the perfect balance of foundation building and advanced preparation for the state services." },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28 bg-card overflow-hidden">
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
        <div className="shrink-0 w-4 2xl:w-[calc((100vw-1400px)/2)]" />
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="shrink-0 w-[85vw] sm:w-80 md:w-96 snap-start bg-background rounded-2xl p-6 card-shadow hover:card-hover-shadow transition-all duration-300"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <Quote className="text-accent/20 mb-2" size={32} />
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.text}</p>
            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-accent text-sm font-medium">{t.exam}</p>
            </div>
          </motion.div>
        ))}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
