import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { duaNasihah, duaAdab, morningAzkar } from "@/data/bookData";
import {
  ListChecks, Target, Brain, StickyNote, ShieldCheck, Sparkles, Heart,
  CheckCircle2, Volume1, Compass, Sunrise,
} from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  ListChecks: <ListChecks className="w-6 h-6" />, Target: <Target className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />, StickyNote: <StickyNote className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />, Sparkles: <Sparkles className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />, CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  Volume1: <Volume1 className="w-6 h-6" />, Compass: <Compass className="w-6 h-6" />,
};

const tabs = [
  { id: "nasihah", label: "দুআ বিষয়ে নাসীহাহ" },
  { id: "adab", label: "দুআ করার আদব" },
  { id: "azkar", label: "সকালের আযকার" },
] as const;

const gradients = ["gradient-card-1", "gradient-card-2", "gradient-card-3", "gradient-card-4", "gradient-card-5", "gradient-card-6"];

const DuaSection = () => {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("nasihah");

  return (
    <section id="dua" className="py-20 px-4 bg-secondary/40">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">রামাদানে কখন কী দুআ করবেন</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">দুআর প্রস্তুতি, আদব ও প্রাতঃকালীন আযকার — এক জায়গায়</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                tab === t.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === t.id && (
                <motion.span layoutId="dua-tab" className="absolute inset-0 rounded-full gradient-teal" transition={{ type: "spring", stiffness: 300, damping: 28 }} />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "nasihah" && (
            <motion.div key="n" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {duaNasihah.map((d, i) => (
                <motion.article
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-3xl p-7 border border-border shadow-sm"
                >
                  <div className={`w-14 h-14 rounded-2xl ${gradients[i % 6]} text-primary-foreground flex items-center justify-center mb-4`}>
                    {icons[d.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
                </motion.article>
              ))}
            </motion.div>
          )}

          {tab === "adab" && (
            <motion.div key="a" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="max-w-3xl mx-auto">
              <p className="text-center text-muted-foreground mb-8">
                আমরা যদি আমাদের দুআতে আন্তরিক ও ইখলাসপূর্ণ থাকতে চাই, তবে নিচের দিক-নির্দেশনাগুলো অনুসরণ করতে পারি।
              </p>
              <div className="relative pl-8">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />
                {duaAdab.map((d, i) => (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="relative pb-8 last:pb-0"
                  >
                    <span className="absolute -left-8 top-1 w-6 h-6 rounded-full gradient-copper flex items-center justify-center text-[10px] font-bold text-accent-foreground">
                      {"০১২৩৪৫৬৭৮৯"[i + 1]}
                    </span>
                    <div className="glass-card rounded-2xl p-5 flex gap-4">
                      <span className="text-accent shrink-0">{icons[d.icon]}</span>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{d.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {tab === "azkar" && (
            <motion.div key="z" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-12 h-12 rounded-2xl gradient-copper text-accent-foreground flex items-center justify-center"><Sunrise className="w-6 h-6" /></span>
                <h3 className="text-2xl font-bold text-foreground">সকালের যিকির-আযকার</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">{morningAzkar.intro}</p>
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="gradient-hero pattern-islamic rounded-3xl p-8 md:p-10 text-primary-foreground glow-teal"
              >
                <p dir="rtl" lang="ar" className="text-2xl md:text-3xl leading-[2.4] text-right mb-6" style={{ fontFamily: "'Noto Naskh Arabic', serif" }}>
                  {morningAzkar.arabic}
                </p>
                <div className="h-px bg-primary-foreground/20 mb-6" />
                <p className="leading-relaxed opacity-90">{morningAzkar.bangla}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DuaSection;
