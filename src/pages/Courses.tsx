import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Briefcase, School, Trophy, Target, TrendingUp, Building, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const allCourses = [
  { name: "UPSC Foundation", icon: BookOpen, category: "UPSC/PSC", desc: "A comprehensive foundation course building NCERT concepts from the ground up to advanced analysis.", duration: "12-18 Months", batch: "40 Students" },
  { name: "GS + CSAT", icon: Target, category: "UPSC/PSC", desc: "Integrated Prelims & Mains preparation for General Studies and Civil Services Aptitude Test.", duration: "10 Months", batch: "40 Students" },
  { name: "Optional Subjects", icon: Briefcase, category: "UPSC/PSC", desc: "Specialized coaching for key optional subjects with answer writing practice.", duration: "4-6 Months", batch: "30 Students" },
  { name: "MPPSC", icon: Trophy, category: "UPSC/PSC", desc: "State Civil Services exam preparation aligned with the latest syllabus and pattern.", duration: "10 Months", batch: "40 Students" },
  { name: "SSC / Railway", icon: TrendingUp, category: "Other Exams", desc: "Focused preparation for Staff Selection Commission and RRB exams.", duration: "6-8 Months", batch: "50 Students" },
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            Our <span className="text-accent">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Comprehensive coaching programs designed to help you crack the toughest competitive exams.
          </motion.p>
        </div>
      </section>

      {["UPSC/PSC", "Other Exams"].map((category) => (
        <section key={category} className={`py-16 ${category === "Other Exams" ? "bg-card" : ""}`}>
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <span className="w-10 h-1 bg-accent-gradient rounded-full" />
              {category} Programs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCourses
                .filter((c) => c.category === category)
                .map((course, i) => (
                  <motion.div
                    key={course.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-background rounded-2xl p-6 card-shadow hover:card-hover-shadow transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <course.icon className="text-accent" size={24} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">{course.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{course.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Clock size={14} />{course.duration}</span>
                      <span className="flex items-center gap-1"><Users size={14} />{course.batch}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Enquire Now <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Courses;
