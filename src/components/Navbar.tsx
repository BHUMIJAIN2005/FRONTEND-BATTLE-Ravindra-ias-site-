import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, GraduationCap, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Test Series", path: "/test-series" },
  { label: "Our Selections", path: "/selections" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
  { label: "Download App", path: "/app" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      {/* Top bar */}
      <div className="bg-primary border-b border-white/5 py-1.5">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 md:gap-3 text-primary-foreground/80">
            <a href="tel:+917042027486" className="group flex items-center gap-2 px-3 py-1.5 md:py-2 rounded-full hover:bg-white/10 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
              <Phone size={14} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium tracking-wide">+91 7042027486</span>
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <a href="mailto:ravindrasiasdelhi@gmail.com" className="group hidden md:flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/10 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
              <Mail size={14} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-wide">ravindrasiasdelhi@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="bg-accent/15 text-accent border border-accent/20 px-5 py-1.5 md:py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-accent hover:text-accent-foreground shadow-[0_0_15px_rgba(255,204,0,0.15)] hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/Ravindraiaslogo.png" alt="Ravindra's Institute" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform" />
          <span className="text-xl font-bold text-foreground hidden sm:block">Ravindra's Institute</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-foreground hover:text-accent hover:bg-accent/10"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-gradient rounded-full"
                />
              )}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 p-2 rounded-full text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 bg-accent-gradient text-accent-foreground rounded-lg font-semibold text-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      location.pathname === link.path
                        ? "bg-accent/10 text-accent"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center justify-between px-4 py-3 mt-2 border-t border-border">
                <span className="font-medium text-foreground">Theme</span>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full bg-accent/10 text-accent"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-6 py-3 bg-accent-gradient text-accent-foreground rounded-lg font-semibold text-center"
              >
                Apply Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
