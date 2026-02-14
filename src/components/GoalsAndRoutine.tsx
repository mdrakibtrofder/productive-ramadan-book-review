import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { goalCategories, dailyRoutine, successPrinciples, fastingLevels } from "@/data/bookData";
import {
  BookOpen, Star, Heart, HandMetal, Sunrise, Moon, Sun,
  Sparkles, Briefcase, Gift, Clock, Target, Check,
  ChevronDown, ChevronUp, Flame, Users,
  List, LayoutGrid, Timer, CircleDot,
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
  Flame: <Flame className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Check: <Check className="w-5 h-5" />,
  List: <List className="w-4 h-4" />,
  LayoutGrid: <LayoutGrid className="w-4 h-4" />,
  Timer: <Timer className="w-4 h-4" />,
  CircleDot: <CircleDot className="w-4 h-4" />,
};

type SuccessViewMode = "card" | "list" | "timeline" | "bento";

const GoalsAndRoutine = () => {
  const [expandedGoals, setExpandedGoals] = useState<Set<number>>(new Set([0, 1, 2, 3, 4, 5]));
  const [successView, setSuccessView] = useState<SuccessViewMode>("bento");

  const successViews: { mode: SuccessViewMode; label: string; icon: string }[] = [
    { mode: "bento", label: "বেন্টো গ্রিড", icon: "LayoutGrid" },
    { mode: "card", label: "কার্ড", icon: "LayoutGrid" },
    { mode: "list", label: "লিস্ট", icon: "List" },
    { mode: "timeline", label: "টাইমলাইন", icon: "Timer" },
  ];

  return (
    <div id="goals" className="py-20 px-4 space-y-24 bg-secondary/30">
      {/* Goal Categories - Accordion Cards */}
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">🎯 রামাদানের লক্ষ্য নির্ধারণ</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">ছয়টি মূল ক্যাটাগরিতে আপনার রামাদান লক্ষ্য সাজান</p>
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
                onClick={() => {
                  const next = new Set(expandedGoals);
                  if (next.has(i)) next.delete(i); else next.add(i);
                  setExpandedGoals(next);
                }}
                className={`w-full ${cat.color} p-6 text-primary-foreground flex items-center justify-between`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    {iconMap[cat.icon]}
                  </div>
                  <h3 className="font-bold text-lg text-left">{cat.title}</h3>
                </div>
                {expandedGoals.has(i) ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              <AnimatePresence>
                {expandedGoals.has(i) && (
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

      {/* Fasting Levels - Visual Section */}
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">🏆 সিয়াম-কেন্দ্রিক লক্ষ্য</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">ইমাম গাজালী (রহ.) এর শ্রেণীবিভাগ অনুসারে সিয়ামের তিন স্তর</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {fastingLevels.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl gradient-teal flex items-center justify-center text-primary-foreground">
                  <Flame className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="text-xs text-muted-foreground">{item.level}</span>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                    </div>
                    <span className="text-2xl font-bold text-copper">{item.percentage}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.3 }}
                  className={`h-full rounded-full ${i === 0 ? "bg-gold" : i === 1 ? "bg-copper" : "bg-teal-mid"
                    }`}
                />
              </div>
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
              className={`relative flex items-center gap-4 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
          <p className="text-muted-foreground max-w-xl mx-auto">রামাদানের লক্ষ্য বাস্তবায়নের ১০টি মূলনীতি</p>
        </motion.div>

        {/* View Switcher for Success Principles */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {successViews.map((v) => (
            <button
              key={v.mode}
              onClick={() => setSuccessView(v.mode)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs transition-all ${successView === v.mode
                ? "gradient-teal text-primary-foreground shadow-lg glow-teal"
                : "glass-card text-foreground hover:shadow-md"
                }`}
            >
              {iconMap[v.icon]}
              {v.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={successView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {successView === "card" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {successPrinciples.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="glass-card rounded-[2rem] p-6 hover:shadow-2xl transition-all group relative overflow-hidden bg-gradient-to-br from-white/50 to-transparent dark:from-white/10"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 gradient-copper opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-copper to-copper/80 flex items-center justify-center text-primary-foreground mb-6 group-hover:glow-copper transition-all font-black text-lg shadow-lg">
                      {i + 1}
                    </div>
                    <h3 className="font-black text-foreground text-base mb-3 group-hover:text-copper transition-colors">{p.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {successView === "list" && (
              <div className="max-w-4xl mx-auto space-y-3">
                {successPrinciples.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all border-l-4 border-l-copper"
                  >
                    <span className="text-3xl font-black text-copper shrink-0 w-14 text-center opacity-40 group-hover:opacity-100 transition-opacity">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">{p.title}</h3>
                      <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {successView === "timeline" && (
              <div className="relative max-w-3xl mx-auto pl-12">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-copper via-teal-mid to-gold" />
                {successPrinciples.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative mb-12 last:mb-0"
                  >
                    <div className="absolute -left-[3.25rem] w-10 h-10 rounded-full gradient-teal flex items-center justify-center text-primary-foreground shadow-lg z-10 border-4 border-background">
                      {i + 1}
                    </div>
                    <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all border-l-4 border-l-teal-mid">
                      <h3 className="font-bold text-foreground text-lg mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {successView === "bento" && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {successPrinciples.map((p, i) => {
                  const sizes = ["lg:col-span-2", "lg:col-span-1", "lg:row-span-2", "lg:col-span-1", "lg:col-span-2"];
                  const gradients = ["gradient-card-1", "gradient-card-2", "gradient-card-3", "gradient-card-4", "gradient-card-5", "gradient-card-6"];
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`${sizes[i % sizes.length]} ${gradients[i % gradients.length]} rounded-3xl p-8 flex flex-col justify-between group hover:shadow-2xl transition-all text-primary-foreground shadow-xl`}
                    >
                      <div>
                        <span className="text-5xl font-black opacity-20 block mb-6 group-hover:scale-110 transition-transform">{(i + 1).toString().padStart(2, '0')}</span>
                        <h3 className="font-black text-xl mb-3 group-hover:translate-x-1 transition-transform">{p.title}</h3>
                      </div>
                      <p className="text-sm opacity-90 leading-relaxed font-medium">{p.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default GoalsAndRoutine;
