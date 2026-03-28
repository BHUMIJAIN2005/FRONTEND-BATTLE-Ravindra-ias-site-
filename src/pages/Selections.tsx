import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Trophy, Star, Award, Users } from "lucide-react";

const selections = [
  { name: "Anurag Tiwari", rank: "AIR 13", exam: "UPSC CSE 2023", state: "Madhya Pradesh" },
  { name: "Kavita Yadav", rank: "Rank 4", exam: "MPPSC 2023", state: "Gwalior" },
  { name: "Rohit Sharma", rank: "AIR 47", exam: "UPSC CSE 2023", state: "Madhya Pradesh" },
  { name: "Sunita Verma", rank: "Rank 7", exam: "MPPSC 2022", state: "Gwalior" },
  { name: "Mohan Das", rank: "AIR 89", exam: "UPSC CSE 2022", state: "Madhya Pradesh" },
  { name: "Pooja Jain", rank: "Rank 15", exam: "MPPSC 2023", state: "Gwalior" },
  { name: "Arun Kumar", rank: "AIR 134", exam: "UPSC CSE 2023", state: "Madhya Pradesh" },
  { name: "Riya Singh", rank: "Rank 22", exam: "MPPSC 2022", state: "Gwalior" },
];

const stats = [
  { icon: Trophy, label: "UPSC Selections", value: "150+" },
  { icon: Award, label: "MPPSC Selections", value: "300+" },
  { icon: Star, label: "Top 100 AIR", value: "28" },
  { icon: Users, label: "Students Enrolled", value: "5000+" },
];

const Selections = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_hsl(45,100%,51%),_transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-accent font-bold text-sm uppercase tracking-[0.25em] mb-4 inline-block">
              🏆 Hall of Fame
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-accent">Selections</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Proud of our students who cracked UPSC & MPPSC with top ranks. Their success is our greatest achievement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background border border-border"
              >
                <s.icon className="mx-auto mb-3 text-accent" size={32} />
                <p className="font-display text-4xl font-bold text-foreground">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selections grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Recent Achievers</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2">
              Top <span className="text-accent">Rankers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent">
                  {s.name.charAt(0)}
                </div>
                <p className="font-bold text-foreground text-lg">{s.name}</p>
                <p className="text-accent font-bold text-2xl mt-1">{s.rank}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.exam}</p>
                <span className="inline-block mt-3 text-xs bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full font-semibold">
                  {s.state}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default Selections;
