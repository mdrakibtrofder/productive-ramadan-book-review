import { motion } from "framer-motion";
import { BookOpen, Star, Moon } from "lucide-react";
import bookCover from "@/assets/book-cover.webp";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/90 via-teal-deep/70 to-teal-deep/95" />
      </div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 pattern-islamic opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper/20 border border-copper/30 mb-6"
            >
              <Moon className="w-4 h-4 text-gold" />
              <span className="text-gold-light text-sm font-medium">বই রিভিউ ২০২৬</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              প্রোডাক্টিভ{" "}
              <span className="text-gradient-copper inline-block">রমাদান</span>
            </h1>

            <p className="text-lg md:text-xl text-teal-pale/80 mb-8 max-w-lg leading-relaxed">
              মুহাম্মদ ফারিস ও আলী হাম্মুদার অসাধারণ বই "প্রোডাক্টিভ রমাদান" এর বিস্তারিত রিভিউ — রমাদানকে সর্বোচ্চ ফলদায়ক করার পূর্ণাঙ্গ গাইড।
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="#toc"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-copper text-primary-foreground font-semibold shadow-lg glow-copper transition-all"
              >
                <BookOpen className="w-5 h-5" />
                সূচিপত্র দেখুন
              </motion.a>
              <motion.a
                href="#authors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-teal-pale/30 text-teal-pale hover:bg-teal-pale/10 font-semibold transition-all"
              >
                <Star className="w-5 h-5" />
                লেখক পরিচিতি
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { number: "১৮৩+", label: "পৃষ্ঠা" },
                { number: "১৫+", label: "অধ্যায়" },
                { number: "১০+", label: "লেখক" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gold">{stat.number}</div>
                  <div className="text-sm text-teal-pale/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 rounded-3xl bg-copper/20 blur-3xl" />
              <div className="absolute -inset-4 rounded-3xl bg-teal-light/10 blur-2xl" />

              {/* Book */}
              <motion.img
                src={bookCover}
                alt="প্রোডাক্টিভ রমাদান বই"
                className="relative w-64 md:w-80 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full gradient-copper flex items-center justify-center shadow-lg"
              >
                <Moon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full gradient-teal flex items-center justify-center shadow-lg"
              >
                <Star className="w-6 h-6 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-teal-pale/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
