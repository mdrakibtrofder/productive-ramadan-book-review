import { motion } from "framer-motion";
import { Heart, Moon, BookOpen, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground py-16 px-4 pattern-islamic">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl gradient-copper flex items-center justify-center">
                <Moon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">প্রোডাক্টিভ রমাদান</h3>
                <p className="text-xs opacity-60">বই রিভিউ ২০২৬</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              এই ওয়েবসাইটটি "প্রোডাক্টিভ রমাদান" বইয়ের বিস্তারিত রিভিউ হিসেবে তৈরি করা হয়েছে।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#toc" className="hover:opacity-100 transition-opacity flex items-center gap-2"><BookOpen className="w-4 h-4" /> সূচিপত্র</a></li>
              <li><a href="#authors" className="hover:opacity-100 transition-opacity flex items-center gap-2"><Heart className="w-4 h-4" /> লেখক পরিচিতি</a></li>
            </ul>
          </div>

          {/* Publishers */}
          <div>
            <h3 className="font-bold mb-4">প্রকাশনা সৌজন্যে</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-sm">Ghuraba</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-[8px] font-bold leading-none text-center">THE<br/>TERMINALS</span>
                </div>
                <span className="text-sm">The Terminals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>© ২০২৬ প্রোডাক্টিভ রমাদান বই রিভিউ। সকল অধিকার সংরক্ষিত।</p>
          <p className="flex items-center gap-1">
            তৈরি করা হয়েছে <Heart className="w-4 h-4 text-copper" /> দিয়ে
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
