import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { writers, translators, compiler } from "@/data/bookData";
import { User, List, LayoutGrid, Pen, Languages, FileEdit } from "lucide-react";

const gradients = [
  "gradient-card-1", "gradient-card-2", "gradient-card-3",
  "gradient-card-4", "gradient-card-5", "gradient-card-6",
];

type ViewMode = "cards" | "list";
type TabMode = "authors" | "translators" | "compiler";

const AuthorsSection = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("cards");
  const [tab, setTab] = useState<TabMode>("authors");

  const tabs = [
    { key: "authors" as TabMode, label: "লেখক পরিচিতি", icon: <Pen className="w-4 h-4" />, count: writers.length },
    { key: "translators" as TabMode, label: "অনুবাদক পরিচিতি", icon: <Languages className="w-4 h-4" />, count: translators.length },
    { key: "compiler" as TabMode, label: "সংকলন ও অনুলিখন", icon: <FileEdit className="w-4 h-4" />, count: 1 },
  ];

  const currentPeople = tab === "authors" ? writers : tab === "translators" ? translators : [compiler];

  return (
    <section id="authors" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            ✍️ লেখক ও অনুবাদক পরিচিতি
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            যাদের অবদানে এই অসাধারণ বইটি সম্ভব হয়েছে
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                tab === t.key
                  ? "gradient-copper text-primary-foreground shadow-lg glow-copper"
                  : "glass-card text-foreground hover:shadow-md"
              }`}
            >
              {t.icon}
              {t.label}
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setViewMode("cards")}
            className={`p-3 rounded-xl transition-all ${viewMode === "cards" ? "gradient-teal text-primary-foreground" : "glass-card text-foreground"}`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "gradient-teal text-primary-foreground" : "glass-card text-foreground"}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tab}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {viewMode === "cards" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {currentPeople.map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`${gradients[i % gradients.length]} rounded-2xl p-6 text-primary-foreground shadow-lg cursor-pointer`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                      <User className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{person.name}</h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium mb-3">{person.role}</span>
                    {"description" in person && (person as { description?: string }).description && (
                      <p className="text-sm opacity-80 leading-relaxed">{(person as { description?: string }).description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="max-w-3xl mx-auto space-y-3">
                {currentPeople.map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl ${gradients[i % gradients.length]} flex items-center justify-center flex-shrink-0`}>
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{person.name}</h3>
                      {"description" in person && (person as { description?: string }).description && (
                        <p className="text-sm text-muted-foreground">{(person as { description?: string }).description}</p>
                      )}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">{person.role}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AuthorsSection;
