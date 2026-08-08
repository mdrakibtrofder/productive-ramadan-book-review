import { useState } from "react";
import { motion } from "framer-motion";
import { foodIntro, fastingBody, fastingBenefits, oneThirdRule } from "@/data/bookData";
import {
  Utensils, Zap, Flame, Moon, Droplets, Shield, Wind, Activity,
  HeartPulse, Footprints, GlassWater, Quote,
} from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-5 h-5" />, Zap: <Zap className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />, Moon: <Moon className="w-5 h-5" />,
  Droplets: <Droplets className="w-6 h-6" />, Shield: <Shield className="w-6 h-6" />,
  Wind: <Wind className="w-6 h-6" />, Activity: <Activity className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />, Footprints: <Footprints className="w-6 h-6" />,
  GlassWater: <GlassWater className="w-5 h-5" />,
};

const NutritionSection = () => {
  const [phase, setPhase] = useState(1);
  const current = fastingBody[phase];

  return (
    <section id="nutrition" className="py-20 px-4 bg-background space-y-24">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">রামাদানের খাদ্যাভ্যাস</h2>
          {foodIntro.map((p) => (
            <p key={p} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
          ))}
        </motion.div>

        {/* Fasting body timeline */}
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-foreground mb-2">মানবদেহে রোজার প্রভাব</h3>
          <p className="text-muted-foreground mb-8">সময়ের সাথে দেহে কী ঘটে — ধাপে ক্লিক করুন</p>

          <div className="relative h-3 rounded-full bg-muted mb-8">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full gradient-copper"
              animate={{ width: `${current.pct}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
            {fastingBody.map((f, i) => (
              <button
                key={f.phase}
                onClick={() => setPhase(i)}
                aria-label={f.phase}
                style={{ left: `${f.pct}%` }}
                className="absolute -top-2.5 -translate-x-1/2"
              >
                <motion.span
                  animate={{ scale: i === phase ? 1.25 : 1 }}
                  className={`block w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    i <= phase ? "gradient-copper border-transparent text-accent-foreground" : "bg-card border-border text-muted-foreground"
                  }`}
                >
                  {icons[f.icon]}
                </motion.span>
              </button>
            ))}
          </div>

          <div className="flex justify-between text-[11px] md:text-xs text-muted-foreground mb-8">
            {fastingBody.map((f) => <span key={f.phase}>{f.phase}</span>)}
          </div>

          <motion.div key={phase} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="bg-secondary/60 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-foreground mb-2">{current.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{current.desc}</p>
          </motion.div>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
          সিয়াম হলো প্রাকৃতিক বিষনাশক
        </motion.h3>
        <p className="text-center text-muted-foreground mb-12">সিয়াম যেভাবে স্বাস্থ্য ও সুস্থতা বাড়ায়</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {fastingBenefits.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-3xl p-7 border border-border relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-accent/10 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative w-14 h-14 rounded-2xl gradient-teal text-primary-foreground flex items-center justify-center mb-4">
                {icons[b.icon]}
              </div>
              <h4 className="relative text-lg font-bold text-foreground mb-2">{b.title}</h4>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* One-third rule */}
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-56 h-56 -rotate-90">
              {oneThirdRule.parts.map((p, i) => {
                const start = oneThirdRule.parts.slice(0, i).reduce((a, b) => a + b.value, 0);
                const C = 2 * Math.PI * 80;
                return (
                  <motion.circle
                    key={p.label}
                    cx="100" cy="100" r="80" fill="none" strokeWidth="28"
                    stroke={`hsl(var(${["--copper", "--gold", "--teal-light"][i]}))`}
                    strokeDasharray={`${(C * p.value) / 100} ${C}`}
                    initial={{ strokeDashoffset: 0, opacity: 0 }}
                    whileInView={{ strokeDashoffset: -(C * start) / 100, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.15 }}
                  />
                );
              })}
            </svg>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {oneThirdRule.parts.map((p, i) => (
                <span key={p.label} className="flex items-center gap-2 text-sm">
                  <span className="w-3 h-3 rounded-full" style={{ background: `hsl(var(${["--copper", "--gold", "--teal-light"][i]}))` }} />
                  {p.label} · ⅓
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-5">পেটের এক-তৃতীয়াংশ নীতি</h3>
            <Quote className="w-7 h-7 text-gold mb-3 opacity-70" />
            <p className="leading-relaxed opacity-90 mb-4">{oneThirdRule.hadith}</p>
            <p className="text-xs opacity-60 mb-5">{oneThirdRule.ref}</p>
            <p className="text-sm opacity-80 border-l-2 border-primary-foreground/30 pl-4">{oneThirdRule.note}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
