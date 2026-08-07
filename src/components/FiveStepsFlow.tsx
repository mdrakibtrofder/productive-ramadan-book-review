import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fiveSteps } from "@/data/bookData";
import { HandMetal, Rocket, Repeat, Users, PenLine, ChevronRight } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  HandMetal: <HandMetal className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  Repeat: <Repeat className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  PenLine: <PenLine className="w-6 h-6" />,
};

const FiveStepsFlow = () => {
  const [active, setActive] = useState(0);
  const step = fiveSteps[active];

  return (
    <section id="five-steps" className="py-20 px-4 gradient-hero text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.3em] uppercase opacity-70 mb-3">সফলতার পঞ্চতত্ত্ব</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            রামাদানে লক্ষ্য পূরণের পথে <span className="text-gradient-copper">৫টি</span> ধাপ
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto">
            ধাপগুলোতে ক্লিক করে বিস্তারিত দেখুন — বইয়ের ফ্লো-চার্ট অনুসারে সাজানো
          </p>
        </motion.div>

        {/* Step rail */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="absolute left-0 right-0 top-7 h-0.5 bg-primary-foreground/20 hidden md:block" />
          <motion.div
            className="absolute left-0 top-7 h-0.5 gradient-copper hidden md:block"
            animate={{ width: `${(active / (fiveSteps.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
          <div className="relative grid grid-cols-5 gap-2">
            {fiveSteps.map((s, i) => (
              <button
                key={s.step}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-3 group"
                aria-label={s.title}
              >
                <motion.span
                  animate={{
                    scale: i === active ? 1.15 : 1,
                    boxShadow: i === active ? "0 0 0 6px hsl(var(--copper) / 0.25)" : "0 0 0 0px transparent",
                  }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg transition-colors ${
                    i <= active ? "gradient-copper text-accent-foreground" : "bg-primary-foreground/10 text-primary-foreground/70"
                  }`}
                >
                  {s.step}
                </motion.span>
                <span className={`text-[11px] md:text-xs text-center leading-tight transition-opacity ${i === active ? "opacity-100" : "opacity-60 group-hover:opacity-90"}`}>
                  {s.title.split(" ").slice(0, 3).join(" ")}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-10 text-foreground"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl gradient-teal text-primary-foreground flex items-center justify-center">
                {icons[step.icon]}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{step.title}</h3>
                <p className="text-accent font-medium mt-1">{step.note}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {step.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex gap-3 items-start bg-secondary/60 rounded-2xl p-4"
                >
                  <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FiveStepsFlow;
