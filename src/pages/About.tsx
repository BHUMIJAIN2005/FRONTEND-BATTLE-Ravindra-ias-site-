import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutBg from "@/assets/about-bg.jpg";
import directorImg from "@/assets/director.jpg";
import { Award, Users, BookOpen, Target, CheckCircle, GraduationCap } from "lucide-react";

const milestones = [
  { year: "2010", event: "Ravindra IAS establishes Delhi presence" },
  { year: "2015", event: "Expansion to Gwalior with dedicated UPSC coaching" },
  { year: "2018", event: "Launched NCERT foundation programs" },
  { year: "2020", event: "Online + hybrid mentoring introduced" },
  { year: "2024", event: "Thousands of students guided across all programs" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mb-4"
            >
              About <span className="text-accent">Ravindra's Institute</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
            >
              Founder of GS NCERT Course — shaping careers and building futures for UPSC aspirants.
            </motion.p>
          </div>
        </section>

      {/* Mission */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide world-class coaching that empowers students to achieve top ranks in competitive exams." },
              { icon: GraduationCap, title: "Our Vision", desc: "To be India's most trusted and accessible test preparation institute across every city." },
              { icon: Award, title: "Our Values", desc: "Excellence, integrity, student-first approach, continuous innovation in teaching methodology." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-background card-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl lg:text-4xl font-bold text-foreground text-center mb-12"
          >
            Our <span className="text-accent">Journey</span>
          </motion.h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10 border-4 border-background" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-card rounded-xl p-4 card-shadow">
                    <span className="text-accent font-bold text-lg">{m.year}</span>
                    <p className="text-muted-foreground text-sm mt-1">{m.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
