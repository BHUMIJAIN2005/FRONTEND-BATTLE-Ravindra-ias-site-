import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Users, Clock, Award, BookOpen, Headphones } from "lucide-react";
import { useRef } from "react";
import studentsImg from "@/assets/students-success.jpg";

const features = [
  { icon: Award, title: "10+ Years of Excellence", desc: "A decade of guiding aspirants to success in UPSC." },
  { icon: GraduationCap, title: "Experienced Faculty", desc: "Learn from top educators and subject matter experts." },
  { icon: BookOpen, title: "Comprehensive Courses", desc: "Well-structured curriculum covering GS, CSAT, and Optionals." },
  { icon: Clock, title: "Regular Assessments", desc: "Frequent mock tests and answer writing evaluations." },
  { icon: Users, title: "NCERT Focus", desc: "Strong foundational building through NCERT-based learning." },
  { icon: Headphones, title: "Mentorship Support", desc: "Personalized guidance and strategy sessions for every student." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-primary relative overflow-hidden transition-colors duration-500">
      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <img src={studentsImg} alt="" className="w-full h-[130%] object-cover -translate-y-[15%]" loading="lazy" />
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Ravindra's Institute</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Why Choose <span className="text-accent">Us</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Discover what makes Ravindra IAS the preferred choice for competitive exam preparation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="glass-dark rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-white/5 hover:border-white/20 group cursor-default"
            >
              <div className="w-14 h-14 bg-accent-gradient rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                <feature.icon size={28} className="text-white drop-shadow-sm" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
