import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, TrendingUp, Award, Star } from "lucide-react";
import studentsImg from "@/assets/students-success.jpg";

const highlights = [
  { value: "500+", label: "Civil Servants Selected" },
  { value: "Rank 1", label: "Top AIR in UPSC" },
  { value: "1000+", label: "State PCS Selections" },
  { value: "10,000+", label: "Students Mentored" },
];

const toppers = [
  { name: "Aditya Kumar", exam: "UPSC CSE 2024", score: "AIR 15", college: "IAS" },
  { name: "Priya Sharma", exam: "UPSC CSE 2024", score: "AIR 45", college: "IPS" },
  { name: "Rohit Patel", exam: "MPPSC 2023", score: "Rank 4", college: "Deputy Collector" },
  { name: "Sneha Jain", exam: "UPSC CSE 2023", score: "AIR 112", college: "IRS" },
  { name: "Vikram Singh", exam: "UPPSC 2023", score: "Rank 12", college: "DSP" },
  { name: "Meera Gupta", exam: "UPSC CSE 2022", score: "AIR 204", college: "IAS" },
  { name: "Arjun Reddy", exam: "MPPSC 2022", score: "Rank 19", college: "Deputy Collector" },
  { name: "Kavya Mehta", exam: "UPSC CSE 2021", score: "AIR 56", college: "IFS" },
];

const Results = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={studentsImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            Our <span className="text-accent">Results</span>
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A legacy of excellence — our students consistently achieve top ranks across India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-2xl p-6 text-center card-shadow"
              >
                <Trophy className="mx-auto mb-3 text-accent" size={32} />
                <div className="text-3xl lg:text-4xl font-bold text-foreground font-display">{h.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-foreground text-center mb-12"
          >
            Our <span className="text-accent">Star</span> Performers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-background rounded-2xl p-6 card-shadow text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-accent fill-accent/30" size={28} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{t.name}</h3>
                <p className="text-accent text-sm font-semibold mt-1">{t.score}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.exam}</p>
                <p className="text-muted-foreground text-xs">{t.college}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;
