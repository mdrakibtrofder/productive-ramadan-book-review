import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tocItems } from "@/data/bookData";
import {
  BookOpen, Users, Scroll, Trophy, AlertTriangle, Target,
  ClipboardList, Sparkles, Rocket, Clock, Heart, Sun, Shield,
  GraduationCap, Gift, Moon, Link, HeartPulse, LayoutGrid,
  Timer, CircleDot, HandMetal, Apple,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Scroll: <Scroll className="w-5 h-5" />,
  Trophy: <Trophy className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  ClipboardList: <ClipboardList className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  HandMetal: <HandMetal className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Apple: <Apple className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Gift: <Gift className="w-5 h-5" />,
  Moon: <Moon className="w-5 h-5" />,
  Link: <Link className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
};

type ViewMode = "timeline" | "bento" | "radial";

const TimelineView = () => (
  <div className="relative max-w-3xl mx-auto">
    {/* Timeline line */}
    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-copper via-teal-mid to-gold" />
    {tocItems.map((item, i) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="relative flex items-start gap-6 mb-6 group"
      >
        {/* Dot */}
        <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl gradient-teal flex items-center justify-center text-primary-foreground shadow-lg group-hover:glow-teal transition-all">
          {iconMap[item.icon]}
        </div>

        {/* Content */}
        <div className="flex-1 glass-card rounded-xl p-4 hover:shadow-lg transition-all group-hover:border-copper/30">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground text-sm md:text-base">{item.title}</h3>
            <span className="text-xs px-3 py-1 rounded-full gradient-copper text-primary-foreground font-bold">
              পৃ. {item.page}
            </span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const BentoView = () => {
  const sizes = ["col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-1 row-span-1", "col-span-2 row-span-1"];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
      {tocItems.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03 }}
          whileHover={{ scale: 1.03, y: -4 }}
          className={`${sizes[i % sizes.length]} rounded-2xl p-5 cursor-pointer transition-all ${
            i % 6 === 0 ? "gradient-card-1" :
            i % 6 === 1 ? "gradient-card-2" :
            i % 6 === 2 ? "gradient-card-3" :
            i % 6 === 3 ? "gradient-card-4" :
            i % 6 === 4 ? "gradient-card-5" : "gradient-card-6"
          } text-primary-foreground shadow-lg`}
        >
          <div className="flex items-start justify-between h-full">
            <div className="flex flex-col justify-between h-full">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                {iconMap[item.icon]}
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base leading-snug">{item.title}</h3>
              </div>
            </div>
            <span className="text-2xl font-bold opacity-30">{item.page}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const RadialView = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const total = tocItems.length;

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center">
      {/* Center */}
      <div className="absolute w-28 h-28 rounded-full gradient-teal flex items-center justify-center z-20 shadow-2xl glow-teal">
        <div className="text-center text-primary-foreground">
          <BookOpen className="w-8 h-8 mx-auto mb-1" />
          <span className="text-xs font-bold">সূচিপত্র</span>
        </div>
      </div>

      {/* Radial Items */}
      {tocItems.map((item, i) => {
        const angle = (i / total) * 360 - 90;
        const radius = 42;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
        const isActive = activeItem === i;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, type: "spring" }}
            className="absolute cursor-pointer"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setActiveItem(i)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
                isActive ? "gradient-copper glow-copper" : "gradient-card-1"
              } text-primary-foreground`}
            >
              {iconMap[item.icon]}
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 glass-card rounded-lg px-3 py-2 shadow-xl"
                >
                  <p className="text-xs font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">পৃষ্ঠা {item.page}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
        {tocItems.map((_, i) => {
          const angle = (i / total) * 360 - 90;
          const radius = 42;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          return (
            <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="hsl(172, 45%, 22%)" strokeWidth="0.3" />
          );
        })}
      </svg>
    </div>
  );
};

const TableOfContents = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("timeline");

  const views: { mode: ViewMode; label: string; icon: React.ReactNode }[] = [
    { mode: "timeline", label: "টাইমলাইন", icon: <Timer className="w-4 h-4" /> },
    { mode: "bento", label: "বেন্টো গ্রিড", icon: <LayoutGrid className="w-4 h-4" /> },
    { mode: "radial", label: "রেডিয়াল মেনু", icon: <CircleDot className="w-4 h-4" /> },
  ];

  return (
    <section id="toc" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            📖 সূচিপত্র
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            বইটির বিষয়বস্তু তিনটি ভিন্ন ভিউতে দেখুন
          </p>
        </motion.div>

        {/* View Switcher */}
        <div className="flex justify-center gap-2 mb-12">
          {views.map((v) => (
            <button
              key={v.mode}
              onClick={() => setViewMode(v.mode)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                viewMode === v.mode
                  ? "gradient-teal text-primary-foreground shadow-lg glow-teal"
                  : "glass-card text-foreground hover:shadow-md"
              }`}
            >
              {v.icon}
              {v.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {viewMode === "timeline" && <TimelineView />}
            {viewMode === "bento" && <BentoView />}
            {viewMode === "radial" && <RadialView />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TableOfContents;
