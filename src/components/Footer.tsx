import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowUp, ChevronRight } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hashID: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hashID)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(hashID)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden border-t border-white/10">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-4">
                <img 
                  src="/Ravindraiaslogo.png" 
                  alt="Ravindra IAS" 
                  className="w-16 h-16 rounded-full object-contain bg-white shadow-md" 
                />
                <div>
                  <h3 className="font-display font-bold text-2xl tracking-wide text-white">Ravindra IAS</h3>
                  <p className="text-xs text-white/70 font-bold tracking-widest uppercase">Institute</p>
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed font-medium">
              Founder of GS NCERT Course — India's premier UPSC coaching institute focusing on conceptual clarity and personalized mentoring.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/ravindrasias" }, 
                { icon: Facebook, href: "https://facebook.com/ravindrasias" }, 
                { icon: Youtube, href: "https://www.youtube.com/@ravindrasias" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 group">
                  <social.icon size={18} className="text-white group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" },
                { name: "Courses", id: "courses" },
                { name: "Test Series", id: "test-series" },
                { name: "Our Selections", id: "selections" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={`/#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm font-medium group cursor-pointer"
                  >
                    <ChevronRight size={14} className="text-accent/50 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6 text-white">Our Courses</h4>
            <ul className="space-y-3">
              {["UPSC Foundation", "GS + CSAT", "Optional Subjects", "MPPSC", "SSC / Railway"].map((item) => (
                <li key={item}>
                  <a 
                    href="/#courses"
                    onClick={(e) => handleNavClick(e, "courses")}
                    className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm font-medium group cursor-pointer"
                  >
                    <ChevronRight size={14} className="text-accent/50 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70 font-medium leading-relaxed group">
                <div className="mt-1 p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-accent/40 transition-colors">
                  <MapPin size={14} className="text-accent" />
                </div>
                <span>
                  <strong>Gwalior Unit:</strong><br/>
                  1st Floor, Krishna Tower, Phoolbagh Chauraha, Gwalior
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70 font-medium leading-relaxed group">
                <div className="mt-1 p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-accent/40 transition-colors">
                  <MapPin size={14} className="text-accent" />
                </div>
                <span>
                  <strong>Delhi Unit:</strong><br/>
                  Mukherjee Nagar, New Delhi
                </span>
              </li>
              <li>
                <a href="tel:+917042027486" className="flex items-center gap-3 text-sm text-white/70 hover:text-accent font-medium transition-colors group">
                  <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-accent/40 transition-colors">
                    <Phone size={14} className="text-accent" />
                  </div>
                  +91 7042027486 / +91 8359038350
                </a>
              </li>
              <li>
                <a href="mailto:ravindrasiasdelhi@gmail.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-accent font-medium transition-colors group">
                  <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-accent/40 transition-colors">
                    <Mail size={14} className="text-accent" />
                  </div>
                  ravindrasiasdelhi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/50 font-medium">
            © 2026 Ravindra's Institute. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop} 
            className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-primary group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
