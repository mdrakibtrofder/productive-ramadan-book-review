import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { goalCategories, dailyRoutine, successPrinciples } from "@/data/bookData";
import {
  BookOpen, Star, Heart, HandMetal, Sunrise, Moon, Sun,
  Sparkles, Briefcase, Gift, Clock, Target, Check,
  ChevronDown, ChevronUp,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  HandMetal: <HandMetal className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Sunrise: <Sunrise className="w-5 h-5" />,
  Moon: <Moon className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Gift: <Gift className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
};

const GoalsAndRoutine = () => {
  const [expandedGoal, setExpandedGoal] = useState<number>(0);

  return (
    <div className="py-20 px-4 space-y-24 bg-secondary/30">
      {/* Goal Categories - Accordion Cards */}
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">🎯 রামাদানের লক্ষ্য নির্ধারণ</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">চারটি মূল ক্যাটাগরিতে আপনার রামাদান লক্ষ্য সাজান</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {goalCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedGoal(expandedGoal === i ? -1 : i)}
                className={`w-full ${cat.color} p-6 text-primary-foreground flex items-center justify-between`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    {iconMap[cat.icon]}
                  </div>
                  <h3 className="font-bold text-lg text-left">{cat.title}</h3>
                </div>
                {expandedGoal === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              <AnimatePresence>
                {expandedGoal === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-3">
                      {cat.items.map((item, j) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-foreground text-sm">{item.label}</span>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Daily Routine - Vertical Timeline */}
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">⏰ রামাদানের আদর্শ রুটিন</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">একটি প্রোডাক্টিভ রামাদানের দৈনিক সময়সূচি</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-copper to-teal-mid" />

          {dailyRoutine.map((item, i) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center gap-4 mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-copper shadow-lg z-10" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"} md:w-[45%] w-full`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl p-5 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center text-primary-foreground">
                      {iconMap[item.icon]}
                    </div>
                    <h3 className="font-bold text-foreground">{item.time}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Principles */}
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">📋 সফল রামাদান পরিকল্পনা</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">রামাদানের লক্ষ্য বাস্তবায়নের ৮টি মূলনীতি</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {successPrinciples.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-2xl p-5 hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-xl gradient-copper flex items-center justify-center text-primary-foreground mb-4 group-hover:glow-copper transition-all font-bold">
                {i + 1}
              </div>
              <h3 className="font-bold text-foreground text-sm mb-2">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GoalsAndRoutine;
