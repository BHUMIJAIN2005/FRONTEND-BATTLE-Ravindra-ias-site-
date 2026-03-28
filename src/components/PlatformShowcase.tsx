import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, CheckCircle, PieChart, Timer, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const PlatformShowcase = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1455); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleOptionClick = (i: number) => {
    if (!isSubmitted) setSelectedOption(i);
  };

  const handleSubmit = () => {
    if (selectedOption !== null && !isSubmitted) {
      setIsSubmitted(true);
    } else if (isSubmitted) {
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };
  return (
    <section className="py-24 relative overflow-hidden bg-primary transition-colors duration-500">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4 inline-block"
          >
            Digital Edge
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            The Ultimate Learning <span className="text-accent">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Experience our state-of-the-art mock test platform and AI-driven analytics dashboard designed to push your percentiles higher.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:px-10">
          
          {/* Mock Test UI Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="glass-dark rounded-[2rem] p-8 border-2 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-white/50 text-xs font-mono font-bold tracking-widest">UPSC PRELIMS MOCK - GS PAPER 1</div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-bold mb-3 font-display tracking-wide">Indian Polity & Governance</h4>
              <div className="space-y-3">
                <div className="h-2.5 w-full bg-white/10 rounded-full" />
                <div className="h-2.5 w-[90%] bg-white/10 rounded-full" />
                <div className="h-2.5 w-[95%] bg-white/10 rounded-full" />
                <div className="h-2.5 w-[75%] bg-white/10 rounded-full" />
              </div>
            </div>

            <div className="relative">
              <p className="text-white/90 text-[15px] mb-5 font-medium leading-relaxed">Q1. Which of the following is NOT a feature of the Indian Constitution?</p>
              
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`absolute -top-12 left-0 right-0 flex items-center justify-center gap-2 p-2 rounded-lg text-sm font-bold ${selectedOption === 1 ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}
                  >
                    {selectedOption === 1 ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    {selectedOption === 1 ? 'Correct Answer! +3 Marks' : 'Incorrect Answer. -1 Mark'}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-3">
                {[
                  "A. Parliamentary System",
                  "B. Presidential System",
                  "C. Fundamental Rights",
                  "D. Directive Principles of State Policy"
                ].map((opt, i) => {
                  const isSelected = selectedOption === i;
                  const isCorrectAnswer = i === 1;
                  
                  let borderClass = 'border-white/10 bg-white/5';
                  let ringClass = 'border-white/30 text-transparent';
                  
                  if (isSelected) {
                    borderClass = 'border-accent bg-accent/20';
                    ringClass = 'border-accent bg-background text-accent';
                  }

                  if (isSubmitted) {
                    if (isCorrectAnswer) borderClass = 'border-green-500 bg-green-500/20';
                    else if (isSelected && !isCorrectAnswer) borderClass = 'border-red-500 bg-red-500/20';
                  }

                  return (
                    <motion.div 
                      key={i}
                      whileHover={!isSubmitted ? { scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" } : {}}
                      onClick={() => handleOptionClick(i)}
                      className={`p-4 rounded-xl border ${borderClass} text-sm text-white/90 ${isSubmitted ? 'cursor-default' : 'cursor-pointer'} flex items-center gap-3 transition-colors`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${ringClass}`}>
                        {isSelected && <div className="w-2.5 h-2.5 bg-current rounded-full" />}
                      </div>
                      {opt}
                    </motion.div>
                  )
                })}
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center pt-5 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/80 bg-white/5 px-3 py-1.5 rounded-full">
                <Timer size={14} className="text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest">{formatTime(timeLeft)} min</span>
              </div>
              <button 
                onClick={handleSubmit}
                disabled={selectedOption === null && !isSubmitted}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedOption === null && !isSubmitted
                    ? 'bg-white/10 text-white/40 cursor-not-allowed'
                    : 'bg-accent text-primary shadow-lg hover:bg-white hover:scale-105 active:scale-95'
                }`}
              >
                {isSubmitted ? 'Next Question' : 'Submit Answer'}
              </button>
            </div>
          </motion.div>

          {/* Analytics Dashboard Preview */}
          <div className="relative h-full min-h-[450px]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="absolute top-0 right-0 w-4/5 glass-dark rounded-[2rem] p-8 border-2 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-lg">
                  <TrendingUp className="text-primary" size={28} />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase font-bold tracking-widest mb-1">Estimated Percentile</p>
                  <p className="text-4xl font-display font-black text-white">99.<span className="text-accent">4</span>%</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm text-white/90 font-bold mb-2"><span>Polity</span><span className="text-accent">98.2%</span></div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "98.2%" }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} className="h-full bg-blue-400" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/90 font-bold mb-2"><span>History</span><span className="text-accent">99.8%</span></div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "99.8%" }} transition={{ duration: 1, delay: 0.7, ease: "easeOut" }} className="h-full bg-accent" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/90 font-bold mb-2"><span>Economy</span><span className="text-accent">99.1%</span></div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "99.1%" }} transition={{ duration: 1, delay: 0.9, ease: "easeOut" }} className="h-full bg-green-400" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="absolute bottom-10 left-0 w-3/4 bg-card/95 backdrop-blur-xl rounded-[1.5rem] p-6 border-2 border-border shadow-2xl z-30"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <PieChart className="text-accent" size={24} />
                  <h5 className="text-foreground font-bold text-sm tracking-wide">Accuracy Report</h5>
                </div>
                <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded">Top 1%</span>
              </div>
              
              <div className="flex justify-between items-end h-28 border-b border-border pb-2 px-2">
                <div className="flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-10 bg-muted rounded-t-lg relative flex items-end h-[60%]">
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 0.8, delay: 0.8 }} className="w-full bg-green-500 rounded-t-lg" />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Mock 1</span>
                </div>
                <div className="flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-10 bg-muted rounded-t-lg relative flex items-end h-[75%]">
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "80%" }} transition={{ duration: 0.8, delay: 0.9 }} className="w-full bg-green-500 rounded-t-lg" />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Mock 2</span>
                </div>
                <div className="flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-10 bg-muted rounded-t-lg relative flex items-end h-full">
                    <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 0.8, delay: 1 }} className="w-full bg-accent rounded-t-lg" />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Mock 3</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-foreground font-semibold">
                <CheckCircle size={16} className="text-green-500" /> Constant improvement detected!
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
