import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dailyChecklist } from "@/data/bookData";
import {
  Sunrise, Moon, Users, Sparkles, Sun, Briefcase, BookOpen, HandMetal,
  BookOpenCheck, Star, Gift, GraduationCap, Heart, Check, Quote,
} from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  Sunrise: <Sunrise className="w-5 h-5" />, Moon: <Moon className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />, Sparkles: <Sparkles className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />, Briefcase: <Briefcase className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />, HandMetal: <HandMetal className="w-5 h-5" />,
  BookOpenCheck: <BookOpenCheck className="w-5 h-5" />, Star: <Star className="w-5 h-5" />,
  Gift: <Gift className="w-5 h-5" />, GraduationCap: <GraduationCap className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
};

const bn = (n: number) => n.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]);

const DailyChecklist = () => {
  const [done, setDone] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState<string | null>(dailyChecklist[0].id);
  const pct = Math.round((done.size / dailyChecklist.length) * 100);
  const R = 52;
  const C = 2 * Math.PI * R;

  const toggle = (id: string) => {
    const next = new Set(done);
    next.has(id) ? next.delete(id) : next.add(id);
    setDone(next);
  };

  return (
    <section id="daily-checklist" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start max-w-6xl mx-auto">
          {/* Progress panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8 glass-card rounded-3xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-1">দৈনিক আমলের চেকলিস্ট</h2>
            <p className="text-sm text-muted-foreground mb-6">রামাদানের আদর্শ রুটিন — পৃষ্ঠা ৬৭</p>
            <div className="relative w-[132px] h-[132px] mx-auto mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 132 132">
                <circle cx="66" cy="66" r={R} fill="none" strokeWidth="12" className="stroke-muted" />
                <motion.circle
                  cx="66" cy="66" r={R} fill="none" strokeWidth="12" strokeLinecap="round"
                  stroke="hsl(var(--accent))"
                  strokeDasharray={C}
                  animate={{ strokeDashoffset: C - (C * pct) / 100 }}
                  transition={{ type: "spring", stiffness: 90, damping: 18 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-foreground">{bn(pct)}%</span>
                <span className="text-xs text-muted-foreground">{bn(done.size)}/{bn(dailyChecklist.length)}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              সবার রুটিন এক হবে না — এটাই স্বাভাবিক। এটি একটি খসড়া রুটিন, যা আপনাকে প্রাথমিক ধারণা দিবে।
            </p>
          </motion.div>

          {/* Items */}
          <div className="space-y-3">
            {dailyChecklist.map((item, i) => {
              const isDone = done.has(item.id);
              const isOpen = open === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.4) }}
                  className={`rounded-2xl border transition-colors overflow-hidden ${
                    isDone ? "bg-accent/10 border-accent/40" : "bg-card border-border"
                  }`}
                >
                  <div className="flex items-center gap-3 p-4">
                    <button
                      onClick={() => toggle(item.id)}
                      aria-label={`${item.title} সম্পন্ন`}
                      className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center border-2 transition-all ${
                        isDone ? "gradient-copper border-transparent text-accent-foreground" : "border-border text-transparent hover:border-accent"
                      }`}
                    >
                      <Check className="w-5 h-5" />
                    </button>
                    <button onClick={() => setOpen(isOpen ? null : item.id)} className="flex items-center gap-3 flex-1 text-left">
                      <span className="w-9 h-9 rounded-xl bg-secondary text-primary flex items-center justify-center shrink-0">
                        {icons[item.icon]}
                      </span>
                      <span className={`font-semibold ${isDone ? "text-muted-foreground line-through" : "text-foreground"}`}>
                        {item.title}
                      </span>
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-[4.5rem]">
                          <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                          {item.ref && (
                            <p className="mt-3 inline-flex items-center gap-2 text-xs text-accent bg-accent/10 rounded-full px-3 py-1">
                              <Quote className="w-3 h-3" /> {item.ref}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyChecklist;
