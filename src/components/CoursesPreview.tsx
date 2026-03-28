import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, School, Trophy, Target, TrendingUp, Building } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  { name: "UPSC Foundation", icon: BookOpen, desc: "Comprehensive prep" },
  { name: "GS + CSAT", icon: Target, desc: "Prelims & Mains" },
  { name: "Optional Subjects", icon: Briefcase, desc: "Specialized coaching" },
  { name: "MPPSC", icon: Trophy, desc: "State Civil Services" },
  { name: "SSC / Railway", icon: TrendingUp, desc: "Government Exams" },
];

const CourseCard = ({ course, index }: { course: typeof courses[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -8, scale: 1.04, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    className="glass rounded-2xl p-6 hover:card-hover-shadow transition-all duration-300 cursor-pointer group hover:border-accent/40"
  >
    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-gradient group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]">
      <course.icon size={28} className="text-accent group-hover:text-white transition-colors" />
    </div>
    <h3 className="font-display text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{course.name}</h3>
    <p className="text-sm text-muted-foreground font-medium">{course.desc}</p>
  </motion.div>
);

const CoursesPreview = () => {
  return (
    <section id="courses" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Our <span className="text-accent">Courses</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive coaching programs for college and school level competitive exams with proven track records.
          </p>
        </motion.div>

        {/* Combined Courses */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {courses.map((course, i) => (
              <CourseCard key={course.name} course={course} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/courses"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-gradient text-white rounded-full font-bold text-lg hover-lift glow-on-hover transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
          >
            View All Courses
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesPreview;
