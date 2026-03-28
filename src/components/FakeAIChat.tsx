import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

export const FakeAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "ai" | "user" }[]>([]);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    // Auto-open chat slightly after page load to draw attention subtly
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
        setMessages([{ text: "Hi there! 👋 Looking to crack UPSC 2026? Let me help you find the right track.", sender: "ai" }]);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasOpened]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-card border border-border shadow-2xl rounded-2xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Ravindra IAS Counselor</h4>
                  <p className="text-xs text-white/70">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 bg-background min-h-[250px] max-h-[300px] overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === "ai" 
                      ? "bg-muted text-foreground self-start rounded-tl-sm" 
                      : "bg-primary text-primary-foreground self-end rounded-tr-sm"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              
              {/* Fake quick replies */}
              {messages.length === 1 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.6 }}
                  className="mt-4 flex flex-col gap-2"
                >
                  <button onClick={() => setMessages([...messages, {text: "Tell me about UPSC batches", sender: "user"}, {text: "We have weekend and weekday batches starting next week! I'll connect you with a mentor.", sender: "ai"}])} className="text-xs bg-accent/20 text-accent border border-accent/30 py-2 px-3 rounded-full self-start hover:bg-accent hover:text-primary transition-colors font-medium">Tell me about UPSC batches</button>
                  <button onClick={() => setMessages([...messages, {text: "What is your success rate?", sender: "user"}, {text: "Thousands of students guided to top ranks! Feel free to check our Selections section.", sender: "ai"}])} className="text-xs bg-accent/20 text-accent border border-accent/30 py-2 px-3 rounded-full self-start hover:bg-accent hover:text-primary transition-colors font-medium">What is your success rate?</button>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-card border-t border-border flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Type your question..." 
                className="flex-1 bg-transparent text-sm text-foreground focus:outline-none placeholder:text-muted-foreground px-2"
                readOnly // Fake interaction
              />
              <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white opacity-50 cursor-not-allowed">
                <Send size={14} className="ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setIsOpen(!isOpen); setHasOpened(true); }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-[0_0_30px_rgba(29,78,216,0.3)] flex items-center justify-center z-50 hover:bg-primary/90 transition-colors border-2 border-white/10"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!hasOpened && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-destructive rounded-full border-2 border-background animate-pulse" />
        )}
      </motion.button>
    </>
  );
};
