import { motion } from "framer-motion";
import { failureReasons, threePSteps, ramadanPreparation, allahRamadanPreparation, worldlyRamadanPreparation } from "@/data/bookData";
import {
  CloudOff, Zap, TrendingDown, BookX, UserX, Clock,
  HeartCrack, Dumbbell, AlertCircle, CalendarX,
  ClipboardList, Settings, RotateCcw, HandMetal, Target,
  BookOpen, RefreshCw, AlertTriangle, Lightbulb, Flame,
  Lock, DoorOpen, Utensils, Moon,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  CloudOff: <CloudOff className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  TrendingDown: <TrendingDown className="w-5 h-5" />,
  BookX: <BookX className="w-5 h-5" />,
  UserX: <UserX className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  HeartCrack: <HeartCrack className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  AlertCircle: <AlertCircle className="w-5 h-5" />,
  CalendarX: <CalendarX className="w-5 h-5" />,
  ClipboardList: <ClipboardList className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />,
  RotateCcw: <RotateCcw className="w-5 h-5" />,
  HandMetal: <HandMetal className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  DoorOpen: <DoorOpen className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Moon: <Moon className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
};

const ContentSections = () => {
  return (
    <div className="py-20 px-4 space-y-24">
      {/* Ramadan Preparation Section */}
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">✨ রামাদানকে ঘিরে আল্লাহর প্রস্তুতি</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">৫টি উপায়ে আল্লাহ সুবহানাহু ওয়া তাআলা আমাদের জন্য রামাদানকে প্রস্তুত করেন</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-20">
          {allahRamadanPreparation.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative glass-card rounded-2xl p-6 text-center hover:shadow-xl transition-all group"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#3A756D] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {i + 1}
              </div>
              <div className="mt-6 mb-4 w-14 h-14 mx-auto rounded-2xl gradient-copper flex items-center justify-center text-primary-foreground group-hover:glow-copper transition-all">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">🌙 ঈমানদারদের রামাদান প্রস্তুতি</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">আখিরাত পিয়াসী বান্দারা পাঁচটি উপায়ে প্রস্তুতি নেয়:</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          {ramadanPreparation.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative glass-card rounded-3xl p-8 hover:shadow-2xl transition-all group border-primary/5 hover:border-primary/20"
            >
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full gradient-copper text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                {i + 1}
              </div>
              <div className="mb-6 w-14 h-14 rounded-2xl gradient-teal flex items-center justify-center text-primary-foreground group-hover:glow-teal transition-all">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Worldly Preparation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card rounded-[2rem] overflow-hidden border-destructive/20 bg-destructive/5 grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
              <img
                src={worldlyRamadanPreparation.image}
                alt="Worldly Preparation"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-2">
                  <AlertTriangle className="w-3 h-3" />
                  বিপরীত চিত্র
                </div>
                <h3 className="text-white font-bold text-xl">{worldlyRamadanPreparation.title}</h3>
              </div>
            </div>

            <div className="p-8 lg:p-12 space-y-8">
              <div className="space-y-6">
                {worldlyRamadanPreparation.points.map((point, idx) => (
                  <div key={idx} className="flex gap-4 group/point">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-bold text-sm shrink-0 group-hover/point:bg-destructive group-hover/point:text-white transition-all">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1 group-hover/point:text-destructive transition-colors">{point.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center text-destructive shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <p className="text-xs font-medium text-destructive">
                  তারা রামাদানকে কেবল উৎসব বা ভোজের মাস হিসেবে দেখে, আখেরাতের প্রস্তুতির বদলে দুনিয়ার আরাম-আয়েশই তাদের প্রধান লক্ষ্য হয়ে দাঁড়ায়।
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 10 Failure Reasons */}
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 mb-4">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">সতর্কতা</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">⚠️ ব্যর্থতার ১০টি মূল কারণ</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">রামাদানের লক্ষ্য পূরণে ব্যর্থ হওয়ার পেছনে যে কারণগুলো কাজ করে</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {failureReasons.map((reason, i) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card rounded-2xl p-5 hover:shadow-lg transition-all border-destructive/10 hover:border-destructive/30 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-bold text-sm">
                  {reason.id}
                </span>
                <div className="w-10 h-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center group-hover:bg-destructive group-hover:text-primary-foreground transition-all">
                  {iconMap[reason.icon]}
                </div>
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">{reason.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Three P */}
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-copper text-primary-foreground mb-4">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-bold">Three P</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">🎯 সফলতার তিন সূত্র</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">প্রজেক্ট ম্যানেজমেন্টের Three P বিধি</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {threePSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -12 }}
              className="relative"
            >
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-8 h-0.5 bg-gradient-to-r from-copper to-transparent" />
              )}
              <div className="gradient-teal rounded-3xl p-8 text-primary-foreground shadow-2xl glow-teal h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  {iconMap[step.icon]}
                </div>
                <span className="text-6xl font-bold opacity-10 absolute top-4 right-6">{i + 1}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fasting Levels - Visual */}
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">🏆 সিয়ামের তিন স্তর</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">ইমাম গাজালী (রহ.) এর শ্রেণীবিভাগ অনুসারে</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { level: "প্রথম স্তর", title: "সাধারণ সিয়াম", desc: "শুধু পানাহার ও যৌনমিলন থেকে বিরত থাকা", pct: 33, color: "bg-copper" },
            { level: "দ্বিতীয় স্তর", title: "বিশেষ সিয়াম", desc: "সব ধরনের পাপ কাজ থেকেও নিজেকে দূরে রাখা", pct: 66, color: "bg-teal-mid" },
            { level: "তৃতীয় স্তর", title: "সর্বোচ্চ সিয়াম", desc: "খারাপ চিন্তা-ভাবনা থেকেও নিজেকে হেফাজত করা", pct: 100, color: "bg-gold" },
          ].map((item, i) => (
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
                    <span className="text-2xl font-bold text-copper">{item.pct}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.3 }}
                  className={`h-full ${item.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
